import Button from "../components/Button";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <section className="px-6 pt-20 pb-16 text-center lg:pt-24">
        <p className="text-xs font-medium tracking-widest text-neutral-500 uppercase">
          Services
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl font-serif text-5xl text-neutral-900 sm:text-6xl">
          We help you with ...
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
          From divorce and custody to complex asset division and business
          valuations, our attorneys handle every facet of family law with
          care and precision.
        </p>
      </section>

      <section className="border-y border-black/5 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s} className="font-serif text-xl text-neutral-800">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-28">
          <h2 className="font-serif text-3xl text-neutral-900 sm:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-neutral-500">
            Tell us about your situation and we'll get back to you in one
            business day.
          </p>
          <Button to="/contact" className="mt-8">
            Request a consultation
          </Button>
        </div>
      </section>
    </>
  );
}
