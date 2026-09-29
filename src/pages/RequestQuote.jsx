import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import RfqForm from "../components/RfqForm.jsx";
import { COMPANY } from "../data/site.js";
import { SECTION, WRAP, BODY, DOTS, Icon, IconCircle, PalmLeaf, CornerDecor } from "../components/PageDecor.jsx";

export default function RequestQuote() {
  return (
    <>
      <PageHero
        kicker="Request a quote · P11"
        title="Tell Us What You Need"
        body="Send your charcoal product, quantity and destination requirements. Our export desk reviews every enquiry personally."
      />
      <Breadcrumbs trail={[{ label: "Request a Quote" }]} />

      <section className={`relative overflow-hidden bg-white ${SECTION}`}>
        <CornerDecor />
        <div className={`${WRAP} relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12`}>
          <div className="rounded-2xl border border-charcoal/10 bg-[#FAF8F5] p-6 shadow-sm sm:p-9">
            <RfqForm sourcePageId="P11" />
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-[0_6px_24px_-8px_rgba(0,0,0,0.12)] sm:p-7">
              <div className="flex items-center gap-4">
                <IconCircle name="chat" className="h-12 w-12" />
                <h2 className="font-display text-lg font-medium text-forest">Direct Contact</h2>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-charcoal/75">
                <li className="flex items-start gap-2.5">
                  <Icon name="file" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  <span>
                    Email:{" "}
                    <a href={`mailto:${COMPANY.email}`} className="text-brass-dim underline underline-offset-2">
                      {COMPANY.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="chat" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  <span>
                    Phone / WhatsApp:{" "}
                    <a href={`https://wa.me/${COMPANY.whatsapp}`} className="text-brass-dim underline underline-offset-2">
                      {COMPANY.phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  <span>{COMPANY.address}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  <span>{COMPANY.hours}</span>
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal p-6 text-ivory shadow-lg sm:p-7">
              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-brass/10" aria-hidden="true" />
              <h2 className="relative font-display text-lg font-medium text-brass">What Happens Next</h2>
              <ol className="relative mt-5 space-y-4 text-sm text-ivory/85">
                {[
                  "We review your requirements against available grades.",
                  "We confirm specification, packaging and indicative terms.",
                  "You receive a quotation to discuss and refine.",
                ].map((line, idx) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass text-xs font-bold text-charcoal">
                      {idx + 1}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}