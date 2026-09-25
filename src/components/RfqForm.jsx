import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { COMPANY } from "../data/site.js";

const ENQUIRY_TYPES = ["Quotation", "Sample", "Specifications", "Private label", "Other"];
const PRODUCT_OPTIONS = [
  "Coconut shell charcoal",
  "Coconut charcoal briquettes",
  "Hookah / shisha cubes",
  "Hexagonal briquettes (conditional)",
  "Not sure",
];
const APPLICATION_OPTIONS = ["Hookah / shisha", "BBQ", "Distribution", "Other", "Not sure"];
const PACKAGING_OPTIONS = ["Bulk", "Retail", "Private label", "Not sure"];
const TRADE_TERMS = ["EXW", "FOB", "CIF", "CFR", "Please advise"];
const QUANTITY_UNITS = ["kg", "metric tonnes"];

// Compact, common country list for the searchable select (F05). Buyers based
// elsewhere can still submit — "Other / not listed" is always available.
const COUNTRIES = [
  "United States", "United Kingdom", "United Arab Emirates", "Saudi Arabia", "Germany",
  "France", "Netherlands", "Spain", "Italy", "Turkey", "Egypt", "South Africa",
  "Nigeria", "Kenya", "Australia", "Canada", "Brazil", "Mexico", "Japan", "South Korea",
  "China", "Malaysia", "Indonesia", "Singapore", "Thailand", "Vietnam", "India",
  "Pakistan", "Bangladesh", "Poland", "Sweden", "Other / not listed",
];

const initialState = {
  enquiryType: "Quotation",
  name: "",
  company: "",
  email: "",
  country: "",
  phone: "",
  products: [],
  application: "",
  grade: "",
  quantityAmount: "",
  quantityUnit: "kg",
  quantityNotSure: false,
  destination: "",
  packaging: "",
  timing: "",
  tradeTerm: "",
  message: "",
  privacyAck: false,
  website: "", // honeypot (F19) — real users never see or fill this
};

function FieldLabel({ htmlFor, required, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-medium text-charcoal">
      {children}
      {required && <span className="ml-1 text-brass-dim">*</span>}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-charcoal/15 bg-white px-3.5 py-2.5 text-[15px] text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/25";
const errorClass = "border-red-400 focus:border-red-400 focus:ring-red-200";

export default function RfqForm({ prefillProduct, sourcePageId = "P11" }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    ...initialState,
    products: prefillProduct ? [prefillProduct] : [],
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | error

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function toggleProduct(option) {
    setForm((f) => {
      const has = f.products.includes(option);
      return { ...f, products: has ? f.products.filter((p) => p !== option) : [...f.products, option] };
    });
  }

  function validate() {
    const e = {};
    if (form.name.trim().length < 2) e.name = "Enter your full name (at least 2 characters).";
    if (form.company.trim().length < 2) e.company = "Enter your company name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email address.";
    if (!form.country) e.country = "Select your country.";
    if (form.products.length === 0) e.products = "Select at least one product, or \"Not sure\".";
    if (!form.quantityNotSure && !form.quantityAmount) {
      e.quantity = "Enter an estimated quantity, or choose \"Not sure\".";
    }
    if (form.quantityAmount && Number(form.quantityAmount) <= 0) {
      e.quantity = "Quantity must be a positive number.";
    }
    if (!form.privacyAck) e.privacyAck = "Please confirm you've read the Privacy Policy.";
    return e;
  }

  function buildMailto() {
    const lines = [
      `Enquiry type: ${form.enquiryType}`,
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Country: ${form.country}`,
      form.phone && `Phone / WhatsApp: ${form.phone}`,
      `Product(s): ${form.products.join(", ") || "Not specified"}`,
      form.application && `Intended application: ${form.application}`,
      form.grade && `Grade / dimensions: ${form.grade}`,
      form.quantityNotSure ? "Estimated quantity: Not sure" : `Estimated quantity: ${form.quantityAmount} ${form.quantityUnit}`,
      form.destination && `Destination port / city: ${form.destination}`,
      form.packaging && `Packaging: ${form.packaging}`,
      form.timing && `Required timing: ${form.timing}`,
      form.tradeTerm && `Trade term preference: ${form.tradeTerm}`,
      form.message && `Requirements / message: ${form.message}`,
      "",
      `Source page: ${sourcePageId}`,
    ].filter(Boolean);

    const subject = encodeURIComponent(`Charcoal enquiry — ${form.company || form.name}`);
    const body = encodeURIComponent(lines.join("\n"));
    return `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (form.website) return; // honeypot tripped — silently drop (F19)

    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const firstField = document.getElementById(Object.keys(e)[0]);
      firstField?.focus();
      return;
    }

    setStatus("submitting");
    const submissionId = `SSE-${Date.now().toString(36).toUpperCase()}`;

    // No server endpoint is wired up in this build (see RFQ sheet F20–F22 —
    // CMS/email/CRM delivery is a backend integration step). We record the
    // enquiry locally for now and open the buyer's email client, pre-filled
    // and addressed to the export desk, as the actual delivery path.
    try {
      const record = { ...form, submissionId, submittedAt: new Date().toISOString(), sourcePageId };
      const existing = JSON.parse(localStorage.getItem("sse_rfq_submissions") || "[]");
      localStorage.setItem("sse_rfq_submissions", JSON.stringify([...existing, record]));
    } catch {
      // localStorage unavailable — non-fatal, submission still proceeds
    }

    window.setTimeout(() => {
      window.location.href = buildMailto();
      navigate("/thank-you/", { state: { submissionId, name: form.name } });
    }, 450);
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-8">
      {/* honeypot — hidden from sighted & keyboard users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(evt) => update("website", evt.target.value)}
        />
      </div>

      {/* Enquiry type */}
      <div>
        <FieldLabel htmlFor="enquiryType" required>
          What are you enquiring about?
        </FieldLabel>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5">
          {ENQUIRY_TYPES.map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => update("enquiryType", type)}
              aria-pressed={form.enquiryType === type}
              className={`rounded-lg border px-3 py-2.5 text-[13px] font-medium transition-colors ${
                form.enquiryType === type
                  ? "border-brass bg-brass text-charcoal"
                  : "border-charcoal/15 bg-white text-ink-soft hover:border-brass/60"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Contact details */}
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-1 font-display text-lg text-charcoal">Your details</legend>
        <div>
          <FieldLabel htmlFor="name" required>Full name</FieldLabel>
          <input
            id="name" name="name" type="text" autoComplete="name" maxLength={100}
            value={form.name} onChange={(e) => update("name", e.target.value)}
            className={`${inputClass} ${errors.name ? errorClass : ""}`}
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <FieldLabel htmlFor="company" required>Company</FieldLabel>
          <input
            id="company" name="company" type="text" autoComplete="organization" maxLength={150}
            value={form.company} onChange={(e) => update("company", e.target.value)}
            className={`${inputClass} ${errors.company ? errorClass : ""}`}
            aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company && <p id="company-error" className="mt-1.5 text-xs text-red-500">{errors.company}</p>}
        </div>
        <div>
          <FieldLabel htmlFor="email" required>Email</FieldLabel>
          <input
            id="email" name="email" type="email" autoComplete="email"
            value={form.email} onChange={(e) => update("email", e.target.value)}
            className={`${inputClass} ${errors.email ? errorClass : ""}`}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <FieldLabel htmlFor="phone">Phone / WhatsApp (optional)</FieldLabel>
          <input
            id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 234 567 8900"
            value={form.phone} onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <FieldLabel htmlFor="country" required>Country</FieldLabel>
          <input
            id="country" name="country" list="country-list" autoComplete="country-name"
            value={form.country} onChange={(e) => update("country", e.target.value)}
            placeholder="Start typing your country…"
            className={`${inputClass} ${errors.country ? errorClass : ""}`}
            aria-invalid={!!errors.country} aria-describedby={errors.country ? "country-error" : undefined}
          />
          <datalist id="country-list">
            {COUNTRIES.map((c) => <option key={c} value={c} />)}
          </datalist>
          {errors.country && <p id="country-error" className="mt-1.5 text-xs text-red-500">{errors.country}</p>}
        </div>
      </fieldset>

      {/* Product requirements */}
      <fieldset>
        <legend className="mb-1 font-display text-lg text-charcoal">What you need</legend>
        <div className="mt-3">
          <FieldLabel htmlFor="products" required>Product(s)</FieldLabel>
          <div id="products" className="flex flex-wrap gap-2.5">
            {PRODUCT_OPTIONS.map((option) => {
              const checked = form.products.includes(option);
              return (
                <label
                  key={option}
                  className={`cursor-pointer rounded-full border px-3.5 py-2 text-[13px] transition-colors ${
                    checked ? "border-brass bg-brass/15 text-charcoal" : "border-charcoal/15 bg-white text-ink-soft hover:border-brass/50"
                  }`}
                >
                  <input
                    type="checkbox" className="sr-only" checked={checked}
                    onChange={() => toggleProduct(option)}
                  />
                  {option}
                </label>
              );
            })}
          </div>
          {errors.products && <p className="mt-1.5 text-xs text-red-500">{errors.products}</p>}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="application">Intended application</FieldLabel>
            <select
              id="application" value={form.application}
              onChange={(e) => update("application", e.target.value)}
              className={inputClass}
            >
              <option value="">Select (optional)</option>
              {APPLICATION_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <FieldLabel htmlFor="grade">Grade / dimensions (optional)</FieldLabel>
            <input
              id="grade" type="text" maxLength={250} placeholder="e.g. target 25mm cubes"
              value={form.grade} onChange={(e) => update("grade", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div className="mt-5">
          <FieldLabel htmlFor="quantityAmount" required>Estimated quantity</FieldLabel>
          <div className="flex flex-wrap items-center gap-3">
            <input
              id="quantityAmount" type="number" min="0" step="any"
              disabled={form.quantityNotSure}
              value={form.quantityAmount}
              onChange={(e) => update("quantityAmount", e.target.value)}
              className={`${inputClass} w-36 disabled:opacity-40 ${errors.quantity ? errorClass : ""}`}
            />
            <select
              value={form.quantityUnit}
              disabled={form.quantityNotSure}
              onChange={(e) => update("quantityUnit", e.target.value)}
              className={`${inputClass} w-40 disabled:opacity-40`}
            >
              {QUANTITY_UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
            </select>
            <label className="flex items-center gap-2 text-[13px] text-ink-soft">
              <input
                type="checkbox" checked={form.quantityNotSure}
                onChange={(e) => update("quantityNotSure", e.target.checked)}
                className="h-4 w-4 rounded border-charcoal/30 text-brass focus:ring-brass/40"
              />
              Not sure yet
            </label>
          </div>
          {errors.quantity && <p className="mt-1.5 text-xs text-red-500">{errors.quantity}</p>}
        </div>
      </fieldset>

      {/* Logistics */}
      <fieldset className="grid gap-5 sm:grid-cols-2">
        <legend className="mb-1 font-display text-lg text-charcoal">Packaging & logistics (optional)</legend>
        <div>
          <FieldLabel htmlFor="destination">Destination port / city</FieldLabel>
          <input
            id="destination" type="text" maxLength={150}
            value={form.destination} onChange={(e) => update("destination", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="packaging">Packaging</FieldLabel>
          <select
            id="packaging" value={form.packaging}
            onChange={(e) => update("packaging", e.target.value)}
            className={inputClass}
          >
            <option value="">Select (optional)</option>
            {PACKAGING_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="timing">Required timing</FieldLabel>
          <input
            id="timing" type="text" placeholder="e.g. within 6 weeks"
            value={form.timing} onChange={(e) => update("timing", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <FieldLabel htmlFor="tradeTerm">Trade term preference</FieldLabel>
          <select
            id="tradeTerm" value={form.tradeTerm}
            onChange={(e) => update("tradeTerm", e.target.value)}
            className={inputClass}
          >
            <option value="">Select (optional)</option>
            {TRADE_TERMS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <FieldLabel htmlFor="message">Requirements / message (optional)</FieldLabel>
        <textarea
          id="message" rows={5} maxLength={3000}
          placeholder="Ash / moisture targets, packaging notes, or anything else we should know."
          value={form.message} onChange={(e) => update("message", e.target.value)}
          className={inputClass}
        />
        <p className="mt-1 text-right text-xs text-charcoal/40">{form.message.length}/3000</p>
      </div>

      <p className="text-[13px] leading-relaxed text-ink-soft">
        Have a specification sheet to share? Attach it directly to the email once your mail app
        opens, or send it to{" "}
        <a href={`mailto:${COMPANY.email}`} className="text-brass-dim underline underline-offset-2">
          {COMPANY.email}
        </a>.
      </p>

      {/* Privacy + submit */}
      <div className="space-y-4 border-t border-charcoal/10 pt-6">
        <label className="flex items-start gap-3 text-[13px] text-ink-soft">
          <input
            type="checkbox" checked={form.privacyAck}
            onChange={(e) => update("privacyAck", e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-charcoal/30 text-brass focus:ring-brass/40"
            aria-invalid={!!errors.privacyAck}
          />
          <span>
            I have read the{" "}
            <Link to="/privacy-policy/" className="text-brass-dim underline underline-offset-2">
              Privacy Policy
            </Link>
            .<span className="ml-1 text-brass-dim">*</span>
          </span>
        </label>
        {errors.privacyAck && <p className="text-xs text-red-500">{errors.privacyAck}</p>}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass px-8 py-3.5 text-[15px] font-medium text-charcoal transition-transform hover:scale-[1.01] hover:bg-[#c2a877] disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Preparing your enquiry…" : "Submit enquiry"}
        </button>
        <p className="text-xs text-charcoal/50">
          Submitting opens your email app with the enquiry pre-filled, addressed to our export
          desk. Nothing is sent until you press send there.
        </p>
      </div>
    </form>
  );
}
