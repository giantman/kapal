import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import Button from "./Button";
import type { Service } from "../data/services";

export default function ServicesAccordion({ services }: { services: Service[] }) {
  const [openSlugs, setOpenSlugs] = useState<Set<string>>(
    () => new Set(services.slice(0, 3).map((s) => s.slug)),
  );

  const toggle = (slug: string) => {
    setOpenSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  return (
    <div className="border-t border-navy/20">
      {services.map((s) => {
        const isOpen = openSlugs.has(s.slug);
        return (
          <div key={s.slug} className="border-b border-navy/20">
            <button
              type="button"
              onClick={() => toggle(s.slug)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 py-6 text-left"
            >
              {isOpen ? (
                <ChevronUp className="shrink-0 text-navy/50" size={22} />
              ) : (
                <ChevronDown className="shrink-0 text-navy/50" size={22} />
              )}
              <span className="font-serif text-2xl text-navy sm:text-3xl">{s.title}</span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-lg leading-relaxed text-navy/80">{s.description}</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pb-8">
                  <Link
                    to={`/service/${s.slug}`}
                    className="text-sm text-navy underline underline-offset-4 hover:text-navy/70"
                  >
                    Read more
                  </Link>
                  <Button to="/contact" variant="solid">
                    Request a consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
