import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { PRODUCTS } from "../data/products.js";

export default function Products() {
  return (
    <>
      <PageHero
        kicker="Products · P02"
        title="Explore Our Coconut Charcoal Products"
        body="Compare formats, applications and specification availability, then send your requirements for a tailored quote."
      />
      <Breadcrumbs trail={[{ label: "Products" }]} />

      <section className="bg-ivory/40 py-20 sm:py-24">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}/`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/70 hover:shadow-xl hover:shadow-brass/10"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-charcoal/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wide text-brass">{product.tagline}</span>
                    {product.conditional && (
                      <span className="rounded-full border border-brass/30 bg-brass/10 px-2.5 py-0.5 text-[10px] font-medium text-brass">
                        Conditional
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-medium text-charcoal">{product.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">{product.summary}</p>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold tracking-wide text-charcoal/80 transition-colors group-hover:text-brass">
                    View specifications
                    <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Quick Comparison</h2>
            <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">
              Confirmed shape, intended application and packaging availability at a glance. Full specifications are on
              each product page.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-charcoal/10 bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-charcoal/10 bg-ivory/60 text-xs uppercase tracking-wide text-charcoal/50">
                    <th scope="col" className="px-5 py-3.5 font-semibold">Product</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Typical application</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Format</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS.map((product) => (
                    <tr key={product.slug} className="border-b border-charcoal/5 last:border-0">
                      <th scope="row" className="px-5 py-4 font-medium text-charcoal">
                        <Link to={`/products/${product.slug}/`} className="hover:text-brass-dim">
                          {product.shortName}
                        </Link>
                      </th>
                      <td className="px-5 py-4 text-ink-soft">{product.applications[0]}</td>
                      <td className="px-5 py-4 text-ink-soft capitalize">{product.shape}</td>
                      <td className="px-5 py-4">
                        {product.conditional ? (
                          <span className="rounded-full bg-brass/10 px-2.5 py-0.5 text-xs font-medium text-brass">Conditional</span>
                        ) : (
                          <span className="rounded-full bg-forest/10 px-2.5 py-0.5 text-xs font-medium text-forest">Available</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Selection help */}
          <div className="mt-16 rounded-2xl border border-charcoal/10 bg-white p-8 text-center sm:p-10">
            <h2 className="font-display text-2xl font-medium text-charcoal">Not Sure Which Format Fits?</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Tell us your application and target specification — our export desk will point you to the right grade
              before you commit to a quote.
            </p>
            <Link
              to="/request-a-quote/"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-brass px-8 py-3.5 text-[15px] font-medium text-charcoal transition-transform hover:scale-[1.02] hover:bg-[#c2a877]"
            >
              Request product advice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
