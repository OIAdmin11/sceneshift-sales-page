/**
 * Server entry for build-time prerendering.
 *
 * `vite build --ssr src/entry-server.tsx` produces a Node-compatible bundle
 * that exports `render(url)`. [scripts/prerender-seo-pages.mjs] imports that
 * bundle and calls `render(url)` for every canonical SEO route, then writes
 * the resulting body HTML into the static index.html shell.
 *
 * The server tree intentionally renders ONLY the SEO pages — none of the
 * heavy animation/Lenis/GSAP layers. The client bundle still runs the full
 * App on hydration, so when a user lands on a prerendered page their first
 * paint is the SSR markup and then the client takes over.
 */

import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { UiProvider } from "@/context/UiContext";
import InnerPagesLayout from "@/pages/layouts/inner-pages/InnerPagesLayout";
import SeoShellLayout from "@/pages/layouts/SeoShellLayout";

import AboutUsPage from "@/pages/inner-pages/about-us";
import ContactPage from "@/pages/inner-pages/contact";
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
import PricingPrerender from "@/pages/seo/base/PricingPrerender";

function ServerRoutes() {
  return (
    <Routes>
      <Route element={<InnerPagesLayout />}>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route element={<SeoShellLayout />}>
        <Route path="/services" element={<ServicesHub />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/services/:slug/:crosshair" element={<CrosshairDetail />} />
        <Route path="/packages" element={<PackagesHub />} />
        <Route path="/packages/:slug" element={<PackageDetail />} />
        <Route path="/industries" element={<IndustriesHub />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
        <Route path="/iowa" element={<IowaHub />} />
        <Route path="/iowa/counties/:slug" element={<CountyDetail />} />
        <Route path="/iowa/cities/:slug" element={<CityDetail />} />
        <Route path="/about/founder" element={<Founder />} />
        <Route path="/about/editorial-policy" element={<EditorialPolicy />} />
        <Route path="/pricing" element={<PricingPrerender />} />
      </Route>
    </Routes>
  );
}

/**
 * Render the SEO tree for a given URL to a static HTML body string.
 * The string is wrapped in <div id="root">{html}</div> by the prerender script
 * before being written to disk.
 */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <UiProvider>
          <ServerRoutes />
        </UiProvider>
      </StaticRouter>
    </StrictMode>,
  );
}
