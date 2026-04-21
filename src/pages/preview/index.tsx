import ForceThemeMode from "@/components/common/ForceDarkForIndex15";
import Header5 from "@/components/headers/Header5";
import Banner from "@/components/preview/Banner";
import Demo from "@/components/preview/Demo";
import FeaturesAndTestimonials from "@/components/preview/FeaturesAndTestimonials";
import Hero from "@/components/preview/Hero";
import InnerPages from "@/components/preview/InnerPages";
import { getPageMetadata } from "@/data/pages";

export default function Page() {
  getPageMetadata("preview");
  return (
    <>
      <div className="intro">
        <ForceThemeMode mode="dark" />
        <Header5 />
        {/* main-sec6 */}
        <Hero />
        {/* End main-sec6 */}
        {/* neural-playground2 */}
        <Banner />
        {/* End neural-playground2 */}
        {/* demo-sec */}
        <Demo />
        {/* End demo-sec */}
        {/* main-sec7 */}
        <section className="main-sec7">
          {/* marquee-sec4 */}
          <div className="marquee-sec4">
            <h2 style={{ display: "none" }}>Marquee Section</h2>
            <div className="marquee4">
              <div className="marquee-inner">
                <span>
                  / Join Aiero in shaping the future of technology for whole
                  world.
                </span>
                <span>
                  / Join modern AI in shaping the future of technology for whole
                  world.
                </span>
              </div>
            </div>
          </div>
          {/* End marquee-sec4 */}
          {/* marquee-sec */}
          <div className="marquee-sec3">
            <h2 style={{ display: "none" }}>Marquee Section</h2>
            <div className="marquee">
              <div className="marquee-inner">
                <span>
                  / Join Aiero T in shaping the future of technology for whole
                  world.
                </span>
                <span>
                  / Join Aiero T in shaping the future of technology for whole
                  world.
                </span>
              </div>
            </div>
          </div>
          {/* End marquee-sec */}
        </section>
        {/* End main-sec7 */}
        {/* project-sec10 */}
        <InnerPages />
        {/* End project-sec10 */}
        {/* builder-intro */}
        <section className="builder-intro">
          <div className="container">
            <div className="builder-content">
              <div className="bulider-info">
                <h2 className="title">
                  Your site, your style with ReactJs Template
                </h2>
                <div className="inner-content3">
                  <p>
                    Build your website with our ReactJs templates — easily mix
                    sections or pages to create a unique, fully customizable
                    layout without any page builder.
                  </p>
                  <a
                    href="https://themeforest.net/user/elite-themes24/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ibt-btn ibt-btn-outline-2"
                  >
                    <span>Purchase Aiero</span>
                    <i className="icon-arrow-top" />
                  </a>
                </div>
              </div>
              <div className="builder-img "></div>
            </div>
          </div>
        </section>
        {/* End builder-intro */}
        <FeaturesAndTestimonials />
        {/* footer-style6 */}
        <footer className="footer-style6">
          <div className="container">
            <div className="logo-box6">
              <img
                alt="AI Agency & Technology ReactJs  Template"
                src="/assets/images/logo.svg"
                width="110"
                height="20"
              />
            </div>
            <div className="about-widget6">
              <h2 className="title">
                Embrace the future with our Aiero Artificial Intelligence
                ReactJs Template!
              </h2>
              <a
                href="https://themeforest.net/user/elite-themes24/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="ibt-btn ibt-btn-outline-2"
              >
                <span>Purchase Aiero</span>
                <i className="icon-arrow-top" />
              </a>
              <p>
                © Aiero {new Date().getFullYear()}. All rights reserved. by{" "}
                <a
                  target="_blank"
                  href="https://themeforest.net/user/elite-themes24"
                >
                  elite-themes24
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
      {/* End footer-style6 */}
    </>
  );
}
