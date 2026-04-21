import { Link } from "react-router-dom";

import { useUi } from "@/context/UiContext";
import { siteConfig } from "@/data/site";

export default function Sidemenu() {
  const { closeSideNav, sideNavOpen } = useUi();
  return (
    <div className={`side-menu ${sideNavOpen ? "active" : ""}`} id="sideMenu">
      <div
        className={`overlay ${sideNavOpen ? "active" : ""}`}
        id="overlay"
        onClick={closeSideNav}
      />
      <a href="#" className="close-btn" id="closeBtn" onClick={closeSideNav}>
        <i className="fa fa-close" /> close
      </a>
      <div className="menu-content">
        <Link to={`/`} className="logo">
          <img
            alt={`${siteConfig.name} logo`}
            src="/assets/images/logo.svg"
            width={110}
            height={20}
          />
        </Link>
        <div className="sidebar-menu">
          <h4 className="title">contacts</h4>
          <a href={`tel:${siteConfig.primaryPhoneHref}`} title="" className="nmbr">
            {siteConfig.primaryPhoneLabel}
          </a>
          <a href={`mailto:${siteConfig.primaryEmail}`} className="email">
            {siteConfig.primaryEmail}
          </a>
          <Link to="/contact" title="" className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded">
            <span>Get in Touch</span>
          </Link>
        </div>
        {/* Follow us (hidden for now)
        <ul className="social-icon">
          <li>
            <a href={siteConfig.url} title="">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href={siteConfig.loginUrl} title="">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href={siteConfig.url} title="">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li>
            <a href={siteConfig.url} title="">
              <i className="fab fa-youtube" />
            </a>
          </li>
        </ul>
        */}
      </div>
    </div>
  );
}
