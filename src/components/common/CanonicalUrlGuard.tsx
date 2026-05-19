import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  hasNonCanonicalSearch,
  isLegacyDemoPath,
  normalizePathname,
} from "@/utils/canonicalNavigation";

/**
 * Keeps the address bar aligned with the canonical URL Google should index:
 * - /index and /index1–17 → /
 * - ?q=… (sitelinks searchbox template) → stripped on /
 */
export default function CanonicalUrlGuard() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = normalizePathname(location.pathname);

    if (isLegacyDemoPath(path)) {
      navigate("/", { replace: true });
      return;
    }

    if (path === "/" && hasNonCanonicalSearch(location.search)) {
      navigate({ pathname: "/", search: "" }, { replace: true });
    }
  }, [location.pathname, location.search, navigate]);

  return null;
}
