import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";

export default function Terms() {
  return (
    <>
      <PageHero kicker="Website terms · P14" title="Website Terms" />
      <Breadcrumbs trail={[{ label: "Website Terms" }]} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-2xl px-6 lg:px-8">
          <p className="text-sm text-charcoal/50">Effective date: to be confirmed on launch.</p>

          <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-charcoal/80">
            <div>
              <h2 className="font-display text-xl font-medium text-charcoal">Purpose of This Site</h2>
              <p className="mt-3">
                This website describes coconut charcoal products offered by {COMPANY.legalName} and provides a way to
                request a quotation or specification. Product information is provided for enquiry purposes and does
                not constitute a binding offer until confirmed in a written quotation.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-medium text-charcoal">Product Information</h2>
              <p className="mt-3">
                Specifications shown are typical or indicative unless stated as a confirmed, dated specification.
                Figures are confirmed against your specific order before shipment.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-medium text-charcoal">No Warranty on Website Content</h2>
              <p className="mt-3">
                While we try to keep this site accurate and current, it's provided without warranty of completeness.
                Contact us to confirm any detail before relying on it commercially.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-medium text-charcoal">Contact</h2>
              <p className="mt-3">
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-brass-dim underline underline-offset-2">
                  {COMPANY.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
