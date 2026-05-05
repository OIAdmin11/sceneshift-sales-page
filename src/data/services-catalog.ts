import type { ServiceRecord } from "@/types/seo";

export const SERVICES: readonly ServiceRecord[] = [
  {
    slug: "24-7-web-concierge",
    name: "24/7 Web Concierge",
    h1: "How do you answer website visitors when no one is at the office?",
    answer:
      "The 24/7 Web Concierge is an AI-powered chat widget on your existing site. It answers FAQs, captures contact details, and books appointments at 2 AM the same way it does at 2 PM, so a Gen-Z visitor who would never call you can still become a customer.",
    hookOneLiner:
      "An AI chat that turns silent web visitors into booked appointments around the clock.",
    painPoints: [
      "Younger buyers won't call. They text or close the tab.",
      "Web forms that say 'we'll get back in 24 hours' lose to competitors who answer in 24 seconds.",
      "After-hours questions go unanswered and never come back.",
    ],
    mechanism: [
      {
        name: "Install on your existing site",
        text: "We add a small script tag to your current website. No replatforming, no downtime, no rebuild.",
      },
      {
        name: "Train on your real questions",
        text: "We seed the chat with your actual top FAQs, service area, hours, and pricing rules so answers match how your team would respond.",
      },
      {
        name: "Capture and route",
        text: "When a visitor wants more, the chat asks for name, phone, email, and the job they need. That goes straight into Easy CRM and pings you on phone or email.",
      },
      {
        name: "Book the appointment",
        text: "If the visitor is ready, the chat checks your calendar and books the slot with a confirmation text or email.",
      },
    ],
    outcomes: [
      "Web leads captured 24/7, including weekends and holidays",
      "First response measured in seconds, not hours",
      "A clean record of every chat conversation in Easy CRM",
    ],
    comparison: {
      title: "AI Web Concierge vs. a contact form",
      oursLabel: "Web Concierge",
      theirsLabel: "Static contact form",
      rows: [
        {
          feature: "Response time after hours",
          ours: "Seconds, automated",
          theirs: "Whenever someone reads the inbox",
        },
        {
          feature: "Books appointments",
          ours: "Yes, on your calendar",
          theirs: "No",
        },
        {
          feature: "Answers FAQs",
          ours: "Yes, in your voice",
          theirs: "No",
        },
        {
          feature: "Captures phone + email",
          ours: "Yes, structured",
          theirs: "Yes, in a flat blob",
        },
      ],
    },
    faqs: [
      {
        question: "Does the 24/7 Web Concierge work on my current website?",
        answer:
          "Yes. It is a small script that sits on top of your existing WordPress, Webflow, Shopify, Squarespace, or custom site. We do not need to rebuild anything to install it.",
      },
      {
        question: "What happens if the AI cannot answer a question?",
        answer:
          "The chat collects the visitor's name, phone, and the question, then alerts your team by text or email so a human can follow up while the lead is still warm.",
      },
      {
        question: "Can the chat book directly into my calendar?",
        answer:
          "Yes. We connect to Google Calendar, Outlook, Calendly, or your scheduling tool of choice and the chat only books available time slots.",
      },
      {
        question: "Do you log the conversations?",
        answer:
          "Every chat is saved to your Easy CRM contact record so you can review what was asked and what was answered.",
      },
    ],
    includedInPackages: [
      "main-street-startup",
      "always-on-capture",
      "autonomous-sales-floor",
    ],
    naturalCompanions: [
      "always-on-receptionist",
      "invisible-personal-assistant",
      "speed-to-lead-outbound",
    ],
    industries: [
      "home-services-iowa",
      "professional-services-iowa",
      "medspas-and-clinics-iowa",
    ],
    primarySources: [
      {
        label: "Iowa SBDC small business resources",
        url: "https://www.iowasbdc.org/",
      },
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "always-on-receptionist",
    name: "The Always-On Receptionist",
    h1: "How do small businesses stop losing money to missed phone calls?",
    answer:
      "The Always-On Receptionist is an AI phone system that answers your business line when no one else can. It greets the caller in your business voice, answers common questions, pre-qualifies the buyer, books appointments on your calendar, and sends you a clean note about the call.",
    hookOneLiner:
      "An AI phone receptionist that catches every missed call, qualifies the buyer, and books the appointment.",
    painPoints: [
      "Crews on jobs cannot answer the phone, and a competitor picks up first.",
      "Voicemail kills 80% of inbound interest before you ever hear it.",
      "Hiring a full-time receptionist costs more than the calls are worth most months.",
    ],
    mechanism: [
      {
        name: "Forward your business line",
        text: "We give you a number to forward unanswered calls to (or use as your main line). Your existing number stays the same.",
      },
      {
        name: "Greet in your voice",
        text: "We script the greeting around how your team actually answers — not a generic 'hello, please hold' that screams call center.",
      },
      {
        name: "Qualify and route",
        text: "The AI asks the questions you would ask: what is the address, what is the issue, when do they need it done. Emergencies get escalated, non-emergencies get scheduled.",
      },
      {
        name: "Book or hand off",
        text: "If the caller is ready, the AI books the appointment on your calendar. If not, the call summary is texted or emailed to you within seconds.",
      },
    ],
    outcomes: [
      "Zero missed-call voicemails for inbound new business",
      "Every caller gets a real, helpful experience even at 9 PM on a Saturday",
      "Clean call summaries instead of vague voicemails",
    ],
    comparison: {
      title: "AI Receptionist vs. a traditional answering service",
      oursLabel: "Always-On Receptionist",
      theirsLabel: "Traditional answering service",
      rows: [
        {
          feature: "Cost per month",
          ours: "Flat predictable rate",
          theirs: "Per-minute, scales with volume",
        },
        {
          feature: "Books appointments",
          ours: "Yes, directly on your calendar",
          theirs: "Usually no, takes a message",
        },
        {
          feature: "Pre-qualifies buyers",
          ours: "Yes, asks your questions",
          theirs: "No, just records details",
        },
        {
          feature: "Available at 2 AM",
          ours: "Yes",
          theirs: "Sometimes, with surcharges",
        },
        {
          feature: "Sounds like your business",
          ours: "Custom greeting, your tone",
          theirs: "Generic call-center scripts",
        },
      ],
    },
    faqs: [
      {
        question: "Will my customers know they are talking to an AI?",
        answer:
          "We are honest about it when asked, and we script the greeting so the experience feels professional regardless. Most callers care that they got an answer at all — not whether the answer came from a human.",
      },
      {
        question: "Does this replace my front desk?",
        answer:
          "No. It backs up your front desk on missed calls, after hours, lunch breaks, and overflow. Your team handles what they want to handle and the AI catches the rest.",
      },
      {
        question: "Can it route emergency calls differently?",
        answer:
          "Yes. We define what an emergency sounds like for your business — water leak, lockout, dental pain — and the AI escalates those calls to a live person on your team immediately.",
      },
      {
        question: "What if the AI gets a question wrong?",
        answer:
          "Every call summary lands in Easy CRM. You can flag the call, we review the script weekly, and we tune answers as your business changes.",
      },
    ],
    includedInPackages: [
      "main-street-startup",
      "always-on-capture",
      "autonomous-sales-floor",
    ],
    naturalCompanions: [
      "24-7-web-concierge",
      "invisible-admin",
      "invisible-personal-assistant",
    ],
    industries: [
      "home-services-iowa",
      "professional-services-iowa",
      "medspas-and-clinics-iowa",
      "local-logistics-and-warehousing-iowa",
    ],
    primarySources: [
      {
        label: "BLS Occupational Outlook on receptionists",
        url: "https://www.bls.gov/ooh/office-and-administrative-support/receptionists.htm",
      },
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "invisible-admin",
    name: "The Invisible Admin",
    h1: "How do you keep your CRM and customers updated without admin work?",
    answer:
      "The Invisible Admin keeps your CRM in sync the second something happens. New leads, updated appointments, customer questions — the system writes them into your CRM, alerts your team on phone or email, and texts your customers their reminders without anyone touching a keyboard.",
    hookOneLiner:
      "Your CRM updates itself, your team gets notified, and your customers get reminders — automatically.",
    painPoints: [
      "Leads that come in through chat, calls, and forms never make it into the CRM the same way.",
      "Customers no-show because nobody texted them a reminder.",
      "Your team finds out about a new appointment when the customer arrives.",
    ],
    mechanism: [
      {
        name: "Connect your CRM",
        text: "We connect to your existing CRM (or our Easy CRM if you do not have one) and define exactly what gets written, where.",
      },
      {
        name: "Listen to every channel",
        text: "Web chat, phone, web form, calendar booking, and review request — every event gets normalized into a single contact record.",
      },
      {
        name: "Notify your team",
        text: "New leads and changes ping your team on phone or email in the format your team actually wants — not a flood of generic 'a thing happened' emails.",
      },
      {
        name: "Remind your customer",
        text: "Customers get appointment confirmations, day-before reminders, prep instructions, and follow-ups by text or email automatically.",
      },
    ],
    outcomes: [
      "Every lead in the CRM, structured and searchable",
      "Lower no-show rates from automated reminders",
      "Less Sunday-night admin catching up on the week",
    ],
    faqs: [
      {
        question: "Which CRMs do you support?",
        answer:
          "We connect to most modern CRMs (HubSpot, GoHighLevel, ServiceTitan, Jobber, Housecall Pro, Salesforce, Pipedrive, Keap, Monday) and to our own Easy CRM if you do not have one yet.",
      },
      {
        question: "Can I customize what reminders go out?",
        answer:
          "Yes. We tune timing, copy, and channel (text vs. email) per appointment type. Plumbing emergency does not get the same reminder as a cosmetic consult.",
      },
      {
        question: "What if the customer replies to a reminder?",
        answer:
          "Replies route to your inbox or to The Always-On Receptionist if they call back, and the conversation is logged on the contact record.",
      },
      {
        question: "Will this break if I switch CRMs later?",
        answer:
          "No. We rebuild the integration without changing the customer experience.",
      },
    ],
    includedInPackages: [
      "main-street-startup",
      "always-on-capture",
      "autonomous-sales-floor",
    ],
    naturalCompanions: [
      "always-on-receptionist",
      "invisible-personal-assistant",
      "easy-crm",
    ],
    industries: [
      "home-services-iowa",
      "professional-services-iowa",
      "medspas-and-clinics-iowa",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "invisible-personal-assistant",
    name: "The Invisible Personal Assistant",
    h1: "How do you fill your calendar with appointments without doing it yourself?",
    answer:
      "The Invisible Personal Assistant takes lead activity from chat, phone, forms, and outbound calls and turns it into appointments on your calendar of choice. It checks availability, respects your buffers and travel time, and only books slots you would actually take.",
    hookOneLiner:
      "An AI assistant that turns lead activity into actual appointments on your calendar.",
    painPoints: [
      "Back-and-forth scheduling emails kill momentum on hot leads.",
      "Double-bookings and travel-time problems eat the day.",
      "Calendars stay empty even when leads keep coming in.",
    ],
    mechanism: [
      {
        name: "Connect your calendar",
        text: "Google Calendar, Outlook, Calendly, Acuity, or your scheduling tool — we connect to what you already use.",
      },
      {
        name: "Define rules",
        text: "Buffers, travel-time, service durations, blackouts, and which appointment types go where on which days.",
      },
      {
        name: "Book from any source",
        text: "Web chat, phone calls, web form submissions, and outbound qualification all feed into one booking flow.",
      },
      {
        name: "Confirm and follow through",
        text: "Confirmation goes out by text or email, the appointment lands in your CRM, and reminders fire automatically.",
      },
    ],
    outcomes: [
      "A fuller calendar without manual scheduling",
      "Fewer scheduling errors and travel-time conflicts",
      "Faster booking on hot leads — measured in minutes, not days",
    ],
    faqs: [
      {
        question: "What calendars do you support?",
        answer:
          "Google Calendar, Outlook/Microsoft 365, Calendly, Acuity, Square Appointments, ServiceTitan, Jobber, Housecall Pro, and most major scheduling tools.",
      },
      {
        question: "Can different appointment types have different rules?",
        answer:
          "Yes. A 90-minute consult can require different buffers and locations than a 15-minute follow-up. We model that explicitly.",
      },
      {
        question: "What about travel time between job sites?",
        answer:
          "We add configurable buffers based on service area zones so the calendar does not book back-to-back jobs across town.",
      },
    ],
    includedInPackages: [
      "main-street-startup",
      "always-on-capture",
      "autonomous-sales-floor",
    ],
    naturalCompanions: [
      "24-7-web-concierge",
      "always-on-receptionist",
      "invisible-admin",
    ],
    industries: [
      "home-services-iowa",
      "medspas-and-clinics-iowa",
      "professional-services-iowa",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "easy-crm",
    name: "Easy CRM",
    h1: "What CRM should a small business use if they have never used one?",
    answer:
      "Easy CRM is the SceneShift web portal you already get with any package. It tracks every customer, every conversation across chat/phone/email, every appointment, and the revenue tied to each contact — without the setup pain of a full enterprise CRM.",
    hookOneLiner:
      "A complementary CRM that tracks customers, conversations, and revenue without setup pain.",
    painPoints: [
      "Customer details live across spreadsheets, sticky notes, and three different inboxes.",
      "Enterprise CRMs cost more than the leads they help close.",
      "Nobody has time to set up Salesforce.",
    ],
    mechanism: [
      {
        name: "Comes pre-loaded",
        text: "Easy CRM is included with every SceneShift package. There is no separate setup project.",
      },
      {
        name: "Single contact record",
        text: "Every chat, call, form fill, appointment, and review request shows up on one customer record.",
      },
      {
        name: "Revenue tracking",
        text: "Tag jobs and invoices to a contact and see which leads actually become paying customers.",
      },
      {
        name: "Search and filter",
        text: "Find every customer in a zip code, every appointment last week, every customer who has not been called in 90 days.",
      },
    ],
    outcomes: [
      "One source of truth for customer data",
      "Real visibility into which lead sources actually drive revenue",
      "No additional CRM subscription to pay for",
    ],
    faqs: [
      {
        question: "Do I have to use Easy CRM?",
        answer:
          "No. If you have HubSpot, GoHighLevel, ServiceTitan, Jobber, Housecall Pro, or another CRM you like, The Invisible Admin syncs into that one instead. Easy CRM is the default if you do not have a CRM yet.",
      },
      {
        question: "Is there an extra fee for Easy CRM?",
        answer:
          "No. It is bundled with every SceneShift package at no extra cost.",
      },
      {
        question: "Can I export my data later?",
        answer:
          "Yes. Your data is yours. Export to CSV anytime, including conversation history and revenue records.",
      },
    ],
    includedInPackages: [
      "main-street-startup",
      "always-on-capture",
      "autonomous-sales-floor",
    ],
    naturalCompanions: [
      "invisible-admin",
      "always-on-receptionist",
      "24-7-web-concierge",
    ],
    industries: [
      "home-services-iowa",
      "professional-services-iowa",
      "medspas-and-clinics-iowa",
      "niche-ecommerce-iowa",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "speed-to-lead-outbound",
    name: "Speed-to-Lead Outbound",
    h1: "How fast should you call back a website lead?",
    answer:
      "Within five minutes — and most small businesses miss that window by hours or days. Speed-to-Lead Outbound calls a new web-form submission inside one minute, qualifies the lead, answers their questions, and books the appointment while they are still on your website.",
    hookOneLiner:
      "An AI calls every new web lead within sixty seconds and books the appointment while they are still hot.",
    painPoints: [
      "Leads cool off in hours. Most small businesses respond in days.",
      "Hot buyers fill out three forms at once. The first call wins.",
      "After-hours form submissions often never get a callback at all.",
    ],
    mechanism: [
      {
        name: "Listen for new submissions",
        text: "We hook into your contact form, quote form, or landing page so a submission triggers a call instantly.",
      },
      {
        name: "Call within sixty seconds",
        text: "The Lead Qualification AI Agent dials the number on the form while the visitor is still on your site.",
      },
      {
        name: "Qualify the buyer",
        text: "The AI confirms what they need, when, and where — the same questions you would ask if you picked up.",
      },
      {
        name: "Book or hand off",
        text: "Qualified, ready-to-buy leads are booked directly. Complex situations get summarized and handed to your team while still warm.",
      },
    ],
    outcomes: [
      "First-call advantage on every web lead",
      "Higher show-rates because the booking happens during the same intent moment",
      "Real data on which traffic sources produce real buyers",
    ],
    comparison: {
      title: "Speed-to-Lead vs. manual callback",
      oursLabel: "Speed-to-Lead Outbound",
      theirsLabel: "Team callback the next day",
      rows: [
        {
          feature: "Time to first contact",
          ours: "Under 60 seconds",
          theirs: "4 to 24 hours",
        },
        {
          feature: "Books while intent is hot",
          ours: "Yes",
          theirs: "Rarely",
        },
        {
          feature: "Works after hours",
          ours: "Yes",
          theirs: "No",
        },
        {
          feature: "Costs per lead",
          ours: "Flat package price",
          theirs: "Hours of staff time",
        },
      ],
    },
    faqs: [
      {
        question: "Will customers be annoyed by an instant call?",
        answer:
          "The opposite. Studies of inbound lead behavior consistently show buyers prefer being contacted while their interest is still active.",
      },
      {
        question: "What if the lead does not answer?",
        answer:
          "We retry on a configurable cadence and follow up by text and email. Every attempt is logged on the contact record.",
      },
      {
        question: "Can it call from a local Iowa number?",
        answer:
          "Yes. We assign a local number so callers are more likely to pick up.",
      },
      {
        question: "Does this work with my existing forms?",
        answer:
          "Yes. We integrate with most form tools (Gravity Forms, WPForms, Webflow, Typeform, HubSpot, Calendly).",
      },
    ],
    includedInPackages: ["always-on-capture", "autonomous-sales-floor"],
    naturalCompanions: [
      "always-on-receptionist",
      "24-7-web-concierge",
      "autonomous-salesman",
    ],
    industries: [
      "home-services-iowa",
      "medspas-and-clinics-iowa",
      "professional-services-iowa",
    ],
    primarySources: [
      {
        label: "Harvard Business Review on lead response time",
        url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
      },
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "hands-off-reviews",
    name: "Hands-Off Reviews",
    h1: "How do you get more Google reviews without asking awkwardly?",
    answer:
      "Hands-Off Reviews calls or texts your customer after the job is done, asks how it went, and — if they say it went well — sends them a one-tap link to leave a Google review. The whole conversation runs without your team chasing it.",
    hookOneLiner:
      "An AI calls happy customers after the job and turns them into Google reviews.",
    painPoints: [
      "Asking for reviews feels awkward, so it does not happen consistently.",
      "Local SEO depends on review velocity, and competitors are pulling ahead.",
      "Customers say nice things in person but never type them on Google.",
    ],
    mechanism: [
      {
        name: "Trigger on completion",
        text: "When a job is marked complete in your CRM (or by a manual trigger), the review flow starts.",
      },
      {
        name: "Quick check-in",
        text: "The AI calls or texts and asks one question: how did it go.",
      },
      {
        name: "Route by sentiment",
        text: "Happy customers get a one-tap Google review link. Unhappy customers route to a private feedback path so you can fix the issue before it becomes a public review.",
      },
      {
        name: "Track every request",
        text: "Easy CRM logs which customers were asked, how they responded, and how many reviews you actually earned.",
      },
    ],
    outcomes: [
      "More 5-star Google reviews, faster",
      "Negative experiences caught and resolved privately first",
      "A real review-pipeline metric you can report on",
    ],
    faqs: [
      {
        question: "Is this against Google's review policy?",
        answer:
          "No. Google explicitly allows asking customers for reviews. What is not allowed is gating reviews — hiding the link from unhappy customers entirely. We route unhappy customers to a private feedback path that does NOT block them from leaving a public review if they want to.",
      },
      {
        question: "When does the review request go out?",
        answer:
          "We tune timing per industry. Some businesses get the best response within an hour of completion. Others do better the next day. We test and adjust.",
      },
      {
        question: "Does this work for Facebook reviews and the BBB too?",
        answer:
          "Yes. We can route happy customers to whichever review platform matters most for your business.",
      },
    ],
    includedInPackages: ["always-on-capture", "autonomous-sales-floor"],
    naturalCompanions: [
      "invisible-admin",
      "always-on-receptionist",
      "easy-crm",
    ],
    industries: [
      "home-services-iowa",
      "medspas-and-clinics-iowa",
      "professional-services-iowa",
    ],
    primarySources: [
      {
        label: "BrightLocal Local Consumer Review Survey",
        url: "https://www.brightlocal.com/research/local-consumer-review-survey/",
      },
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "autonomous-salesman",
    name: "The Autonomous Salesman",
    h1: "Can an AI agent run outbound sales calls for a small business?",
    answer:
      "Yes. Give The Autonomous Salesman a list of phone numbers and a few notes about who they are. The AI calls each one, qualifies, follows up across days and weeks if needed, and books the appointment when the prospect is ready — so your sales reps spend their day closing instead of dialing.",
    hookOneLiner:
      "An AI sales rep that works through your call list, follows up automatically, and books appointments.",
    painPoints: [
      "Expensive human reps spend most of the day leaving voicemails.",
      "Cold-list follow-up is inconsistent because nobody enjoys it.",
      "Hot prospects fall out of the pipeline because the eighth touch never happens.",
    ],
    mechanism: [
      {
        name: "Upload the list",
        text: "Give us a CSV of phone numbers with notes — past customers, expired warranties, dormant accounts, cold prospects.",
      },
      {
        name: "Define the offer",
        text: "We script the qualification flow and the booking outcome together with you.",
      },
      {
        name: "Work the list autonomously",
        text: "The AI calls, leaves voicemails, retries on a smart cadence, and follows up by text and email until the prospect either books or opts out.",
      },
      {
        name: "Hand off the closed pipeline",
        text: "Booked appointments land on your calendar. Qualified-but-not-yet-ready prospects show up in Easy CRM with full call history.",
      },
    ],
    outcomes: [
      "Sales reps spend their hours on closing, not dialing",
      "Dormant lists get worked instead of decaying",
      "A predictable pipeline of pre-qualified appointments",
    ],
    faqs: [
      {
        question: "Will it sound like a robot?",
        answer:
          "No. We use modern conversational AI that handles interruptions, accents, and natural speech patterns. Most prospects will not realize they are talking to AI unless they ask.",
      },
      {
        question: "Is this compliant with TCPA / DNC rules?",
        answer:
          "We follow TCPA and Do Not Call requirements, scrub against the National DNC registry, and only call numbers you have permission to call.",
      },
      {
        question: "How is this different from Speed-to-Lead Outbound?",
        answer:
          "Speed-to-Lead reacts to inbound web form submissions in real time. The Autonomous Salesman works a list of contacts you already have — past customers, leads from a trade show, expired accounts.",
      },
    ],
    includedInPackages: ["autonomous-sales-floor"],
    naturalCompanions: [
      "speed-to-lead-outbound",
      "invisible-admin",
      "easy-crm",
    ],
    industries: [
      "professional-services-iowa",
      "local-logistics-and-warehousing-iowa",
      "niche-ecommerce-iowa",
    ],
    lastReviewed: "2026-05-04",
  },
] as const;

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getServiceBySlug(slug: string): ServiceRecord | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
