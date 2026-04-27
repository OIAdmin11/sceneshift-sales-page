import { demoCards } from "./demo";
import { siteConfig } from "./site";

type HomeNum =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17;

type HomeMetaKey = `home${HomeNum}`;

type PageMetaKey =
  | "preview"
  | "about-us"
  | "team"
  | "team-single"
  | "project"
  | "project2"
  | "project-single"
  | "gallery-grid"
  | "gallery-masonry"
  | "faq"
  | "pricing"
  | "typography"
  | "contact"
  | "shop"
  | "shop-single"
  | "cart"
  | "checkout"
  | "account"
  | "blog"
  | "blog2"
  | "blog-single"
  | "not-found"
  | HomeMetaKey;

const BASE_TITLE = "SceneShift";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: number;
  schemaType?:
    | "AboutPage"
    | "CollectionPage"
    | "ContactPage"
    | "FAQPage"
    | "Product"
    | "ProfessionalService"
    | "Service"
    | "WebPage";
};

export type { PageMetaKey, PageMeta };

const homepageMetaMap = demoCards.reduce(
  (acc, card) => {
    const key = `home${card.id}` as HomeMetaKey;
    acc[key] = {
      title: `${card.demoTitle} ${card.demoNum} | ${BASE_TITLE}`,
      description:
        "Template demonstration route retained for internal design comparison. This route is not intended for search indexing.",
      path: `/index${card.id}`,
      index: false,
      schemaType: "WebPage",
    };
    return acc;
  },
  {} as Record<HomeMetaKey, PageMeta>,
);

const pageMetaMap: Record<PageMetaKey, PageMeta> = {
    preview: {
      title: `SceneShift Preview | ${BASE_TITLE}`,
      description:
        "Internal preview route for the SceneShift placeholder website.",
      path: "/preview",
      index: false,
    },
    "about-us": {
      title: `About SceneShift | Small Business AI Automation in Iowa`,
      description:
        "Learn how SceneShift helps independent businesses in Ames and across Iowa respond faster, follow up consistently, and stay easy to choose.",
      path: "/about-us",
      index: true,
      changefreq: "monthly",
      priority: 0.8,
      schemaType: "AboutPage",
    },
    team: {
      title: `Team | ${BASE_TITLE}`,
      description:
        "Internal team template route retained for design reference.",
      path: "/team",
      index: false,
    },
    "team-single": {
      title: `Team Member Details | ${BASE_TITLE}`,
      description:
        "Internal team detail template route retained for design reference.",
      path: "/team-single",
      index: false,
    },
    project: {
      title: `Projects Grid | ${BASE_TITLE}`,
      description:
        "Internal project grid template route retained for design reference.",
      path: "/project",
      index: false,
    },
    project2: {
      title: `Projects List | ${BASE_TITLE}`,
      description:
        "Internal project list template route retained for design reference.",
      path: "/project2",
      index: false,
    },
    "project-single": {
      title: `Project Details | ${BASE_TITLE}`,
      description:
        "Internal project detail template route retained for design reference.",
      path: "/project-single",
      index: false,
    },
    "gallery-grid": {
      title: `Gallery Grid | ${BASE_TITLE}`,
      description:
        "Internal gallery template route retained for design reference.",
      path: "/gallery-grid",
      index: false,
    },
    "gallery-masonry": {
      title: `Gallery Masonry | ${BASE_TITLE}`,
      description:
        "Internal gallery template route retained for design reference.",
      path: "/gallery-masonry",
      index: false,
    },
    faq: {
      title: `Small Business AI Automation FAQ | ${BASE_TITLE}`,
      description:
        "Frequently asked questions about SceneShift lead response, CRM follow-up, AI reception, and small business automation.",
      path: "/faq",
      index: false,
      schemaType: "FAQPage",
    },
    pricing: {
      title: `AI Automation Pricing for Small Businesses | ${BASE_TITLE}`,
      description:
        "Compare SceneShift packages for missed-call text back, unified inboxes, AI reception, web chat, review generation, and sales follow-up automation.",
      path: "/pricing",
      index: true,
      changefreq: "weekly",
      priority: 0.8,
      schemaType: "Service",
    },
    typography: {
      title: `Typography | ${BASE_TITLE}`,
      description:
        "Internal typography template route retained for design reference.",
      path: "/typography",
      index: false,
    },
    contact: {
      title: `Contact SceneShift | Book an AI Automation Call`,
      description:
        "Contact SceneShift to discuss lead capture, AI reception, CRM follow-up, missed-call text back, review generation, and growth automation.",
      path: "/contact",
      index: true,
      changefreq: "monthly",
      priority: 0.7,
      schemaType: "ContactPage",
    },
    shop: {
      title: `Shop | ${BASE_TITLE}`,
      description:
        "Internal shop template route retained for design reference.",
      path: "/shop",
      index: false,
    },
    "shop-single": {
      title: `Product Details | ${BASE_TITLE}`,
      description:
        "Internal product template route retained for design reference.",
      path: "/shop-single",
      index: false,
    },
    cart: {
      title: `Shopping Cart | ${BASE_TITLE}`,
      description:
        "Cart route for active customer sessions.",
      path: "/cart",
      index: false,
    },
    checkout: {
      title: `Checkout | ${BASE_TITLE}`,
      description:
        "Checkout route for active customer sessions.",
      path: "/checkout",
      index: false,
    },
    account: {
      title: `My Account | ${BASE_TITLE}`,
      description:
        "Account route for active customer sessions.",
      path: "/account",
      index: false,
    },
    blog: {
      title: `Blog | ${BASE_TITLE}`,
      description:
        "Internal blog template route retained until SceneShift publishes original articles.",
      path: "/blog",
      index: false,
    },
    blog2: {
      title: `Blog Classic | ${BASE_TITLE}`,
      description:
        "Internal blog template route retained until SceneShift publishes original articles.",
      path: "/blog2",
      index: false,
    },
    "blog-single": {
      title: `Blog Details | ${BASE_TITLE}`,
      description:
        "Internal blog detail template route retained until SceneShift publishes original articles.",
      path: "/blog-single",
      index: false,
    },
    "not-found": {
      title: `404 | ${BASE_TITLE}`,
      description:
        "The page you requested does not exist or has been moved.",
      path: "/404",
      index: false,
    },
    ...homepageMetaMap,
    home17: {
      title: `AI CRM Automation for Small Businesses | ${BASE_TITLE}`,
      description:
        "SceneShift helps Iowa small businesses capture more leads, answer faster, automate follow-up, and build practical AI-powered CRM workflows.",
      path: "/",
      index: true,
      changefreq: "weekly",
      priority: 1,
      schemaType: "ProfessionalService",
    },
  };

function upsertMetaElement(
  selector: string,
  create: () => HTMLMetaElement,
  content: string,
): void {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.content = content;
}

function setMetaName(name: string, content: string): void {
  upsertMetaElement(
    `meta[name="${name}"]`,
    () => {
      const meta = document.createElement("meta");
      meta.name = name;
      return meta;
    },
    content,
  );
}

function setMetaProperty(property: string, content: string): void {
  upsertMetaElement(
    `meta[property="${property}"]`,
    () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", property);
      return meta;
    },
    content,
  );
}

function setLinkRel(rel: string, href: string): void {
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

function setJsonLd(id: string, value: unknown): void {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(value);
}

function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

function normalizePath(pathname: string): string {
  if (pathname === "") return "/";
  if (pathname !== "/" && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

function buildJsonLd(meta: PageMeta, canonicalUrl: string): unknown {
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.primaryEmail,
        telephone: siteConfig.primaryPhoneHref,
        areaServed: siteConfig.areaServed,
        serviceType: [
          "AI CRM automation",
          "Lead response automation",
          "Sales follow-up systems",
          "Small business workflow automation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        publisher: { "@id": organizationId },
      },
      {
        "@type": meta.schemaType ?? "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: meta.title,
        description: meta.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        provider: { "@id": organizationId },
      },
    ],
  };
}

export function getPageMeta(key: PageMetaKey): PageMeta {
  return pageMetaMap[key];
}

export const indexedPageMeta = Object.values(pageMetaMap).filter(
  (meta) => meta.index === true,
);

/** Applies page title, canonical, robots, social meta tags, and JSON-LD in the document head (SPA). */
export function getPageMetadata(key: PageMetaKey): void {
  if (typeof document === "undefined") return;

  const meta = pageMetaMap[key];
  const canonicalUrl = absoluteUrl(meta.path);
  const ogImageUrl = absoluteUrl(siteConfig.ogImagePath);
  const currentPath = normalizePath(window.location.pathname);
  const canonicalPath = normalizePath(new URL(canonicalUrl).pathname);
  const shouldIndex = meta.index === true && currentPath === canonicalPath;

  document.title = meta.title;
  setMetaName("description", meta.description);
  setMetaName(
    "robots",
    shouldIndex ? "index, follow, max-image-preview:large" : "noindex, nofollow",
  );
  setLinkRel("canonical", canonicalUrl);
  setMetaProperty("og:type", "website");
  setMetaProperty("og:site_name", siteConfig.name);
  setMetaProperty("og:title", meta.title);
  setMetaProperty("og:description", meta.description);
  setMetaProperty("og:url", canonicalUrl);
  setMetaProperty("og:image", ogImageUrl);
  setMetaName("twitter:card", "summary_large_image");
  setMetaName("twitter:title", meta.title);
  setMetaName("twitter:description", meta.description);

  if (shouldIndex) {
    setJsonLd("seo-json-ld", buildJsonLd(meta, canonicalUrl));
  }
}
