import { Link } from "react-router-dom";
import type { Attorney } from "../data/attorneys";

const initials = (name: string) =>
  name
    .replace(", Esq.", "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

export default function AttorneyCard({
  attorney,
  className = "",
}: {
  attorney: Attorney;
  className?: string;
}) {
  return (
    <div className={`group flex flex-col @container ${className}`}>
      <Link
        to={`/${attorney.slug}`}
        className="relative block overflow-hidden rounded-[6px]"
        style={{ aspectRatio: "4 / 5" }}
      >
        {attorney.photo ? (
          <img
            src={attorney.photo}
            alt={attorney.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink/25 via-cream-dark to-ink/40">
            <span className="font-serif text-6xl text-navy/30">
              {initials(attorney.name)}
            </span>
          </div>
        )}
      </Link>

      <div className="pt-4">
        <Link to={`/${attorney.slug}`}>
          <p className="font-serif font-medium text-[clamp(0.6875rem,6cqw,1.125rem)] leading-snug text-navy group-hover:underline">
            {attorney.name}
          </p>
        </Link>
        <p className="mt-0.5 text-sm text-navy/60">{attorney.title}</p>
      </div>
    </div>
  );
}
