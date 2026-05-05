/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_FORM_API_URL?: string;
  readonly VITE_TURNSTILE_SITE_KEY?: string;
  /** YYYY-MM-DD. First monthly city-promotion date. Unset disables auto-promotion. */
  readonly VITE_SEO_CITY_PROMOTION_START_DATE?: string;
  /** Positive integer. Number of population-ranked cities promoted each month. Default: 3. */
  readonly VITE_SEO_CITY_PROMOTION_BATCH_SIZE?: string;
  /** YYYY-MM-DD. Optional deterministic date override for local testing/build pinning. */
  readonly VITE_SEO_CITY_PROMOTION_AS_OF_DATE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type TurnstileRenderOptions = {
  sitekey: string;
  action?: string;
  theme?: "auto" | "light" | "dark";
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
  "error-callback"?: (errorCode?: string) => void;
};

type TurnstileInstance = {
  ready: (callback: () => void) => void;
  render: (
    container: string | HTMLElement,
    options: TurnstileRenderOptions,
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

interface Window {
  turnstile?: TurnstileInstance;
}
