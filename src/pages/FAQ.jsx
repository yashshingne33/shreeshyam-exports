import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { FAQS } from "../data/site.js";
import { SECTION, WRAP, BODY, PALE, BTN_BRASS, IconCircle, PalmLeaf, CornerDecor } from "../components/PageDecor.jsx";

export default function FAQ() {
  return (
    <>
      <PageHero
        kicker="FAQ · P12"
        title="Coconut Charcoal Sourcing Questions"
        body="Answers about product selection, quotations, samples and packaging. Ask us directly for anything order-specific."
      />
      <Breadcrumbs trail={[{ label: "FAQ" }]} />

      {/* Questions */}
      <section className={`relative overflow-hidden bg-white ${SECTION}`}>
        <CornerDecor />
        <div className={`${WRAP} relative`}>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      {/* Still have a question */}
      <section className={`relative overflow-hidden ${PALE} py-14 sm:py-16 lg:py-20`}>
        <PalmLeaf className="pointer-events-none absolute -bottom-6 -left-6 hidden h-56 w-44 rotate-[-20deg] text-forest/15 md:block" />
        <PalmLeaf className="pointer-events-none absolute -bottom-6 -right-6 hidden h-56 w-44 rotate-[20deg] text-forest/15 md:block" />
        <div className={`${WRAP} relative`}>
          <div className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-brass/30 bg-white p-8 text-center shadow-md sm:p-10">
            <IconCircle name="help" />
            <h2 className="mt-5 font-display text-2xl font-medium text-forest sm:text-3xl">Still Have a Question?</h2>
            <p className={`mx-auto mt-3 max-w-md ${BODY}`}>
              Send us your product, quantity and destination and we'll follow up with specifics.
            </p>
            <Link to="/request-a-quote/" className={`${BTN_BRASS} mt-6`}>Request a quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}