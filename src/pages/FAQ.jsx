import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { FAQS } from "../data/site.js";

export default function FAQ() {
  return (
    <>
      <PageHero
        kicker="FAQ · P12"
        title="Coconut Charcoal Sourcing Questions"
        body="Answers about product selection, quotations, samples and packaging. Ask us directly for anything order-specific."
      />
      <Breadcrumbs trail={[{ label: "FAQ" }]} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <FaqAccordion items={FAQS} />

          <div className="mt-12 rounded-2xl border border-charcoal/10 bg-ivory/40 p-8 text-center">
            <h2 className="font-display text-xl font-medium text-charcoal">Still Have a Question?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
              Send us your product, quantity and destination and we'll follow up with specifics.
            </p>
            <Link
              to="/request-a-quote/"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-brass px-7 py-3 text-sm font-medium text-charcoal transition-transform hover:scale-[1.02] hover:bg-[#c2a877]"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
