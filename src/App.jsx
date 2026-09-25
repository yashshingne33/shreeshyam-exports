import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import FloatingContact from "./components/FloatingContact.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Quality from "./pages/Quality.jsx";
import Packaging from "./pages/Packaging.jsx";
import ExportOrdering from "./pages/ExportOrdering.jsx";
import About from "./pages/About.jsx";
import RequestQuote from "./pages/RequestQuote.jsx";
import FAQ from "./pages/FAQ.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import Guides from "./pages/Guides.jsx";
import NotFound from "./pages/NotFound.jsx";

// Scrolls to top on every route change, except in-page hash links.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);
  return null;
}

// Routes mirror the Sitemap sheet (P01–P16).
export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:slug/" element={<ProductDetail />} />
          <Route path="/quality/" element={<Quality />} />
          <Route path="/packaging-private-label/" element={<Packaging />} />
          <Route path="/export-ordering/" element={<ExportOrdering />} />
          <Route path="/about/" element={<About />} />
          <Route path="/request-a-quote/" element={<RequestQuote />} />
          <Route path="/faq/" element={<FAQ />} />
          <Route path="/privacy-policy/" element={<Privacy />} />
          <Route path="/terms/" element={<Terms />} />
          <Route path="/thank-you/" element={<ThankYou />} />
          <Route path="/guides/" element={<Guides />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
