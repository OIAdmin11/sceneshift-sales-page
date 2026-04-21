import { demoCards } from "./demo";

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

const BASE_TITLE = "SceneShift | sceneshift.org";

const homepageMetaMap = demoCards.reduce(
  (acc, card) => {
    const key = `home${card.id}` as HomeMetaKey;
    acc[key] = {
      title: `${card.demoTitle} — ${card.demoNum} | ${BASE_TITLE}`,
      description: `${card.demoTitle} homepage (${card.demoNum}) — ${BASE_TITLE}: AI agency and technology template demo.`,
    };
    return acc;
  },
  {} as Record<HomeMetaKey, { title: string; description: string }>,
);

const pageMetaMap: Record<PageMetaKey, { title: string; description: string }> =
  {
    preview: {
      title: `SceneShift Preview | ${BASE_TITLE}`,
      description:
        "Internal preview route for the SceneShift placeholder website.",
    },
    "about-us": {
      title: `About Us | ${BASE_TITLE}`,
      description:
        "Learn how SceneShift helps independent businesses answer faster, follow up better, and stay easy to choose from Ames, Iowa.",
    },
    team: {
      title: `Creative Team | ${BASE_TITLE}`,
      description:
        "Meet the creative team behind Aiero AI Agency & Technology, including AI specialists, designers and engineers.",
    },
    "team-single": {
      title: `Team Member Details | ${BASE_TITLE}`,
      description:
        "Detailed profile of a single Aiero team member, including role, social links, and professional background.",
    },
    project: {
      title: `Projects Grid | ${BASE_TITLE}`,
      description:
        "Explore Aiero AI Agency & Technology projects showcasing AI products, research and client case studies.",
    },
    project2: {
      title: `Projects List | ${BASE_TITLE}`,
      description:
        "Browse an alternative view of Aiero AI projects, including AI platforms, apps and experiments.",
    },
    "project-single": {
      title: `Project Details | ${BASE_TITLE}`,
      description:
        "In-depth case study page for a single Aiero AI project, including overview, process and results.",
    },
    "gallery-grid": {
      title: `Gallery Grid | ${BASE_TITLE}`,
      description:
        "Visual gallery grid of Aiero AI Agency & Technology shots, UI layouts and creative assets.",
    },
    "gallery-masonry": {
      title: `Gallery Masonry | ${BASE_TITLE}`,
      description:
        "Masonry-style gallery of Aiero visuals and project screenshots in an organic layout.",
    },
    faq: {
      title: `FAQ | ${BASE_TITLE}`,
      description:
        "Frequently asked questions about Aiero AI Agency & Technology, licensing and template features.",
    },
    pricing: {
      title: `Pricing | ${BASE_TITLE}`,
      description:
        "Compare Aiero AI Agency & Technology pricing plans and choose the right option for your project.",
    },
    typography: {
      title: `Typography | ${BASE_TITLE}`,
      description:
        "Typography and UI elements reference page for the Aiero AI Agency & Technology Next.js template.",
    },
    contact: {
      title: `Contact | ${BASE_TITLE}`,
      description:
        "Contact SceneShift to discuss lead flow, follow-up, and go-to-market systems for your business. Call, email, or send a message.",
    },
    shop: {
      title: `Shop | ${BASE_TITLE}`,
      description:
        "Aiero AI Agency & Technology shop listing AI-related products, digital items and subscriptions.",
    },
    "shop-single": {
      title: `Product Details | ${BASE_TITLE}`,
      description:
        "Single product page with details, gallery, pricing and related AI items in the Aiero shop.",
    },
    cart: {
      title: `Shopping Cart | ${BASE_TITLE}`,
      description:
        "Review items in your Aiero AI Agency & Technology shopping cart before checkout.",
    },
    checkout: {
      title: `Checkout | ${BASE_TITLE}`,
      description:
        "Checkout page for completing your order in the Aiero AI Agency & Technology shop demo.",
    },
    account: {
      title: `My Account | ${BASE_TITLE}`,
      description:
        "Account dashboard for managing profile details and orders in the Aiero shop demo.",
    },
    blog: {
      title: `Blog | ${BASE_TITLE}`,
      description:
        "Aiero AI Agency & Technology blog listing articles on AI, design and technology.",
    },
    blog2: {
      title: `Blog Classic | ${BASE_TITLE}`,
      description:
        "Alternative blog layout showcasing Aiero AI Agency & Technology articles and news.",
    },
    "blog-single": {
      title: `Blog Details | ${BASE_TITLE}`,
      description:
        "Single blog article page for Aiero AI Agency & Technology with full content and comments area.",
    },
    "not-found": {
      title: `404 | ${BASE_TITLE}`,
      description:
        "The page you requested does not exist or has been moved.",
    },
    ...homepageMetaMap,
    home17: {
      title: `SceneShift | ${BASE_TITLE}`,
      description:
        "SceneShift homepage built from the template's index17 demo and customized for sceneshift.org.",
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

/** Applies page title, description, and Open Graph meta tags in the document head (SPA). */
export function getPageMetadata(key: PageMetaKey): void {
  if (typeof document === "undefined") return;

  const { title, description } = pageMetaMap[key];

  document.title = title;
  setMetaName("description", description);
  setMetaProperty("og:title", title);
  setMetaProperty("og:description", description);
}
