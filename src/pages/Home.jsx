import { useState } from "react";
import { Link } from "react-router-dom";
import SealBadge from "../components/SealBadge.jsx";
import Logo from "../components/Logo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { PRODUCTS } from "../data/products.js";
import { ORDERING_STEPS } from "../data/site.js";
import heroImg from "../assets/hero-new3.png";
import groveImg from "../assets/coconut2.jpg";

/* ---------------------------------------------------------------------- */
/*  Home (P01) — Hero → Product range → Buyer applications → Quality      */
/*  preview → Packaging preview → Ordering process → Company credibility  */
/*  → Closing enquiry.                                                    */
/*                                                                        */
/*  Design rules used throughout (for consistency):                       */
/*  - Sections alternate white / warm-ivory backgrounds; no blur effects. */
/*  - One section rhythm (SECTION), one kicker style, one button set.     */
/*  - Cards: rounded-2xl, thin border, light shadow, hover lift.          */
/* ---------------------------------------------------------------------- */

const SECTION = "py-16 sm:py-20 lg:py-24";
const WRAP = "container mx-auto max-w-content px-5 sm:px-6 lg:px-8";
const KICKER = "text-xs font-semibold uppercase tracking-widest text-brass";
const H2 = "font-display text-3xl font-medium leading-tight text-charcoal sm:text-4xl lg:text-[2.75rem]";
const BODY = "text-[15px] leading-relaxed text-charcoal/75";

const BTN = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";
const BTN_BRASS = `${BTN} bg-brass text-charcoal shadow-md shadow-brass/25 hover:bg-[#c2a877] hover:-translate-y-0.5`;
const BTN_DARK = `${BTN} bg-charcoal text-ivory hover:bg-brass hover:text-charcoal hover:-translate-y-0.5`;
const BTN_LINE = `${BTN} border border-charcoal/20 bg-white text-charcoal hover:border-brass hover:bg-brass/10`;

const CARD = "rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg";

/* ------------------------------ Hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden sm:min-h-[92vh]">
      <img
        src={heroImg}
        alt="Coconut groves in mist at sunrise"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      {/* Light, even overlay — keeps the photo bright but the text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/45 via-charcoal/40 to-charcoal/55" />

      <div className={`${WRAP} relative z-10 py-24 text-center sm:py-32`}>
        <div className="mx-auto flex justify-center">
          <SealBadge />
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl font-display text-[2.25rem] font-medium leading-[1.1] text-ivory sm:text-5xl lg:text-[4.25rem]">
          Coconut Charcoal for Global Buyers
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/90 sm:text-[17px]">
          Explore coconut shell charcoal, briquettes and hookah cubes. Tell us your product,
          quantity and destination requirements, and our export desk will follow up directly.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link to="/request-a-quote/" className={`${BTN_BRASS} sm:px-8`}>
            Request a quote
          </Link>
          <Link
            to="/products/"
            className={`${BTN} border border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory/15 sm:px-8`}
          >
            Explore products
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-10 hidden sm:block">
        <Logo className="h-8 w-8" stroke="#AF9560" />
      </div>
    </section>
  );
}

/* --------------------------- Product range ---------------------------- */

function Silhouette({ shape }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5 };
  return (
    <svg width="24" height="24" viewBox="0 0 40 40" aria-hidden="true">
      {shape === "shell" && <path d="M20 6c7 2 13 8 13 15s-6 13-13 13S7 28 7 21c0-4 3-9 7-12" {...common} />}
      {shape === "briquette" && <rect x="6" y="14" width="28" height="12" rx="6" {...common} />}
      {shape === "cube" && <rect x="9" y="9" width="22" height="22" rx="2" {...common} />}
      {shape === "hex" && <path d="M20 5 33 12.5v15L20 35 7 27.5v-15L20 5z" {...common} />}
    </svg>
  );
}

function ProductRange() {
  return (
    <section className={`bg-[#FAF8F5] ${SECTION}`}>
      <div className={WRAP}>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className={KICKER}>Product range</span>
            <h2 className={`mt-2 ${H2}`}>Choose the Format for Your Market</h2>
            <p className={`mt-3 max-w-2xl ${BODY}`}>
              Shell charcoal, briquettes, hookah cubes and confirmed hexagonal formats — each grade sorted from natural coconut shell.
            </p>
          </div>
          <Link
            to="/products/"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-charcoal transition-colors hover:text-brass"
          >
            View all products
            <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}/`}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal p-5 text-ivory shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[320px]"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient only where the text sits, so the image stays bright */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/35 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-charcoal transition-colors duration-300 group-hover:bg-brass">
                  <Silhouette shape={product.shape} />
                </div>
                {product.conditional ? (
                  <span className="rounded-full bg-brass px-3 py-1 text-[11px] font-semibold text-charcoal">
                    Conditional
                  </span>
                ) : (
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-charcoal">
                    {product.tagline || "Available"}
                  </span>
                )}
              </div>

              <div className="relative z-10 mt-auto pt-10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brass">Coconut Shell</span>
                <h3 className="mt-1 font-display text-xl font-medium text-ivory transition-colors group-hover:text-brass sm:text-2xl">
                  {product.shortName}
                </h3>
                <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ivory/90">{product.summary}</p>
                <div className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold text-ivory transition-colors group-hover:text-brass">
                  <span>Browse specifications</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Buyer applications ------------------------- */

const APPLICATIONS = [
  {
    category: "Hospitality & Retail",
    title: "Hookah & Shisha Brands",
    body: "Cube formats for lounges, distributors, and private-label brands, cut to consistent sizes for smooth, even burning and low ash.",
    specs: ["Retail or bulk packing available", "Confirmed size ranges (e.g., 25–27mm)", "Custom private-label box branding"],
    highlight: "High Demand Grade",
    isPrimary: true,
  },
  {
    category: "Commercial & Foodservice",
    title: "BBQ & Hospitality Buyers",
    body: "Briquette and screened shell formats suited to commercial grilling and BBQ retail, with custom packaging matched to your container volumes.",
    specs: ["10kg / 20kg heavy-duty export cartons", "Confirmed specification sheet per grade", "Container-load palletisation & stuffing"],
    highlight: "Bulk Export Ready",
    isPrimary: false,
  },
];

function BuyerApplications() {
  return (
    <section className={`bg-white ${SECTION}`}>
      <div className={WRAP}>
        <SectionHeading
          kicker="Buyer applications"
          title="Built for Importers, Distributors & Brands"
          body="For hookah/shisha and BBQ buyers alike — every specification and packaging option is confirmed against your intended use before it ships."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-12 lg:items-stretch">
          {APPLICATIONS.map((app) => (
            <div
              key={app.title}
              className={`group flex flex-col justify-between rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 lg:p-10 ${
                app.isPrimary
                  ? "border-brass/50 bg-[#FAF8F5] lg:col-span-7"
                  : "border-charcoal/10 bg-white hover:border-brass/50 lg:col-span-5"
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={KICKER}>{app.category}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      app.isPrimary ? "bg-brass text-charcoal" : "bg-charcoal/5 text-charcoal/70"
                    }`}
                  >
                    {app.highlight}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-charcoal sm:text-3xl">
                  {app.title}
                </h3>
                <p className={`mt-3 ${BODY}`}>{app.body}</p>

                <ul className="mt-6 space-y-3 border-t border-charcoal/10 pt-5">
                  {app.specs.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brass/20 text-xs text-brass">
                        &#10003;
                      </span>
                      <span className="font-medium text-charcoal/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link to="/request-a-quote/" className={app.isPrimary ? BTN_BRASS : BTN_DARK}>
                  <span>Request specifications</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Quality preview -------------------------- */

const QUALITY_METRICS = [
  { id: "01", label: "Ash Content", value: "Confirmed per grade", sub: "Method & basis shared on request", method: "ASTM D3174 / ISO 1171", status: "Strict Tolerance" },
  { id: "02", label: "Moisture Level", value: "Confirmed per grade", sub: "Kiln-dried stability control", method: "ASTM D3173 / Oven Method", status: "Moisture Sealed" },
  { id: "03", label: "Fixed Carbon", value: "Confirmed per grade", sub: "Calculated precisely by difference", method: "Calculated (Dry Basis)", status: "High Heat Yield" },
  { id: "04", label: "Dimensions & Packaging", value: "Confirmed per SKU", sub: "Stated tolerances on spec sheet", method: "Caliper & Drop Test Standard", status: "Uniform Format" },
];

function QualityPreview() {
  const [activeMetric, setActiveMetric] = useState(0);
  const active = QUALITY_METRICS[activeMetric];

  return (
    <section className={`bg-[#FAF8F5] ${SECTION}`}>
      <div className={WRAP}>
        <SectionHeading
          kicker="Quality Control & Testing"
          title="Start with Verified Specifications"
          body="Ash, moisture, fixed carbon, and dimensions — every parameter is documented per grade for total export compliance."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 lg:grid-cols-12 lg:items-stretch lg:gap-8">
          {/* Metric selector — works on hover, tap and keyboard */}
          <div className="space-y-3 lg:col-span-7">
            {QUALITY_METRICS.map((metric, idx) => {
              const isActive = activeMetric === idx;
              return (
                <button
                  type="button"
                  key={metric.label}
                  onMouseEnter={() => setActiveMetric(idx)}
                  onFocus={() => setActiveMetric(idx)}
                  onClick={() => setActiveMetric(idx)}
                  aria-pressed={isActive}
                  className={`group relative flex w-full flex-col items-start justify-between gap-3 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:flex-row sm:items-center sm:p-5 ${
                    isActive
                      ? "border-brass bg-white shadow-lg shadow-brass/10"
                      : "border-charcoal/10 bg-white hover:border-brass/50"
                  }`}
                >
                  <span className={`absolute left-0 top-0 h-full w-1.5 ${isActive ? "bg-brass" : "bg-transparent"}`} />

                  <span className="flex items-center gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold transition-colors ${
                        isActive ? "bg-brass text-charcoal" : "bg-charcoal/5 text-charcoal/50"
                      }`}
                    >
                      {metric.id}
                    </span>
                    <span>
                      <span className="block font-display text-lg font-medium text-charcoal">{metric.label}</span>
                      <span className="mt-0.5 block text-[13px] text-charcoal/70">{metric.sub}</span>
                    </span>
                  </span>

                  <span className="inline-block shrink-0 rounded-full border border-charcoal/10 bg-[#FAF8F5] px-3 py-1 text-xs font-semibold text-charcoal">
                    {metric.value}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Inspector card */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-charcoal p-6 text-ivory shadow-xl sm:p-8">
              <div className="flex items-center justify-between gap-3 border-b border-ivory/15 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brass" />
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-brass">Lab Spec Node</span>
                </div>
                <span className="rounded-md bg-white/10 px-2.5 py-1 font-mono text-[10px] tracking-wider text-ivory/90">
                  VERIFIED GRADE
                </span>
              </div>

              <div className="mt-6 flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-ivory/70">Selected Parameter</span>
                <h4 className="mt-1 font-display text-2xl font-medium text-brass">{active.label}</h4>

                <div className="mt-5 space-y-3 rounded-xl border border-ivory/10 bg-white/5 p-4 sm:p-5">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-ivory/65">Target Value</span>
                    <p className="mt-0.5 text-base font-semibold text-ivory">{active.value}</p>
                  </div>
                  <div className="border-t border-ivory/10 pt-3">
                    <span className="text-[11px] uppercase tracking-wider text-ivory/65">Test Standard</span>
                    <p className="mt-0.5 font-mono text-xs text-brass">{active.method}</p>
                  </div>
                  <div className="border-t border-ivory/10 pt-3">
                    <span className="text-[11px] uppercase tracking-wider text-ivory/65">Quality Guarantee</span>
                    <p className="mt-0.5 text-sm text-ivory/90">{active.status}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-ivory/15 pt-4">
                <span className="text-xs text-ivory/70">Detailed CoA provided per batch</span>
                <Link to="/quality/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brass transition-colors hover:text-ivory">
                  <span>Full report</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm sm:mt-10 sm:flex-row sm:items-center sm:p-6">
          <p className="text-sm text-charcoal/75">Need custom testing tolerances or SGS inspection before loading?</p>
          <Link to="/quality/" className={`${BTN_DARK} shrink-0`}>
            Request Grade Specification Sheet &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Packaging preview ------------------------ */

function PackagingPreview() {
  return (
    <section className={`bg-white ${SECTION}`}>
      <div className={WRAP}>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 rounded-2xl border border-charcoal/10 bg-[#FAF8F5] p-5 sm:p-8 lg:order-1">
            <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
              <span className={KICKER}>Packaging preview</span>
              <span className="rounded-full bg-forest/10 px-3 py-1 text-[11px] font-semibold text-forest">Conditional</span>
            </div>
            <div className="mt-5 space-y-4">
              <div className={`${CARD} p-4 sm:p-5`}>
                <h4 className="text-base font-semibold text-charcoal">Bulk export packing</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/75">
                  Standard bags or master cartons, palletised for container loading, with net/gross weight confirmed per order.
                </p>
              </div>
              <div className={`${CARD} p-4 sm:p-5`}>
                <h4 className="text-base font-semibold text-charcoal">Retail & private label</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/75">
                  Branded boxes for hookah/shisha and BBQ retail, once artwork and minimum order quantity are agreed.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className={KICKER}>Custom & private-label</span>
            <h2 className={`mt-2 ${H2}`}>Packaging Shaped Around Your Requirements</h2>
            <p className={`mt-4 ${BODY}`}>
              Introduce approved bulk or retail options once your target market and volumes are known — this page publishes
              in full once packaging capability is confirmed.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link to="/packaging-private-label/" className={BTN_DARK}>
                Packaging &amp; private label &rarr;
              </Link>
              <Link to="/request-a-quote/" className={BTN_LINE}>
                Discuss packaging
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const unsplash = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

// Free-to-use Unsplash photos (Unsplash License, no attribution required)
const STEP_IMAGES = [
  unsplash("photo-1678182451047-196f22a4143e"), // 1 Containers stacked (Ali Mkumbwa)
  unsplash("photo-1706499856012-14f062c72b49"), // 2 Crane over container stack (taro ohtani)
  unsplash("photo-1673896493356-6684ede37a7d"), // 3 Harbor cranes (Foto K.)
  unsplash("photo-1691591765923-3bd6f12f4209"), // 4 Cargo ship with crane (Elijah Mears)
];

function OrderingProcess() {
  return (
    <section className={`overflow-hidden bg-[#FAF8F5] ${SECTION}`}>
      <div className={WRAP}>
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-brass/40 bg-brass/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brass">
            Seamless Fulfillment
          </span>
          <h2 className={`mx-auto mt-4 max-w-2xl ${H2}`}>A Clear, 4-Step Path to Shipment</h2>
          <p className={`mx-auto mt-4 max-w-xl ${BODY}`}>
            A transparent journey from your initial inquiry to container dispatch, tailored to your exact specification.
          </p>
        </div>

        {/* Extra bottom padding leaves room for the lowered cards on desktop */}
        <div className="relative mt-12 sm:mt-16 lg:pb-14">
          {/* Wavy route line that runs up and down behind the cards (desktop only) */}
          <svg
            className="pointer-events-none absolute left-0 top-24 hidden h-32 w-full lg:block"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 30 C 125 30, 125 90, 250 90 S 375 30, 500 30 S 625 90, 750 90 S 875 30, 1000 30"
              fill="none"
              stroke="#AF9560"
              strokeWidth="2"
              strokeDasharray="7 7"
              strokeOpacity="0.55"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {ORDERING_STEPS.map((step, idx) => (
              <article
                key={step.n || idx}
                /* up / down stagger: odd cards drop lower on desktop */
                className={`group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-brass hover:shadow-xl ${
                  idx % 2 === 1 ? "lg:mt-14" : "lg:mt-0"
                }`}
              >
                {/* Image header */}
                <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-brass/30 via-[#FAF8F5] to-brass/10 sm:h-44">
                  <img
                    src={STEP_IMAGES[idx % STEP_IMAGES.length]}
                    alt=""
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-charcoal shadow">
                    Phase 0{idx + 1}
                  </span>
                </div>

                {/* Number badge overlaps the image edge */}
                <div className="relative px-6 pb-6 sm:px-7 sm:pb-7">
                  <div className="-mt-7 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-charcoal font-display text-xl font-bold text-brass shadow-lg transition-colors duration-300 group-hover:bg-brass group-hover:text-charcoal">
                    {step.n || `0${idx + 1}`}
                  </div>

                  <h3 className="mt-4 font-display text-xl font-medium text-charcoal transition-colors group-hover:text-brass sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal/75">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-sm font-medium text-charcoal/70">
          Need a custom schedule or private-label timeline?{" "}
          <Link to="/request-a-quote/" className="font-semibold text-brass underline underline-offset-4 hover:text-charcoal">
            Talk directly with our export desk &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
}

/* ------------------------- Company credibility ------------------------ */

const CREDIBILITY_POINTS = [
  { title: "Direct shell sourcing", detail: "Coconut shell sourced from regional supply networks, with sourcing role clearly stated rather than implied." },
  { title: "Specification-led quality", detail: "Every quotation is tied to a documented specification, not a generic company-wide promise." },
  { title: "Export documentation", detail: "Available invoice, packing list and origin documents are confirmed per shipment as applicable." },
];

function CompanyCredibility() {
  return (
    <section className={`bg-white ${SECTION}`}>
      <div className={WRAP}>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <span className={KICKER}>Company credibility</span>
            <h2 className={`mt-2 ${H2}`}>A Dedicated Sourcing &amp; Export Partner</h2>
            <p className={`mt-4 ${BODY}`}>
              Shree Shyam Exports connects coconut shell supply with international buyers, working to the specification
              and packaging you confirm — not a one-size-fits-all offer.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link to="/about/" className={BTN_DARK}>
                About our company &rarr;
              </Link>
              <Link to="/quality/" className={BTN_LINE}>
                See our quality process
              </Link>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-lg lg:order-2 lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory shadow-lg">
              <img
                src={groveImg}
                alt="Coconut palm groves in the highlands"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 rounded-xl bg-white px-4 py-2.5 shadow-lg sm:bottom-5 sm:left-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brass">Sourcing Origin</p>
                <p className="mt-0.5 text-sm font-medium text-charcoal">Sustainable Palm Plantations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-3">
          {CREDIBILITY_POINTS.map((item, idx) => (
            <div key={item.title} className={`${CARD} bg-[#FAF8F5] p-5 sm:p-6`}>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brass/20 text-xs font-bold text-brass">
                0{idx + 1}
              </span>
              <h3 className="mt-3 text-base font-semibold text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Closing enquiry -------------------------- */

function ClosingEnquiry() {
  return (
    <section className="bg-charcoal py-16 text-ivory sm:py-20 lg:py-24">
      <div className={`${WRAP} text-center`}>
        <span className="inline-block rounded-full border border-brass/40 bg-brass/10 px-4 py-1.5 text-xs font-semibold text-brass">
          Start your enquiry
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
          Let&rsquo;s Discuss Your Next Charcoal Order
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ivory/80">
          Send us the product, volume and destination you have in mind. Our export desk reviews every enquiry personally.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link to="/request-a-quote/" className={`${BTN_BRASS} sm:px-8`}>
            Request a quote &rarr;
          </Link>
          <Link
            to="/faq/"
            className={`${BTN} border border-ivory/30 text-ivory hover:border-ivory hover:bg-white/10 sm:px-8`}
          >
            Read the FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Page -------------------------------- */

export default function Home() {
  return (
    <>
      <Hero />
      <ProductRange />
      <BuyerApplications />
      <QualityPreview />
      <PackagingPreview />
      <OrderingProcess />
      <CompanyCredibility />
      <ClosingEnquiry />
    </>
  );
}