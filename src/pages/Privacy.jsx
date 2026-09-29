import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";
import { WRAP, IconCircle, DOTS } from "../components/PageDecor.jsx";

const SECTIONS = [
  {
    icon: "clipboard",
    title: "What We Collect",
    body: (
      <>
        When you submit the enquiry form on this site, we collect the information you provide — your name,
        company, email, country, and any product, quantity or message details you enter. We do not collect
        this information through any other means on this site.
      </>
    ),
  },
  {
    icon: "file",
    title: "How We Use It",
    body: (
      <>
        Enquiry information is used only to respond to your request — to confirm specifications, prepare a
        quotation, or answer your question. We do not sell or share your information with third parties for
        marketing purposes.
      </>
    ),
  },
  {
    icon: "globe",
    title: "Service Providers",
    body: (
      <>
        Depending on the technical setup in place at launch, enquiry data may pass through an email or
        CRM provider acting on our behalf, solely to deliver your enquiry to our export desk.
      </>
    ),
  },
  {
    icon: "shield",
    title: "Retention & Your Rights",
    body: (
      <>
        We retain enquiry information only as long as needed to respond to you and for reasonable
        recordkeeping. Contact us at{" "}
        <a href={`mailto:${COMPANY.email}`} className="text-brass-dim underline underline-offset-2">
          {COMPANY.email}
        </a>{" "}
        to request access to, correction of, or deletion of your information.
      </>
    ),
  },
  {
    icon: "chat",
    title: "Contact",
    body: (
      <>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${COMPANY.email}`} className="text-brass-dim underline underline-offset-2">
          {COMPANY.email}
        </a>
        .
      </>
    ),
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero kicker="Privacy policy · P13" title="Privacy Policy" />
      <Breadcrumbs trail={[{ label: "Privacy Policy" }]} />

      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute right-6 top-6 hidden h-28 w-28 sm:block" style={DOTS} aria-hidden="true" />
        <div className={`${WRAP} relative max-w-3xl`}>
          <p className="text-sm font-medium text-brass-dim">Effective date: to be confirmed on launch.</p>

          <div className="mt-10 space-y-5">
            {SECTIONS.map((section) => (
              <div
                key={section.title}
                className="flex flex-col gap-4 rounded-2xl border border-charcoal/10 bg-white p-6 shadow-[0_6px_24px_-8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:border-brass/40 hover:shadow-lg sm:flex-row sm:gap-5 sm:p-7"
              >
                <IconCircle name={section.icon} className="shrink-0" />
                <div>
                  <h2 className="font-display text-xl font-medium text-forest">{section.title}</h2>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-charcoal/75">{section.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}