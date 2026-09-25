import { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../data/site.js";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-7 right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-56 rounded-2xl border border-charcoal/10 bg-white p-3 shadow-xl">
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-charcoal hover:bg-ivory"
          >
            <span aria-hidden="true">💬</span> WhatsApp
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-charcoal hover:bg-ivory"
          >
            <span aria-hidden="true">✉️</span> Email us
          </a>
          <Link
            to="/request-a-quote/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-charcoal hover:bg-ivory"
          >
            <span aria-hidden="true">📋</span> Request a quote
          </Link>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="flex items-center gap-2 rounded-full bg-brass px-5 py-3.5 text-[14px] font-medium text-charcoal shadow-[0_12px_30px_-8px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 hover:bg-[#c2a877]"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M2 9a7 7 0 1 1 3 5.7L2 16l1.2-3.1A6.96 6.96 0 0 1 2 9Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
        {open ? "Close" : "Contact us"}
      </button>
    </div>
  );
}
