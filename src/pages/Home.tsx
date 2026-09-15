import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Seo from "../components/Seo";
import ServicesAccordion from "../components/ServicesAccordion";
import AttorneyCard from "../components/AttorneyCard";
import HeroVideoCarousel from "../components/HeroVideoCarousel";
import { services, firmInfo } from "../data/services";
import { attorneys } from "../data/attorneys";
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
        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-serif text-5xl leading-tight text-navy sm:text-6xl">
            {heroTexts[heroIndex]}
          </h1>
        </div>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button to="/contact" variant="ghost">
            Leave a message
          </Button>
          <Button to="/contact" variant="outline">
            Free consultation
          </Button>
        </div>
      </section>

      <section
        data-navbar-theme="light"
        className="flex min-h-screen w-full flex-col justify-center border-t border-navy/20 bg-white px-6 py-24 lg:px-10"
        style={{ "--color-navy": "var(--color-ink)" } as React.CSSProperties}
      >
        <div className="mx-auto grid w-full max-w-[100rem] grid-cols-1 gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <h2 className="font-serif text-3xl text-navy sm:text-4xl lg:sticky lg:top-36 lg:self-start">
            How we help
          </h2>
          <div>
            <p className="max-w-2xl text-lg text-navy/85 sm:text-xl">
              At {firmInfo.name}, we understand the importance of compassion and clarity during
              life's toughest moments.
            </p>
            <p className="mt-10 max-w-2xl text-lg text-navy/85 sm:text-xl">
              Our attorneys guide you through every step of your family legal matters with care
              and strategic judgment. Trust us to protect your family's future with personalized
              solutions tailored to your unique needs.
            </p>
            <Link
              to="/services"
              className="mt-4 inline-block text-sm text-navy underline underline-offset-4 hover:text-navy/70"
            >
              Read more.
            </Link>

            <div className="mt-10">
              <ServicesAccordion services={services} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex min-h-screen max-w-[100rem] flex-col justify-center px-6 py-24 lg:px-10">
        <h2 className="mb-10 font-serif text-2xl text-navy sm:text-3xl">Attorneys</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {attorneys.map((a) => (
            <AttorneyCard key={a.slug} attorney={a} />
          ))}
        </div>
      </section>

      <section
        data-navbar-theme="light"
        className="flex min-h-screen w-full flex-col justify-center border-t border-navy/20 bg-white px-6 py-24"
        style={{ "--color-navy": "var(--color-ink)" } as React.CSSProperties}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-navy sm:text-4xl">
            When life takes an unexpected turn.
            <br />
            We're here for you.
          </h2>
          <Button to="/contact" variant="solid" className="mt-10">
            Request a consultation
          </Button>
        </div>
      </section>
    </>
  );
}
