import { Link } from "react-router-dom";

import { footerLinkGroups } from "@/data/footer";
import { siteConfig } from "@/data/site";

export default function Footer2() {
  return (
    <footer className="footer-style2">
      <div className="widget-area2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-widget v2 footer-widget">
                <div className="footer-logo">
                  <img
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/logo.svg"
                    width={110}
                    height={20}
                  />
                </div>
                <ul className="social-icon">
                  <li>
                    <a href="#" title="">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
                <h2 className="title">since 2025</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer-menu v2">
                <div className="contact-widget footer-widget">
                  <h4 className="widget-title">Contacts</h4>
                  <p>Aiero, New York - 1060 Str. First Avenue 1</p>
                  <a href="tel:+13685678954" className="nmbr">
                    800 100 975 20 34
                  </a>
                  <a href="tel:8003508431" className="nmbr">
                    + (123) 1800-234-5678
                  </a>
                  <a href="mailto:support@aiero.com" className="gmail">
                    support@aiero.co
                  </a>
                </div>
                {footerLinkGroups.map((group, index) => (
                  <div
                    key={group.title}
                    className={`footer-links footer-widget${index === footerLinkGroups.length - 1 ? " m-0" : ""}`}
                  >
                    <h4 className="widget-title">{group.title}</h4>
                    <ul>
                      {group.links.map((item) => (
                        <li key={item.label}>
                          {item.href.startsWith("/") ? (
                            <Link to={item.href} title="">
                              {item.label}
                            </Link>
                          ) : (
                            <a href={item.href} title="">
                              {item.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-botom">
        <div className="container">
          <div className="footer-box">
            <p>
              <a href="#">©Aiero</a> {new Date().getFullYear()}. All rights
              reserved.
            </p>
            <span>
              <a href={siteConfig.legalTermsUrl} rel="noopener noreferrer">
                Terms of use
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
