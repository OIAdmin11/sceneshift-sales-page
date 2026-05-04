import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import {
  submitContactForm,
  type ContactFormPayload,
} from "@/utils/contactForm";
import { trackConversionEvent } from "@/utils/analytics";

const CONTACT_SUBJECT_OPTIONS = [
  "The Main Street Startup",
  "Always on Capture",
  "The Autonomous Sales Floor",
  "Chief AI Officers",
  "Customer Support",
  "Other",
] as const;

const initialFormState: ContactFormPayload = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  turnstileToken: "",
};

type SubmitState =
  | { kind: "idle"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const turnstileScriptId = "cloudflare-turnstile-script";
const turnstileScriptSrc =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? "";

let turnstileScriptPromise: Promise<void> | null = null;

async function loadTurnstileScript(): Promise<void> {
  if (window.turnstile) {
    return;
  }

  if (!turnstileScriptPromise) {
    turnstileScriptPromise = new Promise<void>((resolve, reject) => {
      const existingScript = document.getElementById(
        turnstileScriptId,
      ) as HTMLScriptElement | null;

      const handleLoad = () => resolve();
      const handleError = () => {
        reject(new Error("Spam protection could not be loaded."));
      };

      if (existingScript) {
        existingScript.addEventListener("load", handleLoad, { once: true });
        existingScript.addEventListener("error", handleError, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.id = turnstileScriptId;
      script.src = turnstileScriptSrc;
      script.addEventListener("load", handleLoad, { once: true });
      script.addEventListener("error", handleError, { once: true });
      document.head.appendChild(script);
    }).catch((error) => {
      turnstileScriptPromise = null;
      throw error;
    });
  }

  return turnstileScriptPromise;
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>({
    kind: "idle",
    message: "",
  });
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const turnstileStatusMessage =
    turnstileError ||
    (!turnstileSiteKey ? "Spam protection is not configured yet." : "");

  useEffect(() => {
    trackConversionEvent("contact_form_view", { page: window.location.pathname });
  }, []);

  useEffect(() => {
    if (!turnstileSiteKey) {
      return;
    }

    let isCancelled = false;

    loadTurnstileScript()
      .then(() => {
        if (
          isCancelled ||
          !window.turnstile ||
          !turnstileContainerRef.current ||
          turnstileWidgetIdRef.current
        ) {
          return;
        }

        turnstileWidgetIdRef.current = window.turnstile.render(
          turnstileContainerRef.current,
          {
            sitekey: turnstileSiteKey,
            action: "contact_form",
            theme: "auto",
            callback: (token: string) => {
              setTurnstileToken(token);
              setTurnstileError("");
            },
            "expired-callback": () => {
              setTurnstileToken("");
              setTurnstileError(
                "Spam protection expired. Please confirm again.",
              );
            },
            "timeout-callback": () => {
              setTurnstileToken("");
              setTurnstileError(
                "Spam protection timed out. Please confirm again.",
              );
            },
            "error-callback": () => {
              setTurnstileToken("");
              setTurnstileError(
                "Spam protection failed to load. Please refresh and try again.",
              );
            },
          },
        );
      })
      .catch((error) => {
        if (!isCancelled) {
          setTurnstileError(
            error instanceof Error
              ? error.message
              : "Spam protection could not be loaded.",
          );
        }
      });

    return () => {
      isCancelled = true;

      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, []);

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileError("");

    if (turnstileWidgetIdRef.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!turnstileSiteKey) {
      setSubmitState({
        kind: "error",
        message:
          "Spam protection is not configured yet. Please contact us by phone or email for now.",
      });
      return;
    }

    if (!turnstileToken) {
      setSubmitState({
        kind: "error",
        message:
          turnstileError || "Please complete the spam check before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ kind: "idle", message: "" });

    try {
      const message = await submitContactForm({
        ...formData,
        turnstileToken,
      });
      setFormData(initialFormState);
      resetTurnstile();
      setSubmitState({ kind: "success", message });
      trackConversionEvent("contact_form_submit", {
        page: window.location.pathname,
        subject: formData.subject,
      });
    } catch (error) {
      resetTurnstile();
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
      <select
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        aria-label="Topic"
      >
        <option value="" disabled>
          Select a topic…
        </option>
        {CONTACT_SUBJECT_OPTIONS.map((label) => (
          <option key={label} value={label}>
            {label}
          </option>
        ))}
      </select>
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Write your message..."
        value={formData.message}
        onChange={handleChange}
        required
      />
      <div className="contact-form-turnstile">
        <div ref={turnstileContainerRef} />
        {turnstileStatusMessage ? (
          <p className="contact-form-turnstile__feedback error" role="status">
            {turnstileStatusMessage}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        className="ibt-btn ibt-btn-outline"
        disabled={isSubmitting || !turnstileSiteKey}
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
