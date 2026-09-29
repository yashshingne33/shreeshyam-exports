import { Link } from "react-router-dom";
import { COMPANY } from "../../data/site.js";
import { Icon } from "../PageDecor.jsx";

const PRODUCT_LINKS = [
  { to: "/products/coconut-shell-charcoal/", label: "Coconut shell charcoal" },
  { to: "/products/hookah-charcoal-cubes/", label: "Hookah / shisha cubes" },
  { to: "/products/coconut-charcoal-briquettes/", label: "Coconut charcoal briquettes" },
  { to: "/products/hexagonal-charcoal-briquettes/", label: "Hexagonal briquettes" },
];

const COMPANY_LINKS = [
  { to: "/quality/", label: "Quality" },
  { to: "/packaging-private-label/", label: "Packaging & private label" },
  { to: "/export-ordering/", label: "Export & ordering" },
  { to: "/about/", label: "About" },
  { to: "/faq/", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-ivory">
      {/* Thin brass line across the very top, plus a soft glow — no blur */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brass/0 via-brass to-brass/0" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brass/10" aria-hidden="true" />

      <div className="container relative max-w-content px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl text-ivory">{COMPANY.legalName}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">
              Coconut shell charcoal, briquettes and hookah cubes for
              importers, distributors and brands worldwide.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brass">Products</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ivory/75">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-brass">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brass">Company</p>
            <ul className="mt-5 space-y-2.5 text-sm text-ivory/75">
              {COMPANY_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="transition-colors hover:text-brass">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brass">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              <li className="flex items-start gap-2.5">
                <Icon name="file" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-brass">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="chat" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                <a href={`https://wa.me/${COMPANY.whatsapp}`} className="transition-colors hover:text-brass">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                <span className="text-ivory/60">{COMPANY.address}</span>
              </li>
            </ul>
            <Link
              to="/request-a-quote/"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brass px-5 py-2.5 text-xs font-semibold text-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c2a877]"
            >
              Request a Quote &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy/" className="transition-colors hover:text-brass">Privacy policy</Link>
            <Link to="/terms/" className="transition-colors hover:text-brass">Website terms</Link>
            <Link to="/guides/" className="transition-colors hover:text-brass">Buyer guides</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}