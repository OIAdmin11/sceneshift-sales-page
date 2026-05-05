import type { IndustryRecord } from "@/types/seo";

export const INDUSTRIES: readonly IndustryRecord[] = [
  {
    slug: "home-services-iowa",
    name: "Home Services in Iowa (HVAC, Plumbing, Roofing, Electrical)",
    decisionMaker: "Owner / Operations Manager",
    idealCompanySize: "$1M - $5M revenue, 5-20 technicians",
    bleedingNeck:
      "Missing after-hours calls and watching $5,000 jobs go to whoever picks up first; chaotic dispatch when calls overlap with crew workload.",
    hookOneLiner:
      "Capture every missed call, book the appointment, and stop losing jobs to whoever picked up the phone first.",
    productMatchSlugs: [
      "always-on-receptionist",
      "speed-to-lead-outbound",
      "hands-off-reviews",
      "invisible-admin",
    ],
    crosshairSlugs: [
      "for-hvac-companies",
      "for-plumbers",
      "for-roofers",
      "for-home-services",
    ],
    acquisitionChannel: "Direct video walkthrough, BNI groups, trade associations",
    faqs: [
      {
        question:
          "Do plumbers and HVAC companies actually lose jobs from missed calls?",
        answer:
          "Yes — and the data is brutal. The vast majority of customers who reach a voicemail will simply call the next contractor on the list rather than wait. For high-ticket emergency work, a single missed call routinely costs four-figure jobs.",
      },
      {
        question: "Can the AI receptionist tell an emergency from a quote request?",
        answer:
          "Yes. We define what an emergency sounds like for your specific trade — water leak, gas smell, no heat in winter, roof storm damage — and those calls escalate to a live person on your team while routine quote requests get scheduled normally.",
      },
      {
        question: "Will this work with ServiceTitan / Jobber / Housecall Pro?",
        answer:
          "Yes. We integrate appointments and customer records with the dispatch software you already use.",
      },
      {
        question: "How does this help with my Google reviews?",
        answer:
          "Hands-Off Reviews calls your customer after the job is complete and routes happy customers to a Google review link — building review velocity for local SEO without your team chasing it.",
      },
    ],
    notableIowaCities: [
      "des-moines",
      "cedar-rapids",
      "davenport",
      "sioux-city",
      "iowa-city",
      "waterloo",
      "ames",
      "council-bluffs",
      "dubuque",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "professional-services-iowa",
    name: "Professional Services in Iowa (CPAs, Law Firms, Insurance)",
    decisionMaker: "Managing Partner / Founder",
    idealCompanySize: "$500k - $3M revenue, 3-15 staff",
    bleedingNeck:
      "Unbillable hours spent chasing clients for documents and signatures; new prospect calls go to voicemail during deep-work blocks.",
    hookOneLiner:
      "Stop billing yourself for chasing clients. Let the AI capture leads, book consults, and follow up automatically.",
    productMatchSlugs: [
      "always-on-receptionist",
      "24-7-web-concierge",
      "invisible-admin",
      "invisible-personal-assistant",
    ],
    crosshairSlugs: ["for-cpa-firms", "for-law-firms"],
    acquisitionChannel: "LinkedIn outreach, association events, referral partners",
    faqs: [
      {
        question:
          "Will an AI receptionist sound professional enough for a law firm?",
        answer:
          "Yes. We script the greeting, the qualification questions, and the conflict-check intake to match how a professional intake coordinator would handle the call. Confidentiality is preserved and only routine intake is automated.",
      },
      {
        question: "Can it screen out unqualified prospects before booking?",
        answer:
          "Absolutely. We define the conflict and qualification questions you would normally ask in a screening call, and the AI gathers them before any time gets booked.",
      },
      {
        question: "Does this support intake for tax season volume spikes?",
        answer:
          "Yes — that is exactly when the system pays for itself. Volume scales without scaling staff.",
      },
    ],
    notableIowaCities: [
      "des-moines",
      "cedar-rapids",
      "iowa-city",
      "ames",
      "west-des-moines",
      "davenport",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "medspas-and-clinics-iowa",
    name: "MedSpas and Private Clinics in Iowa",
    decisionMaker: "Clinic Director / Owner",
    idealCompanySize: "$1M - $4M revenue",
    bleedingNeck:
      "High no-show rates on appointments; manual follow-ups eat staff time; consult requests sit in inbox until the lead has booked elsewhere.",
    hookOneLiner:
      "Sync your booking software with automated follow-up that kills no-shows and answers consult requests instantly.",
    productMatchSlugs: [
      "speed-to-lead-outbound",
      "invisible-personal-assistant",
      "invisible-admin",
      "hands-off-reviews",
    ],
    crosshairSlugs: ["for-medspas"],
    acquisitionChannel: "Local ad agency partnerships, industry conferences",
    faqs: [
      {
        question: "Will this work with my booking software?",
        answer:
          "We integrate with most modern aesthetics and clinic booking platforms (Square Appointments, Boulevard, Aesthetic Record, Mindbody) so the AI books real available time.",
      },
      {
        question: "Can it handle pre-treatment instructions?",
        answer:
          "Yes. The Invisible Admin sends the appointment-specific prep instructions automatically — fasting, no makeup, no blood thinners, whatever the procedure requires.",
      },
      {
        question: "How do you reduce no-shows?",
        answer:
          "Confirmation immediately, day-before reminder, and a same-day check-in — all automated and tuned to the message format that drives the highest show-rate for your specific patient mix.",
      },
    ],
    notableIowaCities: [
      "des-moines",
      "west-des-moines",
      "ankeny",
      "urbandale",
      "cedar-rapids",
      "iowa-city",
      "davenport",
      "ames",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "local-logistics-and-warehousing-iowa",
    name: "Local Logistics and Warehousing in Iowa",
    decisionMaker: "General Manager / Owner",
    idealCompanySize: "$2M - $10M revenue",
    bleedingNeck:
      "Inventory counts do not match accounting. Manual Excel reporting eats hours. Customer service questions about shipments tie up the office.",
    hookOneLiner:
      "Connect your warehouse data to your books in real time and let an AI handle routine shipment questions.",
    productMatchSlugs: [
      "always-on-receptionist",
      "invisible-admin",
      "autonomous-salesman",
    ],
    crosshairSlugs: [],
    acquisitionChannel: "Cold email, trade shows, industry publications",
    faqs: [
      {
        question: "Can this connect to QuickBooks?",
        answer:
          "Yes. We sync warehouse scanner data, dispatch records, and customer service activity with QuickBooks (and most major accounting tools).",
      },
      {
        question: "Will an AI handle shipment status questions?",
        answer:
          "Yes. Routine 'where is my shipment' questions get answered without tying up your dispatcher, and exceptions escalate to a human.",
      },
    ],
    notableIowaCities: [
      "des-moines",
      "cedar-rapids",
      "davenport",
      "sioux-city",
      "council-bluffs",
      "waterloo",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "niche-ecommerce-iowa",
    name: "Niche E-Commerce and Local Retail in Iowa",
    decisionMaker: "Founder / E-commerce Director",
    idealCompanySize: "$1M - $5M revenue",
    bleedingNeck:
      "Over-ordering dead stock. Cannot calculate true ad-spend ROI. Customer service questions on Shopify, Instagram, and email never aggregate into one view.",
    hookOneLiner:
      "Get a single dashboard for daily profit across all platforms — and let an AI handle the support questions.",
    productMatchSlugs: [
      "24-7-web-concierge",
      "easy-crm",
      "invisible-admin",
      "autonomous-salesman",
    ],
    crosshairSlugs: [],
    acquisitionChannel: "Cold email, e-commerce communities",
    faqs: [
      {
        question: "Does this connect to Shopify?",
        answer:
          "Yes. The 24/7 Web Concierge installs as a Shopify-friendly script and we sync customer activity into Easy CRM (or your CRM of choice).",
      },
      {
        question: "Can this answer return and refund questions?",
        answer:
          "Yes — within the rules you set. Routine policy questions get answered automatically, edge cases route to your team.",
      },
    ],
    notableIowaCities: [
      "des-moines",
      "cedar-rapids",
      "iowa-city",
      "ames",
      "davenport",
    ],
    lastReviewed: "2026-05-04",
  },
] as const;

export const INDUSTRY_SLUGS = INDUSTRIES.map((i) => i.slug);

export function getIndustryBySlug(slug: string): IndustryRecord | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
