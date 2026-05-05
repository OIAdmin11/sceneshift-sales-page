/**
 * Lite layout for SEO/AIO pages.
 *
 * Loads ONLY the components and providers needed to render content:
 * no Lenis, no GSAP, no Swiper, no Isotope, no LightGallery, no OGL,
 * no hover-effect, no odometer. This is the difference between failing
 * and passing Core Web Vitals on the new pages — the existing
 * [InnerPagesLayout] (and the heavy provider stack in [src/App.tsx]) ships
 * 600KB+ of animation JS that has no place on a content page.
 *
 * Pages routed under this layout work in two modes:
 *  - Server-side (build-time): rendered via `react-dom/server.renderToString`
 *    by [scripts/prerender-seo-pages.mjs] for SEO/AIO crawlers.
 *  - Client-side: hydrated/re-rendered in the SPA after JS loads.
 */
import { Outlet } from "react-router-dom";

import SeoHeader from "@/components/seo/SeoHeader";
import SeoFooter from "@/components/seo/SeoFooter";

export default function SeoShellLayout() {
  return (
    <div className="seo-shell">
      <SeoHeader />
      <main className="seo-shell__main">
        <Outlet />
      </main>
      <SeoFooter />
    </div>
  );
}
