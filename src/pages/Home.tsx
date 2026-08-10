import Button from "../components/Button";
import PaintedBand from "../components/decor/PaintedBand";
import { services } from "../data/services";

export default function Home() {
  const half = Math.ceil(services.length / 2);
  const col1 = services.slice(0, half);
  const col2 = services.slice(half);

  return (
    <>
      <section className="px-6 pt-20 pb-24 text-center lg:pt-28">
        <h1 className="mx-auto max-w-3xl font-serif text-5xl leading-tight text-neutral-900 sm:text-6xl">
          Your needs, pace, and family.
          <br />
          Your family law attorneys.
        </h1>

        <PaintedBand className="mx-auto mt-14 aspect-21/9 w-full max-w-4xl" />

        <p className="mx-auto mt-14 max-w-xl font-serif text-2xl text-neutral-800 sm:text-3xl">
          Serving Southern California's high-asset divorce needs.
        </p>

        <Button to="/contact" className="mt-8">
          Request a consultation
        </Button>
      </section>

      <section className="border-y border-black/5 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-28">
          <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
            Services
          </p>
          <h2 className="mt-3 font-serif text-4xl text-neutral-900 sm:text-5xl">
            We help you with ...
          </h2>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-5 text-left sm:grid-cols-2">
            <ul className="space-y-5">
              {col1.map((s) => (
                <li key={s} className="font-serif text-xl text-neutral-800">
                  {s}
                </li>
              ))}
            </ul>
            <ul className="space-y-5">
              {col2.map((s) => (
                <li key={s} className="font-serif text-xl text-neutral-800">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-28">
          <h2 className="font-serif text-3xl text-neutral-900 sm:text-4xl">
            When life takes an unexpected turn. We're here for you.
          </h2>
          <Button to="/contact" className="mt-10">
            Request a consultation
          </Button>
        </div>
      </section>
    </>
  );
}
