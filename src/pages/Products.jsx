import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { PRODUCTS } from "../data/products.js";
import { SECTION, WRAP, BODY, PALE, DOTS, BTN_BRASS, IconCircle, PalmLeaf, CornerDecor } from "../components/PageDecor.jsx";

export default function Products() {
  return (
    <>
      <PageHero
        kicker="Products · P02"
        title="Explore Our Coconut Charcoal Products"
        body="Compare formats, applications and specification availability, then send your requirements for a tailored quote."
      />
      <Breadcrumbs trail={[{ label: "Products" }]} />

      {/* Product cards */}
      <section className={`relative overflow-hidden bg-white ${SECTION}`}>
        <CornerDecor />
        <div className={`${WRAP} relative`}>
          <div className="grid gap-6 sm:grid-cols-2">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}/`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-[0_6px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-brass/60 hover:shadow-xl"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-forest/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">{product.tagline}</span>
                    {product.conditional && (
                      <span className="rounded-full bg-brass/15 px-3 py-1 text-[11px] font-semibold text-brass-dim">Conditional</span>
                    )}
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-medium text-forest">{product.name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">{product.summary}</p>
                  <div className="mt-5 flex items-center gap-1.5 border-t border-charcoal/10 pt-4 text-sm font-semibold text-charcoal/80 transition-colors group-hover:text-brass-dim">
                    View specifications
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Selection help */}
      <section className={`relative overflow-hidden ${PALE} ${SECTION}`}>
        <PalmLeaf className="pointer-events-none absolute -bottom-6 -right-6 hidden h-56 w-44 rotate-[20deg] text-forest/15 md:block" />
        <div className="pointer-events-none absolute left-4 top-6 hidden h-32 w-32 sm:block" style={DOTS} aria-hidden="true" />
        <div className={`${WRAP} relative`}>
          <div className="mx-auto flex max-w-3xl flex-col items-center rounded-2xl border border-brass/30 bg-white p-8 text-center shadow-sm sm:p-12">
            <IconCircle name="help" />
            <h2 className="mt-5 font-display text-2xl font-medium text-forest sm:text-3xl">Not Sure Which Format Fits?</h2>
            <p className={`mx-auto mt-3 max-w-xl ${BODY}`}>
              Tell us your application and target specification — our export desk will point you to the right grade
              before you commit to a quote.
            </p>
            <Link to="/request-a-quote/" className={`${BTN_BRASS} mt-7`}>Request product advice</Link>
          </div>
        </div>
      </section>
    </>
  );
}