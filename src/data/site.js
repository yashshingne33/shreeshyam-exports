// Central company facts. Sourced from the "Start Here" / "Assets" (A11) sheets
// where confirmed, drafted as clearly-labelled placeholders elsewhere.
// Replace the placeholder values before launch — search for "UPDATE BEFORE LAUNCH".

export const COMPANY = {
  legalName: "Shree Shyam Exports",
  tagline: "Coconut Charcoal for Global Buyers",
  email: "export@shreeshyamexports.com", // UPDATE BEFORE LAUNCH
  phone: "+91 98765 43210", // UPDATE BEFORE LAUNCH
  whatsapp: "919876543210", // UPDATE BEFORE LAUNCH — digits only, with country code
  address: "Nagpur, Maharashtra, India", 
  hours: "Mon–Sat, 9:00–18:00 IST",
};

export const NAV_PRODUCTS = [
  { label: "Coconut shell charcoal", to: "/products/coconut-shell-charcoal/" },
  { label: "Coconut charcoal briquettes", to: "/products/coconut-charcoal-briquettes/" },
  { label: "Hookah / shisha cubes", to: "/products/hookah-charcoal-cubes/" },
  { label: "Hexagonal briquettes", to: "/products/hexagonal-charcoal-briquettes/" },
];

export const NAV_COMPANY = [
  { label: "About", to: "/about/" },
  { label: "Export & ordering", to: "/export-ordering/" },
  { label: "FAQ", to: "/faq/" },
];

export const ORDERING_STEPS = [
  {
    n: "01",
    title: "Share your requirements",
    body: "Tell us the product, target grade, quantity and destination port. There's no obligation and no account needed.",
  },
  {
    n: "02",
    title: "Confirm specification & sample",
    body: "We confirm the specification against your target use and can arrange a sample, subject to the sample policy for that offer.",
  },
  {
    n: "03",
    title: "Agree the order",
    body: "Once the grade, packaging and trade terms are agreed, we issue a proforma invoice to confirm the order.",
  },
  {
    n: "04",
    title: "Prepare & dispatch",
    body: "Production or sourcing, pre-shipment checks and documentation are completed ahead of loading and dispatch.",
  },
];

export const FAQS = [
  {
    q: "Which coconut charcoal formats do you offer?",
    a: "Coconut shell charcoal, coconut charcoal briquettes and hookah/shisha cubes are available now. Hexagonal briquettes are a conditional format that will publish once the exact tile, stick or hollow-briquette shape is confirmed.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ depends on the product, grade and pack type, and is confirmed with your quotation. Sample minimums are handled separately from bulk order minimums — tell us which you need in the enquiry form.",
  },
  {
    q: "Can I get a sample before ordering?",
    a: "Samples can usually be arranged, subject to product availability and courier cost, which is discussed with your enquiry. Select \"Sample\" as the enquiry type when you submit a request.",
  },
  {
    q: "What packaging options are available?",
    a: "Bulk export packaging and retail-ready private-label packaging are both possible. Share your target market and volumes and we'll advise on inner packs, master cartons and any private-label steps.",
  },
  {
    q: "What is the typical lead time?",
    a: "Lead time depends on the grade, order size and whether private-label artwork approval is required. We confirm a working lead time and separate transit estimate with your quotation — it is never a fixed universal number.",
  },
  {
    q: "Which trade terms do you support?",
    a: "Supported terms are confirmed with your quotation once the destination and quantity are known. Tell us your preferred term (or select \"Please advise\") in the enquiry form and we'll follow up.",
  },
  {
    q: "Can you provide specification sheets or test reports?",
    a: "Approved, dated specification sheets are shared for confirmed grades. Where a report is unavailable or the value is still being confirmed, we say so rather than guess — ask for the specific document you need in your enquiry.",
  },
  {
    q: "Do you ship worldwide?",
    a: "We work with importers, distributors and brands internationally. Share your destination port or city in the enquiry form and we will confirm feasibility, documentation and shipping options for that route.",
  },
];
