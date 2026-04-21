import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import MobileMenuToggler from "../common/MobileMenuToggler";

export default function Header5() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsSticky(window.scrollY > 100);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setIsSticky(window.scrollY > 100);
      });
    };
  }, []);
  return (
    <header
      className={` ${isSticky ? "sticky-active v16 is-sticky" : "vs-header16"}`}
    >
      <div className="container2 position-relative">
        <div className={isSticky ? "header-menu-area" : "header-menu-area16"}>
          <div className="row gx-20 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <Link to={`/`}>
                  <img
                    alt="logo"
                    src="/assets/images/logo.svg"
                    width="110"
                    height="20"
                  />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <nav className="main-menu menu-style1 v4">
                <ul>
                  <li>
                    <a href="#demo">
                      <span className="menu-item">demo</span>
                      <span className="menu-item2">demo</span>
                    </a>
                  </li>
                  <li>
                    <a href="#inner-pages">
                      <span className="menu-item">inner pages</span>
                      <span className="menu-item2">inner pages</span>
                    </a>
                  </li>
                  <li>
                    <a href="#features">
                      <span className="menu-item">Features</span>
                      <span className="menu-item2">Features</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-auto d-none d-xl-block">
              <div className="btn-box">
                <a
                  href="https://themeforest.net/user/elite-themes24/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
                >
                  <span>Purchase Aiero</span>
                </a>
              </div>
            </div>
          </div>
          <MobileMenuToggler />
        </div>
      </div>
    </header>
  );
}
