import { Link } from "react-router-dom";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";

/** Second-row icons (distinct from the three PNGs used above). */
const SPEED_TO_LEAD_ICON = "/assets/images/feature/feature5.svg";
const AI_OPTIMIZED_CONVERSION_ICON = "/assets/images/feature/feature6.svg";
const SURVEYOR_ICON = "/assets/images/feature/feature8.svg";

export default function FeatureSec16() {
  return (
    <section id="some-of-our-services" className="feature-sec16">
      <div className="container">
        <div className="sec-title white text-center feature-sec16__heading">
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Some of Our Services
          </TitleSplitWrapper>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="feature-block16">
              <img
                alt=""
                src="/assets/images/feature/fea16-1.png"
                width={60}
                height={46}
              />
              <h4 className="title">No Sleep Receptionist</h4>
              <p>
                Missed calls are not missed calls—they are missed money. We
                install an inbound AI phone system that intercepts what you
                would have missed, pre-qualifies buyers on your rules, answers
                FAQs, and books appointments—then writes it into your calendar
                and CRM so nobody retypes a thing.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-block16">
              <img
                alt=""
                src="/assets/images/feature/fea16-2.png"
                width={44}
                height={52}
              />
              <h4 className="title">24/7 Web Concierge</h4>
              <p>
                Traffic does not wait for business hours. We drop an AI webchat
                on the site you already have so visitors get instant FAQ
                answers, leave contact details you can use, and book
                appointments—wired into the same systems as your phone so the
                lead is one record, not three inboxes.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-block16">
              <img
                alt=""
                src="/assets/images/feature/fea16-3.png"
                width={61}
                height={50}
              />
              <h4 className="title">The Invisible Admin</h4>
              <p>
                If reminders live in someone’s head, they do not happen on the
                busy days. We automate text and email
                follow-through—confirmations, prep, nudges, and post-touch
                follow-ups—through your preferred SMS and email tools, tied to
                your calendar and CRM so every thread is logged where your
                team already works.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-block16">
              <img
                alt=""
                src={SPEED_TO_LEAD_ICON}
                width={50}
                height={52}
              />
              <h4 className="title">Speed-to-Lead Outbound Engine</h4>
              <p>
                The lead is not real until someone talks to them while they are
                still hot. When a form hits your new site, automation fires
                an outbound AI call inside about sixty seconds—before they go
                silent or pick a competitor—so interest turns into a booked
                conversation, not a dead row in a spreadsheet.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-block16">
              <img
                alt=""
                src={AI_OPTIMIZED_CONVERSION_ICON}
                width={48}
                height={48}
              />
              <h4 className="title">AI-Optimized Conversion</h4>
              <p>
                A pretty site that does not feed your AI is a brochure, not an
                asset. We build a fast, SEO-first site to push traffic straight
                into your AI systems, use AI to study what competitors publish
                so you can outrank them, and help you show up when prospects
                ask an AI who to call—not when they only need something nice to
                look at.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-block16">
              <img
                alt=""
                src={SURVEYOR_ICON}
                width={50}
                height={50}
              />
              <h4 className="title">The Surveyor</h4>
              <p>
                You cannot fix blind spots you never hear about. AI places the
                calls to clients for honest feedback, follow-ups, and
                surveys—so you get the truth on autopilot without burning your
                team on dial time or getting only the loud voices.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center feature-sec16__cao-row">
          <div className="col-12">
            <div className="feature-block16 feature-block16--cao">
              <h4 className="title">
                Hire us to be your Chief Artificial Intelligence Officers
              </h4>
              <p>
                Hire us to be your custom AI engineers designing and building
                tools tailored to your small business. AI you can afford.
              </p>
              <div className="feature-sec16__cao-actions">
                <Link to="/contact" className="ibt-btn ibt-btn-secondary">
                  <span>Contact us</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
