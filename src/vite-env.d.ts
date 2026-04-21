/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_FORM_API_URL?: string;
  readonly VITE_TURNSTILE_SITE_KEY?: string;
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
