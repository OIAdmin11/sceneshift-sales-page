export const site = {
  name: "SceneShift",
  host: "sceneshift.org",
  url: "https://sceneshift.org",
  email: "contact@sceneshift.org",
  phone: "+15155795378",
  phoneLabel: "(515) 579-5378",
  region: "Ames, Iowa",
  ogImage: "/assets/images/page-title/des-moines-iowa-usa-capitol-building-on-a-misty-2026-03-24-11-27-15-utc.jpg",
  indexNowKey: "b44f0c99429d41d9896cfd3cfc07933e",
};

export const canonicalRoutes = [
  {
    path: "/",
    key: "home17",
    title: "AI CRM Automation for Small Businesses | SceneShift",
    description:
      "SceneShift helps Iowa small businesses capture more leads, answer faster, automate follow-up, and build practical AI-powered CRM workflows.",
    priority: "1.0",
    changefreq: "weekly",
    schemaType: "ProfessionalService",
  },
  {
    path: "/about-us",
    key: "about-us",
    title: "About SceneShift | Small Business AI Automation in Iowa",
    description:
      "Learn how SceneShift helps independent businesses in Ames and across Iowa respond faster, follow up consistently, and stay easy to choose.",
    priority: "0.8",
    changefreq: "monthly",
    schemaType: "AboutPage",
  },
  {
    path: "/pricing",
    key: "pricing",
    title: "AI Automation Pricing for Small Businesses | SceneShift",
    description:
      "Compare SceneShift packages for missed-call text back, unified inboxes, AI reception, web chat, review generation, and sales follow-up automation.",
    priority: "0.8",
    changefreq: "weekly",
    schemaType: "Service",
  },
  {
    path: "/contact",
    key: "contact",
    title: "Contact SceneShift | Book an AI Automation Call",
    description:
      "Contact SceneShift to discuss lead capture, AI reception, CRM follow-up, missed-call text back, review generation, and growth automation.",
    priority: "0.7",
    changefreq: "monthly",
    schemaType: "ContactPage",
  },
];

export const disallowedPaths = [
  "/account",
  "/cart",
  "/checkout",
  "/gallery-grid",
  "/gallery-masonry",
  "/index",
  "/index1",
  "/index2",
  "/index3",
  "/index4",
  "/index5",
  "/index6",
  "/index7",
  "/index8",
  "/index9",
  "/index10",
  "/index11",
  "/index12",
  "/index13",
  "/index14",
  "/index15",
  "/index16",
  "/index17",
  "/project",
  "/project2",
  "/project-single",
  "/service-single",
  "/shop",
  "/shop-single",
  "/team",
  "/team-single",
  "/typography",
];

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function absoluteAsset(path) {
  return new URL(path, site.url).toString();
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
