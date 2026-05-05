/**
 * Lite footer with NAP (Name / Address / Phone) consistency block — a critical
 * E-E-A-T trust signal that appears on every SEO page.
 *
 * NAP must be byte-identical across the site for local search trust signals
 * to compound. All values pull from [src/data/site.ts] (single source).
 */
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/site";

export default function SeoFooter() {
  return (
    <footer className="seo-footer">
      <div className="container">
        <div className="seo-footer__cta">
          <h2>The future of small business is here. Don&apos;t get left behind.</h2>
        </div>
        <div className="seo-footer__grid">
          <div className="seo-footer__brand">
            <img
              alt={`${siteConfig.name} logo`}
              src="/assets/images/logo.svg"
              width={110}
              height={20}
            />
            <address className="seo-footer__nap" itemScope itemType="https://schema.org/LocalBusiness">
              <p itemProp="name">{siteConfig.name}</p>
              <p>
                Based in <span itemProp="addressLocality">{siteConfig.region}</span>
              </p>
              <p>
                <a href={`tel:${siteConfig.primaryPhoneHref}`} itemProp="telephone">
                  {siteConfig.primaryPhoneLabel}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.primaryEmail}`} itemProp="email">
                  {siteConfig.primaryEmail}
                </a>
              </p>
              <p>
                <a href={siteConfig.url} itemProp="url">
                  {siteConfig.domain}
                </a>
              </p>
            </address>
          </div>
          <div className="seo-footer__column">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services/24-7-web-concierge">24/7 Web Concierge</Link></li>
              <li><Link to="/services/always-on-receptionist">Always-On Receptionist</Link></li>
              <li><Link to="/services/speed-to-lead-outbound">Speed-to-Lead Outbound</Link></li>
              <li><Link to="/services/hands-off-reviews">Hands-Off Reviews</Link></li>
              <li><Link to="/services/autonomous-salesman">Autonomous Salesman</Link></li>
              <li><Link to="/services">All services</Link></li>
            </ul>
          </div>
          <div className="seo-footer__column">
            <h3>Packages</h3>
            <ul>
              <li><Link to="/packages/main-street-startup">Main Street Startup</Link></li>
              <li><Link to="/packages/always-on-capture">Always-On Capture</Link></li>
              <li><Link to="/packages/autonomous-sales-floor">Autonomous Sales Floor</Link></li>
              <li><Link to="/packages">Compare packages</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div className="seo-footer__column">
            <h3>Iowa</h3>
            <ul>
              <li><Link to="/iowa">All 99 counties</Link></li>
              <li><Link to="/iowa/cities/des-moines">Des Moines</Link></li>
              <li><Link to="/iowa/cities/cedar-rapids">Cedar Rapids</Link></li>
              <li><Link to="/iowa/cities/ames">Ames</Link></li>
              <li><Link to="/iowa/cities/iowa-city">Iowa City</Link></li>
            </ul>
          </div>
          <div className="seo-footer__column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/about/founder">Founder</Link></li>
              <li><Link to="/about/editorial-policy">Editorial policy</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <a href={siteConfig.legalTermsUrl} rel="noopener noreferrer">Terms</a>
              </li>
              <li>
                <a href={siteConfig.legalPrivacyUrl} rel="noopener noreferrer">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="seo-footer__bottom">
          <p>
            <a href={siteConfig.url}>{siteConfig.name}</a> {new Date().getFullYear()}.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
