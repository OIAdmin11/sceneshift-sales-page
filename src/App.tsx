import { lazy, Suspense, useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { UiProvider } from "@/context/UiContext";
import { ThemeProvider } from "@/context/ThemeContext";

import SearchPopup from "@/components/common/SearchPopup";
import MobileMenu from "@/components/headers/MobileMenu";
import Preloader from "@/components/common/Preloader";

import InnerPagesLayout from "@/pages/layouts/inner-pages/InnerPagesLayout";
import BlogLayout from "@/pages/layouts/blog/BlogLayout";
import ShopLayout from "@/pages/layouts/shop/ShopLayout";
import SeoShellLayout from "@/pages/layouts/SeoShellLayout";
import ExternalRedirect from "@/components/common/ExternalRedirect";
import { siteConfig } from "@/data/site";

const Home = lazy(() => import("@/pages"));
const PricingPage = lazy(() => import("@/pages/inner-pages/pricing"));
const ShopPage = lazy(() => import("@/pages/shop/shop"));
const ShopSinglePage = lazy(() => import("@/pages/shop/shop-single"));
const CartPage = lazy(() => import("@/pages/shop/cart"));
const CheckoutPage = lazy(() => import("@/pages/shop/checkout"));
const AccountPage = lazy(() => import("@/pages/shop/account"));
const BlogPage = lazy(() => import("@/pages/blog/blog"));
const BlogGridPage = lazy(() => import("@/pages/blog/blog2"));
const BlogSinglePage = lazy(() => import("@/pages/blog/blog-single"));
const AboutPage = lazy(() => import("@/pages/inner-pages/about-us"));
const TeamPage = lazy(() => import("@/pages/inner-pages/team"));
const TeamSinglePage = lazy(() => import("@/pages/inner-pages/team-single"));
const ProjectGridPage = lazy(() => import("@/pages/inner-pages/project"));
const ProjectModernPage = lazy(() => import("@/pages/inner-pages/project2"));
const ProjectSinglePage = lazy(
  () => import("@/pages/inner-pages/project-single"),
);
const GalleryGridPage = lazy(() => import("@/pages/inner-pages/gallery-grid"));
const GalleryMasonryPage = lazy(
  () => import("@/pages/inner-pages/gallery-masonry"),
);
const FaqPage = lazy(() => import("@/pages/inner-pages/faq"));
const TypographyPage = lazy(() => import("@/pages/inner-pages/typography"));
const ContactPage = lazy(() => import("@/pages/inner-pages/contact"));
const Index1Page = lazy(() => import("@/pages/homes/index1"));
const Index2Page = lazy(() => import("@/pages/homes/index2"));
const Index3Page = lazy(() => import("@/pages/homes/index3"));
const Index4Page = lazy(() => import("@/pages/homes/index4"));
const Index5Page = lazy(() => import("@/pages/homes/index5"));
const Index6Page = lazy(() => import("@/pages/homes/index6"));
const Index7Page = lazy(() => import("@/pages/homes/index7"));
const Index8Page = lazy(() => import("@/pages/homes/index8"));
const Index9Page = lazy(() => import("@/pages/homes/index9"));
const Index10Page = lazy(() => import("@/pages/homes/index10"));
const Index11Page = lazy(() => import("@/pages/homes/index11"));
const Index12Page = lazy(() => import("@/pages/homes/index12"));
const Index13Page = lazy(() => import("@/pages/homes/index13"));
const Index14Page = lazy(() => import("@/pages/homes/index14"));
const Index15Page = lazy(() => import("@/pages/homes/index15"));
const Index16Page = lazy(() => import("@/pages/homes/index16"));
const Index17Page = lazy(() => import("@/pages/homes/index17"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));

// SEO/AIO content network — eager-imported (no `lazy`) so server-side rendering
// in [src/entry-server.tsx] works synchronously without Suspense plumbing.
import ServicesHub from "@/pages/seo/services/ServicesHub";
import ServiceDetail from "@/pages/seo/services/ServiceDetail";
import CrosshairDetail from "@/pages/seo/services/CrosshairDetail";
import PackagesHub from "@/pages/seo/packages/PackagesHub";
import PackageDetail from "@/pages/seo/packages/PackageDetail";
import IndustriesHub from "@/pages/seo/industries/IndustriesHub";
import IndustryDetail from "@/pages/seo/industries/IndustryDetail";
import IowaHub from "@/pages/seo/iowa/IowaHub";
import CountyDetail from "@/pages/seo/iowa/CountyDetail";
import CityDetail from "@/pages/seo/iowa/CityDetail";
import Founder from "@/pages/seo/about/Founder";
import EditorialPolicy from "@/pages/seo/about/EditorialPolicy";

import { LenisProvider } from "./context/LenisContext";
import SmoothScroll from "./components/common/SmoothScroll";
import { CartProvider } from "./context/CartContext";
import { VideoModalProvider } from "./context/VideoModalContext";
import TitleSplitProvider from "./components/common/TitleSplitProvider";
import SubTitleSplitProvider from "./components/common/SubTitleSplitProvider";
import ScrollToTop from "./components/common/ScrollToTop";
import ThemeButton from "./components/common/ThemeButton";

function App() {
  const suspenseFallback = useMemo(
    () => <Preloader suspenseFallback />,
    [],
  );

  return (
    <BrowserRouter>
      <LenisProvider>
        <SmoothScroll>
          <UiProvider>
            <ThemeProvider>
              <CartProvider>
                <VideoModalProvider>
                  <TitleSplitProvider>
                    <SubTitleSplitProvider>
                      <Suspense fallback={suspenseFallback}>
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/index" element={<Home />} />

                          {/* Route groups (Next.js-style layouts): shell = Header4 + page + Contact + Footer1 */}
                          <Route element={<InnerPagesLayout />}>
                            <Route path="pricing" element={<PricingPage />} />
                            <Route path="about-us" element={<AboutPage />} />
                            <Route path="team" element={<TeamPage />} />
                            <Route
                              path="team-single"
                              element={<TeamSinglePage />}
                            />
                            <Route path="project" element={<ProjectGridPage />} />
                            <Route
                              path="project2"
                              element={<ProjectModernPage />}
                            />
                            <Route
                              path="project-single"
                              element={<ProjectSinglePage />}
                            />
                            <Route
                              path="gallery-grid"
                              element={<GalleryGridPage />}
                            />
                            <Route
                              path="gallery-masonry"
                              element={<GalleryMasonryPage />}
                            />
                            <Route path="faq" element={<FaqPage />} />
                            <Route
                              path="typography"
                              element={<TypographyPage />}
                            />
                            <Route path="contact" element={<ContactPage />} />
                            <Route
                              path="terms-of-service"
                              element={
                                <ExternalRedirect url={siteConfig.legalTermsUrl} />
                              }
                            />
                            <Route
                              path="privacy-policy"
                              element={
                                <ExternalRedirect
                                  url={siteConfig.legalPrivacyUrl}
                                />
                              }
                            />
                          </Route>

                          {/* Legacy guards: keep redirects for old template paths,
                              but `/services` is now the real services hub. */}
                          <Route
                            path="service"
                            element={<Navigate to="/services" replace />}
                          />
                          <Route
                            path="service-single"
                            element={<Navigate to="/services" replace />}
                          />

                          {/* SEO/AIO content network — phased rollout */}
                          <Route element={<SeoShellLayout />}>
                            {/* Phase 1: services / packages / industries hubs + detail */}
                            <Route path="services" element={<ServicesHub />} />
                            <Route
                              path="services/:slug"
                              element={<ServiceDetail />}
                            />
                            {/* Phase 2: service x industry crosshair pages */}
                            <Route
                              path="services/:slug/:crosshair"
                              element={<CrosshairDetail />}
                            />
                            <Route path="packages" element={<PackagesHub />} />
                            <Route
                              path="packages/:slug"
                              element={<PackageDetail />}
                            />
                            <Route
                              path="industries"
                              element={<IndustriesHub />}
                            />
                            <Route
                              path="industries/:slug"
                              element={<IndustryDetail />}
                            />
                            {/* Phase 3: Iowa hub + 99 counties */}
                            <Route path="iowa" element={<IowaHub />} />
                            <Route
                              path="iowa/counties/:slug"
                              element={<CountyDetail />}
                            />
                            {/* Phase 4: city pages (mostly noindex,follow at launch) */}
                            <Route
                              path="iowa/cities/:slug"
                              element={<CityDetail />}
                            />
                            {/* E-E-A-T anchor pages */}
                            <Route path="about/founder" element={<Founder />} />
                            <Route
                              path="about/editorial-policy"
                              element={<EditorialPolicy />}
                            />
                          </Route>

                          <Route element={<ShopLayout />}>
                            <Route path="shop" element={<ShopPage />} />
                            <Route
                              path="shop-single"
                              element={<ShopSinglePage />}
                            />
                            <Route path="cart" element={<CartPage />} />
                            <Route path="checkout" element={<CheckoutPage />} />
                            <Route path="account" element={<AccountPage />} />
                          </Route>

                          <Route element={<BlogLayout />}>
                            <Route path="blog" element={<BlogPage />} />
                            <Route path="blog2" element={<BlogGridPage />} />
                            <Route
                              path="blog-single"
                              element={<BlogSinglePage />}
                            />
                          </Route>

                          <Route path="/index1" element={<Index1Page />} />
                          <Route path="/index2" element={<Index2Page />} />
                          <Route path="/index3" element={<Index3Page />} />
                          <Route path="/index4" element={<Index4Page />} />
                          <Route path="/index5" element={<Index5Page />} />
                          <Route path="/index6" element={<Index6Page />} />
                          <Route path="/index7" element={<Index7Page />} />
                          <Route path="/index8" element={<Index8Page />} />
                          <Route path="/index9" element={<Index9Page />} />
                          <Route path="/index10" element={<Index10Page />} />
                          <Route path="/index11" element={<Index11Page />} />
                          <Route path="/index12" element={<Index12Page />} />
                          <Route path="/index13" element={<Index13Page />} />
                          <Route path="/index14" element={<Index14Page />} />
                          <Route path="/index15" element={<Index15Page />} />
                          <Route path="/index16" element={<Index16Page />} />
                          <Route path="/index17" element={<Index17Page />} />
                          <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                      </Suspense>
                      <SearchPopup />
                      <MobileMenu />
                      <ScrollToTop />
                      <ThemeButton />
                    </SubTitleSplitProvider>
                  </TitleSplitProvider>
                </VideoModalProvider>
              </CartProvider>
            </ThemeProvider>
          </UiProvider>
        </SmoothScroll>
      </LenisProvider>
    </BrowserRouter>
  );
}

export default App;
