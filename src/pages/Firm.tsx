import { firmInfo } from "../data/services";
import AttorneysGrid from "../components/AttorneysGrid";
import Button from "../components/Button";

export default function Firm() {
  return (
    <section
      data-navbar-theme="light"
      className="w-full bg-white"
      style={{ "--color-navy": "var(--color-ink)" } as React.CSSProperties}
    >
      <div className="px-6 pt-20 pb-16 text-center lg:pt-24">
        <p className="text-xs font-medium tracking-widest text-navy/50 uppercase">
          Attorneys
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl font-serif text-5xl text-navy sm:text-6xl">
          {firmInfo.legalName}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-navy/70">
          A boutique family law practice serving Southern California, built
          on decades of combined experience in high-asset divorce, custody,
          and complex financial matters.
        </p>
      </div>

      <div className="mx-auto max-w-[100rem] px-6 pb-20 lg:px-10">
        <AttorneysGrid />
      </div>

      <div className="border-t border-navy/20">
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
      </div>
    </section>
  );
}
