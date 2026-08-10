export default function PaintedBand({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background:
          "linear-gradient(180deg, #bcd4e8 0%, #d7e4ee 30%, #e9d9c4 62%, #d8b98f 100%)",
      }}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-60 mix-blend-soft-light"
        preserveAspectRatio="none"
        viewBox="0 0 800 300"
      >
        <defs>
          <filter id="paint">
            <feTurbulence baseFrequency="0.012 0.04" numOctaves="3" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" />
          </filter>
        </defs>
        <g filter="url(#paint)">
          <ellipse cx="120" cy="240" rx="220" ry="70" fill="#8a6b45" opacity="0.5" />
          <ellipse cx="620" cy="230" rx="260" ry="80" fill="#5f7a54" opacity="0.4" />
          <ellipse cx="400" cy="90" rx="300" ry="60" fill="#ffffff" opacity="0.5" />
          <ellipse cx="150" cy="60" rx="180" ry="40" fill="#f3c98a" opacity="0.35" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  );
}
