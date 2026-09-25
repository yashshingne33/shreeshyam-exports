import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const PACK_OPTIONS = [
  { title: "Bulk export bags", weight: "25kg / 50kg", desc: "Standard woven bags for bulk shell charcoal or briquette shipments." },
  { title: "Bulk bags (jumbo)", weight: "500kg – 1,000kg", desc: "For larger container-load orders where bulk-bag handling suits your unloading setup." },
  { title: "Master export cartons", weight: "10kg / 20kg", desc: "5-ply corrugated cartons for briquettes and hookah cubes, palletised for FCL loading." },
  { title: "Retail boxes", weight: "1kg / 250g", desc: "Printed retail-ready boxes for hookah/shisha and BBQ retail, subject to private-label approval." },
];

const PRIVATE_LABEL_STEPS = [
  { n: "01", title: "Brief", body: "Share your brand, target market and pack sizes." },
  { n: "02", title: "Dieline & artwork", body: "We confirm the dieline and you supply or approve artwork." },
  { n: "03", title: "Sample approval", body: "A packed sample is confirmed before bulk production." },
  { n: "04", title: "Agreed packing", body: "Production proceeds to the approved specification and artwork." },
];

export default function Packaging() {
  return (
    <>
      <PageHero
        kicker="Packaging & private label · P08"
        title="Packaging for Your Market"
        body="Bulk export packing and retail-ready private label — matched to your volumes, market and branding requirements."
      />
      <Breadcrumbs trail={[{ label: "Packaging & Private Label" }]} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Pack Options</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">
            Approved bulk and retail configurations, confirmed with net/gross weight per order.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PACK_OPTIONS.map((pack) => (
              <div key={pack.title} className="rounded-xl border border-charcoal/10 bg-ivory/30 p-6">
                <span className="text-xs font-semibold tracking-wide text-brass">{pack.weight}</span>
                <h3 className="mt-2 font-display text-lg font-medium text-charcoal">{pack.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-charcoal/70">{pack.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory/40 py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Private-Label Process</h2>
            <span className="rounded-full border border-brass/30 bg-brass/10 px-3 py-1 text-xs font-medium text-brass">
              Illustrative — confirm capability with our team
            </span>
          </div>
          <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRIVATE_LABEL_STEPS.map((step) => (
              <div key={step.n} className="rounded-xl border border-charcoal/10 bg-white p-6 shadow-sm">
                <span className="font-display text-2xl font-medium text-brass">{step.n}</span>
                <h3 className="mt-3 font-display text-lg font-medium text-charcoal">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-charcoal/70">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/request-a-quote/"
              className="inline-flex items-center justify-center rounded-full bg-brass px-8 py-3.5 text-[15px] font-medium text-charcoal transition-transform hover:scale-[1.02] hover:bg-[#c2a877]"
            >
              Start a private-label enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
