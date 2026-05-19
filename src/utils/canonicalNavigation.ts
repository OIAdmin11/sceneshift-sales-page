/** Normalize pathname for canonical comparisons (no trailing slash except root). */
export function normalizePathname(pathname: string): string {
  if (pathname === "") return "/";
  if (pathname !== "/" && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

/** Legacy template demo homes and duplicate home alias — never indexed. */
export function isLegacyDemoPath(pathname: string): boolean {
  const path = normalizePathname(pathname);
  return path === "/index" || /^\/index\d+$/.test(path);
}

/** Strip sitelinks/search tracking params so canonical stays on the clean URL. */
export function hasNonCanonicalSearch(search: string): boolean {
  if (!search) return false;
  const params = new URLSearchParams(search);
  return params.has("q");
}
