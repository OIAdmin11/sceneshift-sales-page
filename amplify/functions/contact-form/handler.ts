import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import type { APIGatewayProxyHandlerV2 } from "aws-lambda";

type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const sesClient = new SESClient({});
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const jsonHeaders = (origin: string) => ({
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Content-Type": "application/json",
});

const response = (statusCode: number, origin: string, body: object) => ({
  statusCode,
  headers: jsonHeaders(origin),
  body: JSON.stringify(body),
});

const sanitize = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

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

  return null;
};

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const origin = process.env.CONTACT_FORM_ALLOWED_ORIGIN || "*";

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
  };

  const validationError = validate(payload);
  if (validationError) {
    return response(400, origin, { message: validationError });
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
