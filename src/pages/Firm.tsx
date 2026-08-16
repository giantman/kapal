import { attorneys } from "../data/attorneys";
import { firmInfo } from "../data/services";
import AttorneyCard from "../components/AttorneyCard";
import Button from "../components/Button";

export default function Firm() {
  const partners = attorneys.filter((a) => a.group === "Partners");
  const associates = attorneys.filter((a) => a.group === "Associates");

  return (
    <>
      <section className="px-6 pt-20 pb-16 text-center lg:pt-24">
        <p className="text-xs font-medium tracking-widest text-navy/50 uppercase">
          Attorneys
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl font-serif text-5xl text-navy sm:text-6xl">
          The Firm
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-navy/70">
          {firmInfo.name} is a boutique family law practice serving Southern
          California, built on decades of combined experience in high-asset
          divorce, custody, and complex financial matters.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
        <h2 className="font-serif text-2xl text-navy sm:text-3xl">Partners</h2>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {partners.map((a) => (
            <AttorneyCard key={a.slug} attorney={a} />
          ))}
        </div>

        <h2 className="mt-20 font-serif text-2xl text-navy sm:text-3xl">
          Associates
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {associates.map((a) => (
            <AttorneyCard key={a.slug} attorney={a} />
          ))}
        </div>
      </section>

      <section className="border-t border-navy/10 bg-cream-dark/40">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-28">
          <h2 className="font-serif text-3xl text-navy sm:text-4xl">
            Speak with our team
          </h2>
          <p className="mt-4 text-navy/60">
            We'll get back to you in one business day.
          </p>
          <Button to="/contact" className="mt-8">
            Request a consultation
          </Button>
        </div>
      </section>
    </>
  );
}
