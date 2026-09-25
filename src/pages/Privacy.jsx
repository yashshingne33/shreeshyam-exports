import PageHero from "../components/PageHero.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { COMPANY } from "../data/site.js";

export default function Privacy() {
  return (
    <>
      <PageHero kicker="Privacy policy · P13" title="Privacy Policy" />
      <Breadcrumbs trail={[{ label: "Privacy Policy" }]} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-2xl px-6 lg:px-8">
          <p className="text-sm text-charcoal/50">Effective date: to be confirmed on launch.</p>

          <div className="prose-charcoal mt-8 space-y-8 text-[15px] leading-relaxed text-charcoal/80">
            <div>
              <h2 className="font-display text-xl font-medium text-charcoal">What We Collect</h2>
              <p className="mt-3">
                When you submit the enquiry form on this site, we collect the information you provide — your name,
                company, email, country, and any product, quantity or message details you enter. We do not collect
                this information through any other means on this site.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-medium text-charcoal">How We Use It</h2>
              <p className="mt-3">
                Enquiry information is used only to respond to your request — to confirm specifications, prepare a
                quotation, or answer your question. We do not sell or share your information with third parties for
                marketing purposes.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-medium text-charcoal">Service Providers</h2>
              <p className="mt-3">
                Depending on the technical setup in place at launch, enquiry data may pass through an email or
                CRM provider acting on our behalf, solely to deliver your enquiry to our export desk.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-medium text-charcoal">Retention & Your Rights</h2>
              <p className="mt-3">
                We retain enquiry information only as long as needed to respond to you and for reasonable
                recordkeeping. Contact us at{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-brass-dim underline underline-offset-2">
                  {COMPANY.email}
                </a>{" "}
                to request access to, correction of, or deletion of your information.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-medium text-charcoal">Contact</h2>
              <p className="mt-3">
                Questions about this policy can be sent to{" "}
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
