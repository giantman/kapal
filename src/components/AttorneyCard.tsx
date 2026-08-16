import { Link } from "react-router-dom";
import type { Attorney } from "../data/attorneys";
import Button from "./Button";

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
    <div className={`group relative overflow-hidden ${className}`} style={{ aspectRatio: "4 / 5" }}>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink/25 via-cream-dark to-ink/40">
        <span className="font-serif text-6xl text-navy/30">
          {initials(attorney.name)}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <Link to={`/${attorney.slug}`}>
          <p className="font-serif text-xl text-white group-hover:underline">
            {attorney.name}
          </p>
        </Link>
        <p className="mt-0.5 text-sm text-white/75">{attorney.title}</p>
        <Button to={`/${attorney.slug}`} className="mt-4 px-6! py-2! text-xs!">
          Read Bio
        </Button>
      </div>
    </div>
  );
}
