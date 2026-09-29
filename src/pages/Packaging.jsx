import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { SECTION, WRAP, H2, BODY, PALE, DOTS, BTN_BRASS, IconCircle, PalmLeaf, CornerDecor, StepCards } from "../components/PageDecor.jsx";

const PACK_OPTIONS = [
  { icon: "bag", title: "Bulk export bags", weight: "25kg / 50kg", desc: "Standard woven bags for bulk shell charcoal or briquette shipments." },
  { icon: "bulk", title: "Bulk bags (jumbo)", weight: "500kg – 1,000kg", desc: "For larger container-load orders where bulk-bag handling suits your unloading setup." },
  { icon: "box", title: "Master export cartons", weight: "10kg / 20kg", desc: "5-ply corrugated cartons for briquettes and hookah cubes, palletised for FCL loading." },
  { icon: "tag", title: "Retail boxes", weight: "1kg / 250g", desc: "Printed retail-ready boxes for hookah/shisha and BBQ retail, subject to private-label approval." },
];

const PRIVATE_LABEL_STEPS = [
  { n: "01", icon: "chat", title: "Brief", body: "Share your brand, target market and pack sizes." },
  { n: "02", icon: "file", title: "Dieline & artwork", body: "We confirm the dieline and you supply or approve artwork." },
  { n: "03", icon: "sample", title: "Sample approval", body: "A packed sample is confirmed before bulk production." },
  { n: "04", icon: "shield", title: "Agreed packing", body: "Production proceeds to the approved specification and artwork." },
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

      {/* Pack options */}
      <section className={`relative overflow-hidden bg-white ${SECTION}`}>
        <CornerDecor />
        <div className={`${WRAP} relative`}>
          <div className="text-center">
            <h2 className={H2}>Pack Options</h2>
            <p className={`mx-auto mt-3 max-w-xl ${BODY}`}>
              Approved bulk and retail configurations, confirmed with net/gross weight per order.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PACK_OPTIONS.map((pack) => (
              <div
                key={pack.title}
                className="group flex flex-col rounded-2xl border border-charcoal/10 bg-white p-6 shadow-[0_6px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg sm:p-7"
              >
                <IconCircle name={pack.icon} />
                <span className="mt-5 inline-block self-start rounded-full bg-brass/15 px-3 py-1 text-xs font-semibold text-brass-dim">
                  {pack.weight}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium text-forest">{pack.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{pack.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private-label process */}
      <section className={`relative overflow-hidden ${PALE} ${SECTION}`}>
        <PalmLeaf className="pointer-events-none absolute -bottom-6 -left-6 hidden h-56 w-44 rotate-[-20deg] text-forest/15 md:block" />
        <div className="pointer-events-none absolute right-4 top-6 hidden h-28 w-28 sm:block" style={DOTS} aria-hidden="true" />
        <div className={`${WRAP} relative`}>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className={H2}>Private-Label Process</h2>
            <span className="rounded-full border border-brass/40 bg-white px-4 py-1.5 text-xs font-semibold text-brass-dim">
              Illustrative — confirm capability with our team
            </span>
          </div>

          <div className="mt-14">
            <StepCards items={PRIVATE_LABEL_STEPS} />
          </div>

          <div className="mt-12 text-center">
            <Link to="/request-a-quote/" className={BTN_BRASS}>Start a private-label enquiry</Link>
          </div>
        </div>
      </section>
    </>
  );
}