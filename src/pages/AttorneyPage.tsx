import { Link, Navigate, useParams } from "react-router-dom";
import { getAttorney } from "../data/attorneys";
import { firmInfo } from "../data/services";
import Button from "../components/Button";
import AttorneysGrid from "../components/AttorneysGrid";
import Seo from "../components/Seo";

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
    <section
      data-navbar-theme="light"
      className="w-full bg-white px-6 py-16 lg:px-10 lg:py-24"
      style={{ "--color-navy": "var(--color-ink)" } as React.CSSProperties}
    >
      <Seo
        title={`${attorney.name} | ${firmInfo.legalName}`}
        description={attorney.summary}
        path={`/${attorney.slug}`}
      />
      <div className="mx-auto grid max-w-[100rem] grid-cols-1 gap-10 lg:grid-cols-[420px_1fr] lg:gap-16">
        <div className="overflow-hidden rounded-[6px] bg-ink/10 lg:sticky lg:top-36 lg:self-start" style={{ aspectRatio: "3 / 4" }}>
          {attorney.photo ? (
            <img
              src={attorney.photo}
              alt={attorney.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-serif text-6xl text-navy/30">
                {initials(attorney.name)}
              </span>
            </div>
          )}
        </div>

        <div>
          <Link to="/firm" className="text-sm text-navy/60 hover:text-navy">
            ← The Firm
          </Link>
          <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            {attorney.name}
          </h1>
          <p className="mt-2 font-medium text-navy/60">{attorney.title}</p>
          <p className="mt-6 max-w-2xl text-navy/85">{attorney.summary}</p>

          <div className="mt-10 max-w-2xl space-y-10">
            {attorney.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-serif text-xl text-navy">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-navy/80">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-navy/20 pt-10">
            <h2 className="font-serif text-2xl text-navy sm:text-3xl">
              Discuss your case with {attorney.name.split(",")[0]}
            </h2>
            <p className="mt-3 text-navy/60">{firmInfo.phone}</p>
            <Button to="/contact" variant="solid" className="mt-8">
              Request a consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-[100rem] border-t border-navy/20 pt-16">
        <AttorneysGrid exclude={attorney.slug} />
      </div>
    </section>
  );
}
