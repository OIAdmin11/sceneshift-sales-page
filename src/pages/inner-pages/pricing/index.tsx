import { Link } from "react-router-dom";

import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import PricingSec6 from "@/components/homes/home-17/PricingSec6";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("pricing");

  return (
    <>
      <>
        {/* page-banner9 */}
        <section className="page-banner9">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Price</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Pricing plans /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link to={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Pricing plans</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        <section className="pricing-sec3 ibt-section-gapBottom">
          <div className="container">
            <div className="sec-title">
              <SubTitleWrapper>pricing strategy</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                What does small business AI automation cost?
              </TitleSplitWrapper>
              <p>
                Small business AI automation should be priced around the value of
                recovered leads, saved admin time, and faster follow-up. SceneShift
                packages start with missed-call text back and unified inboxes, then
                expand into AI reception, web chat, speed-to-lead, review requests,
                and custom automation roadmaps.
              </p>
              <p>
                The right package depends on call volume, lead value, existing
                software, and how much of your sales floor should run automatically
                when your team is busy.
              </p>
            </div>
          </div>
        </section>
        <PricingSec6 />
      </>
    </>
  );
}
