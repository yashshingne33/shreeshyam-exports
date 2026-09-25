export default function SealBadge({
  topText = "COCONUT SHELL SOURCED",
  bottomText = "TRADITIONALLY KILNED",
  size = 128,
}) {
  const r = 46;
  const cx = 50;
  const cy = 50;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className="select-none"
    >
      <defs>
        <path id="seal-top" d={`M ${cx - r},${cy} a ${r},${r} 0 1 1 ${r * 2},0`} />
        <path id="seal-bottom" d={`M ${cx + r},${cy} a ${r},${r} 0 1 1 ${-r * 2},0`} />
      </defs>

      <circle cx={cx} cy={cy} r={r + 6} fill="none" stroke="#F7F5EF" strokeOpacity="0.35" strokeWidth="0.6" />
      <circle cx={cx} cy={cy} r={r - 8} fill="none" stroke="#F7F5EF" strokeOpacity="0.35" strokeWidth="0.6" />

      <text fill="#F7F5EF" fontSize="6.4" letterSpacing="1.5" fontFamily="Inter, sans-serif">
        <textPath href="#seal-top" startOffset="50%" textAnchor="middle">
          {topText}
        </textPath>
      </text>
      <text fill="#F7F5EF" fontSize="6.4" letterSpacing="1.5" fontFamily="Inter, sans-serif">
        <textPath href="#seal-bottom" startOffset="50%" textAnchor="middle">
          {bottomText}
        </textPath>
      </text>

      <g stroke="#AF9560" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M50 33c7 3.6 11.5 9 11.5 15S57 62.8 50 62.8" />
        <path d="M50 40c4 2.4 6.6 5.8 6.6 9.4 0 4.6-3.2 8.2-6.6 8.2" opacity="0.85" />
      </g>
      <circle cx="50" cy="49.5" r="1.6" fill="#AF9560" />
    </svg>
  );
}
