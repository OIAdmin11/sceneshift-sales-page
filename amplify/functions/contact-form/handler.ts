import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import type { APIGatewayProxyHandlerV2 } from "aws-lambda";

type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  turnstileToken: string;
};

type TurnstileVerificationResponse = {
  success: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

const sesClient = new SESClient({});
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedOrigins = new Set([
  "https://sceneshift.org",
  "https://www.sceneshift.org",
]);
const allowedTurnstileHostnames = new Set(["sceneshift.org", "www.sceneshift.org"]);
const defaultOrigin = "https://sceneshift.org";
const turnstileVerifyUrl =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const turnstileAction = "contact_form";

const resolveOrigin = (requestOrigin?: string) =>
  requestOrigin && allowedOrigins.has(requestOrigin)
    ? requestOrigin
    : defaultOrigin;

const jsonHeaders = (origin: string) => ({
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Content-Type": "application/json",
  Vary: "Origin",
});

const response = (statusCode: number, origin: string, body: object) => ({
  statusCode,
  headers: jsonHeaders(origin),
  body: JSON.stringify(body),
});

const sanitize = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const resolveTurnstileErrorMessage = (errorCodes: string[] = []) => {
  if (
    errorCodes.includes("timeout-or-duplicate") ||
    errorCodes.includes("invalid-input-response") ||
    errorCodes.includes("missing-input-response")
  ) {
    return "Please complete the spam check again and resubmit the form.";
  }

  return "Spam protection could not be verified. Please try again.";
};

const normalizeHostname = (value?: string) =>
  value?.trim().toLowerCase().replace(/\.$/, "");

const validate = (payload: ContactRequest) => {
  if (!payload.name || !payload.subject || !payload.message) {
    return "Please complete all required fields.";
  }

  if (!payload.email || !emailPattern.test(payload.email)) {
    return "Please provide a valid email address.";
  }

  if (!payload.phone) {
    return "Please provide a phone number.";
  }

  if (!payload.turnstileToken) {
    return "Please complete the spam check before submitting.";
  }

  return null;
};

const verifyTurnstile = async (
  token: string,
  remoteIp: string | undefined,
): Promise<{ success: true } | { success: false; message: string }> => {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not configured.");
    return {
      success: false,
      message: "Spam protection is not configured yet.",
    };
  }

  let verificationResponse: globalThis.Response;

  try {
    verificationResponse = await fetch(turnstileVerifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret,
        response: token,
        remoteip: remoteIp,
      }),
    });
  } catch (error) {
    console.error("Turnstile verification request failed", error);
    return {
      success: false,
      message: "Spam protection could not be verified. Please try again.",
    };
  }

  let verificationBody: TurnstileVerificationResponse | null = null;

  try {
    verificationBody =
      (await verificationResponse.json()) as TurnstileVerificationResponse;
  } catch (error) {
    console.error("Turnstile verification returned invalid JSON", error);
  }

  if (!verificationResponse.ok || !verificationBody) {
    console.error("Turnstile verification did not return a usable response.", {
      status: verificationResponse.status,
      verificationBody,
    });
    return {
      success: false,
      message: "Spam protection could not be verified. Please try again.",
    };
  }

  if (!verificationBody.success) {
    console.warn("Turnstile verification failed", verificationBody["error-codes"]);
    return {
      success: false,
      message: resolveTurnstileErrorMessage(verificationBody["error-codes"]),
    };
  }

  const hostname = normalizeHostname(verificationBody.hostname);
  if (hostname && !allowedTurnstileHostnames.has(hostname)) {
    console.error("Turnstile hostname mismatch", verificationBody.hostname);
    return {
      success: false,
      message: "Spam protection could not be verified. Please try again.",
    };
  }

  if (
    verificationBody.action &&
    verificationBody.action !== turnstileAction
  ) {
    console.error("Turnstile action mismatch", verificationBody.action);
    return {
      success: false,
      message: "Spam protection could not be verified. Please try again.",
    };
  }

  return { success: true };
};

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const origin = resolveOrigin(event.headers.origin);

  if (event.requestContext.http.method === "OPTIONS") {
    return {
      statusCode: 204,
      headers: jsonHeaders(origin),
    };
  }

  if (event.requestContext.http.method !== "POST") {
    return response(405, origin, { message: "Method not allowed." });
  }

  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL || "contact@sceneshift.org";

  if (!fromEmail) {
    console.error("CONTACT_FORM_FROM_EMAIL is not configured.");
    return response(500, origin, {
      message: "Contact email is not configured yet.",
    });
  }

  let parsedBody: Partial<ContactRequest> = {};

  try {
    parsedBody = event.body ? (JSON.parse(event.body) as Partial<ContactRequest>) : {};
  } catch (error) {
    console.error("Invalid JSON payload", error);
    return response(400, origin, { message: "Invalid request body." });
  }

  const payload: ContactRequest = {
    name: sanitize(parsedBody.name, 120),
    email: sanitize(parsedBody.email, 160).toLowerCase(),
    phone: sanitize(parsedBody.phone, 40),
    subject: sanitize(parsedBody.subject, 160),
    message: sanitize(parsedBody.message, 4000),
    turnstileToken: sanitize(parsedBody.turnstileToken, 2048),
  };

  const validationError = validate(payload);
  if (validationError) {
    return response(400, origin, { message: validationError });
  }

  const turnstileVerification = await verifyTurnstile(
    payload.turnstileToken,
    event.requestContext.http.sourceIp,
  );

  if (!turnstileVerification.success) {
    return response(400, origin, { message: turnstileVerification.message });
  }

  const internalText = [
    "New contact request from sceneshift.org",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Subject: ${payload.subject}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const confirmationText = [
    `Hi ${payload.name},`,
    "",
    "Thanks for reaching out to SceneShift. We received your message and will follow up soon.",
    "",
    `Subject: ${payload.subject}`,
    `Phone: ${payload.phone}`,
    "",
    "Your message:",
    payload.message,
    "",
    "You can reply to this email if there is anything else we should know.",
  ].join("\n");

  try {
    await Promise.all([
      sesClient.send(
        new SendEmailCommand({
          Source: fromEmail,
          Destination: { ToAddresses: [toEmail] },
          ReplyToAddresses: [payload.email],
          Message: {
            Subject: {
              Data: `New contact form submission: ${payload.subject}`,
              Charset: "UTF-8",
            },
            Body: {
              Text: {
                Data: internalText,
                Charset: "UTF-8",
              },
            },
          },
        }),
      ),
      sesClient.send(
        new SendEmailCommand({
          Source: fromEmail,
          Destination: { ToAddresses: [payload.email] },
          ReplyToAddresses: [toEmail],
          Message: {
            Subject: {
              Data: "We received your message",
              Charset: "UTF-8",
            },
            Body: {
              Text: {
                Data: confirmationText,
                Charset: "UTF-8",
              },
            },
          },
        }),
      ),
    ]);
  } catch (error) {
    console.error("Failed to send contact form email", error);
    return response(502, origin, {
      message: "We could not send your message right now. Please try again shortly.",
    });
  }

  return response(200, origin, {
    message: "Thanks for reaching out. We sent a confirmation email to your inbox.",
  });
};
