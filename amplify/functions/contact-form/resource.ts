import { defineFunction } from "@aws-amplify/backend";

export const contactForm = defineFunction({
  name: "contact-form",
  runtime: 20,
  timeoutSeconds: 15,
  environment: {
    CONTACT_FORM_TO_EMAIL:
      process.env.CONTACT_FORM_TO_EMAIL ?? "contact@sceneshift.org",
    CONTACT_FORM_FROM_EMAIL: process.env.CONTACT_FORM_FROM_EMAIL ?? "",
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY ?? "",
  },
});
