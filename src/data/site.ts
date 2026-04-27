import type { MobileMenuItem } from "@/types/menu";

export const siteConfig = {
  name: "SceneShift",
  domain: "sceneshift.org",
  url: "https://sceneshift.org",
  loginUrl: "https://login.sceneshift.org",
  /** Canonical Terms and Privacy on the Customer Portal (login app). */
  legalTermsUrl: "https://login.sceneshift.org/terms",
  legalPrivacyUrl: "https://login.sceneshift.org/privacy",
  primaryEmail: "contact@sceneshift.org",
  supportEmail: "contact@sceneshift.org",
  primaryPhoneLabel: "(515) 579-5378",
  primaryPhoneHref: "+15155795378",
  region: "Ames, Iowa",
  areaServed: ["Ames, Iowa", "Iowa", "United States"],
  indexNowKey: "b44f0c99429d41d9896cfd3cfc07933e",
  ogImagePath:
    "/assets/images/page-title/des-moines-iowa-usa-capitol-building-on-a-misty-2026-03-24-11-27-15-utc.jpg",
} as const;

export const servicesSectionHref = "/#some-of-our-services";

export const primaryNavItems: MobileMenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export const footerNavItems: MobileMenuItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export const legalNavItems: MobileMenuItem[] = [
  { label: "Terms of Service", href: siteConfig.legalTermsUrl },
  { label: "Privacy Policy", href: siteConfig.legalPrivacyUrl },
];

export function isExternalNavHref(href: string | undefined): boolean {
  return href != null && /^https?:\/\//i.test(href);
}


export const placeholderServiceHighlights = [
  {
    title: "Go-to-market systems",
    description:
      "Placeholder service for launch planning, demand capture, and campaign operations across your revenue stack.",
  },
  {
    title: "Sales workflow design",
    description:
      "Placeholder service for CRM setup, lead routing, automation, and reporting architecture.",
  },
  {
    title: "Growth experiments",
    description:
      "Placeholder service for landing pages, funnel tests, and performance measurement.",
  },
] as const;

export const aboutMarqueePhrases = [
  "Ames, Iowa roots",
  "Downtowns evolve",
  "Independent business focus",
  "Faster first response",
  "Cleaner follow-up",
] as const;

export const aboutOperatingPrinciples = [
  {
    title: "Built for real schedules",
    description:
      "We plan around field crews, busy phones, and owners who cannot spend all day inside software.",
  },
  {
    title: "Local context matters",
    description:
      "Downtowns evolve, tools change, and customers still choose the business that feels trustworthy and responsive. We build with that local reality in view.",
  },
  {
    title: "Practical over performative",
    description:
      "The goal is fewer dropped leads, clearer handoffs, and a customer experience that feels dependable from first contact onward.",
  },
] as const;

export const aboutWhyItMattersHighlights = [
  {
    title: "Answer faster",
    description:
      "When buyers compare options, response time shapes trust before the quality of the work ever gets a chance to speak for itself.",
  },
  {
    title: "Follow up consistently",
    description:
      "Calls, forms, and inbox threads should not depend on whoever happens to remember them. We care about systems that keep the next step moving.",
  },
  {
    title: "Stay easy to choose",
    description:
      "Independent businesses win when they feel organized, responsive, and clear about what happens next for the customer.",
  },
] as const;
