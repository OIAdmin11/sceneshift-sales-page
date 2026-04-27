import { Link } from "react-router-dom";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { trackConversionEvent } from "@/utils/analytics";

const pricedOfferCards = [
  {
    id: "lead-saver-engine",
    cardClassName: "price-card3",
    title: 'The "Lead Saver" Engine',
    subtitle:
      "Perfect for businesses tired of losing deals to the guy down the street just because they were on the other line.",
    features: [
      "Instant Missed-Call Text Back: the second you miss a call, our system texts them back so you save the lead instantly.",
      'The "Command Center" Unified Inbox: Facebook messages, Instagram direct messages, text messages, webchat, and Google Business chats in one single screen.',
      "Auto-Review Generation: automatically text happy customers a 1-click link to leave a 5-star Google review when a job is marked done.",
    ],
    priceHeadline: "$299",
    priceDetailLines: ["/month", "+ $499 one-time setup"],
    buttonClassName: "ibt-btn ibt-btn-outline",
  },
  {
    id: "always-on-capture",
    cardClassName: "price-card3 v2",
    badge: "Most Popular",
    title: "Always-On Capture",
    subtitle:
      "Perfect for growing businesses overwhelmed by inbound calls, basic scheduling, and repetitive questions.",
    features: [
      "No Sleep Receptionist: inbound AI voice intercepts missed calls, pre-qualifies callers, answers common questions, and books appointments.",
      "24/7 Web Concierge: an intelligent webchat agent captures leads and schedules bookings while you sleep.",
      "The Invisible Admin: automated text and email reminders for confirmations, prep, nudges, and follow-ups.",
      "Intelligent Customer System Sync: every conversation writes directly to the tools you already use with complete context.",
    ],
    priceHeadline: "$749",
    priceDetailLines: ["/month", "+ $999 one-time setup"],
    buttonClassName: "ibt-btn ibt-btn-dark",
  },
  {
    id: "autonomous-sales-floor",
    cardClassName: "price-card3 v3",
    title: "The Autonomous Sales Floor",
    subtitle:
      "Perfect for high-volume operations that need aggressive speed-to-lead and continuous customer feedback without adding expensive payroll.",
    features: [
      "Everything in the Always-On Capture Package, plus outbound speed-to-lead and automated feedback loops.",
      "Speed-to-Lead Outbound Engine: AI automatically dials fresh leads within about 60 seconds of a form submission.",
      "The Surveyor: AI feedback and survey calls capture real customer insight directly in your customer system.",
      "Full-Funnel Leverage: orchestrated inbound and outbound intelligence inside the software your team already chose.",
    ],
    priceHeadline: "$1,499",
    priceDetailLines: ["/month", "+ $2,999 one-time setup"],
    buttonClassName: "ibt-btn ibt-btn-outline",
  },
];

const customOfferCard = {
  id: "chief-ai-officers",
  cardClassName: "price-card3 v2 price-card3--no-tab",
  title: "Chief AI Officers",
  subtitle:
    "Perfect for enterprise, high-margin, or complex businesses needing custom AI automation tailored to the way their team actually works.",
  features: [
    "Bespoke AI & Tooling: custom workflows and complex handoffs built to match your exact day-to-day process.",
    "AI-Optimized Conversion Sites: fast, search-friendly websites built to feed your AI and help prospects find who to call.",
    "On-Demand Priority Support: skip the queue for fixes, tuning, or the next automation you need shipped.",
    "Your Automation Roadmap: a strategic blueprint for what to automate next so you can scale revenue without scaling payroll.",
  ],
  priceHeadline: "Custom",
  priceDetailLines: [
    "scope & pricing",
    "Requires discovery call, written terms, and a build plan",
  ],
  buttonClassName: "ibt-btn ibt-btn-dark",
};

export default function PricingSec6() {
  return (
    <section className="pricing-sec6 ibt-section-gap">
      <div className="container">
        <div className="sec-title white">
          <SubTitleWrapper>services</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Stop Bleeding Leads. Start Scaling Effortlessly.
          </TitleSplitWrapper>
          <p>
            Don&apos;t lose another $5,000 job because you were too busy to
            answer the phone. Choose the automated growth engine that fits your
            business, and let our AI do the heavy lifting.
          </p>
        </div>
        <div className="row g-4">
          {pricedOfferCards.map((plan) => (
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
                  <Link
                    to="/contact"
                    className={plan.buttonClassName}
                    onClick={() =>
                      trackConversionEvent("pricing_book_call_click", {
                        plan: plan.id,
                      })
                    }
                  >
                      <span>Book a call</span>
                      <i className="icon-arrow-top" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-4 mt-4">
          <div className="col-12 d-flex">
            <div className="price-content3 price-content3--solo w-100">
              <div className={customOfferCard.cardClassName}>
                <div className="price-heade3">
                  <h4 className="title">{customOfferCard.title}</h4>
                  <span>{customOfferCard.subtitle}</span>
                </div>
                <ul className="price-item2">
                  {customOfferCard.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="price-item-price3">
                  <h4 className="price">{customOfferCard.priceHeadline}</h4>
                  <div className="price-detail-sub">
                    {customOfferCard.priceDetailLines.map((line) => (
                      <span key={line} className="price-detail-line">
                        {line}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className={customOfferCard.buttonClassName}
                    onClick={() =>
                      trackConversionEvent("pricing_book_call_click", {
                        plan: customOfferCard.id,
                      })
                    }
                  >
                    <span>Book a call</span>
                    <i className="icon-arrow-top" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
