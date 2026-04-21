export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  turnstileToken: string;
};

type ContactFormResponse = {
  message?: string;
};

type AmplifyOutputs = {
  custom?: {
    contactForm?: {
      endpoint?: string;
    };
  };
};

let endpointPromise: Promise<string | null> | null = null;

async function loadContactFormEndpoint(): Promise<string | null> {
  if (import.meta.env.VITE_CONTACT_FORM_API_URL) {
    return import.meta.env.VITE_CONTACT_FORM_API_URL;
  }

  if (!endpointPromise) {
    endpointPromise = fetch("/amplify_outputs.json", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) {
          return null;
        }

        const outputs = (await response.json()) as AmplifyOutputs;
        return outputs.custom?.contactForm?.endpoint?.trim() || null;
      })
      .catch(() => null);
  }

  return endpointPromise;
}

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<string> {
  const endpoint = await loadContactFormEndpoint();

  if (!endpoint) {
    throw new Error(
      "The contact form is not configured yet. Set VITE_CONTACT_FORM_API_URL locally or deploy the Amplify backend first.",
    );
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let body: ContactFormResponse | null = null;
  try {
    body = (await response.json()) as ContactFormResponse;
  } catch {
    body = null;
  }

  if (!response.ok) {
    throw new Error(body?.message || "We could not send your message.");
  }

  return body?.message || "Message sent.";
}
