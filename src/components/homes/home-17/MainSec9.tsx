import { Link } from "react-router-dom";
import { servicesSectionHref } from "@/data/site";
import { trackConversionEvent } from "@/utils/analytics";

/** Homepage hero video section (YouTube embed). */
const IOWA_SUPPORT_VIDEO_EMBED =
  "https://www.youtube.com/embed/WUfJUGK9q9Q";

export default function MainSec9() {
  return (
    <section className="main-sec9">
      {/* hero-style18 */}
      <div className="hero-style18">
        <div className="container">
          <div className="hero-content18">
            <h1 className="title main-sec9__hero-title">
              Intelligent CRM and AI for small businesses.
            </h1>
            <p
              className="hero-content18__lede"
              style={{ fontSize: "2em", lineHeight: 1.35 }}
            >
              We’ll automate your business with AI. If it doesn’t save you 10+
              hours a week or make you money in 30 days, you don’t pay.
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
                <span>Book a 15-minute call</span>
                <i className="icon-arrow-top" />
              </Link>
              <Link
                to={servicesSectionHref}
                className="ibt-btn ibt-btn-outline"
                onClick={() =>
                  trackConversionEvent("services_cta_click", {
                    location: "homepage_hero",
                  })
                }
              >
                <span>View our services</span>
                <i className="icon-arrow-top" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End hero-style18 */}
      {/* Former service-sec27 cards replaced with Iowa / marketing video */}
      <div className="service-sec27 main-sec9-after-hero-video">
        <div className="container">
          <div className="funfact-content funfact-content--iowa-video">
            <h4 className="title">Supporting Iowa Small Businesses</h4>
            <div className="funfact-video-embed">
              <iframe
                src={IOWA_SUPPORT_VIDEO_EMBED}
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
