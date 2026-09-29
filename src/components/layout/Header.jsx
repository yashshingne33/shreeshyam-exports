import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo.jsx";
import { NAV_PRODUCTS, NAV_COMPANY, COMPANY } from "../../data/site.js";

const PRODUCT_LINKS = NAV_PRODUCTS;
const COMPANY_LINKS = NAV_COMPANY;

function NavDropdown({ label, links, isDark }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-1.5 text-[15px] transition-colors ${
          isDark ? "text-ivory/85 hover:text-ivory" : "text-ink-soft hover:text-charcoal"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(true)}
      >
        {label}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 transition-all duration-200 ease-out ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"
        }`}
      >
        <div className="rounded-lg border border-charcoal/10 bg-ivory p-1.5 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3.5 py-2.5 text-[14px] text-ink-soft transition-colors hover:bg-charcoal/5 hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled;
  const isDark = transparent;

  return (
    <>
      <header
        className={[
          "inset-x-0 top-0 z-50 transition-colors duration-300",
          isHome ? "fixed" : "static",
          transparent
            ? "bg-transparent"
            : "border-b border-charcoal/10 bg-ivory/95 backdrop-blur",
        ].join(" ")}
      >
        <div className="container flex max-w-content items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" stroke={isDark ? "#AF9560" : "#AF9560"} />
            <span
              className={`font-display text-xl font-semibold tracking-wide ${
                isDark ? "text-ivory" : "text-charcoal"
              }`}
            >
              {COMPANY.legalName}
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            <NavDropdown label="Products" links={PRODUCT_LINKS} isDark={isDark} />
            <NavLink
              to="/quality/"
              className={`text-[15px] transition-colors ${
                isDark ? "text-ivory/85 hover:text-ivory" : "text-ink-soft hover:text-charcoal"
              }`}
            >
              Quality
            </NavLink>
            <NavLink
              to="/packaging-private-label/"
              className={`text-[15px] transition-colors ${
                isDark ? "text-ivory/85 hover:text-ivory" : "text-ink-soft hover:text-charcoal"
              }`}
            >
              Packaging
            </NavLink>
            <NavDropdown label="Company" links={COMPANY_LINKS} isDark={isDark} />
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/request-a-quote/"
              className="hidden rounded-full bg-brass px-5 py-2.5 text-[14px] font-medium text-charcoal transition-colors hover:bg-[#c2a877] sm:inline-block"
            >
              Request a Quote
            </Link>

            <button
              type="button"
              className="flex flex-col gap-[5px] p-2"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(true)}
            >
              <span className={`block h-px w-6 ${isDark ? "bg-ivory" : "bg-charcoal"}`} />
              <span className={`block h-px w-6 ${isDark ? "bg-ivory" : "bg-charcoal"}`} />
              <span className={`block h-px w-4 self-end ${isDark ? "bg-ivory" : "bg-charcoal"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-charcoal text-ivory transition-all duration-300 ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container flex max-w-content items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <Logo className="h-7 w-7" stroke="#AF9560" />
            <span className="font-display text-xl font-semibold text-ivory">{COMPANY.legalName}</span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="p-2 text-3xl leading-none text-ivory/80 hover:text-ivory"
          >
            &times;
          </button>
        </div>

        <nav className="container flex max-w-content flex-1 flex-col justify-center gap-2 pb-24" aria-label="Full">
          {[
            { label: "Products", to: "/products/" },
            { label: "Quality", to: "/quality/" },
            { label: "Packaging & private label", to: "/packaging-private-label/" },
            { label: "Export & ordering", to: "/export-ordering/" },
            { label: "About", to: "/about/" },
            { label: "FAQ", to: "/faq/" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="border-b border-ivory/10 py-4 font-display text-3xl text-ivory/90 transition-colors hover:text-brass sm:text-4xl"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/request-a-quote/"
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-block w-fit rounded-full bg-brass px-7 py-3.5 text-[15px] font-medium text-charcoal"
          >
            Request a Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
