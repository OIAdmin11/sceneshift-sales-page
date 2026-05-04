import { Link } from "react-router-dom";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { trackConversionEvent } from "@/utils/analytics";

const pricedOfferCards = [
  {
    id: "main-street-startup",
    cardClassName: "price-card3",
    title: "The Main Street Startup",
    subtitle:
      "The starter AI front office for small businesses that need every web chat, call, appointment, and customer update handled without extra payroll.",
    features: [
      "24/7 Web Concierge: AI webchat on your current site answers FAQs, captures contact info, and helps set appointments.",
      "The Always on Receptionist: inbound AI phone support intercepts missed calls, pre-qualifies buyers, answers FAQs, and books appointments.",
      "The Invisible Admin: CRM updates, phone/email alerts, appointment reminders, and prep details are sent automatically.",
      "The Invisible Personal Assistant: our AI agent fills your calendar with appointments on your calendar of choice.",
      "Easy CRM: a complementary web portal to track customers and revenue with ease.",
    ],
    priceHeadline: "$299",
    priceDetailLines: ["/month", "+ $500 one-time setup"],
    buttonClassName: "ibt-btn ibt-btn-outline",
  },
  {
    id: "always-on-capture",
    cardClassName: "price-card3 v2",
    badge: "Most Popular",
    title: "Always on Capture",
    subtitle:
      "Adds instant outbound follow-up and automated review collection to everything in The Main Street Startup package.",
    features: [
      "All services in Package 1: web concierge, always-on receptionist, invisible admin, personal assistant, and Easy CRM.",
      "Speed-to-Lead Outbound: when a customer fills out a website form, the Lead Qualification AI Agent immediately calls while they are still hot.",
      "Hands-Off Reviews: after service completion, an AI agent calls your client and captures an explicit review.",
    ],
    priceHeadline: "$599",
    priceDetailLines: ["/month", "+ $1,000 one-time setup"],
    buttonClassName: "ibt-btn ibt-btn-dark",
  },
  {
    id: "autonomous-sales-floor",
    cardClassName: "price-card3 v3",
    title: "The Autonomous Sales Floor",
    subtitle:
      "The complete AI sales package for teams that want outbound lead qualification, follow-up, and booking handled automatically.",
    features: [
      "All services in Package 2: everything from Package 1 plus Speed-to-Lead Outbound and Hands-Off Reviews.",
      "The Autonomous Salesman: give the AI Lead Qualifier a list of phone numbers and client context, and it reaches out, follows up, and books appointments for you.",
    ],
    priceHeadline: "$999",
    priceDetailLines: ["/month", "+ $1,500 one-time setup"],
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
            Choose the AI growth package that fits your business today, from a
            complete front-office starter system to an autonomous sales floor
            that follows up, books appointments, and keeps revenue moving.
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
