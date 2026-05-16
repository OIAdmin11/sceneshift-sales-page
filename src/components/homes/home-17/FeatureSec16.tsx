import { Link } from "react-router-dom";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";

export default function FeatureSec16() {
  return (
    <section id="some-of-our-services" className="feature-sec16">
      <div className="container">
        <div className="sec-title white text-center feature-sec16__heading">
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Catch the calls your office misses
          </TitleSplitWrapper>
          <p>
            Built for HVAC, plumbing, roofing, electrical, and home-service
            teams that lose real jobs when nobody answers fast enough.
          </p>
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
              <h4 className="title">24/7 Live Web Chat</h4>
              <p>
                Captures the window shoppers looking at your site late at
                night. They get answers, you get their name, number, job type,
                and the best time to call back.
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
              <h4 className="title">Instant Form Follow-Up</h4>
              <p>
                When a homeowner fills out your contact form, SceneShift texts
                or calls them within 60 seconds before they search for the next
                contractor.
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
              <h4 className="title">After-Hours Voice Dispatcher</h4>
              <p>
                A realistic phone assistant takes calls, separates emergencies
                from tire-kickers, gathers job details, and schedules
                appointments while you sleep.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center feature-sec16__cao-row">
          <div className="col-12">
            <div className="feature-block16 feature-block16--cao">
              <h4 className="title">
                Every missed call is a job your ad budget already paid for.
              </h4>
              <p>
                Let your office keep working the way it works now. SceneShift
                catches the calls, forms, and late-night website visitors that
                normally slip away.
              </p>
              <div className="feature-sec16__cao-actions">
                <Link to="/contact" className="ibt-btn ibt-btn-secondary">
                  <span>Stop Missing Calls</span>
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
