import { Link, useLocation } from "react-router-dom";

export default function ThankYou() {
  const { state } = useLocation();

  return (
    <section className="flex min-h-[70vh] items-center bg-ivory/40 py-20">
      <div className="container mx-auto max-w-content px-6 text-center lg:px-8">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brass/15 text-3xl text-brass">
          &#10003;
        </span>
        <h1 className="mx-auto mt-6 max-w-xl font-display text-3xl font-medium text-charcoal sm:text-4xl">
          Thank You for Your Enquiry
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
          {state?.name ? `${state.name}, ` : ""}your enquiry has been prepared. Our team will review your
          requirements and follow up by email.
        </p>
        {state?.submissionId && (
          <p className="mt-3 text-xs tracking-wide text-charcoal/40">Reference: {state.submissionId}</p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/products/"
            className="rounded-full bg-brass px-7 py-3 text-sm font-medium text-charcoal transition-transform hover:scale-[1.02] hover:bg-[#c2a877]"
          >
            Back to products
          </Link>
          <Link
            to="/"
            className="rounded-full border border-charcoal/15 px-7 py-3 text-sm text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal/5"
          >
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
