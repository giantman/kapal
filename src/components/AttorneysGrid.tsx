import { attorneys as allAttorneys } from "../data/attorneys";
import AttorneyCard from "./AttorneyCard";
import FadeInOnScroll from "./FadeInOnScroll";

export default function AttorneysGrid({ exclude }: { exclude?: string }) {
  const attorneys = exclude ? allAttorneys.filter((a) => a.slug !== exclude) : allAttorneys;
  const partners = attorneys.filter((a) => a.group === "Partners");
  const associates = attorneys.filter((a) => a.group === "Associates");

  return (
    <div>
      <h2 className="font-serif text-2xl text-navy sm:text-3xl">Partners</h2>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
        {partners.map((a, i) => (
          <FadeInOnScroll key={a.slug} delay={i * 80}>
            <AttorneyCard attorney={a} />
          </FadeInOnScroll>
        ))}
      </div>

      <h2 className="mt-20 font-serif text-2xl text-navy sm:text-3xl">Associates</h2>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
        {associates.map((a, i) => (
          <FadeInOnScroll key={a.slug} delay={i * 80}>
            <AttorneyCard attorney={a} />
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  );
}
