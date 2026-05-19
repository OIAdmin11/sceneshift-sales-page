import { Link } from "react-router-dom";
import { servicesSectionHref } from "@/data/site";
import { SCENESHIFT_DEMO_VIDEO_EMBED } from "@/data/video";
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
            <h4 className="title">Supporting Iowa Small Businesses</h4>
            <div className="funfact-video-embed">
              <iframe
                src={SCENESHIFT_DEMO_VIDEO_EMBED}
                title="Supporting Iowa small businesses — SceneShift"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
