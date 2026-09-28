// Import distinct images for each individual product
import rawShellImg from "../assets/coconut6.jpg";
import hookahCubesImg from "../assets/coconut5.jpg";
import bbqBriquettesImg from "../assets/coconut4.jpg";
import hexagonalImg from "../assets/coconut3.jpg";

export const PRODUCTS = [
  {
    slug: "coconut-shell-charcoal",
    id: "P03",
    name: "Coconut Shell Charcoal",
    shortName: "Shell Charcoal",
    tagline: "Raw & screened",
    shape: "shell",
    image: rawShellImg,
    summary:
      "Raw coconut shell charcoal, screened to grade, for industrial blending, activated-carbon feedstock and general bulk offtake.",
    description:
      "Coconut shell charcoal is carbonised whole and broken coconut shell, screened into consistent particle-size grades. It's a raw-material format rather than a finished shape — buyers typically take it for further processing (activation, briquetting) or as a bulk fuel-grade input.",
    applications: ["Activated carbon feedstock", "Industrial fuel blending", "Bulk re-processing"],
    specs: [
      { label: "Particle size", value: "Graded on request", note: "Sieve grading available by target mm / mesh" },
      { label: "Moisture", value: "Typical, confirmed per batch", note: "Maximum stated on the dated spec sheet" },
      { label: "Ash content", value: "Typical, confirmed per batch", note: "Method and basis stated on request" },
      { label: "Fixed carbon", value: "Typical, confirmed per batch", note: "Calculated by difference unless noted" },
      { label: "Packing", value: "Jute / PP bags or bulk bags", note: "Net weight confirmed per order" },
    ],
    packaging: [
      { title: "Bulk export bags", desc: "Standard export bagging with net/gross weight confirmed against your destination requirements." },
      { title: "Bulk bags (jumbo)", desc: "For larger container-load orders where bulk bag handling suits your unloading setup." },
    ],
    faqs: [
      { q: "What sizes are available?", a: "We grade shell charcoal to the particle size or mesh range you specify — tell us your target range in the enquiry form." },
      { q: "Is this a finished product?", a: "No — shell charcoal is typically a raw or semi-processed input. If you need a finished shape, see our briquette or hookah-cube ranges." },
      { q: "Can I get a certificate of analysis?", a: "Where a report exists for the relevant batch it's shared on request; we do not issue reports we don't hold." },
    ],
  },
  {
    slug: "hookah-charcoal-cubes",
    id: "P04",
    name: "Coconut Charcoal Cubes for Hookah & Shisha",
    shortName: "Hookah Cubes",
    tagline: "Premium shisha cut",
    shape: "cube",
    image: hookahCubesImg,
    summary:
      "Precision-cut coconut charcoal cubes for hookah lounges, shisha brands and private-label retail packs.",
    description:
      "Formed from 100% coconut shell with no added mineral coal, our cube range is cut to consistent dimensions for even, predictable burning in hookah and shisha use. Cubes are supplied loose in bulk or in retail-ready branded boxes for private-label buyers.",
    applications: ["Hookah lounges & cafés", "Shisha tobacco brands", "Retail & private label"],
    specs: [
      { label: "Cube size", value: "e.g. 25mm / 26mm / 27mm", note: "Confirmed range, ± tolerance stated on the spec sheet" },
      { label: "Moisture", value: "Typical, confirmed per batch", note: "Kiln-dried; maximum stated on request" },
      { label: "Ash content", value: "Typical, confirmed per batch", note: "Method and basis stated on request" },
      { label: "Pieces per kg", value: "Approximate, size-dependent", note: "Distinguished from a guaranteed count" },
      { label: "Packing", value: "1kg / 250g retail or bulk carton", note: "Private-label boxes available — see Packaging" },
    ],
    packaging: [
      { title: "Retail boxes", desc: "1kg and 250g printed retail boxes, suited to lounges and shisha brand private label." },
      { title: "Bulk export cartons", desc: "Master cartons for wholesale and distributor volumes." },
    ],
    faqs: [
      { q: "Which cube sizes do you offer?", a: "Tell us your target size (e.g. 25mm) and we'll confirm what's currently available, including tolerance." },
      { q: "Can you supply private-label retail boxes?", a: "Yes, subject to confirming artwork and minimum order quantity — see Packaging & Private Label." },
      { q: "Do you offer samples?", a: "Samples can usually be arranged; select \"Sample\" as the enquiry type and we'll confirm cost and timing." },
    ],
  },
  {
    slug: "coconut-charcoal-briquettes",
    id: "P05",
    name: "Coconut Charcoal Briquettes",
    shortName: "Briquettes",
    tagline: "BBQ & hospitality",
    shape: "briquette",
    image: bbqBriquettesImg,
    summary:
      "Dense, formed coconut charcoal briquettes for BBQ, foodservice and hospitality buyers who need a longer, steadier burn.",
    description:
      "Briquettes are pressed from coconut shell charcoal into a uniform pillow or cylinder shape, giving a denser, more consistent burn than loose shell charcoal. They suit commercial grilling, foodservice and BBQ retail where burn consistency and handling matter.",
    applications: ["Commercial BBQ & grilling", "Foodservice & hospitality", "Retail BBQ charcoal"],
    specs: [
      { label: "Shape", value: "Pillow or cylinder", note: "Confirmed per SKU" },
      { label: "Unit mass", value: "Approximate, confirmed per SKU", note: "Tolerance stated on the spec sheet" },
      { label: "Moisture", value: "Typical, confirmed per batch", note: "Maximum stated on request" },
      { label: "Ash content", value: "Typical, confirmed per batch", note: "Method and basis stated on request" },
      { label: "Packing", value: "10kg / 20kg master cartons", note: "Other weights confirmed on request" },
    ],
    packaging: [
      { title: "Master cartons", desc: "10kg and 20kg export-grade cartons, palletised for container loading." },
      { title: "Retail-ready packs", desc: "Smaller branded packs for BBQ retail, where private-label artwork is approved." },
    ],
    faqs: [
      { q: "How long do briquettes burn for?", a: "Burn duration depends on sample mass, airflow and ignition method. We share test-basis figures once available rather than an unqualified number." },
      { q: "Do you supply loose shell charcoal too?", a: "Yes — see our Coconut Shell Charcoal range for the raw, screened format." },
      { q: "What packaging is available?", a: "Master export cartons are standard; retail and private-label packaging is available — see Packaging & Private Label." },
    ],
  },
  {
    slug: "hexagonal-charcoal-briquettes",
    id: "P06",
    name: "Hexagonal Coconut Charcoal Briquettes",
    shortName: "Hexagonal Briquettes",
    tagline: "Conditional format",
    shape: "hex",
    image: hexagonalImg,
    conditional: true,
    summary:
      "An extruded hexagonal format, currently pending confirmation of the exact tile, stick or hollow-briquette shape before publication.",
    description:
      "This page is a conditional placeholder per the Sitemap sheet. Hexagonal formats will publish with full specifications, imagery and pricing once the company confirms whether \"hexagonal\" refers to short tablets, sticks or a hollow extruded briquette.",
    applications: ["To be confirmed"],
    specs: [
      { label: "Shape", value: "To be confirmed", note: "Tile, stick or hollow hexagonal briquette" },
      { label: "Dimensions", value: "To be confirmed", note: "Length, width/bore pending sample confirmation" },
    ],
    packaging: [],
    faqs: [
      { q: "When will this product page be complete?", a: "As soon as the exact hexagonal shape and its specifications are confirmed and approved for publication." },
      { q: "Can I still ask about this format?", a: "Yes — submit an enquiry and our team will follow up with the latest available information." },
    ],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}