import type { CrosshairRecord } from "@/types/seo";

/**
 * Service x Industry crosshair pages — the highest commercial-intent pages
 * in the network. These match queries like "answering service for plumbers"
 * and "speed to lead software for medspas" that buyers actually type.
 *
 * `slug` is the sub-path under the parent service (e.g. "for-hvac-companies"
 * lives at /services/always-on-receptionist/for-hvac-companies).
 *
 * Only build crosshairs that match real commercial intent. Do not generate
 * the full 8x5 cross-product.
 */
export const CROSSHAIRS: readonly CrosshairRecord[] = [
  {
    slug: "for-hvac-companies",
    serviceSlug: "always-on-receptionist",
    industrySlug: "home-services-iowa",
    h1: "What is the best AI answering service for HVAC companies?",
    answer:
      "An AI answering service for HVAC companies catches missed calls during furnace season, qualifies the homeowner, escalates true emergencies (no heat in winter, gas smell) to a live tech, and books routine service onto your dispatch software — so a $5,000 system replacement does not go to whichever competitor happened to pick up first.",
    industryPains: [
      "Furnace-season call volume spikes overwhelm office staff and crews on rooftops cannot pick up.",
      "Voicemail at 9 PM in January means the homeowner calls the next HVAC company on the list — with cash in hand.",
      "Dispatch chaos when emergency and routine calls collide.",
    ],
    uniqueAngle:
      "We script the AI to ask the same emergency-screening questions a senior dispatcher would — last temperature reading, furnace age, any odd smells, kids or elderly in the house — so emergencies escalate instantly and routine quote calls get booked normally.",
    faqs: [
      {
        question:
          "Will the AI know not to keep an emergency on hold for a quote?",
        answer:
          "Yes. We define your emergency keywords (no heat, water leak from boiler, gas smell, electrical sparks) and those calls bypass the qualification flow entirely and ring a tech directly.",
      },
      {
        question: "Does this integrate with ServiceTitan or Housecall Pro?",
        answer:
          "Yes. Appointments and customer records sync into your existing dispatch software so the field crew sees the same record the AI took.",
      },
      {
        question: "How does this handle storm-event call surges?",
        answer:
          "The AI scales to handle every concurrent call. There is no busy signal during a derecho or polar vortex — every caller gets answered.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/always-on-receptionist/for-plumbers",
      "/services/always-on-receptionist/for-roofers",
      "/services/speed-to-lead-outbound/for-hvac-companies",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "for-plumbers",
    serviceSlug: "always-on-receptionist",
    industrySlug: "home-services-iowa",
    h1: "Do plumbers need an AI answering service?",
    answer:
      "Yes — most plumbing emergencies happen at the worst possible time (Friday night, holiday morning, 3 AM Tuesday) and homeowners with a flooding basement call until someone picks up. An AI answering service catches every one of those calls, escalates real emergencies to your on-call plumber, and books routine work on your dispatch software.",
    industryPains: [
      "After-hours flood calls go to whoever picks up first — and you are not it.",
      "Daytime calls get missed because the licensed plumber is under a sink.",
      "Voicemails are vague: you cannot tell a clogged sink from a burst pipe until you call back.",
    ],
    uniqueAngle:
      "Every call summary captures the address, the issue, the urgency, and any prior service history — so when your tech rolls the truck they already know what to bring.",
    faqs: [
      {
        question: "Can the AI dispatch an emergency truck?",
        answer:
          "It escalates the call to your on-call plumber's mobile within seconds and texts a structured summary so the plumber can decide whether to roll out — without playing voicemail roulette.",
      },
      {
        question: "How is this different from a traditional answering service?",
        answer:
          "Traditional answering services take messages. The AI books appointments directly on your calendar, qualifies the call, and only wakes you up for actual emergencies.",
      },
      {
        question: "Will it know our service area?",
        answer:
          "Yes. We define your service zip codes and the AI politely declines or refers calls outside your radius.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/always-on-receptionist/for-hvac-companies",
      "/services/always-on-receptionist/for-roofers",
      "/services/speed-to-lead-outbound/for-hvac-companies",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "for-roofers",
    serviceSlug: "always-on-receptionist",
    industrySlug: "home-services-iowa",
    h1: "How should a roofing company handle storm-season call volume?",
    answer:
      "After a hailstorm or windstorm, roofing companies in Iowa get a year of phone calls in a week. An AI answering service handles every call concurrently, captures the address and damage description, schedules the inspection, and routes urgent tarp-call situations to a live crew — without busy signals or voicemail backlog.",
    industryPains: [
      "Storm-event call volume melts office staff for two weeks straight.",
      "Insurance-adjuster scheduling chaos when you have 200 inspections to book.",
      "Lead-stealing competitors call your missed callers an hour after the voicemail.",
    ],
    uniqueAngle:
      "We pre-script the storm-response intake — when did damage occur, what does the homeowner see, did they file a claim, who is the carrier — so by the time your sales rep calls back, the file is already populated.",
    faqs: [
      {
        question: "Can the AI handle insurance scheduling?",
        answer:
          "It captures the carrier, claim number, and adjuster contact — and books the inspection slot. Your team handles adjuster coordination from a complete file rather than a vague voicemail.",
      },
      {
        question: "What if the call is for a leak right now?",
        answer:
          "Active leaks escalate to a live person on your team while routine inspection requests are scheduled normally.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/always-on-receptionist/for-hvac-companies",
      "/services/always-on-receptionist/for-plumbers",
      "/services/hands-off-reviews/for-home-services",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "for-medspas",
    serviceSlug: "always-on-receptionist",
    industrySlug: "medspas-and-clinics-iowa",
    h1: "Should a MedSpa have an AI receptionist for after-hours consults?",
    answer:
      "Yes. MedSpa consultation requests pile up on Instagram and missed calls every weekend. An AI receptionist answers the line in your clinic's voice, screens for fit (procedure, age, contraindications), and books the consult on your booking software — so a Monday-morning inbox is not full of leads who already booked elsewhere.",
    industryPains: [
      "Weekend and after-hours consult requests sit until Monday — by then the lead already booked at a competitor.",
      "Front-desk staff cannot answer the phone while doing patient intake.",
      "Pre-treatment screening questions get inconsistent results when handled ad hoc.",
    ],
    uniqueAngle:
      "Pre-treatment qualification — pregnancy, blood thinners, past procedures, contraindications — gets asked consistently every time, so the consult slot only gets booked when the patient actually qualifies.",
    faqs: [
      {
        question: "Will it handle questions about specific procedures?",
        answer:
          "Yes — within the FAQ library you approve. Specific medical advice is always routed to a clinician.",
      },
      {
        question: "Can it integrate with Boulevard or Aesthetic Record?",
        answer:
          "Yes. Bookings sync into your existing platform and treatment notes stay where they belong.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/speed-to-lead-outbound/for-medspas",
      "/services/24-7-web-concierge/for-medspas",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "for-cpa-firms",
    serviceSlug: "always-on-receptionist",
    industrySlug: "professional-services-iowa",
    h1: "Can an AI receptionist handle CPA firm intake during tax season?",
    answer:
      "Yes — and tax season is exactly when it pays for itself. The AI handles every prospect call concurrently, captures entity type, services needed, prior preparer, and rough revenue, and books the discovery call only after the prospect qualifies — so your senior CPAs spend their hours on returns, not screening calls.",
    industryPains: [
      "April-15 phone volume swallows the office.",
      "Junior staff get pulled off billable work to screen prospect calls.",
      "Discovery calls happen with prospects you would have disqualified upfront.",
    ],
    uniqueAngle:
      "Conflict-check questions, entity type, and rough scope all get captured upfront — so when a partner takes the call, it is a real introduction, not a screening session.",
    faqs: [
      {
        question: "Will it sound professional enough for our brand?",
        answer:
          "Yes. We script the greeting and tone in writing with you before going live, and we adjust based on real recorded calls.",
      },
      {
        question: "How do you handle confidential information?",
        answer:
          "We do not collect SSNs, account numbers, or financial detail in the intake call — those get gathered in a secure portal after the discovery call books.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/24-7-web-concierge/for-cpa-firms",
      "/services/always-on-receptionist/for-medspas",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "for-hvac-companies",
    serviceSlug: "speed-to-lead-outbound",
    industrySlug: "home-services-iowa",
    h1: "How fast should HVAC companies call back a website lead?",
    answer:
      "Inside one minute. Homeowners shopping for furnace or AC replacement frequently fill out 3-4 contractor forms in a single sitting, and the first call back almost always wins the appointment. Speed-to-Lead Outbound auto-dials the lead within sixty seconds and books the in-home estimate before they finish reading the second tab.",
    industryPains: [
      "Quote forms submitted at 7 PM go unanswered until the next business day.",
      "Homeowners contact 3-4 HVAC companies and hire whoever calls back first.",
      "Manual call-back queues drift to hours or days during peak season.",
    ],
    uniqueAngle:
      "Tied to the dispatch calendar — if a slot is open tomorrow afternoon, the AI books it during the same call, while the homeowner is still on your website looking at financing.",
    faqs: [
      {
        question: "Will leads be annoyed by an instant call?",
        answer:
          "No. People who just hit submit on a quote form expect contact — that is why they hit submit. The data consistently shows higher conversion when you call within minutes versus hours.",
      },
      {
        question: "What if my installers are booked solid for the week?",
        answer:
          "The AI books the next available slot and the homeowner's deposit holds it. You never lose the lead to lack of immediate availability.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/always-on-receptionist/for-hvac-companies",
      "/services/speed-to-lead-outbound/for-roofers",
      "/services/speed-to-lead-outbound/for-medspas",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "for-medspas",
    serviceSlug: "speed-to-lead-outbound",
    industrySlug: "medspas-and-clinics-iowa",
    h1: "How do MedSpas convert website consult requests into booked appointments?",
    answer:
      "Speed wins. A consult request submitted at 9 PM that sits until Monday is mostly dead — the patient has scrolled five other clinic websites by then. Speed-to-Lead Outbound calls within sixty seconds, screens for procedure fit, and books the in-clinic consult while the patient is still on your booking page.",
    industryPains: [
      "Weekend consult forms cool off into Monday-morning ghosts.",
      "Patients shop multiple clinics in one Instagram session.",
      "Booking happens at the moment of intent — or it does not happen.",
    ],
    uniqueAngle:
      "The screening flow asks the questions a senior aesthetician would ask before time gets reserved — so consult slots fill with qualified patients, not lookie-loos.",
    faqs: [
      {
        question: "Will calling at 9 PM upset patients?",
        answer:
          "We respect quiet hours. The AI calls during the patient's reasonable contact window — usually inside the same evening if it is before 9 PM, otherwise first thing the next morning.",
      },
      {
        question: "What if the patient wants to think about it?",
        answer:
          "The AI sends pre-treatment information and a one-tap booking link, then follows up by text on a configurable cadence.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/always-on-receptionist/for-medspas",
      "/services/24-7-web-concierge/for-medspas",
      "/services/speed-to-lead-outbound/for-hvac-companies",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "for-roofers",
    serviceSlug: "speed-to-lead-outbound",
    industrySlug: "home-services-iowa",
    h1: "How do roofing companies win storm-event leads before competitors?",
    answer:
      "Within minutes of a homeowner submitting a damage report, Speed-to-Lead Outbound calls them, captures the carrier and claim number, and books the inspection — usually before the storm-chaser door knockers have even arrived in the neighborhood.",
    industryPains: [
      "Door-knockers and lead-aggregators race you to every damaged roof.",
      "Hailstorm leads come in faster than your office can call them back.",
      "By the time you call back, the homeowner has signed with a competitor.",
    ],
    uniqueAngle:
      "Storm-season call cadence built in — the AI scales to handle 100 concurrent inbound calls and follows up with text-and-email sequences for any homeowner who could not pick up the first time.",
    faqs: [
      {
        question: "Can it work with my insurance-adjuster scheduling?",
        answer:
          "Yes. The AI captures carrier, claim number, and adjuster contact — your team handles the coordination from a complete file.",
      },
      {
        question: "How does this scale during a major storm event?",
        answer:
          "There is no human bottleneck. Volume spikes that would melt a 5-person office get handled the same way as a normal Tuesday.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/always-on-receptionist/for-roofers",
      "/services/speed-to-lead-outbound/for-hvac-companies",
      "/services/hands-off-reviews/for-home-services",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "for-medspas",
    serviceSlug: "24-7-web-concierge",
    industrySlug: "medspas-and-clinics-iowa",
    h1: "Should a MedSpa website have an AI chat for after-hours questions?",
    answer:
      "Yes. Most MedSpa consult research happens between 9 PM and midnight on a phone, and visitors who would never call a clinic are happy to chat. An AI Web Concierge answers procedure questions, captures contact details, and books the consult on your booking software while the visitor is still on the page.",
    industryPains: [
      "Late-night Instagram scrollers leave your site without booking because nobody is around to answer.",
      "Patients have specific procedure questions and feel awkward calling for them.",
      "Form-only contact pages convert at a fraction of what they could.",
    ],
    uniqueAngle:
      "Procedure FAQs answered in your clinic's voice — recovery times, candidacy basics, pricing ranges — without committing to medical advice that should come from a clinician.",
    faqs: [
      {
        question: "Will the chat give medical advice?",
        answer:
          "No. We script the chat to answer general procedure information and explicitly route any clinical question to a consult with a licensed provider.",
      },
      {
        question: "Can it book directly to my booking software?",
        answer:
          "Yes. Boulevard, Aesthetic Record, Mindbody, Square Appointments, and most modern aesthetics platforms.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/always-on-receptionist/for-medspas",
      "/services/speed-to-lead-outbound/for-medspas",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "for-cpa-firms",
    serviceSlug: "24-7-web-concierge",
    industrySlug: "professional-services-iowa",
    h1: "Should a CPA firm have an AI chat on its website during tax season?",
    answer:
      "Yes. Tax-season prospects research at 11 PM, and the firm whose website actually answers their questions wins the discovery call. An AI Web Concierge fields entity-type and services questions, captures contact details, and books the discovery call directly — without partners needing to be online.",
    industryPains: [
      "Tax-season prospects research after the office closes.",
      "Forms-only contact pages lose leads who want a quick answer first.",
      "Partners cannot be on chat all day — and should not be.",
    ],
    uniqueAngle:
      "The chat collects the entity type, current preparer, and services needed before the discovery call books — so partners walk into a real introduction, not a screening session.",
    faqs: [
      {
        question: "Will it answer specific tax questions?",
        answer:
          "No — and intentionally so. Tax advice is licensed work. The chat answers process and engagement questions ('what does your discovery call look like') and routes specific advice to a CPA.",
      },
      {
        question: "Can it pre-screen for fit?",
        answer:
          "Yes. Entity type, services needed, rough revenue range, and prior preparer all get captured before the discovery call books.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/always-on-receptionist/for-cpa-firms",
      "/services/24-7-web-concierge/for-medspas",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "for-home-services",
    serviceSlug: "hands-off-reviews",
    industrySlug: "home-services-iowa",
    h1: "How do home-service businesses get more 5-star Google reviews?",
    answer:
      "Ask every customer, every time — automatically. Hands-Off Reviews calls or texts the customer after the job is marked complete in your CRM, asks how it went, and routes happy customers to a one-tap Google review link while routing unhappy customers to a private feedback path so problems can be fixed before they show up publicly.",
    industryPains: [
      "Asking for reviews feels awkward, so it gets done unevenly.",
      "Local-pack ranking depends on review velocity, and competitors are pulling ahead.",
      "Customers say great things in person but never type them on Google.",
    ],
    uniqueAngle:
      "Triggered by job completion in your dispatch software (ServiceTitan, Jobber, Housecall Pro) — so the request goes out at the optimal post-completion moment, not days later when memory has faded.",
    faqs: [
      {
        question: "Is this against Google's review policy?",
        answer:
          "No. Asking customers for reviews is explicitly allowed. What is not allowed is gating — preventing unhappy customers from leaving a public review. Our private-feedback path does not block the public review option for anyone.",
      },
      {
        question: "How many extra reviews can we expect per month?",
        answer:
          "It depends on how many jobs you complete per month. A typical 5-truck HVAC company sees a 5-10x increase in monthly review volume.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/always-on-receptionist/for-hvac-companies",
      "/services/always-on-receptionist/for-roofers",
      "/services/speed-to-lead-outbound/for-roofers",
    ],
    lastReviewed: "2026-05-04",
  },
  {
    slug: "for-manufacturing",
    serviceSlug: "autonomous-salesman",
    industrySlug: "local-logistics-and-warehousing-iowa",
    h1: "Can an AI sales agent run outbound for an Iowa manufacturer?",
    answer:
      "Yes. An AI sales agent works through prospect lists at scale — past customers, expired contracts, dormant accounts, and cold prospects from trade shows — and books qualified appointments while your human reps spend their hours on the appointments that already booked.",
    industryPains: [
      "Industrial sales reps spend the day leaving voicemails on dormant accounts.",
      "Trade-show lead lists go untouched until the next quarter.",
      "Reorder reminders for past customers fall through the cracks.",
    ],
    uniqueAngle:
      "Built for long sales cycles — the AI follows up across days and weeks with text and email mixed into the call cadence, so the eighth touch (the one that closes) actually happens.",
    faqs: [
      {
        question: "Will this sound like a robot calling our buyers?",
        answer:
          "No. Modern conversational AI handles industrial-buyer conversations without the give-away robotic cadence. Most prospects do not realize they are talking to AI unless they ask directly.",
      },
      {
        question: "Is this TCPA-compliant for B2B calling?",
        answer:
          "Yes. We follow TCPA and only call numbers you have a legitimate business basis to contact, with proper consent management.",
      },
    ],
    siblingCrosshairFullPaths: [
      "/services/speed-to-lead-outbound/for-hvac-companies",
      "/services/always-on-receptionist/for-cpa-firms",
    ],
    lastReviewed: "2026-05-04",
  },
] as const;

/** Returns the canonical full path for a crosshair (e.g. "/services/foo/for-bar"). */
export function crosshairFullPath(c: CrosshairRecord): string {
  return `/services/${c.serviceSlug}/${c.slug}`;
}

export function getCrosshairsForService(
  serviceSlug: string,
): readonly CrosshairRecord[] {
  return CROSSHAIRS.filter((c) => c.serviceSlug === serviceSlug);
}

export function getCrosshairsForIndustry(
  industrySlug: string,
): readonly CrosshairRecord[] {
  return CROSSHAIRS.filter((c) => c.industrySlug === industrySlug);
}

export function getCrosshair(
  serviceSlug: string,
  slug: string,
): CrosshairRecord | undefined {
  return CROSSHAIRS.find(
    (c) => c.serviceSlug === serviceSlug && c.slug === slug,
  );
}
