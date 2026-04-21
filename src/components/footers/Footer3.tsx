import { Link } from "react-router-dom";

import {
  footerNavItems,
  isExternalNavHref,
  legalNavItems,
  siteConfig,
} from "@/data/site";

export default function Footer3({
  parentClass = "footer-style4",
}: {
  parentClass?: string;
}) {
  return (
    <footer className={parentClass}>
      <div className="footer-top4">
        <div className="container">
          <div className="footer-content4">
            <h2 className="title">
              Manage your SceneShift AI answering, web chat, and customer follow-up from one place
            </h2>
            <a
              href={siteConfig.loginUrl}
              title=""
              className="ibt-btn ibt-btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Client Login</span>
              <i className="icon-arrow-top" />
            </a>
          </div>
        </div>
      </div>
      <div className="widget-area ibt-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-widget4 footer-widget">
                <div className="footer-logo">
                  <img
                    alt={`${siteConfig.name} logo`}
                    src="/assets/images/logo.svg"
                    width={110}
                    height={20}
                  />
                </div>
                <p>
                  <a href={siteConfig.url}>{siteConfig.name}</a>{" "}
                  {new Date().getFullYear()}. All rights reserved.
                </p>
                <p>{siteConfig.domain}</p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer-menu4">
                <div className="location-widget4 footer-widget">
                  <h4 className="widget-title">Contact</h4>
                  <a
                    href={`tel:${siteConfig.primaryPhoneHref}`}
                    title=""
                    className="nmbr"
                  >
                    {siteConfig.primaryPhoneLabel}
                  </a>
                  <a
                    href={`mailto:${siteConfig.supportEmail}`}
                    title=""
                    className="gmail"
                  >
                    {siteConfig.supportEmail}
                  </a>
                  {/* Follow us (hidden for now)
                   <h5 className="title">Folow us</h5>
                  <ul className="social-icon">
                    <li>
                      <a href={siteConfig.url} title="">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href={siteConfig.url} title="">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href={siteConfig.url} title="">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href={siteConfig.loginUrl} title="">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                  */}
                </div>
                <div className="contact-widget4 footer-widget">
                  <h5 className="widget-title">Pages</h5>
                  <div className="footer-links">
                    <ul>
                      {footerNavItems.map((item) => (
                        <li key={item.label}>
                          <Link to={item.href ?? "/"}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="footer-links footer-widget">
                  <h4 className="widget-title">Legal</h4>
                  <ul>
                    {legalNavItems.map((item) => (
                      <li key={item.label}>
                        {isExternalNavHref(item.href) ? (
                          <a href={item.href} rel="noopener noreferrer">
                            {item.label}
                          </a>
                        ) : (
                          <Link to={item.href ?? "/"}>{item.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
