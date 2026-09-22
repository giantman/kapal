import { attorneys as allAttorneys, type Attorney } from "../data/attorneys";
import AttorneyCard from "./AttorneyCard";
import FadeInOnScroll from "./FadeInOnScroll";

function AttorneyGroup({ heading, attorneys }: { heading: string; attorneys: Attorney[] }) {
  if (attorneys.length === 0) return null;

  return (
    <>
      <h2 className="mt-20 font-serif text-2xl text-navy first:mt-0 sm:text-3xl">{heading}</h2>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
        {attorneys.map((a, i) => (
          <FadeInOnScroll key={a.slug} delay={i * 80}>
            <AttorneyCard attorney={a} />
          </FadeInOnScroll>
        ))}
      </div>
    </>
  );
}

export default function AttorneysGrid({ exclude }: { exclude?: string }) {
  const attorneys = exclude ? allAttorneys.filter((a) => a.slug !== exclude) : allAttorneys;

  return (
    <div>
      <AttorneyGroup heading="Founding Partners" attorneys={attorneys.filter((a) => a.group === "Founding Partners")} />
      <AttorneyGroup heading="Associates" attorneys={attorneys.filter((a) => a.group === "Associates")} />
      <AttorneyGroup heading="Of Counsel" attorneys={attorneys.filter((a) => a.group === "Of Counsel")} />
    </div>
  );
}
