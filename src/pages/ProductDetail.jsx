import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import RfqForm from "../components/RfqForm.jsx";
import { getProductBySlug, PRODUCTS } from "../data/products.js";

/* Shared design tokens — identical to Home.jsx so both pages feel the same */
const SECTION = "py-14 sm:py-16 lg:py-20";
const WRAP = "container mx-auto max-w-content px-5 sm:px-6 lg:px-8";
const KICKER = "text-xs font-semibold uppercase tracking-widest text-brass";
const H2 = "font-display text-2xl font-medium leading-tight text-charcoal sm:text-3xl";
const BODY = "text-[15px] leading-relaxed text-charcoal/75";

const BTN = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";
const BTN_BRASS = `${BTN} bg-brass text-charcoal shadow-md shadow-brass/25 hover:bg-[#c2a877] hover:-translate-y-0.5`;
const BTN_LINE = `${BTN} border border-charcoal/20 bg-white text-charcoal hover:border-brass hover:bg-brass/10`;

const CARD = "rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [showForm, setShowForm] = useState(false);

  // Close the request panel with the Escape key
  useEffect(() => {
    if (!showForm) return;
    const onKey = (e) => e.key === "Escape" && setShowForm(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showForm]);

  if (!product) return <Navigate to="/products/" replace />;

  const others = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs trail={[{ label: "Products", to: "/products/" }, { label: product.shortName }]} />

      {/* Product hero */}
      <section className={`bg-[#FAF8F5] ${SECTION}`}>
        <div className={`${WRAP} grid items-center gap-8 lg:grid-cols-2 lg:gap-14`}>
          <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-[420px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={KICKER}>{product.tagline}</span>
              {product.conditional && (
                <span className="rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-[11px] font-semibold text-brass">
                  Conditional — pending confirmation
                </span>
              )}
            </div>

            <h1 className="mt-3 font-display text-3xl font-medium leading-tight text-charcoal sm:text-4xl lg:text-[2.75rem]">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-charcoal/75">{product.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-charcoal/10 bg-white px-3.5 py-1.5 text-xs font-medium text-charcoal/80"
                >
                  {a}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <button type="button" onClick={() => setShowForm(true)} className={BTN_BRASS}>
                Request this product
              </button>
              <a href="#specifications" className={BTN_LINE}>
                View specifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formats & specifications */}
      <section id="specifications" className={`scroll-mt-20 bg-white ${SECTION}`}>
        <div className={WRAP}>
          <h2 className={H2}>Formats & Specifications</h2>
          <p className={`mt-2 max-w-2xl ${BODY}`}>
            Typical values shown here are indicative and confirmed against a dated specification sheet once your grade
            is agreed — not a guaranteed limit until confirmed in writing.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-charcoal/10 shadow-sm">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-charcoal/10 bg-[#FAF8F5] text-xs uppercase tracking-wide text-charcoal/65">
                  <th scope="col" className="px-4 py-3.5 font-semibold sm:px-5">Parameter</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold sm:px-5">Typical value</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold sm:px-5">Notes</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((spec) => (
                  <tr
                    key={spec.label}
                    className="border-b border-charcoal/5 transition-colors last:border-0 even:bg-[#FAF8F5]/60 hover:bg-brass/5"
                  >
                    <th scope="row" className="px-4 py-4 font-medium text-charcoal sm:px-5">{spec.label}</th>
                    <td className="px-4 py-4 text-charcoal/80 sm:px-5">{spec.value}</td>
                    <td className="px-4 py-4 text-charcoal/65 sm:px-5">{spec.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Packaging & order details */}
      {product.packaging.length > 0 && (
        <section className={`bg-[#FAF8F5] ${SECTION}`}>
          <div className={WRAP}>
            <h2 className={H2}>Packaging & Order Details</h2>
            <p className={`mt-2 max-w-2xl ${BODY}`}>
              MOQ, sample policy and lead time are confirmed with your quotation and vary by grade and destination.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {product.packaging.map((pack) => (
                <div key={pack.title} className={`${CARD} p-5 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg sm:p-6`}>
                  <h3 className="font-display text-lg font-medium text-charcoal">{pack.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{pack.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Downloads & FAQ */}
      <section className={`bg-white ${SECTION}`}>
        <div className={WRAP}>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <h2 className={H2}>Downloads</h2>
              <div className="mt-4 rounded-2xl border border-dashed border-brass/50 bg-[#FAF8F5] p-5 sm:p-6">
                <p className="text-sm leading-relaxed text-charcoal/75">
                  A dated specification PDF for {product.shortName.toLowerCase()} publishes here once approved
                  (Assets A07/A13). In the meantime, request the current specification directly.
                </p>
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="mt-4 text-sm font-semibold text-brass-dim underline-offset-4 hover:underline"
                >
                  Request specification sheet &rarr;
                </button>
              </div>
            </div>

            <div>
              <h2 className={H2}>Frequently Asked</h2>
              <div className="mt-4">
                <FaqAccordion items={product.faqs} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {others.length > 0 && (
        <section className={`bg-[#FAF8F5] ${SECTION}`}>
          <div className={WRAP}>
            <h2 className={H2}>Explore Other Formats</h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}/`}
                  className={`${CARD} group flex flex-col overflow-hidden hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF8F5]">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {p.conditional && (
                      <span className="absolute right-3 top-3 rounded-full bg-brass px-3 py-1 text-[11px] font-semibold text-charcoal">
                        Conditional
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <span className={KICKER}>{p.tagline}</span>
                      <h3 className="mt-1.5 font-display text-xl font-medium text-charcoal transition-colors group-hover:text-brass-dim">
                        {p.shortName}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal/75">{p.summary}</p>
                    </div>

                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-charcoal transition-colors group-hover:text-brass-dim">
                      <span>View Details</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inline RFQ panel */}
      {showForm && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-charcoal/60 px-4 py-6 sm:py-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Request ${product.name}`}
          onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
        >
          <div className="w-full max-w-2xl rounded-2xl border border-charcoal/10 bg-white p-5 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-charcoal/10 pb-4">
              <div>
                <p className={KICKER}>Request this product</p>
                <h2 className="mt-1 font-display text-xl font-medium text-charcoal sm:text-2xl">{product.name}</h2>
              </div>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                aria-label="Close"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-2xl leading-none text-charcoal/60 transition-colors hover:bg-charcoal/5 hover:text-charcoal"
              >
                &times;
              </button>
            </div>
            <div className="mt-5">
              <RfqForm prefillProduct={product.name} sourcePageId={product.id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}