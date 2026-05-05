/**
 * Runtime helper used by SEO page components to set <head> metadata when the
 * route is reached via SPA navigation (build-time prerender already injects
 * the same tags into static HTML). Mirror of [src/data/pages.ts]'s
 * `getPageMetadata` but consumes a `RouteMetadata` from
 * [src/data/seoMetadata.ts].
 */
import { siteConfig } from "@/data/site";
import type { RouteMetadata } from "@/data/seoMetadata";

function upsertMetaName(name: string, content: string): void {
  let el = document.head.querySelector(
    `meta[name="${name}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertMetaProperty(property: string, content: string): void {
  let el = document.head.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(value: unknown): void {
  let el = document.getElementById("seo-json-ld") as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "seo-json-ld";
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(value);
}

function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

export function applySeoMetadata(meta: RouteMetadata): void {
  if (typeof document === "undefined") return;
  const canonicalUrl = absoluteUrl(meta.path);
  const ogImageUrl = absoluteUrl(siteConfig.ogImagePath);

  document.title = meta.title;
  upsertMetaName("description", meta.description);
  upsertMetaName(
    "robots",
    meta.index
      ? "index, follow, max-image-preview:large"
      : "noindex, follow",
  );
  upsertLink("canonical", canonicalUrl);

  upsertMetaProperty("og:type", "website");
  upsertMetaProperty("og:site_name", siteConfig.name);
  upsertMetaProperty("og:title", meta.title);
  upsertMetaProperty("og:description", meta.description);
  upsertMetaProperty("og:url", canonicalUrl);
  upsertMetaProperty("og:image", ogImageUrl);
  upsertMetaName("twitter:card", "summary_large_image");
  upsertMetaName("twitter:title", meta.title);
  upsertMetaName("twitter:description", meta.description);

  setJsonLd(meta.jsonLd);
}
