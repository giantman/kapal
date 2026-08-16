import { useRef } from "react";
import type { ReactNode } from "react";

export default function Carousel({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 480);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div>
      {label && (
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-2xl text-navy sm:text-3xl">{label}</h2>
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scroll(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:bg-ink hover:text-white"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scroll(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:bg-ink hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      )}
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {children}
      </div>
    </div>
  );
}
