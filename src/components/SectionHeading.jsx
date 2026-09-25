export default function SectionHeading({ kicker, title, body, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {kicker && <p className="text-sm text-brass-dim">{kicker}</p>}
      <h2 className="mt-2 font-display text-3xl leading-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {body && <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">{body}</p>}
    </div>
  );
}
