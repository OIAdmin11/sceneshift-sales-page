type ConversionEventName =
  | "contact_form_view"
  | "contact_form_submit"
  | "email_click"
  | "hero_book_call_click"
  | "phone_click"
  | "pricing_book_call_click"
  | "services_cta_click";

type ConversionEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: ConversionEventParams,
    ) => void;
    plausible?: (eventName: string, options?: { props?: ConversionEventParams }) => void;
  }
}

export function trackConversionEvent(
  eventName: ConversionEventName,
  params: ConversionEventParams = {},
): void {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, params);
  window.plausible?.(eventName, { props: params });
}
