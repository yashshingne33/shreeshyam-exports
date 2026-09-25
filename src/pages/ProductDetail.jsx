import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import RfqForm from "../components/RfqForm.jsx";
import { getProductBySlug, PRODUCTS } from "../data/products.js";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [showForm, setShowForm] = useState(false);

  if (!product) return <Navigate to="/products/" replace />;

  const others = PRODUCTS.filter((p) => p.slug !== product.slug && !p.conditional).slice(0, 3);

  return (
    <>
      <Breadcrumbs trail={[{ label: "Products", to: "/products/" }, { label: product.shortName }]} />

      {/* Product hero */}
      <section className="bg-ivory/40 py-14 sm:py-20">
        <div className="container mx-auto grid max-w-content gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-2xl">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-wide text-brass">{product.tagline}</span>
              {product.conditional && (
                <span className="rounded-full border border-brass/30 bg-brass/10 px-2.5 py-0.5 text-[10px] font-medium text-brass">
                  Conditional — pending confirmation
                </span>
              )}
            </div>
            <h1 className="mt-2 font-display text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{product.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span key={a} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-charcoal/70 shadow-sm">
                  {a}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="rounded-full bg-brass px-7 py-3.5 text-[15px] font-medium text-charcoal transition-transform hover:scale-[1.02] hover:bg-[#c2a877]"
              >
                Request this product
              </button>
              <a
                href="#specifications"
                className="rounded-full border border-charcoal/15 px-7 py-3.5 text-[15px] text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5"
              >
                View specifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formats & specifications */}
      <section id="specifications" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Formats & Specifications</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">
            Typical values shown here are indicative and confirmed against a dated specification sheet once your grade
            is agreed — not a guaranteed limit until confirmed in writing.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-charcoal/10">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-charcoal/10 bg-ivory/60 text-xs uppercase tracking-wide text-charcoal/50">
                  <th scope="col" className="px-5 py-3.5 font-semibold">Parameter</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Typical value</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.label} className="border-b border-charcoal/5 last:border-0 even:bg-ivory/20">
                    <th scope="row" className="px-5 py-4 font-medium text-charcoal">{spec.label}</th>
                    <td className="px-5 py-4 text-ink-soft">{spec.value}</td>
                    <td className="px-5 py-4 text-charcoal/55">{spec.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Packaging & order details */}
      {product.packaging.length > 0 && (
        <section className="bg-ivory/40 py-16 sm:py-20">
          <div className="container mx-auto max-w-content px-6 lg:px-8">
            <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Packaging & Order Details</h2>
            <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">
              MOQ, sample policy and lead time are confirmed with your quotation and vary by grade and destination.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {product.packaging.map((pack) => (
                <div key={pack.title} className="rounded-xl border border-charcoal/10 bg-white p-6 shadow-sm">
                  <h3 className="font-display text-lg font-medium text-charcoal">{pack.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/70">{pack.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Downloads & FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal">Downloads</h2>
              <div className="mt-4 rounded-xl border border-dashed border-charcoal/20 bg-ivory/30 p-6">
                <p className="text-sm leading-relaxed text-charcoal/70">
                  A dated specification PDF for {product.shortName.toLowerCase()} publishes here once approved
                  (Assets A07/A13). In the meantime, request the current specification directly.
                </p>
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="mt-4 text-sm font-semibold text-brass-dim hover:underline hover:underline-offset-4"
                >
                  Request specification sheet &rarr;
                </button>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal">Frequently Asked</h2>
              <div className="mt-4">
                <FaqAccordion items={product.faqs} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {others.length > 0 && (
        <section className="bg-ivory/40 py-16 sm:py-20">
          <div className="container mx-auto max-w-content px-6 lg:px-8">
            <h2 className="font-display text-2xl font-medium text-charcoal">Explore Other Formats</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}/`}
                  className="group rounded-xl border border-charcoal/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brass/60 hover:shadow-lg"
                >
                  <h3 className="font-display text-lg font-medium text-charcoal group-hover:text-brass">{p.shortName}</h3>
                  <p className="mt-1.5 text-xs text-charcoal/60">{p.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inline RFQ modal-ish panel */}
      {showForm && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-charcoal/70 px-4 py-10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Request ${product.name}`}
          onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
        >
          <div className="w-full max-w-2xl rounded-2xl bg-ivory p-6 shadow-2xl sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-wide text-brass">Request this product</p>
                <h2 className="mt-1 font-display text-2xl font-medium text-charcoal">{product.name}</h2>
              </div>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                aria-label="Close"
                className="rounded-full p-2 text-2xl leading-none text-charcoal/50 hover:bg-charcoal/5 hover:text-charcoal"
              >
                &times;
              </button>
            </div>
            <div className="mt-6">
              <RfqForm prefillProduct={product.name} sourcePageId={product.id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
