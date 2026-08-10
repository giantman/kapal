export default function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="var(--color-navy)" />
      <circle
        cx="50"
        cy="50"
        r="41"
        fill="none"
        stroke="white"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <text
        x="50"
        y="45"
        textAnchor="middle"
        fontFamily="'EB Garamond', Georgia, serif"
        fontSize="22"
        fill="white"
      >
        KTG
      </text>
      <line x1="34" y1="58" x2="66" y2="58" stroke="white" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}
