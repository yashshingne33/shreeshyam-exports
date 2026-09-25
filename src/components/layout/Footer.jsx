import { Link } from "react-router-dom";
import { COMPANY } from "../../data/site.js";

export default function Footer() {
  return (
    <footer className="grain-panel text-ivory">
      <div className="container relative max-w-content py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl">{COMPANY.legalName}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/70">
              Coconut shell charcoal, briquettes and hookah cubes for
              importers, distributors and brands worldwide.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-brass">Products</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
              <li><Link to="/products/coconut-shell-charcoal/" className="hover:text-ivory">Coconut shell charcoal</Link></li>
              <li><Link to="/products/hookah-charcoal-cubes/" className="hover:text-ivory">Hookah / shisha cubes</Link></li>
              <li><Link to="/products/coconut-charcoal-briquettes/" className="hover:text-ivory">Coconut charcoal briquettes</Link></li>
              <li><Link to="/products/hexagonal-charcoal-briquettes/" className="hover:text-ivory">Hexagonal briquettes</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-brass">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
              <li><Link to="/quality/" className="hover:text-ivory">Quality</Link></li>
              <li><Link to="/packaging-private-label/" className="hover:text-ivory">Packaging & private label</Link></li>
              <li><Link to="/export-ordering/" className="hover:text-ivory">Export & ordering</Link></li>
              <li><Link to="/about/" className="hover:text-ivory">About</Link></li>
              <li><Link to="/faq/" className="hover:text-ivory">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-brass">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/75">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-ivory">{COMPANY.email}</a>
              </li>
              <li>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} className="hover:text-ivory">{COMPANY.phone}</a>
              </li>
              <li className="text-ivory/60">{COMPANY.address}</li>
              <li>
                <Link
                  to="/request-a-quote/"
                  className="mt-2 inline-block border-b border-brass pb-0.5 text-brass hover:text-ivory"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/15 pt-6 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy/" className="hover:text-ivory">Privacy policy</Link>
            <Link to="/terms/" className="hover:text-ivory">Website terms</Link>
            <Link to="/guides/" className="hover:text-ivory">Buyer guides</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
