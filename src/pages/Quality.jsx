import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import coconutImg from "../assets/coconut6.jpg";

const PROCESS = [
  { step: "01", title: "Supplier qualification", body: "Coconut shell sources are reviewed before material is accepted into the supply chain." },
  { step: "02", title: "Incoming checks", body: "Incoming shell and semi-processed material is checked against the target grade before further processing." },
  { step: "03", title: "Product inspection", body: "Formed products (briquettes, cubes) are inspected for dimension, density and visual consistency." },
  { step: "04", title: "Batch release", body: "Each batch is released against its documented specification before packing for dispatch." },
];

const DOCUMENTS = [
  { name: "Specification sheet", desc: "Dimensions, ash, moisture and fixed carbon for the confirmed grade, dated at issue." },
  { name: "Certificate of Analysis (where tested)", desc: "Shared for the relevant batch when a report exists — we don't issue reports we don't hold." },
  { name: "Packing list & invoice", desc: "Standard shipment documents, confirmed per order." },
];

export default function Quality() {
  return (
    <>
      <PageHero
        kicker="Quality · P07"
        title="Quality Defined by Your Product Specification"
        body="We start with the specification, not a generic promise — every claim on this page is backed by a document we can share."
        image={coconutImg}
      />
      <Breadcrumbs trail={[{ label: "Quality" }]} />

      {/* Quality process */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Our Quality Process</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">
            From supplier qualification through to batch release — each stage is a checkpoint, not a marketing claim.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item) => (
              <div key={item.step} className="rounded-xl border border-charcoal/10 bg-ivory/30 p-6">
                <span className="font-display text-2xl font-medium text-brass">{item.step}</span>
                <h3 className="mt-3 font-display text-lg font-medium text-charcoal">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-charcoal/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing and documents */}
      <section className="bg-ivory/40 py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Testing & Documents</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-ink-soft">
            Available reports, parameters and batch references are listed here as they're confirmed. No certification
            badge appears on this site without evidence and permission to publish.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {DOCUMENTS.map((doc) => (
              <div key={doc.name} className="rounded-xl border border-charcoal/10 bg-white p-6 shadow-sm">
                <h3 className="font-display text-base font-medium text-charcoal">{doc.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-charcoal/70">{doc.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/request-a-quote/"
              className="inline-flex items-center justify-center rounded-full bg-brass px-7 py-3 text-sm font-medium text-charcoal transition-transform hover:scale-[1.02] hover:bg-[#c2a877]"
            >
              Request a relevant report
            </Link>
          </div>
        </div>
      </section>

      {/* Material sourcing */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Material Sourcing</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
                Our products are carbonised from coconut shell — a byproduct of coconut processing rather than a
                purpose-grown material. Where a formed product uses a binder, its composition is disclosed rather than
                left unstated. We avoid blanket "carbon-neutral" or similar claims that aren't backed by evidence.
              </p>
              <Link
                to="/products/"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-dim hover:underline hover:underline-offset-4"
              >
                Explore products &rarr;
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img src={coconutImg} alt="Coconut shell being processed into charcoal" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
