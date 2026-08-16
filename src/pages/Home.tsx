import { Link } from "react-router-dom";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import ServiceCard from "../components/ServiceCard";
import AttorneyCard from "../components/AttorneyCard";
import { services } from "../data/services";
import { attorneys } from "../data/attorneys";

export default function Home() {
  const featuredServices = services.slice(0, 6);
  const half = Math.ceil(services.length / 2);
  const col1 = services.slice(0, half);
  const col2 = services.slice(half);

  return (
    <>
      <section
        className="relative -mt-16 flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-6 text-center"
        style={{ backgroundImage: "url(/hero@2x.png)" }}
      >
        <h1 className="mx-auto max-w-3xl font-serif text-5xl leading-tight text-navy sm:text-6xl">
          Southern California's high-asset family law attorneys
        </h1>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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
