import { Link } from "react-router-dom";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { PACKAGES } from "@/data/packages-catalog";
import { trackConversionEvent } from "@/utils/analytics";

const STARTER_PACKAGE_SLUG = "reception-crm-starter";

const MAIN_PACKAGE_ORDER = [
  "main-street-startup",
  "always-on-capture",
  "autonomous-sales-floor",
] as const;

const pricingCardUi: Record<
  (typeof MAIN_PACKAGE_ORDER)[number],
  {
    cardClassName: string;
    badge?: string;
    buttonClassName: string;
  }
> = {
  "main-street-startup": {
    cardClassName: "price-card3 v2 price-card3--no-tab",
    buttonClassName: "ibt-btn ibt-btn-outline",
  },
  "always-on-capture": {
    cardClassName: "price-card3 v3",
    badge: "Most Popular",
    buttonClassName: "ibt-btn ibt-btn-dark",
  },
  "autonomous-sales-floor": {
    cardClassName: "price-card3",
    buttonClassName: "ibt-btn ibt-btn-outline",
  },
};

type PricingPlanCard = {
  id: string;
  cardClassName: string;
  badge?: string;
  title: string;
  subtitle: string;
  features: readonly string[];
  priceHeadline: string;
  priceDetailLines: readonly string[];
  buttonClassName: string;
};

function buildPlanCard(
  slug: string,
  ui?: { cardClassName: string; badge?: string; buttonClassName: string },
): PricingPlanCard {
  const plan = PACKAGES.find((p) => p.slug === slug);
  if (!plan) throw new Error(`Missing package: ${slug}`);
  return {
    id: plan.slug,
    cardClassName: ui?.cardClassName ?? "price-card3 price-card3--no-tab",
    badge: ui?.badge,
    title: plan.name,
    subtitle: plan.tagline,
    features: plan.pricingFeatures,
    priceHeadline: plan.priceHeadline,
    priceDetailLines: plan.priceDetailLines,
    buttonClassName: ui?.buttonClassName ?? "ibt-btn ibt-btn-outline",
  };
}

const starterOfferCard = buildPlanCard(STARTER_PACKAGE_SLUG);

const mainOfferCards = MAIN_PACKAGE_ORDER.map((slug) => {
  const ui = pricingCardUi[slug];
  return buildPlanCard(slug, ui);
});

const customOfferCard: PricingPlanCard = {
  id: "chief-ai-officers",
  cardClassName: "price-card3 v2 price-card3--no-tab",
  title: "Chief AI Officers",
  subtitle:
    "We act as your Chief AI Officers — custom-building AI integrations and workflows for enterprise and complex operations via Zapier, n8n, and your existing stack.",
  features: [
    "Custom AI integrations: We build bespoke workflows and handoffs in Zapier, n8n, your CRM, and dispatch tools — matched to how your team actually operates.",
    "Your automation roadmap: A strategic plan for what to automate next so you scale revenue without scaling payroll.",
    "AI-optimized conversion sites: Fast, search-friendly websites built to feed your AI stack and help prospects find who to call.",
    "On-demand priority support: Skip the queue for fixes, tuning, and the next automation you need shipped.",
  ],
  priceHeadline: "Custom",
  priceDetailLines: [
    "scope & pricing",
    "Requires discovery call, written terms, and a build plan",
  ],
  buttonClassName: "ibt-btn ibt-btn-dark",
};

function PricingBannerCard({ plan }: { plan: PricingPlanCard }) {
  return (
    <div className="col-12 d-flex">
      <div className="price-content3 price-content3--solo w-100">
        <div className={plan.cardClassName}>
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
  );
}

function PricingColumnCard({ plan }: { plan: PricingPlanCard }) {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
      <div className="price-content3 price-content3--solo w-100">
        <div className={plan.cardClassName}>
          {plan.badge ? <span className="Popular">{plan.badge}</span> : null}
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
  );
}

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
            Choose the AI growth package that fits your business today — from
            reception and CRM only, through a complete front-office starter
            system, to an autonomous sales floor that follows up, books
            appointments, and keeps revenue moving.
          </p>
        </div>
        <div className="row g-4">
          <PricingBannerCard plan={starterOfferCard} />
        </div>
        <div className="row g-4 mt-4">
          {mainOfferCards.map((plan) => (
            <PricingColumnCard key={plan.id} plan={plan} />
          ))}
        </div>
        <div className="row g-4 mt-4">
          <PricingBannerCard plan={customOfferCard} />
        </div>
      </div>
    </section>
  );
}
