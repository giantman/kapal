import { useState } from "react";
import Button from "../components/Button";
import Seo from "../components/Seo";
import ServicesAccordion from "../components/ServicesAccordion";
import AttorneysGrid from "../components/AttorneysGrid";
import HeroVideoCarousel from "../components/HeroVideoCarousel";
import { services, firmInfo } from "../data/services";
import heroVideo1 from "../assets/videos/hero-1.mp4";
import heroVideo2 from "../assets/videos/hero-2.mp4";
import heroVideo3 from "../assets/videos/hero-3.mp4";
import heroVideo4 from "../assets/videos/hero-4.mp4";
import heroVideo5 from "../assets/videos/hero-5.mp4";
import heroVideo6 from "../assets/videos/hero-6.mp4";

const heroVideos = [
  heroVideo1,
  heroVideo2,
  heroVideo3,
  heroVideo4,
  heroVideo5,
  heroVideo6,
];

const heroTexts = [
  "Southern California's high-asset family law attorneys",
  "Your needs, pace, and family. Your family law attorneys.",
  "Kaplan, Trope, Gekht, & DeCarolis, LLP",
];

const getHeroTextIndex = () => {
  try {
    const stored = Number(localStorage.getItem("heroTextIndex"));
    const next = Number.isFinite(stored) ? (stored + 1) % heroTexts.length : 0;
    localStorage.setItem("heroTextIndex", String(next));
    return next;
  } catch {
    return 0;
  }
};

export default function Home() {
  const [heroIndex] = useState(getHeroTextIndex);

  return (
    <>
      <Seo
        title="Kaplan Trope Gekht & DeCarolis | Southern California Family Law Attorneys"
        description="Southern California's high-asset family law attorneys, handling divorce, custody, support, and complex asset division with care and strategic judgment."
        path="/"
      />
      <section className="relative -mt-28 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <HeroVideoCarousel videos={heroVideos} />
        <div className="relative mx-auto max-w-4xl">
          <h1 className="font-display text-5xl leading-[1.05] font-light text-navy sm:text-6xl lg:text-7xl">
            {heroTexts[heroIndex]}
          </h1>
        </div>
      </section>

      <section
        id="our-practice"
        data-navbar-theme="light"
        className="flex min-h-screen w-full flex-col items-center justify-center bg-[#e9ebf2] px-6 py-24 text-center"
        style={{ "--color-navy": "var(--color-ink)" } as React.CSSProperties}
      >
        <p className="mx-auto max-w-5xl font-display text-4xl leading-[1.05] font-light text-cream sm:text-6xl lg:text-7xl">
          Powerhouse <span className="italic">family law</span> practice serving
          California. Over 150 years of combined experience in complex and
          high-stakes family law litigation.
        </p>
      </section>

      <section
        id="how-we-help"
        className="flex min-h-screen w-full flex-col justify-center bg-cream px-6 py-24 lg:px-10"
      >
        <div className="mx-auto grid w-full max-w-[100rem] grid-cols-1 gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <h2 className="font-serif text-2xl text-navy sm:text-3xl lg:sticky lg:top-36 lg:self-start">
            How we help
          </h2>
          <div>
            <p className="max-w-2xl font-serif text-lg text-navy/85 sm:text-xl">
              At {firmInfo.name}, we understand the importance of compassion and clarity during
              life's toughest moments.
            </p>
            <p className="mt-10 max-w-2xl font-serif text-lg text-navy/85 sm:text-xl">
              Our attorneys guide you through every step of your family legal matters with care
              and strategic judgment. Trust us to protect your family's future with personalized
              solutions tailored to your unique needs.
            </p>

            <div className="mt-10">
              <ServicesAccordion services={services} />
            </div>
          </div>
        </div>
      </section>

      <section
        data-navbar-theme="light"
        className="w-full bg-white px-6 py-24 lg:px-10"
        style={{ "--color-navy": "var(--color-ink)" } as React.CSSProperties}
      >
        <div className="mx-auto max-w-[100rem]">
          <h2 className="mb-10 font-display text-2xl font-light text-cream sm:text-3xl">
            Our Attorneys
          </h2>
          <AttorneysGrid />
        </div>
      </section>

      <section
        data-navbar-theme="light"
        className="flex min-h-screen w-full flex-col items-center justify-center bg-[#e9ebf2] px-6 py-24 text-center"
        style={{ "--color-navy": "var(--color-ink)" } as React.CSSProperties}
      >
        <p className="mx-auto max-w-7xl font-display text-4xl leading-[1.05] font-light text-cream sm:text-6xl lg:text-7xl">
          When life takes an unexpected turn.
          <br />
          We're here for you.
        </p>
        <Button to="/contact" variant="solid" className="mt-12">
          Request a consultation
        </Button>
      </section>
    </>
  );
}
