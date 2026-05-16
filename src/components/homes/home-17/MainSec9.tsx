import { Link } from "react-router-dom";
import { trackConversionEvent } from "@/utils/analytics";

export default function MainSec9() {
  return (
    <section className="main-sec9">
      {/* hero-style18 */}
      <div className="hero-style18">
        <div className="container">
          <div className="hero-content18">
            <h1 className="title main-sec9__hero-title">
              Stop Bleeding Revenue to Missed Calls.
            </h1>
            <p className="hero-content18__lede">
              Every unanswered call is a homeowner who can book with the next
              contractor who picks up. SceneShift answers your phones 24/7,
              qualifies the lead, and books the job directly into your calendar.
            </p>
            <div className="hero-btn18">
              <Link
                to={`/contact`}
                className="ibt-btn ibt-btn-secondary"
                onClick={() =>
                  trackConversionEvent("hero_book_call_click", {
                    location: "homepage_hero",
                  })
                }
              >
                <span>Test the Voice Assistant</span>
                <i className="icon-arrow-top" />
              </Link>
              <a
                href="#five-minute-upgrade"
                className="ibt-btn ibt-btn-outline"
                onClick={() =>
                  trackConversionEvent("services_cta_click", {
                    location: "homepage_hero",
                  })
                }
              >
                <span>See How It Works</span>
                <i className="icon-arrow-top" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End hero-style18 */}
      <div className="service-sec27 main-sec9-after-hero-video">
        <div className="container">
          <div className="funfact-content funfact-content--iowa-video">
            <h4 className="title">See how one missed call becomes a booked job</h4>
            <div className="contractor-demo-card" aria-label="Video demo placeholder">
              <div className="contractor-demo-card__phone">
                <span>9:47 PM</span>
                <strong>New roofing lead answered</strong>
                <p>Emergency leak. Qualified and booked for 8:30 AM.</p>
              </div>
              <div className="contractor-demo-card__details">
                <span className="contractor-demo-card__eyebrow">Demo placeholder</span>
                <h5>Contractor truck or voice demo goes here.</h5>
                <p>
                  Use this space for a short phone-call demo or a simple crew
                  photo. No abstract tech graphics needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
