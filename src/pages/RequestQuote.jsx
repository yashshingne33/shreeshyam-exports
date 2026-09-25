import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import RfqForm from "../components/RfqForm.jsx";
import { COMPANY } from "../data/site.js";

export default function RequestQuote() {
  return (
    <>
      <PageHero
        kicker="Request a quote · P11"
        title="Tell Us What You Need"
        body="Send your charcoal product, quantity and destination requirements. Our export desk reviews every enquiry personally."
      />
      <Breadcrumbs trail={[{ label: "Request a Quote" }]} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-8">
          <div className="rounded-2xl border border-charcoal/10 bg-ivory/30 p-6 sm:p-9">
            <RfqForm sourcePageId="P11" />
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
              <h2 className="font-display text-lg font-medium text-charcoal">Direct Contact</h2>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                <li>
                  Email:{" "}
                  <a href={`mailto:${COMPANY.email}`} className="text-brass-dim underline underline-offset-2">
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  Phone / WhatsApp:{" "}
                  <a href={`https://wa.me/${COMPANY.whatsapp}`} className="text-brass-dim underline underline-offset-2">
                    {COMPANY.phone}
                  </a>
                </li>
                <li>{COMPANY.address}</li>
                <li>{COMPANY.hours}</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-charcoal/10 bg-charcoal p-6 text-ivory">
              <h2 className="font-display text-lg font-medium">What Happens Next</h2>
              <ol className="mt-4 space-y-3 text-sm text-ivory/80">
                <li>1. We review your requirements against available grades.</li>
                <li>2. We confirm specification, packaging and indicative terms.</li>
                <li>3. You receive a quotation to discuss and refine.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
