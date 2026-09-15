import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import { firmInfo, services } from "../data/services";

const navLinkCls = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors ${isActive ? "text-navy" : "text-navy/60 hover:text-navy"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-navbar-theme="light"]'),
    );
    if (targets.length === 0) {
      setLight(false);
      return;
    }
    const intersecting = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target);
          else intersecting.delete(entry.target);
        }
        setLight(intersecting.size > 0);
      },
      { rootMargin: "0px 0px -90% 0px", threshold: 0 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        light
          ? "border-b border-ink/10 bg-white/95 backdrop-blur"
          : scrolled
            ? "border-b border-navy/10 bg-cream/95 backdrop-blur"
            : "bg-transparent"
      }`}
      style={light ? ({ "--color-navy": "var(--color-ink)" } as React.CSSProperties) : undefined}
    >
      <div className="flex h-24 w-full items-center justify-between gap-6 px-6 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <Logo className="h-20 w-20 shrink-0" inverted={!light} />
          <span className="hidden truncate text-sm text-navy sm:block">
            Law office of {firmInfo.legalName}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/" end className={navLinkCls}>
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive || servicesOpen ? "text-navy" : "text-navy/60 hover:text-navy"
                }`
              }
            >
              Services
            </NavLink>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-4">
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 rounded-lg border border-ink/10 bg-white p-6 shadow-xl">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/service/${s.slug}`}
                      className="rounded px-2 py-1.5 text-sm text-ink/80 hover:bg-ink/5 hover:text-ink"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/firm" className={navLinkCls}>
            Attorneys
          </NavLink>
          <NavLink to="/contact" className={navLinkCls}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden shrink-0 md:block">
          <Button to="/contact" variant="solid">
            Request consultation
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-6 bg-navy transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-navy transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-navy/10 bg-cream px-6 py-4 md:hidden">
          <NavLink to="/" end className={({ isActive }) => `py-2 text-base ${isActive ? "text-navy" : "text-navy/60"}`}>
            Home
          </NavLink>

          <div>
            <div className="flex items-center justify-between">
              <NavLink
                to="/services"
                className={({ isActive }) => `py-2 text-base ${isActive ? "text-navy" : "text-navy/60"}`}
              >
                Services
              </NavLink>
              <button
                type="button"
                aria-label="Toggle services list"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="p-2 text-navy/60"
              >
                <span className={`block transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
                  ⌄
                </span>
              </button>
            </div>
            {mobileServicesOpen && (
              <div className="mb-1 flex flex-col gap-1 border-l border-navy/10 pl-4">
                {services.map((s) => (
                  <Link key={s.slug} to={`/service/${s.slug}`} className="py-1.5 text-sm text-navy/60">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/firm" className={({ isActive }) => `py-2 text-base ${isActive ? "text-navy" : "text-navy/60"}`}>
            Attorneys
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `py-2 text-base ${isActive ? "text-navy" : "text-navy/60"}`}>
            Contact
          </NavLink>

          <Button to="/contact" className="mt-2 w-full">
            Request consultation
          </Button>
        </nav>
      )}
    </header>
  );
}
