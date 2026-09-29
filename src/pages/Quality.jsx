import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import coconutImg from "../assets/coconut6.jpg";

/* ---------------------------------------------------------------------- */
/*  Quality page — built to match the reference mock-up:                  */
/*  • Process: 4 equal cards, brass number badge on the card corner,      */
/*    pale-green icon circle, dashed brass connectors between cards       */
/*  • Documents: pale-green band, heading on the left, 3 columns with     */
/*    thin dividers, palm leaf + charcoal cubes decoration, brass arc     */
/*  Text content is unchanged from the original file.                     */
/*                                                                        */
/*  Optional decoration image (transparent PNG in /public/images/):       */
/*    charcoal-cubes.png – bottom-left of the documents band              */
/*  If it's missing the page still looks complete (SVG leaves are used).  */
/* ---------------------------------------------------------------------- */

const SECTION = "py-16 sm:py-20 lg:py-24";
const WRAP = "container mx-auto max-w-content px-5 sm:px-6 lg:px-8";
const H2 = "font-display text-3xl font-medium leading-tight text-forest sm:text-4xl";
const BODY = "text-[15px] leading-relaxed text-charcoal/70";

const DOTS = {
  backgroundImage: "radial-gradient(rgba(175,149,96,0.45) 1.4px, transparent 1.4px)",
  backgroundSize: "16px 16px",
};

/* ------------------------------ Icons --------------------------------- */

const ICONS = {
  shield: "M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5",
  clipboard: "M9 4h6v3H9V4zM7 5H6a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-1M8.5 13l2.2 2.2 4.3-4.6",
  cube: "M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9",
  box: "M3 8l9-5 9 5v9l-9 5-9-5V8zM3 8l9 5 9-5M12 13v9M8 5.5l9 5",
  file: "M7 3h7l5 5v13H7V3zM14 3v5h5M10 13h6M10 17h6",
  flask: "M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3M8 15h8",
  truck: "M2 6h11v10H2V6zM13 9h4l4 4v3h-8V9zM6 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
};

function Icon({ name, className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

/* Soft palm leaf drawn in SVG (used as faded decoration) */
function PalmLeaf({ className = "" }) {
  return (
    <svg viewBox="0 0 160 200" className={className} aria-hidden="true">
      <path d="M80 200 C 80 140, 82 70, 84 8" stroke="currentColor" strokeWidth="2" fill="none" />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const y = 170 - i * 27;
        const len = 62 - i * 6;
        return (
          <g key={i} fill="currentColor">
            <ellipse cx={76 - len / 2} cy={y} rx={len / 2} ry="7" transform={`rotate(-28 76 ${y})`} />
            <ellipse cx={88 + len / 2} cy={y - 4} rx={len / 2} ry="7" transform={`rotate(28 88 ${y - 4})`} />
          </g>
        );
      })}
    </svg>
  );
}

/* Hides itself if the optional PNG isn't there */
function Deco({ src, className }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      onError={(e) => (e.currentTarget.style.display = "none")}
      className={className}
    />
  );
}

/* ------------------------------ Data ---------------------------------- */

const PROCESS = [
  { step: "01", icon: "shield", title: "Supplier qualification", body: "Coconut shell sources are reviewed before material is accepted into the supply chain." },
  { step: "02", icon: "clipboard", title: "Incoming checks", body: "Incoming shell and semi-processed material is checked against the target grade before further processing." },
  { step: "03", icon: "cube", title: "Product inspection", body: "Formed products (briquettes, cubes) are inspected for dimension, density and visual consistency." },
  { step: "04", icon: "box", title: "Batch release", body: "Each batch is released against its documented specification before packing for dispatch." },
];

const DOCUMENTS = [
  { icon: "file", name: "Specification sheet", desc: "Dimensions, ash, moisture and fixed carbon for the confirmed grade, dated at issue." },
  { icon: "flask", name: "Certificate of Analysis (where tested)", desc: "Shared for the relevant batch when a report exists — we don't issue reports we don't hold." },
  { icon: "truck", name: "Packing list & invoice", desc: "Standard shipment documents, confirmed per order." },
];

/* ------------------------------ Page ---------------------------------- */

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

      {/* ---------------- Quality process ---------------- */}
      <section className={`relative overflow-hidden bg-white ${SECTION}`}>
        {/* Faded palm leaf (top-left) and dot pattern (top-right) */}
        <PalmLeaf className="pointer-events-none absolute -left-8 top-4 hidden h-44 w-36 rotate-[35deg] text-forest/10 sm:block" />
        <div className="pointer-events-none absolute right-4 top-6 hidden h-36 w-36 sm:block" style={DOTS} aria-hidden="true" />

        <div className={`${WRAP} relative`}>
          <div className="text-center">
            <h2 className={H2}>Our Quality Process</h2>
            <p className={`mx-auto mt-3 max-w-xl ${BODY}`}>
              From supplier qualification through to batch release — each stage is a checkpoint, not a marketing claim.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, idx) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-charcoal/10 bg-white p-6 pt-8 shadow-[0_6px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg sm:p-7 sm:pt-9"
              >
                {/* Number badge on the card corner */}
                <span className="absolute -left-2 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-brass text-sm font-semibold text-white shadow-md">
                  {item.step}
                </span>

                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Icon name={item.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-medium text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.body}</p>

                {/* Dashed brass connector to the next card (desktop only) */}
                {idx < PROCESS.length - 1 && (
                  <svg
                    className="pointer-events-none absolute -right-10 top-1/3 hidden h-8 w-10 lg:block"
                    viewBox="0 0 40 30"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M0 22 C 12 22, 14 6, 40 8" stroke="#AF9560" strokeWidth="1.6" strokeDasharray="4 4" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Testing & documents ---------------- */}
      <section className="relative overflow-hidden bg-[#F1F5EF] pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20">
        {/* Bottom-left decoration */}
        <PalmLeaf className="pointer-events-none absolute -bottom-6 -left-6 hidden h-56 w-44 rotate-[-20deg] text-forest/15 md:block" />
        <Deco
          src="/images/charcoal-cubes.png"
          className="pointer-events-none absolute bottom-0 left-10 hidden w-56 lg:block"
        />
        {/* Bottom-right brass arc */}
        <svg
          className="pointer-events-none absolute -bottom-24 -right-16 hidden h-72 w-72 lg:block"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="130" cy="130" r="110" stroke="#AF9560" strokeWidth="1.5" strokeOpacity="0.7" />
        </svg>

        <div className={`${WRAP} relative`}>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr_1fr_1fr] lg:gap-0">
            <div className="lg:pr-10">
              <h2 className={H2}>Testing & Documents</h2>
              <p className={`mt-3 ${BODY}`}>
                Available reports, parameters and batch references are listed here as they're confirmed. No certification
                badge appears on this site without evidence and permission to publish.
              </p>
            </div>

            {DOCUMENTS.map((doc) => (
              <div
                key={doc.name}
                className="border-t border-charcoal/10 pt-8 lg:border-l lg:border-t-0 lg:px-8 lg:pt-0"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Icon name={doc.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug text-forest">{doc.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{doc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center lg:mt-14">
            <Link
              to="/request-a-quote/"
              className="inline-flex items-center justify-center rounded-full bg-brass px-8 py-3 text-sm font-semibold text-charcoal shadow-md shadow-brass/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c2a877]"
            >
              Request a relevant report
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- Material sourcing ---------------- */}
      <section className={`relative overflow-hidden bg-white ${SECTION}`}>
        <div className="pointer-events-none absolute -right-4 top-6 hidden h-32 w-32 sm:block" style={DOTS} aria-hidden="true" />
        <div className={`${WRAP} relative`}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <h2 className={H2}>Material Sourcing</h2>
              <p className={`mt-4 ${BODY}`}>
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

            <div className="order-1 mx-auto w-full max-w-lg lg:order-2 lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-charcoal/10 shadow-lg">
                <img
                  src={coconutImg}
                  alt="Coconut shell being processed into charcoal"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}