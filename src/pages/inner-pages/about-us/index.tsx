import { Link } from "react-router-dom";

import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { getPageMetadata } from "@/data/pages";
import {
  aboutMarqueePhrases,
  aboutOperatingPrinciples,
  aboutWhyItMattersHighlights,
} from "@/data/site";

export default function Page() {
  getPageMetadata("about-us");
  const aboutMarqueeText = `/ ${aboutMarqueePhrases.join(" / ")} /`;

  return (
    <>
      <section className="page-banner11 about-page-banner">
        <div className="shape" />
        <div className="shape3" />
        <div className="staff-text">Ames</div>
        <div className="container">
          <div className="page-content">
            <h1 className="title">/ About SceneShift /</h1>
            <p className="about-banner-lede">
              Rooted in Ames, Iowa, SceneShift exists so independent businesses
              do not get quietly outpaced by larger competitors.
            </p>
          </div>
        </div>
        <ul className="breadcrumbs">
          <li>
            <Link to="/" title="">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>About us</li>
        </ul>
      </section>

      <section className="about-us-sec9 ibt-section-gap">
        <div className="container">
          <div className="title-area">
            <div className="sec-title">
              <SubTitleWrapper>rooted in ames, built for independent businesses</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                Helping small businesses keep up with how customers buy now
              </TitleSplitWrapper>
            </div>
          </div>
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <div className="about-content9">
                <h4 className="title">Ames</h4>
                <p>
                  Buyers still choose businesses they trust, but the way they
                  shop has changed. People expect quick answers, clear next
                  steps, and follow-up that does not fall apart. If your
                  business is slower to respond than the next option on the
                  list, great work can lose before you ever get the chance to
                  prove it.
                </p>
                <p>
                  Most owners are not losing because they care less or work
                  less. They lose when calls go unanswered, details get trapped
                  in inboxes, and follow-up depends on whoever happens to
                  remember it. Faster first response and a cleaner handoff
                  usually matter more than big promises about transformation.
                </p>
                <p className="mb-0">
                  That is why we focus on practical systems for small
                  businesses: faster answers, clearer follow-up, and less work
                  getting lost between the phone, the website, and the office.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <figure className="about-history-card">
                <span className="about-history-card__badge">Feb 1940</span>
                <div className="about-history-card__frame">
                  <img
                    alt="1940 black-and-white photograph of Main Street in Winchester, Virginia with storefronts, vintage cars, and pedestrians"
                    className="about-history-card__img"
                    src="/assets/images/about/main-street-winchester-1940.jpg"
                    width={1400}
                    height={930}
                    loading="lazy"
                  />
                </div>
                <figcaption className="about-history-card__caption">
                  <p className="about-history-card__kicker">
                    Main Street, Winchester, Virginia
                  </p>
                  <p className="about-history-card__note">
                    Same downtown then and now. You still have a street, a
                    storefront, and customers choosing someone they trust. What
                    keeps changing is the technology behind that handshake:
                    dispatch, billing, follow-up, and the systems that carry a
                    job from first call to paid invoice.
                  </p>
                  <p className="about-history-card__credit">
                    Photograph by Arthur Rothstein, February 1940, via the{" "}
                    <a
                      href="https://www.loc.gov/resource/fsa.8a12870/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Library of Congress
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://unsplash.com/photos/main-street-winchester-virginia-SsINuH7W-8o?utm_source=sceneshift&utm_medium=referral"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Unsplash
                    </a>
                    .
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="about-local-story ibt-section-gapBottom">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-5">
              <figure className="about-local-figure">
                <span className="about-local-figure__badge">Ames landmark</span>
                <div className="about-local-figure__frame">
                  <img
                    alt="Campanile clock tower at Iowa State University in Ames against the sky"
                    className="about-local-figure__img"
                    src="/assets/images/about/ames-campanile-clock-tower.jpg"
                    width={933}
                    height={1400}
                    loading="lazy"
                  />
                </div>
                <figcaption className="about-local-figure__caption">
                  The ISU Campanile reflects the Ames roots behind the way we
                  work.
                  <span className="about-local-figure__credit">
                    Photo by{" "}
                    <a
                      href="https://unsplash.com/@james300402?utm_source=sceneshift&utm_medium=referral"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      James Hartono
                    </a>{" "}
                    on{" "}
                    <a
                      href="https://unsplash.com/photos/PfvRo7iTolw?utm_source=sceneshift&utm_medium=referral"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Unsplash
                    </a>
                    .
                  </span>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-7">
              <div className="about-story-panel">
                <span className="about-story-panel__eyebrow">
                  Local understanding, practical help
                </span>
                <h2 className="about-story-panel__title">
                  The businesses that anchor a downtown should still feel easy
                  to choose.
                </h2>
                <p>
                  SceneShift started in Ames because local businesses should not
                  need a giant budget or an internal tech team to give
                  customers a better experience. We build for field schedules,
                  crews already stretched thin, and owners who cannot live
                  inside software all day.
                </p>
                <p className="mb-0">
                  Bigger competitors are getting faster at answering, following
                  up, and keeping customers informed. SceneShift focuses on the
                  operational details underneath that customer experience:
                  first response, cleaner handoff, and the consistency that
                  helps a small team stay responsive, organized, and easy to
                  choose across Ames, Central Iowa, and the broader Midwest.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 about-local-story__principles">
            {aboutOperatingPrinciples.map((item) => (
              <div key={item.title} className="col-lg-4 col-md-6">
                <div className="price-content3">
                  <div className="about-detail-card">
                    <h4 className="title">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marquee-sec ibt-section-gapBottom">
        <h2 style={{ display: "none" }}>About marquee</h2>
        <div className="marquee">
          <div className="marquee-inner">
            <span>{aboutMarqueeText}</span>
            <span>{aboutMarqueeText}</span>
          </div>
        </div>
      </section>

      <section className="feature-sec10 ibt-section-gapBottom">
        <div className="container">
          <div className="sec-title">
            <SubTitleWrapper>why this matters now</SubTitleWrapper>
            <TitleSplitWrapper tag="h2" className="title animated-heading">
              The work is operational before it is technical
            </TitleSplitWrapper>
            <p>
              SceneShift is here to help businesses answer faster, follow up
              more consistently, and stay easier to choose when buyers compare
              options.
            </p>
          </div>
          <div className="row g-4">
            {aboutWhyItMattersHighlights.map((item) => (
              <div key={item.title} className="col-lg-4 col-md-6">
                <div className="price-content3">
                  <div className="about-detail-card">
                    <h4 className="title">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
