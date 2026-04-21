import { Link } from "react-router-dom";

import {
  footerNavItems,
  isExternalNavHref,
  legalNavItems,
  siteConfig,
} from "@/data/site";

export default function Footer1() {
  return (
    <footer className="footer-style1">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <h2 className="title">
              The future of small business is here. Don't get left behind.
            </h2>
          </div>
        </div>
      </div>
      <div className="widget-area ibt-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-6">
              <div className="about-widget footer-widget">
                <div className="footer-logo">
                  <img
                    alt={`${siteConfig.name} logo`}
                    src="/assets/images/logo.svg"
                    width={110}
                    height={20}
                  />
                </div>
                <p>
                  <a href={`mailto:${siteConfig.primaryEmail}`}>
                    {siteConfig.primaryEmail}
                  </a>
                  <br />
                  <a href={`tel:${siteConfig.primaryPhoneHref}`}>
                    {siteConfig.primaryPhoneLabel}
                  </a>
                </p>
                {/* Follow us (hidden for now)
                <ul className="social-icon">
                  <li>
                    <a
                      href={siteConfig.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title=""
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title=""
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title=""
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteConfig.loginUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title=""
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
                */}
                <h2 className="title footer-domain-heading">
                  {siteConfig.domain}
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="footer-menu">
                <div className="footer-links footer-widget">
                  <h4 className="widget-title">Explore</h4>
                  <ul>
                    {footerNavItems.map((item) => (
                      <li key={item.label}>
                        <Link to={item.href ?? "/"} title="">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
                          <Link to={item.href ?? "/"} title="">
                            {item.label}
                          </Link>
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
      <div className="footer-botom">
        <div className="container">
          <div className="footer-box">
            <p>
              <a href={siteConfig.url}>{siteConfig.name}</a>{" "}
              {new Date().getFullYear()}. All rights reserved.
            </p>
            <span>
              <a href={siteConfig.legalTermsUrl} rel="noopener noreferrer">
                Terms of Service
              </a>{" "}
              <a href={siteConfig.legalPrivacyUrl} rel="noopener noreferrer">
                Privacy Policy
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
