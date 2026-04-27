import { Link } from "react-router-dom";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const offerCards = [
  {
    id: "always-on-capture",
    cardClassName: "price-card3",
    title: "Always-On Capture",
    subtitle:
      "Inbound AI on phone and web, with intelligent CRM structure and practical analysis so you see what is converting—integrated into the calendars, CRM, and messaging tools you already prefer.",
    features: [
      "No Sleep Receptionist—inbound AI phone: intercept missed volume, pre-qualify on your rules, FAQs, book appointments; writes to your preferred calendar and CRM with usable context",
      "24/7 Web Concierge—AI webchat on your site: instant FAQs, capture, and booking; feeds the same CRM with reporting and light analysis so inbound is not a black box",
      "The Invisible Admin—automated text and email reminders on your rules (confirmations, prep, nudges, follow-ups), sent through your preferred SMS and email tools and logged to CRM",
    ],
    priceHeadline: "$749",
    priceDetailLines: ["/month", "+ $999 one-time setup"],
    buttonClassName: "ibt-btn ibt-btn-outline",
  },
  {
    id: "autonomous-sales-floor",
    cardClassName: "price-card3 v2",
    badge: "Popular",
    title: "The Autonomous Sales Floor",
    subtitle:
      "Everything in Always-On Capture—phone, webchat, intelligent CRM, analysis, and automated reminders—plus speed-to-lead outbound and The Surveyor, orchestrated through your preferred calendars, CRM, and messaging stack.",
    features: [
      "Speed-to-Lead Outbound Engine—automation triggers an outbound AI call in about sixty seconds after a form hits your site; outcomes, notes, and next steps land in your CRM and the same reminder flows as inbound",
      "The Surveyor—AI feedback, follow-up, and survey calls with responses captured in your CRM and reports—not a parallel list your team retypes",
      "Full-funnel leverage: inbound and outbound, CRM intelligence, analysis, text and email reminders, and client listening—integrated into the software your team already chose, not a separate stack",
    ],
    priceHeadline: "$1,499",
    priceDetailLines: ["/month", "+ $2,999 one-time setup"],
    buttonClassName: "ibt-btn ibt-btn-dark",
  },
  {
    id: "chief-ai-officers",
    cardClassName: "price-card3 v3",
    title: "Chief AI Officers",
    subtitle:
      "Your custom AI engineers—AI you can afford—with AI-Optimized Conversion sites, custom Zapier and n8n tooling for your business, on-demand priority support, and a roadmap for what to automate next.",
    features: [
      "AI-Optimized Conversion—fast, SEO-first site that feeds your AI; insight on what competitors publish; show up when prospects ask an AI who to call",
      "Bespoke AI plus custom Zapier and n8n workflows and tooling so automations and handoffs match how your team works, with integrations into the systems you already run",
      "On-demand priority support when you need fixes, tuning, or the next automation shipped without waiting in a general queue",
      "Custom scope and pricing: discovery call, written terms, and build plan before engineering starts",
    ],
    priceHeadline: "Custom",
    priceDetailLines: ["scope & pricing"],
    buttonClassName: "ibt-btn ibt-btn-outline",
  },
];

export default function PricingSec6() {
  return (
    <section className="pricing-sec6 ibt-section-gap">
      <div className="container">
        <div className="sec-title white">
          <SubTitleWrapper>services</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Three packages to fit your growth stage
          </TitleSplitWrapper>
        </div>
        <div className="row g-4">
          {offerCards.map((plan) => (
            <div key={plan.id} className="col-xl-4 col-lg-6 col-md-6 d-flex">
              <div className="price-content3 price-content3--solo w-100">
                <div className={plan.cardClassName}>
                  {plan.badge ? (
                    <span className="Popular">{plan.badge}</span>
                  ) : null}
                  <div className="price-heade3">
                    <h4 className="title">{plan.title}</h4>
                    <span>{plan.subtitle}</span>
                  </div>
                  <ul className="price-item2">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="price-item-price3">
                    <h4 className="price">{plan.priceHeadline}</h4>
                    <div className="price-detail-sub">
                      {plan.priceDetailLines.map((line) => (
                        <span key={line} className="price-detail-line">
                          {line}
                        </span>
                      ))}
                    </div>
                    <Link to="/contact" className={plan.buttonClassName}>
                      <span>Book a call</span>
                      <i className="icon-arrow-top" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
