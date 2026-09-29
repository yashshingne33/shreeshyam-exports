import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { ORDERING_STEPS } from "../data/site.js";
import { SECTION, WRAP, H2, BODY, PALE, DOTS, BTN_DARK, Icon, IconCircle, PalmLeaf, CornerDecor, StepCards } from "../components/PageDecor.jsx";

const DOCUMENTS = ["Commercial invoice", "Packing list", "Certificate of origin (where applicable)", "Analysis / test report (where tested)"];

const ORDER_FAQS = [
  { q: "How does sample pricing work?", a: "Samples are usually chargeable, with courier cost discussed separately — select \"Sample\" as the enquiry type and we'll confirm cost and timing for your destination." },
  { q: "What triggers the production lead time?", a: "Lead time typically starts from order confirmation, payment or artwork approval depending on the product — we state the trigger explicitly with your quotation, plus a separate transit estimate." },
  { q: "How is payment discussed?", a: "Payment terms are confirmed with your quotation once the order size and trade term are known. Tell us your preference in the enquiry form and we'll follow up." },
];

/* Icons assigned by position, so the data file doesn't need to change */
const STEP_ICONS = ["chat", "clipboard", "box", "truck"];
const JOURNEY = ORDERING_STEPS.map((step, i) => ({ ...step, icon: STEP_ICONS[i % STEP_ICONS.length] }));

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
      <section className={`relative overflow-hidden bg-white ${SECTION}`}>
        <CornerDecor />
        <div className={`${WRAP} relative`}>
          <div className="text-center">
            <h2 className={H2}>The Order Journey</h2>
          </div>
          <div className="mt-14">
            <StepCards items={JOURNEY} />
          </div>
        </div>
      </section>

      {/* Shipping and documents */}
      <section className={`relative overflow-hidden ${PALE} ${SECTION}`}>
        <PalmLeaf className="pointer-events-none absolute -bottom-6 -left-6 hidden h-56 w-44 rotate-[-20deg] text-forest/15 md:block" />
        <div className={`${WRAP} relative`}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className={H2}>Shipping & Documents</h2>
              <p className={`mt-4 ${BODY}`}>
                Origin, loading port and supported trade terms are confirmed per offer — our logistics team reviews
                destination and carrier requirements with you rather than assuming a universal shipping setup.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {DOCUMENTS.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 rounded-xl border border-charcoal/10 bg-white p-3.5 text-sm text-charcoal/80 shadow-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brass/30 bg-white p-6 shadow-md sm:p-8">
              <IconCircle name="pin" />
              <h3 className="mt-4 font-display text-xl font-medium text-forest">Discuss Your Destination</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                Share your destination port or city and we'll confirm feasibility, documentation and available trade
                terms for that route.
              </p>
              <Link to="/request-a-quote/" className={`${BTN_DARK} mt-6`}>Request a quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Samples and FAQ */}
      <section className={`relative overflow-hidden bg-white ${SECTION}`}>
        <div className="pointer-events-none absolute right-4 top-6 hidden h-32 w-32 sm:block" style={DOTS} aria-hidden="true" />
        <div className={`${WRAP} relative`}>
          <div className="text-center">
            <h2 className={H2}>Samples & Common Questions</h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
            <FaqAccordion items={ORDER_FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}