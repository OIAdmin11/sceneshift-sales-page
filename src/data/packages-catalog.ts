import type { PackageRecord } from "@/types/seo";

export const PACKAGES: readonly PackageRecord[] = [
  {
    slug: "main-street-startup",
    name: "The Main Street Startup",
    tagline:
      "Your AI front office: every call, chat, appointment, and customer update handled — without extra payroll.",
    idealFor:
      "Owner-operators with 1 to 5 employees and $100k to $500k in annual revenue, where missing one call on a job site can cost a week's groceries. Plumbers, roofers, electricians, salons, solo realtors, property managers, and any service business answering its own phone today.",
    pains: [
      "Calls go to voicemail while you are on a ladder, and the next number on Google picks up.",
      "Web visitors leave because nobody answered the chat at 9 PM.",
      "You spend Sunday night updating spreadsheets and texting reminders.",
    ],
    heroFeature:
      "The Always-On Receptionist plus Missed-Call Text Back — every missed call gets either an AI answer or an instant text from your business number.",
    includedServiceSlugs: [
      "24-7-web-concierge",
      "always-on-receptionist",
      "invisible-admin",
      "invisible-personal-assistant",
      "easy-crm",
    ],
    priceHeadline: "$299",
    priceDetailLines: ["/month", "+ $500 one-time setup"],
    faqs: [
      {
        question: "What size business is this for?",
        answer:
          "Solo owner-operators up through about 5 employees. If you are still answering your own phone in the truck or between clients, this is built for you.",
      },
      {
        question: "Does it lock me into a long contract?",
        answer:
          "Month to month after the initial setup. We earn the renewal every month.",
      },
      {
        question: "What if I already have a CRM?",
        answer:
          "We sync into your existing CRM. Easy CRM is the default if you do not have one.",
      },
    ],
    bestFitIndustries: ["home-services-iowa", "professional-services-iowa"],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "always-on-capture",
    name: "Always-On Capture",
    tagline:
      "Everything in The Main Street Startup, plus instant outbound follow-up and automated 5-star reviews.",
    idealFor:
      "Multi-truck and multi-location small businesses with 5 to 20 employees and $500k to $2.5M revenue — multi-truck HVAC, plumbing, cleaning, pest control, MedSpas, dental, chiropractic, automotive, and local retail. The fix is no longer just answering the phone: you need to outrun bigger competitors on response time and on review velocity.",
    pains: [
      "You spend on Google ads, but leads cool off before anyone calls them back.",
      "Your competitor has 200 more 5-star reviews and is outranking you on Google Maps.",
      "Front-desk staff is stretched thin and follow-up is the first thing to drop.",
    ],
    heroFeature:
      "Speed-to-Lead Outbound plus Hands-Off Reviews — you call leads first and you collect reviews automatically.",
    includedServiceSlugs: [
      "24-7-web-concierge",
      "always-on-receptionist",
      "invisible-admin",
      "invisible-personal-assistant",
      "easy-crm",
      "speed-to-lead-outbound",
      "hands-off-reviews",
    ],
    priceHeadline: "$599",
    priceDetailLines: ["/month", "+ $1,000 one-time setup"],
    faqs: [
      {
        question: "How much faster will leads be contacted?",
        answer:
          "Web form submissions are called within sixty seconds, day or night. Most small businesses currently respond in hours or days.",
      },
      {
        question: "What review platforms are supported?",
        answer:
          "Google is the default — that is what most local SEO depends on. We can also route to Facebook, Yelp, BBB, or industry-specific platforms.",
      },
      {
        question: "Will this work with my existing dispatch software?",
        answer:
          "Yes. We integrate with ServiceTitan, Jobber, Housecall Pro, GoHighLevel, and most modern field-service tools.",
      },
    ],
    bestFitIndustries: [
      "home-services-iowa",
      "medspas-and-clinics-iowa",
      "professional-services-iowa",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "autonomous-sales-floor",
    name: "The Autonomous Sales Floor",
    tagline:
      "Everything in Always-On Capture plus an autonomous AI sales rep working your call list — so your reps spend the day closing, not dialing.",
    idealFor:
      "Companies with 20 to 100+ employees and $3M to $15M+ revenue running an actual outbound sales motion: advanced manufacturing, ag-tech, equipment dealers, finance, and insurance brokerages. You have lists, you have a sales team, and you are wasting expensive humans on dialing voicemails.",
    pains: [
      "Sales reps making $80k spend most of their day leaving voicemails and chasing dead numbers.",
      "Dormant customer lists, expired warranties, and cold leads sit untouched for months.",
      "The eighth follow-up — the one that closes — never happens because nobody likes making it.",
    ],
    heroFeature:
      "The Autonomous Salesman — an AI SDR that works your call list, follows up across days and weeks, and books the appointment.",
    includedServiceSlugs: [
      "24-7-web-concierge",
      "always-on-receptionist",
      "invisible-admin",
      "invisible-personal-assistant",
      "easy-crm",
      "speed-to-lead-outbound",
      "hands-off-reviews",
      "autonomous-salesman",
    ],
    priceHeadline: "$999",
    priceDetailLines: ["/month", "+ $1,500 one-time setup"],
    faqs: [
      {
        question: "Will my human sales reps lose their jobs?",
        answer:
          "No. The AI handles the prospecting and qualification work most reps actively dislike. Your reps spend their hours on the appointments the AI books — closing instead of dialing.",
      },
      {
        question: "How is compliance handled?",
        answer:
          "We follow TCPA, scrub against the National Do Not Call registry, and only call numbers you have a legitimate basis to contact.",
      },
      {
        question: "Can I bring my own scripts?",
        answer:
          "Yes. We will refine them with you, then keep tuning them based on what actually books appointments.",
      },
    ],
    bestFitIndustries: [
      "professional-services-iowa",
      "local-logistics-and-warehousing-iowa",
      "niche-ecommerce-iowa",
    ],
    lastReviewed: "2026-05-04",
  },
] as const;

export const PACKAGE_SLUGS = PACKAGES.map((p) => p.slug);

export function getPackageBySlug(slug: string): PackageRecord | undefined {
  return PACKAGES.find((p) => p.slug === slug);
}
