import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import groveImg from "../assets/hero2.png";
import sunsetImg from "../assets/coconut8.png";

export default function About() {
  return (
    <>
      <PageHero
        kicker="About · P10"
        title="About Shree Shyam Exports"
        body="A coconut charcoal export business connecting regional shell supply with international buyers."
      />
      <Breadcrumbs trail={[{ label: "About" }]} />

      {/* Company story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Who We Are</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
              Shree Shyam Exports focuses specifically on coconut shell charcoal and its formed derivatives — shell
              charcoal, briquettes and hookah/shisha cubes — for importers, distributors and brands abroad. We describe
              our sourcing and export role plainly rather than implying factory ownership we don't hold.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
              Every enquiry is reviewed individually: we confirm the specification, packaging and trade terms that
              suit your market before any quotation is issued.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products/"
                className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-2.5 text-xs font-semibold tracking-wide text-ivory transition-all hover:bg-charcoal/90"
              >
                Explore our products
              </Link>
              <Link
                to="/request-a-quote/"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/15 px-6 py-2.5 text-xs font-semibold tracking-wide text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5"
              >
                Speak to our export team
              </Link>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
            <img src={groveImg} alt="Coconut palm groves" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Operating model and proof */}
      <section className="bg-ivory/40 py-16 sm:py-20">
        <div className="container mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-2xl">
            <img src={sunsetImg} alt="Coconut palm at sunset near the coast" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">How We Operate</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
              We work as an exporter and sourcing partner: coordinating supply, quality checks and documentation
              between coconut shell processors and international buyers. Any milestone, market or capacity claim
              published here is limited to what's been confirmed and evidenced — we'd rather understate than overstate.
            </p>
            <div className="mt-6 rounded-xl border border-charcoal/10 bg-white p-6">
              <p className="text-sm leading-relaxed text-charcoal/70">
                Looking for verified certifications, customer references or export volumes? Ask us directly — we only
                publish credentials we can substantiate and have permission to share.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
