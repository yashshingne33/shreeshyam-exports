import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const PLANNED_TOPICS = [
  "Choosing between shell charcoal, briquettes and hookah cubes",
  "How to read a charcoal specification sheet",
  "Planning packaging for a private-label order",
  "Preparing a useful RFQ for faster quotations",
];

export default function Guides() {
  return (
    <>
      <PageHero
        kicker="Buyer guides · P16"
        title="Coconut Charcoal Buying Guides"
        body="Practical, reviewed guidance for buyers — published once articles have a named author and factual review."
      />
      <Breadcrumbs trail={[{ label: "Buyer Guides" }]} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-content px-6 lg:px-8">
          <div className="rounded-2xl border border-dashed border-charcoal/20 bg-ivory/30 p-8 text-center sm:p-12">
            <span className="rounded-full border border-brass/30 bg-brass/10 px-3 py-1 text-xs font-medium text-brass">
              Coming later
            </span>
            <h2 className="mx-auto mt-4 max-w-lg font-display text-2xl font-medium text-charcoal">
              Guides Publish Once They're Written & Reviewed
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-ink-soft">
              This is a later-phase section (P2) — we won't publish thin or unreviewed articles just to fill it. Here's
              what's planned:
            </p>
            <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-sm text-charcoal/75">
              {PLANNED_TOPICS.map((topic) => (
                <li key={topic} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brass/20 text-brass">
                    &#10003;
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
            <Link
              to="/request-a-quote/"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brass px-7 py-3 text-sm font-medium text-charcoal transition-transform hover:scale-[1.02] hover:bg-[#c2a877]"
            >
              Ask our team directly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
