import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import ServiceCard from "../components/ServiceCard";
import AttorneyCard from "../components/AttorneyCard";
import { services } from "../data/services";
import { attorneys } from "../data/attorneys";
import marbleRipple from "../assets/marble_ripple.gif";
import glitchStripes from "../assets/glitch_stripes.gif";

const heroImages = [marbleRipple, glitchStripes];

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const half = Math.ceil(services.length / 2);
  const col1 = services.slice(0, half);
  const col2 = services.slice(half);

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="relative -mt-16 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {heroImages.map((src, i) => (
          <div
            key={src}
            aria-hidden={i !== heroIndex}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              i === heroIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="absolute inset-0 bg-ink/50" />
        <h1 className="relative mx-auto max-w-3xl font-serif text-5xl leading-tight text-navy sm:text-6xl">
          Southern California's high-asset family law attorneys
        </h1>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button to="/contact" variant="ghost">
            Leave a message
          </Button>
          <Button to="/contact" variant="outline">
            Free consultation
          </Button>
        </div>
      </section>

      <section className="flex min-h-screen w-screen flex-col justify-center px-6 py-24 lg:px-10">
        <Carousel label="Legal services">
          {featuredServices.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} title={s.title} description={s.description} />
          ))}
        </Carousel>
      </section>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-10">
        <h2 className="font-serif text-2xl text-navy sm:text-3xl">
          What we help with ...
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-2 sm:grid-cols-2">
          {[col1, col2].map((col, i) => (
            <ul key={i} className="space-y-2">
              {col.map((s) => (
                <li key={s.slug} className="flex gap-2 text-navy/85">
                  <span className="text-navy/40">•</span>
                  <Link to={`/service/${s.slug}`} className="hover:underline">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 lg:px-10">
        <Carousel label="Attorneys">
          {attorneys.map((a) => (
            <AttorneyCard key={a.slug} attorney={a} className="w-72 shrink-0 snap-start sm:w-80" />
          ))}
        </Carousel>
      </section>

      <section className="flex min-h-screen flex-col justify-center">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl text-navy sm:text-4xl">
            When life takes an unexpected turn. We're here for you.
          </h2>
          <Button to="/contact" variant="solid" className="mt-10">
            Request a consultation
          </Button>
        </div>
      </section>
    </>
  );
}
