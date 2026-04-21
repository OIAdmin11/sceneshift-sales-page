import { useEffect } from "react";

/** Sends the browser to an absolute URL (e.g. legal docs on the login app). */
export default function ExternalRedirect({ url }: { url: string }) {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);
  return null;
}
