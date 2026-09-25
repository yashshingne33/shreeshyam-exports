import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { ORDERING_STEPS } from "../data/site.js";

const DOCUMENTS = ["Commercial invoice", "Packing list", "Certificate of origin (where applicable)", "Analysis / test report (where tested)"];

const ORDER_FAQS = [
  { q: "How does sample pricing work?", a: "Samples are usually chargeable, with courier cost discussed separately — select \"Sample\" as the enquiry type and we'll confirm cost and timing for your destination." },
  { q: "What triggers the production lead time?", a: "Lead time typically starts from order confirmation, payment or artwork approval depending on the product — we state the trigger explicitly with your quotation, plus a separate transit estimate." },
  { q: "How is payment discussed?", a: "Payment terms are confirmed with your quotation once the order size and trade term are known. Tell us your preference in the enquiry form and we'll follow up." },
];

export default function ExportOrdering() {
  return (
    <>
      <PageHero
        kicker="Export & ordering · P09"
        title="From Product Selection to Shipment"
        body="A transparent order journey — responsibilities explained rather than a fixed universal lead time promised."
      />
      <Breadcrumbs trail={[{ label: "Export & Ordering" }]} />

      {/* Order journey */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">The Order Journey</h2>
          <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ORDERING_STEPS.map((step) => (
              <div key={step.n} className="rounded-xl border border-charcoal/10 bg-ivory/30 p-6">
                <span className="font-display text-2xl font-medium text-brass">{step.n}</span>
                <h3 className="mt-3 font-display text-lg font-medium text-charcoal">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-charcoal/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping and documents */}
      <section className="bg-ivory/40 py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Shipping & Documents</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
                Origin, loading port and supported trade terms are confirmed per offer — our logistics team reviews
                destination and carrier requirements with you rather than assuming a universal shipping setup.
              </p>
              <ul className="mt-6 space-y-2.5">
                {DOCUMENTS.map((doc) => (
                  <li key={doc} className="flex items-center gap-2.5 text-sm text-charcoal/75">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brass/20 text-brass">&#10003;</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-charcoal/10 bg-white p-7 sm:p-8">
              <h3 className="font-display text-lg font-medium text-charcoal">Discuss Your Destination</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                Share your destination port or city and we'll confirm feasibility, documentation and available trade
                terms for that route.
              </p>
              <Link
                to="/request-a-quote/"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-2.5 text-xs font-semibold tracking-wide text-ivory transition-all hover:bg-charcoal/90"
              >
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Samples and FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Samples & Common Questions</h2>
          <div className="mt-8">
            <FaqAccordion items={ORDER_FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}
