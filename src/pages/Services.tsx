import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Button from "../components/Button";
import Seo from "../components/Seo";
import { services } from "../data/services";

export default function Services() {
  return (
    <section
      data-navbar-theme="light"
      className="w-full bg-white"
      style={{ "--color-navy": "var(--color-ink)" } as React.CSSProperties}
    >
      <Seo
        title="Family Law Services | Kaplan Trope Gekht & DeCarolis"
        description="From divorce and custody to complex asset division and business valuations, our attorneys handle every facet of family law with care and precision."
        path="/services"
      />
      <div className="px-6 pt-20 pb-16 text-center lg:pt-24">
        <p className="text-xs font-medium tracking-widest text-navy/50 uppercase">
          Services
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl font-serif text-5xl text-navy sm:text-6xl">
          We help you with ...
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-navy/70">
          From divorce and custody to complex asset division and business
          valuations, our attorneys handle every facet of family law with
          care and precision.
        </p>
      </div>

      <div className="border-b border-navy/20">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-x-16 gap-y-3 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/service/${s.slug}`}
                className="group flex items-center justify-between gap-2 font-serif text-xl text-navy hover:underline"
              >
                {s.title}
                <ChevronRight
                  className="shrink-0 text-navy/40 transition-transform group-hover:translate-x-1"
                  size={18}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-28">
          <h2 className="font-serif text-3xl text-navy sm:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-navy/60">
            Tell us about your situation and we'll get back to you in one
            business day.
          </p>
          <Button to="/contact" className="mt-8">
            Request a consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
