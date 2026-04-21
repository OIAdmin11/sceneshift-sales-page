import { useState, type ChangeEvent, type FormEvent } from "react";

import {
  submitContactForm,
  type ContactFormPayload,
} from "@/utils/contactForm";

const initialFormState: ContactFormPayload = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type SubmitState =
  | { kind: "idle"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    kind: "idle",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitState({ kind: "idle", message: "" });

    try {
      const message = await submitContactForm(formData);
      setFormData(initialFormState);
      setSubmitState({ kind: "success", message });
    } catch (error) {
      setSubmitState({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <h2>Get in Touch</h2>
      <p className="contact-form-note">
        Include your email and phone number so we can follow up and send you a
        confirmation copy of your message.
      </p>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Full name"
        autoComplete="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone number"
        autoComplete="tel"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Write your message..."
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="ibt-btn ibt-btn-outline"
        disabled={isSubmitting}
      >
        <span>{isSubmitting ? "Sending..." : "Send message"}</span>
        <i className="icon-arrow-top" aria-hidden />
      </button>
      {submitState.kind !== "idle" ? (
        <p className={`contact-form-feedback ${submitState.kind}`} role="status">
          {submitState.message}
        </p>
      ) : null}
    </form>
  );
}
