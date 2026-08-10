import { Link } from "react-router-dom";
import type { Attorney } from "../data/attorneys";

const initials = (name: string) =>
  name
    .replace(", Esq.", "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

export default function AttorneyCard({ attorney }: { attorney: Attorney }) {
  return (
    <Link to={`/${attorney.slug}`} className="group block">
      <div className="flex aspect-4/5 items-center justify-center bg-neutral-100 transition-colors group-hover:bg-neutral-200">
        <span className="font-serif text-5xl text-neutral-400">
          {initials(attorney.name)}
        </span>
      </div>
      <p className="mt-4 font-serif text-xl text-neutral-900 group-hover:text-navy">
        {attorney.name}
      </p>
      <p className="text-sm font-medium text-neutral-500">{attorney.title}</p>
    </Link>
  );
}
