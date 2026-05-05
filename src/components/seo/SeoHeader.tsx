/**
 * Lite header for SEO pages. No scroll listeners, no Lenis hooks, no GSAP.
 * Pure SSR-safe markup for fast first paint and Core Web Vitals.
 */
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/site";

export default function SeoHeader() {
  return (
    <header className="seo-header">
      <div className="seo-header__top">
        <div className="container">
          <ul className="seo-header__contact">
            <li>
              <span className="seo-header__contact-label">Call</span>
              <a href={`tel:${siteConfig.primaryPhoneHref}`}>
                {siteConfig.primaryPhoneLabel}
              </a>
            </li>
            <li>
              <span className="seo-header__contact-label">Email</span>
              <a href={`mailto:${siteConfig.primaryEmail}`}>
                {siteConfig.primaryEmail}
              </a>
            </li>
            <li>
              <span className="seo-header__contact-label">Based in</span>
              <span>{siteConfig.region}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="seo-header__main">
        <div className="container">
          <div className="seo-header__row">
            <Link to="/" className="seo-header__logo">
              <img
                alt={`${siteConfig.name} logo`}
                src="/assets/images/logo.svg"
                width={110}
                height={20}
              />
            </Link>
            <nav className="seo-header__nav" aria-label="Primary">
              <ul>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/packages">Packages</Link>
                </li>
                <li>
                  <Link to="/industries">Industries</Link>
                </li>
                <li>
                  <Link to="/iowa">Iowa</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <a
              href={siteConfig.loginUrl}
              className="seo-header__login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
