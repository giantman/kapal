import { Link, Navigate, useParams } from "react-router-dom";
import { getService, firmInfo } from "../data/services";
import Button from "../components/Button";

export default function ServicePage() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <section className="border-b border-navy/10 bg-cream-dark/40">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-24">
          <Link to="/services" className="text-sm text-navy/60 hover:text-navy">
            ← Services
          </Link>
          <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 text-navy/80">{service.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        <div className="space-y-6">
          {service.body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-navy/80">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/10 bg-cream-dark/40">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-20">
          <h2 className="font-serif text-2xl text-navy sm:text-3xl">
            Discuss your {service.title.toLowerCase()} matter with our team
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
