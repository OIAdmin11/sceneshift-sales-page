import { Link } from "react-router-dom";

import ContactForm from "@/components/contact/ContactForm";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { getPageMetadata } from "@/data/pages";
import { siteConfig } from "@/data/site";
import { trackConversionEvent } from "@/utils/analytics";

export default function Page() {
  getPageMetadata("contact");

  return (
    <>
      <section className="page-banner9 contact-page-banner">
        <div className="shape" />
        <div className="shape3" />
        <div className="staff-text">Contact</div>
        <div className="container">
          <div className="page-content">
            <h1 className="title">/ Contact /</h1>
          </div>
        </div>
        <ul className="breadcrumbs">
          <li>
            <Link to="/" title="">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>Contact</li>
        </ul>
      </section>

      <section className="contact-sec2 ibt-section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-content2">
                <div className="sec-title">
                  <SubTitleWrapper>get in touch</SubTitleWrapper>
                  <TitleSplitWrapper tag="h2" className="title animated-heading">
                    Reach out to SceneShift for inquiries, sales questions, or launch coordination
                  </TitleSplitWrapper>
                  <p>
                    Reach us by phone, email, or the form below.
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="contact-info">
                      <div className="call-center2">
                        <h4 className="title">Phone</h4>
                        <a
                          href={`tel:${siteConfig.primaryPhoneHref}`}
                          className="nmbr"
                          onClick={() =>
                            trackConversionEvent("phone_click", {
                              location: "contact_page",
                            })
                          }
                        >
                          {siteConfig.primaryPhoneLabel}
                        </a>
                      </div>
                      <div className="call-center2 mb-0">
                        <h4 className="title">Email</h4>
                        <a
                          href={`mailto:${siteConfig.primaryEmail}`}
                          className="gmail"
                          onClick={() =>
                            trackConversionEvent("email_click", {
                              location: "contact_page",
                            })
                          }
                        >
                          {siteConfig.primaryEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="contact-info">
                      <div className="call-center2 mb-0">
                        <h4 className="title">Client access</h4>
                        <p>
                          Existing customers can sign in through the dedicated
                          portal at{" "}
                          <a
                            href={siteConfig.loginUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            login.sceneshift.org
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form v2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
