import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SealBadge from "../components/SealBadge.jsx";
import Logo from "../components/Logo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { PRODUCTS } from "../data/products.js";
import { ORDERING_STEPS } from "../data/site.js";
// import heroImg from "../assets/hero-new.png";
// import heroImg from "../assets/hero-new2.png";
import heroImg from "../assets/hero-new3.png";
import groveImg from "../assets/hero2.png";

/* ---------------------------------------------------------------------- */
/*  Home (P01) — every section of the homepage lives in this one file,   */
/*  in the order set by the Outline sheet:                                */
/*  Hero → Product range → Buyer applications → Quality preview →         */
/*  Packaging preview → Ordering process → Company credibility →          */
/*  Closing enquiry.                                                      */
/* ---------------------------------------------------------------------- */

function Hero() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Coconut groves in mist at sunrise"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-charcoal/55" />

      <div className="container relative z-10 max-w-content py-32 text-center">
        <div className="mx-auto flex justify-center">
          <SealBadge />
        </div>

        <h1 className="mx-auto mt-6 max-w-3xl font-display text-[2.6rem] font-medium leading-[1.08] text-ivory sm:text-6xl lg:text-[4.25rem]">
          Coconut Charcoal for Global Buyers
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-ivory/80">
          Explore coconut shell charcoal, briquettes and hookah cubes. Tell us your product,
          quantity and destination requirements, and our export desk will follow up directly.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/request-a-quote/"
            className="rounded-full bg-brass px-8 py-3.5 text-[15px] font-medium text-charcoal shadow-[0_10px_30px_-10px_rgba(175,149,96,0.55)] transition-transform hover:scale-[1.03] hover:bg-[#c2a877]"
          >
            Request a quote
          </Link>
          <Link
            to="/products/"
            className="rounded-full border border-ivory/35 px-8 py-3.5 text-[15px] text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
          >
            Explore products
          </Link>
        </div>
      </div>

      <div className="absolute bottom-7 left-6 z-10 hidden sm:block">
        <Logo className="h-8 w-8" stroke="#AF9560" />
      </div>
    </section>
  );
}

function Silhouette({ shape }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.5 };
  return (
    <svg width="30" height="30" viewBox="0 0 40 40" aria-hidden="true" className="transition-transform duration-300 group-hover:scale-110">
      {shape === "shell" && <path d="M20 6c7 2 13 8 13 15s-6 13-13 13S7 28 7 21c0-4 3-9 7-12" {...common} />}
      {shape === "briquette" && <rect x="6" y="14" width="28" height="12" rx="6" {...common} />}
      {shape === "cube" && <rect x="9" y="9" width="22" height="22" rx="2" {...common} />}
      {shape === "hex" && <path d="M20 5 33 12.5v15L20 35 7 27.5v-15L20 5z" {...common} />}
    </svg>
  );
}

function ProductRange() {
  return (
    <section className="relative bg-ivory/60 py-24 sm:py-32">
      <div className="container mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading
          kicker="Product range"
          title="Choose the Format for Your Market"
          body="Shell charcoal, briquettes, hookah cubes and confirmed hexagonal formats — each grade sorted from natural coconut shell."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}/`}
              className="group relative flex flex-col justify-between rounded-xl border border-charcoal/10 bg-white/70 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brass/70 hover:bg-white hover:shadow-xl hover:shadow-brass/10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-charcoal/5 p-2.5 text-brass transition-colors duration-300 group-hover:bg-brass group-hover:text-charcoal">
                    <Silhouette shape={product.shape} />
                  </div>
                  {product.conditional ? (
                    <span className="rounded-full border border-brass/30 bg-brass/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-brass">
                      Conditional
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium tracking-wide text-charcoal/40">
                      {product.tagline}
                    </span>
                  )}
                </div>

                <div className="mt-4 aspect-[16/10] w-full overflow-hidden rounded-lg bg-charcoal/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-medium text-charcoal transition-colors group-hover:text-brass">
                  {product.shortName}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal/70">{product.summary}</p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-charcoal/10 pt-4 text-xs font-semibold tracking-wide text-charcoal/80 transition-colors group-hover:text-brass">
                <span>View specifications</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const APPLICATIONS = [
  {
    category: "Hospitality & retail",
    title: "Hookah & Shisha Brands",
    body: "Cube formats for lounges, distributors and private-label brands, cut to consistent sizes for even burning.",
    specs: ["Retail or bulk packing", "Confirmed size ranges, e.g. 25–27mm", "Private-label boxes available"],
  },
  {
    category: "Commercial & foodservice",
    title: "BBQ & Hospitality Buyers",
    body: "Briquette and screened shell formats suited to commercial grilling and BBQ retail, with packaging matched to your volumes.",
    specs: ["10kg / 20kg export cartons", "Confirmed specification sheet per grade", "Container-load palletisation"],
  },
];

function BuyerApplications() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading
          kicker="Buyer applications"
          title="Built for Importers, Distributors & Brands"
          body="For hookah/shisha and BBQ buyers alike — every specification and packaging option is confirmed against your intended use before it ships."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {APPLICATIONS.map((app) => (
            <div
              key={app.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory/40 p-8 transition-all duration-300 hover:border-brass/60 hover:bg-ivory/80 hover:shadow-lg hover:shadow-brass/5 sm:p-10"
            >
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-brass/10 transition-transform duration-500 group-hover:scale-150" />
              <div>
                <span className="text-xs font-semibold tracking-wide text-brass">{app.category}</span>
                <h3 className="mt-1 font-display text-2xl font-medium text-charcoal">{app.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">{app.body}</p>

                <ul className="mt-6 space-y-2.5 border-t border-charcoal/10 pt-6">
                  {app.specs.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[13px] text-charcoal/80">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brass/20 text-brass">
                        &#10003;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/request-a-quote/"
                className="mt-8 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-charcoal/80 transition-colors group-hover:text-brass"
              >
                Request specifications
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const QUALITY_METRICS = [
  { label: "Ash content", value: "Confirmed per grade", sub: "Method & basis on request" },
  { label: "Moisture", value: "Confirmed per grade", sub: "Kiln-dried stability" },
  { label: "Fixed carbon", value: "Confirmed per grade", sub: "Calculated by difference" },
  { label: "Dimensions", value: "Confirmed per SKU", sub: "Tolerance stated on spec sheet" },
];

function QualityPreview() {
  return (
    <section className="bg-ivory/40 py-20 sm:py-24">
      <div className="container mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading
          kicker="Quality preview"
          title="Start with the Specification"
          body="Ash, moisture, fixed carbon, dimensions and packaging — documented for your selected grade, not generalised across the range."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUALITY_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-charcoal/10 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brass/80 hover:shadow-md"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wide text-charcoal/50">
                {metric.label}
              </span>
              <p className="mt-1.5 font-display text-xl font-medium text-charcoal">{metric.value}</p>
              <p className="mt-1 text-xs text-charcoal/60">{metric.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-charcoal/10 bg-white/70 px-5 py-4 backdrop-blur-sm">
          <p className="text-[13px] text-charcoal/70">
            Dated specification sheets are shared for each confirmed grade, on request.
          </p>
          <Link to="/quality/" className="text-xs font-semibold tracking-wide text-brass hover:underline hover:underline-offset-4">
            Full quality process &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

function PackagingPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto max-w-content px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative rounded-2xl border border-charcoal/10 bg-ivory/50 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
              <span className="text-xs font-semibold tracking-wide text-brass">Packaging preview</span>
              <span className="rounded-full bg-forest/10 px-2.5 py-0.5 text-[10px] font-medium text-forest">
                Conditional
              </span>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-charcoal/5 bg-white p-4 shadow-sm">
                <h4 className="text-sm font-semibold text-charcoal">Bulk export packing</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-charcoal/70">
                  Standard bags or master cartons, palletised for container loading, with net/gross weight confirmed per order.
                </p>
              </div>
              <div className="rounded-xl border border-charcoal/5 bg-white p-4 shadow-sm">
                <h4 className="text-sm font-semibold text-charcoal">Retail & private label</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-charcoal/70">
                  Branded boxes for hookah/shisha and BBQ retail, once artwork and minimum order quantity are agreed.
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wide text-brass">Custom & private-label</span>
            <h2 className="mt-2 font-display text-3xl font-medium text-charcoal sm:text-4xl">
              Packaging Shaped Around Your Requirements
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
              Introduce approved bulk or retail options once your target market and volumes are known — this page publishes
              in full once packaging capability is confirmed.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                to="/packaging-private-label/"
                className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-2.5 text-xs font-semibold tracking-wide text-ivory transition-all hover:bg-charcoal/90 hover:shadow-md"
              >
                Packaging &amp; private label &rarr;
              </Link>
              <Link
                to="/request-a-quote/"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/15 px-6 py-2.5 text-xs font-semibold tracking-wide text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5"
              >
                Discuss packaging
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderingProcess() {
  return (
    <section className="bg-ivory/50 py-20 sm:py-24">
      <div className="container mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading
          kicker="Ordering process"
          title="Share Requirements → Confirm Specification → Agree Order → Prepare Shipment"
          body="A transparent, four-step path from first enquiry to dispatch, without a fixed universal lead time."
          align="center"
        />

        <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ORDERING_STEPS.map((step) => (
            <div
              key={step.n}
              className="group flex flex-col justify-between rounded-xl border border-charcoal/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:shadow-lg hover:shadow-brass/10"
            >
              <div>
                <span className="font-display text-2xl font-medium text-brass">{step.n}</span>
                <h3 className="mt-4 font-display text-lg font-medium text-charcoal transition-colors group-hover:text-brass">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-charcoal/70">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CREDIBILITY_POINTS = [
  { title: "Direct shell sourcing", detail: "Coconut shell sourced from regional supply networks, with sourcing role clearly stated rather than implied." },
  { title: "Specification-led quality", detail: "Every quotation is tied to a documented specification, not a generic company-wide promise." },
  { title: "Export documentation", detail: "Available invoice, packing list and origin documents are confirmed per shipment as applicable." },
];

function CompanyCredibility() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto max-w-content px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-wide text-brass uppercase">
              Company credibility
            </span>
            <h2 className="mt-2 font-display text-3xl font-medium text-charcoal sm:text-4xl">
              A Dedicated Sourcing &amp; Export Partner
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
              Shree Shyam Exports connects coconut shell supply with international buyers, working to the specification
              and packaging you confirm — not a one-size-fits-all offer.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/about/"
                className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-2.5 text-xs font-semibold tracking-wide text-ivory transition-all hover:bg-charcoal/90 hover:shadow-md"
              >
                About our company &rarr;
              </Link>
              <Link
                to="/quality/"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/15 px-6 py-2.5 text-xs font-semibold tracking-wide text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5"
              >
                See our quality process
              </Link>
            </div>
          </div>

          {/* Right Image Block - Re-proportioned & Styled */}
          <div className="order-1 lg:order-2 relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Soft decorative background frame */}
            <div className="absolute -inset-2 rounded-3xl bg-ivory/80 -rotate-1 sm:-rotate-2" />
            
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-charcoal/10 bg-ivory shadow-lg">
              <img
                src={groveImg}
                alt="Coconut palm groves in the highlands"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />

              {/* Floating detail badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto rounded-xl border border-white/20 bg-charcoal/75 px-4 py-3 backdrop-blur-md text-ivory shadow-xl">
                <p className="text-[11px] font-semibold tracking-wider text-brass uppercase">Sourcing Origin</p>
                <p className="text-xs text-ivory/90 mt-0.5 font-medium">Sustainable Palm Plantations</p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Key Points */}
        <div className="mt-14 rounded-2xl border border-charcoal/10 bg-ivory/50 p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {CREDIBILITY_POINTS.map((item, idx) => (
              <div key={item.title} className="rounded-xl border border-charcoal/5 bg-white p-4 shadow-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brass/15 text-[11px] font-bold text-brass">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-charcoal/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingEnquiry() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 text-ivory sm:py-24">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-brass/10 blur-3xl" />
      <div className="container relative z-10 mx-auto max-w-content px-6 text-center lg:px-8">
        <span className="inline-block rounded-full border border-brass/30 bg-brass/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-brass">
          Start your enquiry
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-5xl">
          Let&rsquo;s Discuss Your Next Charcoal Order
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ivory/70">
          Send us the product, volume and destination you have in mind. Our export desk reviews every enquiry personally.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/request-a-quote/"
            className="rounded-full bg-brass px-8 py-3.5 text-xs font-semibold tracking-wide text-charcoal shadow-lg shadow-brass/20 transition-all hover:scale-[1.03] hover:bg-[#c2a877]"
          >
            Request a quote &rarr;
          </Link>
          <Link
            to="/faq/"
            className="rounded-full border border-ivory/25 px-8 py-3.5 text-xs font-semibold tracking-wide text-ivory transition-colors hover:border-ivory hover:bg-white/5"
          >
            Read the FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}

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
