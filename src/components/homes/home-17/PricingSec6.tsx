import { Link } from "react-router-dom";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { trackConversionEvent } from "@/utils/analytics";

const pricedOfferCards = [
  {
    id: "owner-operator",
    cardClassName: "price-card3",
    title: "The Owner-Operator",
    subtitle:
      "For solo owners and small crews that need nights and weekends covered without hiring another person.",
    features: [
      "24/7 Virtual Receptionist for missed and after-hours calls.",
      "24/7 Live Web Chat for late-night website visitors.",
      "Instant Form Follow-Up within 60 seconds.",
      "Books qualified jobs directly into your calendar.",
      "Includes 300 phone minutes/mo.",
      "Transparent overages at cost.",
    ],
    priceHeadline: "$299",
    priceDetailLines: ["/month", "No setup fee"],
    buttonClassName: "ibt-btn ibt-btn-outline",
  },
  {
    id: "growing-crew",
    cardClassName: "price-card3 v2",
    badge: "Most Popular",
    title: "The Growing Crew",
    subtitle:
      "For teams running multiple trucks that need more call coverage and faster lead booking.",
    features: [
      "Everything in The Owner-Operator.",
      "After-Hours Voice Dispatcher for urgent calls.",
      "Priority lead alerts by text and email.",
      "Job-type questions customized for your trade.",
      "Includes 800 phone minutes/mo.",
      "Transparent overages at cost.",
    ],
    priceHeadline: "$599",
    priceDetailLines: ["/month", "No setup fee"],
    buttonClassName: "ibt-btn ibt-btn-dark",
  },
  {
    id: "full-dispatch-desk",
    cardClassName: "price-card3 v3",
    title: "The Full Dispatch Desk",
    subtitle:
      "For higher-volume shops that want every website lead, after-hours call, and overflow call handled fast.",
    features: [
      "Everything in The Growing Crew.",
      "Higher call volume coverage for busy seasons.",
      "Multi-location or multi-trade call routing.",
      "Weekly missed-call and booked-job summary.",
      "Includes 1,500 phone minutes/mo.",
      "Transparent overages at cost.",
    ],
    priceHeadline: "$999",
    priceDetailLines: ["/month", "No setup fee"],
    buttonClassName: "ibt-btn ibt-btn-outline",
  },
];

const customOfferCard = {
  id: "zero-disruption-guarantee",
  cardClassName: "price-card3 v2 price-card3--no-tab",
  title: "Zero-Disruption Guarantee",
  subtitle:
    "Works alongside your existing CRM and phone systems without changing your workflow.",
  features: [
    "Keep your current phone number.",
    "Keep your current calendar.",
    "Keep your current office workflow.",
    "Turn it off any time if it does not fit.",
  ],
  priceHeadline: "Included",
  priceDetailLines: [
    "with every plan",
    "No forced system replacement",
  ],
  buttonClassName: "ibt-btn ibt-btn-dark",
};

export default function PricingSec6() {
  return (
    <section className="pricing-sec6 ibt-section-gap">
      <div className="container">
        <div className="sec-title white">
          <SubTitleWrapper>pricing</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Flat-Rate Professional Pricing. No Hidden Setup Fees.
          </TitleSplitWrapper>
          <p>
            Pick the level of coverage that matches your call volume. Every
            plan is built to save missed calls, qualify real jobs, and book work
            without surprising you later.
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
                      <span>Protect My Calls</span>
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
                    <span>Get the Guarantee</span>
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
