// import { Link } from "react-router-dom";
// import PageHero from "../components/PageHero.jsx";
// import Breadcrumbs from "../components/Breadcrumbs.jsx";
// import groveImg from "../assets/hero2.png";
// import sunsetImg from "../assets/coconut8.png";

// export default function About() {
//   return (
//     <>
//       <PageHero
//         kicker="About · P10"
//         title="About Shree Shyam Exports"
//         body="A coconut charcoal export business connecting regional shell supply with international buyers."
//       />
//       <Breadcrumbs trail={[{ label: "About" }]} />

//       {/* Company story */}
//       <section className="bg-white py-16 sm:py-20">
//         <div className="container mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
//           <div className="order-2 lg:order-1">
//             <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">Who We Are</h2>
//             <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
//               Shree Shyam Exports focuses specifically on coconut shell charcoal and its formed derivatives — shell
//               charcoal, briquettes and hookah/shisha cubes — for importers, distributors and brands abroad. We describe
//               our sourcing and export role plainly rather than implying factory ownership we don't hold.
//             </p>
//             <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
//               Every enquiry is reviewed individually: we confirm the specification, packaging and trade terms that
//               suit your market before any quotation is issued.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 to="/products/"
//                 className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-2.5 text-xs font-semibold tracking-wide text-ivory transition-all hover:bg-charcoal/90"
//               >
//                 Explore our products
//               </Link>
//               <Link
//                 to="/request-a-quote/"
//                 className="inline-flex items-center justify-center rounded-full border border-charcoal/15 px-6 py-2.5 text-xs font-semibold tracking-wide text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5"
//               >
//                 Speak to our export team
//               </Link>
//             </div>
//           </div>
//           <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
//             <img src={groveImg} alt="Coconut palm groves" className="h-full w-full object-cover" loading="lazy" />
//           </div>
//         </div>
//       </section>

//       {/* Operating model and proof */}
//       <section className="bg-ivory/40 py-16 sm:py-20">
//         <div className="container mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
//           <div className="overflow-hidden rounded-2xl">
//             <img src={sunsetImg} alt="Coconut palm at sunset near the coast" className="h-full w-full object-cover" loading="lazy" />
//           </div>
//           <div>
//             <h2 className="font-display text-2xl font-medium text-charcoal sm:text-3xl">How We Operate</h2>
//             <p className="mt-4 text-[15px] leading-relaxed text-charcoal/75">
//               We work as an exporter and sourcing partner: coordinating supply, quality checks and documentation
//               between coconut shell processors and international buyers. Any milestone, market or capacity claim
//               published here is limited to what's been confirmed and evidenced — we'd rather understate than overstate.
//             </p>
//             <div className="mt-6 rounded-xl border border-charcoal/10 bg-white p-6">
//               <p className="text-sm leading-relaxed text-charcoal/70">
//                 Looking for verified certifications, customer references or export volumes? Ask us directly — we only
//                 publish credentials we can substantiate and have permission to share.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }





import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { SECTION, WRAP, H2, BODY, PALE, DOTS, BTN_DARK, BTN_LINE, IconCircle, PalmLeaf, CornerDecor } from "../components/PageDecor.jsx";
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
      <section className={`relative overflow-hidden bg-white ${SECTION}`}>
        <CornerDecor />
        <div className={`${WRAP} relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
          <div className="order-2 lg:order-1">
            <h2 className={H2}>Who We Are</h2>
            <p className={`mt-4 ${BODY}`}>
              Shree Shyam Exports focuses specifically on coconut shell charcoal and its formed derivatives — shell
              charcoal, briquettes and hookah/shisha cubes — for importers, distributors and brands abroad. We describe
              our sourcing and export role plainly rather than implying factory ownership we don't hold.
            </p>
            <p className={`mt-4 ${BODY}`}>
              Every enquiry is reviewed individually: we confirm the specification, packaging and trade terms that
              suit your market before any quotation is issued.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link to="/products/" className={BTN_DARK}>Explore our products</Link>
              <Link to="/request-a-quote/" className={BTN_LINE}>Speak to our export team</Link>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-lg lg:order-2 lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-charcoal/10 shadow-lg">
              <img src={groveImg} alt="Coconut palm groves" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Operating model and proof */}
      <section className={`relative overflow-hidden ${PALE} ${SECTION}`}>
        <PalmLeaf className="pointer-events-none absolute -bottom-6 -right-6 hidden h-56 w-44 rotate-[20deg] text-forest/15 md:block" />
        <div className="pointer-events-none absolute left-4 top-6 hidden h-28 w-28 sm:block" style={DOTS} aria-hidden="true" />
        <div className={`${WRAP} relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
          <div className="mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-charcoal/10 shadow-lg">
              <img src={sunsetImg} alt="Coconut palm at sunset near the coast" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
            </div>
          </div>
          <div>
            <h2 className={H2}>How We Operate</h2>
            <p className={`mt-4 ${BODY}`}>
              We work as an exporter and sourcing partner: coordinating supply, quality checks and documentation
              between coconut shell processors and international buyers. Any milestone, market or capacity claim
              published here is limited to what's been confirmed and evidenced — we'd rather understate than overstate.
            </p>
            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm sm:p-6">
              <IconCircle name="shield" />
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