export const seoContentClusters = [
  {
    cluster: "Lead response automation",
    primaryIntent: "Find a faster way to answer missed calls and web leads",
    targetQueries: [
      "missed call text back for small business",
      "speed to lead automation",
      "AI lead response system",
      "automated follow up for local businesses",
    ],
    recommendedPages: [
      "/services/missed-call-text-back",
      "/services/speed-to-lead",
      "/blog/why-speed-to-lead-matters-for-local-business",
    ],
    answerFirstQuestions: [
      "What is lead response automation?",
      "How fast should a small business respond to a new lead?",
      "Does missed-call text back help save local service leads?",
    ],
  },
  {
    cluster: "CRM and unified inbox workflows",
    primaryIntent: "Organize texts, forms, DMs, and customer conversations",
    targetQueries: [
      "CRM workflow design for small business",
      "unified inbox for local business",
      "small business customer communication automation",
      "AI CRM setup Iowa",
    ],
    recommendedPages: [
      "/services/crm-workflow-design",
      "/services/unified-inbox",
      "/blog/crm-follow-up-checklist",
    ],
    answerFirstQuestions: [
      "What should a small business CRM automate first?",
      "How does a unified inbox prevent dropped leads?",
      "Which customer messages belong in one shared inbox?",
    ],
  },
  {
    cluster: "AI reception and scheduling",
    primaryIntent: "Capture calls and bookings after hours or during busy work",
    targetQueries: [
      "AI receptionist for small business",
      "AI voice receptionist Iowa",
      "24/7 webchat for local service business",
      "automated appointment booking for small business",
    ],
    recommendedPages: [
      "/services/ai-receptionist",
      "/services/ai-webchat",
      "/blog/ai-receptionist-vs-answering-service",
    ],
    answerFirstQuestions: [
      "What can an AI receptionist do for a small business?",
      "When should a business use AI voice instead of voicemail?",
      "How does AI scheduling reduce admin work?",
    ],
  },
  {
    cluster: "Review generation and local trust",
    primaryIntent: "Earn more Google reviews and improve local credibility",
    targetQueries: [
      "automated Google review requests",
      "review generation for local business",
      "how to get more Google reviews Iowa business",
      "customer feedback automation",
    ],
    recommendedPages: [
      "/services/review-generation",
      "/blog/google-review-request-template",
      "/blog/customer-feedback-automation",
    ],
    answerFirstQuestions: [
      "What is the best time to ask for a Google review?",
      "Can review requests be automated?",
      "How do reviews affect local business SEO?",
    ],
  },
];

export const aioWritingPattern = {
  sectionStructure: [
    "Use a question-based H2.",
    "Answer directly in 40 to 60 words.",
    "Follow with bullets, examples, and proof.",
    "Link to the next deeper page in the same cluster.",
    "Keep schema values aligned with visible page content.",
  ],
  proofAssets: [
    "Before-and-after workflow diagrams",
    "Response-time benchmarks",
    "Screenshots of cleaned-up lead flow",
    "Customer question logs converted into FAQs",
    "Case studies with time saved, revenue recovered, or leads captured",
  ],
};

export const seoMeasurementPlan = {
  searchConsoles: ["Google Search Console", "Bing Webmaster Tools"],
  crawlChecks: [
    "Indexed canonical URLs",
    "Excluded duplicate or template routes",
    "Sitemap fetch status",
    "Robots.txt availability",
    "Core Web Vitals and mobile usability",
  ],
  conversionEvents: [
    "contact_form_view",
    "contact_form_submit",
    "phone_click",
    "email_click",
    "pricing_book_call_click",
    "hero_book_call_click",
  ],
  monthlyReview:
    "Review query impressions, AI citations, indexed pages, crawl errors, and lead conversion paths; refresh pages where impressions grow without clicks.",
};
