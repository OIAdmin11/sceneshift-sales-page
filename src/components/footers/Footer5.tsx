import { Link } from "react-router-dom";

import ContactButton from "@/components/common/ContactButton";
import { footerBottomLinks } from "@/data/footer";

export default function Footer5() {
  return (
    <footer className="footer-style7">
      <div className="footer-top7">
        <div className="container">
          <div className="footer-content7">
            <h2 className="title">
              Artificial Intellegance <span>create digital future.</span>
            </h2>
            <div className="btn-box5">
              <ContactButton
                href="/index2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </ContactButton>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-area7">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="about-widget7 footer-widget">
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
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="footer-menu7">
                <div className="location-widget7 footer-widget">
                  <h4 className="widget-title">Adress</h4>
                  <p>Logico, USA, New York - 1060 Str. First Avenue 1</p>
                </div>
                <div className="contact-widget7 footer-widget">
                  <h4 className="widget-title">Say Hello</h4>
                  <a href="tel:8003508431" title="" className="nmbr">
                    + 800 350 84 31 - 066 875 34 21
                  </a>
                  <a href="mailto:support@aiero.com" title="" className="gmail">
                    support@aiero.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-botom7">
        <div className="container">
          <div className="footer-box">
            <p>
              <a href="#">©Aiero</a> {new Date().getFullYear()}. All rights
              reserved.
            </p>
            <ul className="footer-links">
              {footerBottomLinks.map((item) => (
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
        </div>
      </div>
    </footer>
  );
}
