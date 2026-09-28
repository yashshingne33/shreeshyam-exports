/* ---------------------------------------------------------------------- */
/*  Shared design helpers used by About, Products, Packaging,             */
/*  Export & Ordering and FAQ pages (same look as the Quality page).      */
/*  Save as: src/components/PageDecor.jsx                                 */
/* ---------------------------------------------------------------------- */

export const SECTION = "py-16 sm:py-20 lg:py-24";
export const WRAP = "container mx-auto max-w-content px-5 sm:px-6 lg:px-8";
export const H2 = "font-display text-3xl font-medium leading-tight text-forest sm:text-4xl";
export const BODY = "text-[15px] leading-relaxed text-charcoal/70";
export const PALE = "bg-[#F1F5EF]";

const BTN = "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5";
export const BTN_BRASS = `${BTN} bg-brass text-charcoal shadow-md shadow-brass/25 hover:bg-[#c2a877]`;
export const BTN_DARK = `${BTN} bg-charcoal text-ivory hover:bg-brass hover:text-charcoal`;
export const BTN_LINE = `${BTN} border border-charcoal/20 bg-white text-charcoal hover:border-brass hover:bg-brass/10`;

export const DOTS = {
  backgroundImage: "radial-gradient(rgba(175,149,96,0.45) 1.4px, transparent 1.4px)",
  backgroundSize: "16px 16px",
};

const ICONS = {
  shield: "M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5",
  clipboard: "M9 4h6v3H9V4zM7 5H6a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-1M8.5 13l2.2 2.2 4.3-4.6",
  cube: "M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM4 7.5l8 4.5 8-4.5M12 12v9",
  box: "M3 8l9-5 9 5v9l-9 5-9-5V8zM3 8l9 5 9-5M12 13v9M8 5.5l9 5",
  file: "M7 3h7l5 5v13H7V3zM14 3v5h5M10 13h6M10 17h6",
  truck: "M2 6h11v10H2V6zM13 9h4l4 4v3h-8V9zM6 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  bag: "M6 8h12l1 12H5L6 8zM9 8V6a3 3 0 016 0v2",
  bulk: "M5 9h14v11H5V9zM8 9V5h8v4M9 14h6",
  tag: "M3 12V4h8l10 10-8 8L3 12zM7.5 8.5h.01",
  chat: "M4 5h16v11H9l-5 4V5zM8 10h8",
  pin: "M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z",
  help: "M12 21a9 9 0 100-18 9 9 0 000 18zM9.5 9.5a2.5 2.5 0 115 0c0 1.5-2.5 2-2.5 3.5M12 17h.01",
  globe: "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  check: "M5 12l4 4 10-10",
  sample: "M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3M8 15h8",
};

export function Icon({ name, className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={ICONS[name] || ICONS.box} />
    </svg>
  );
}

/* Pale-green circle holding an icon */
export function IconCircle({ name, className = "" }) {
  return (
    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest ${className}`}>
      <Icon name={name} className="h-7 w-7" />
    </span>
  );
}

/* Soft palm leaf used as faded decoration */
export function PalmLeaf({ className = "" }) {
  return (
    <svg viewBox="0 0 160 200" className={className} aria-hidden="true">
      <path d="M80 200 C 80 140, 82 70, 84 8" stroke="currentColor" strokeWidth="2" fill="none" />
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const y = 170 - i * 27;
        const len = 62 - i * 6;
        return (
          <g key={i} fill="currentColor">
            <ellipse cx={76 - len / 2} cy={y} rx={len / 2} ry="7" transform={`rotate(-28 76 ${y})`} />
            <ellipse cx={88 + len / 2} cy={y - 4} rx={len / 2} ry="7" transform={`rotate(28 88 ${y - 4})`} />
          </g>
        );
      })}
    </svg>
  );
}

/* Faded leaf (top-left) + dot pattern (top-right) for white sections */
export function CornerDecor() {
  return (
    <>
      <PalmLeaf className="pointer-events-none absolute -left-8 top-4 hidden h-44 w-36 rotate-[35deg] text-forest/10 sm:block" />
      <div className="pointer-events-none absolute right-4 top-6 hidden h-32 w-32 sm:block" style={DOTS} aria-hidden="true" />
    </>
  );
}

/* Row of cards with a brass number badge on the corner and dashed connectors.
   items: [{ n, icon, title, body }] */
export function StepCards({ items }) {
  return (
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, idx) => (
        <div
          key={item.n || item.title}
          className="relative rounded-2xl border border-charcoal/10 bg-white p-6 pt-8 shadow-[0_6px_24px_-8px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg sm:p-7 sm:pt-9"
        >
          <span className="absolute -left-2 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-brass text-sm font-semibold text-white shadow-md">
            {item.n || `0${idx + 1}`}
          </span>
          <IconCircle name={item.icon} />
          <h3 className="mt-5 font-display text-xl font-medium text-forest">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.body}</p>
          {idx < items.length - 1 && (
            <svg className="pointer-events-none absolute -right-10 top-1/3 hidden h-8 w-10 lg:block" viewBox="0 0 40 30" fill="none" aria-hidden="true">
              <path d="M0 22 C 12 22, 14 6, 40 8" stroke="#AF9560" strokeWidth="1.6" strokeDasharray="4 4" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}