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
      title: `Virtual Receptionist Pricing for Contractors | ${BASE_TITLE}`,
      description:
        "Compare SceneShift flat-rate plans for missed call capture, after-hours answering, live web chat, and instant form follow-up.",
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
      title: `Contact SceneShift | Stop Missing Calls`,
      description:
        "Contact SceneShift to test missed call capture, after-hours answering, live web chat, and instant lead booking for your home-service business.",
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
      title: `24/7 Virtual Receptionist for Contractors | ${BASE_TITLE}`,
      description:
        "SceneShift helps HVAC, plumbing, roofing, and electrical businesses answer missed calls, qualify leads, and book jobs after hours.",
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

function homepageStructuredData(canonicalUrl: string): unknown[] {
  const offerCatalogId = `${canonicalUrl}#contractor-offers`;
  const faqId = `${canonicalUrl}#faq`;
  const products = [
    {
      "@type": "Product",
      "@id": `${canonicalUrl}#owner-operator`,
      name: "The Owner-Operator",
      description:
        "Flat-rate missed call capture, 24/7 live web chat, instant form follow-up, and appointment booking for solo contractors and small crews.",
      brand: { "@id": `${siteConfig.url}/#organization` },
      offers: {
        "@type": "Offer",
        price: "299",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: canonicalUrl,
      },
    },
    {
      "@type": "Product",
      "@id": `${canonicalUrl}#growing-crew`,
      name: "The Growing Crew",
      description:
        "After-hours voice dispatch, priority lead alerts, and custom job questions for home-service teams running multiple trucks.",
      brand: { "@id": `${siteConfig.url}/#organization` },
      offers: {
        "@type": "Offer",
        price: "599",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: canonicalUrl,
      },
    },
    {
      "@type": "Product",
      "@id": `${canonicalUrl}#full-dispatch-desk`,
      name: "The Full Dispatch Desk",
      description:
        "Higher-volume missed call capture, form follow-up, and dispatch support for busy home-service shops.",
      brand: { "@id": `${siteConfig.url}/#organization` },
      offers: {
        "@type": "Offer",
        price: "999",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: canonicalUrl,
      },
    },
  ];

  return [
    {
      "@type": "Service",
      "@id": `${canonicalUrl}#virtual-receptionist-service`,
      name: "24/7 Virtual Receptionist",
      description:
        "SceneShift answers missed calls and after-hours calls, qualifies home-service leads, and books qualified jobs into the business calendar.",
      provider: { "@id": `${siteConfig.url}/#organization` },
      serviceType: "Missed call capture and after-hours answering",
      areaServed: siteConfig.areaServed,
      hasOfferCatalog: { "@id": offerCatalogId },
    },
    {
      "@type": "OfferCatalog",
      "@id": offerCatalogId,
      name: "SceneShift contractor plans",
      itemListElement: products.map((product, index) => ({
        "@type": "OfferCatalog",
        position: index + 1,
        itemOffered: { "@id": product["@id"] },
      })),
    },
    ...products,
    {
      "@type": "FAQPage",
      "@id": faqId,
      mainEntity: [
        {
          "@type": "Question",
          name: "What does SceneShift do for contractors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SceneShift answers missed calls, captures late-night website leads, qualifies the job, alerts the business, and books qualified appointments.",
          },
        },
        {
          "@type": "Question",
          name: "Does SceneShift replace an existing phone system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SceneShift works alongside the existing phone system and calendar so contractors do not need to change the daily office workflow.",
          },
        },
        {
          "@type": "Question",
          name: "Who is SceneShift built for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SceneShift is built for HVAC companies, plumbers, roofers, electricians, owner-operators, dispatchers, and other home-service businesses.",
          },
        },
      ],
    },
  ];
}

function buildJsonLd(meta: PageMeta, canonicalUrl: string): unknown {
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;
  const homepageExtras = meta.path === "/" ? homepageStructuredData(canonicalUrl) : [];

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
          "24/7 virtual receptionist",
          "Missed call capture",
          "Instant lead booking",
          "After-hours answering",
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
      ...homepageExtras,
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
  const hasStrayQuery =
    window.location.search.length > 0 &&
    new URLSearchParams(window.location.search).has("q");
  const shouldIndex =
    meta.index === true && currentPath === canonicalPath && !hasStrayQuery;

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
