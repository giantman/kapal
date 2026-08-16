import { Link, Navigate, useParams } from "react-router-dom";
import { getAttorney } from "../data/attorneys";
import { firmInfo } from "../data/services";
import Button from "../components/Button";

const initials = (name: string) =>
  name
    .replace(", Esq.", "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

export default function AttorneyPage() {
  const { slug } = useParams();
  const attorney = slug ? getAttorney(slug) : undefined;

  if (!attorney) return <Navigate to="/firm" replace />;

  return (
    <>
      <section className="border-b border-navy/10 bg-cream-dark/40">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:grid-cols-[220px_1fr] sm:items-center lg:py-24">
          <div className="flex aspect-square items-center justify-center bg-ink/10">
            <span className="font-serif text-6xl text-navy/30">
              {initials(attorney.name)}
            </span>
          </div>
          <div>
            <Link to="/firm" className="text-sm text-navy/60 hover:text-navy">
              ← The Firm
            </Link>
            <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
              {attorney.name}
            </h1>
            <p className="mt-2 font-medium text-navy/60">{attorney.title}</p>
            <p className="mt-6 max-w-xl text-navy/80">{attorney.summary}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <div className="space-y-10">
          {attorney.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-xl text-navy">{s.heading}</h2>
              <p className="mt-3 leading-relaxed text-navy/80">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/10 bg-cream-dark/40">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-20">
          <h2 className="font-serif text-2xl text-navy sm:text-3xl">
            Discuss your case with {attorney.name.split(",")[0]}
          </h2>
          <p className="mt-3 text-navy/60">{firmInfo.phone}</p>
          <Button to="/contact" className="mt-8">
            Request a consultation
          </Button>
        </div>
      </section>
    </>
  );
}
