import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import { firmInfo } from "../data/services";

const HOW_WE_HELP_ID = "how-we-help";

function NavItem({
  to,
  end,
  active: activeOverride,
  onClick,
  children,
}: {
  to: string;
  end?: boolean;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
}) {
  return (
    <NavLink to={to} end={end} onClick={onClick} className="group relative py-1">
      {({ isActive }) => {
        const active = activeOverride ?? isActive;
        return (
          <>
            <span
              className={`text-sm transition-colors ${
                active ? "text-navy" : "text-navy/60 group-hover:text-navy"
              }`}
            >
              {children}
            </span>
            <span
              className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-navy transition-transform duration-300 ease-out ${
                active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </>
        );
      }}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";
  const howWeHelpActive = onHome && location.hash === `#${HOW_WE_HELP_ID}`;

  // Router links to the current hash don't re-trigger the scroll effect in
  // App, so handle the "already here" case directly.
  const handleHowWeHelpClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (howWeHelpActive) {
      e.preventDefault();
      document
        .getElementById(HOW_WE_HELP_ID)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setOpen(false);
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
          ? "bg-white/95 backdrop-blur"
          : scrolled
            ? "bg-cream/95 backdrop-blur"
            : "bg-transparent"
      }`}
      style={light ? ({ "--color-navy": "var(--color-ink)" } as React.CSSProperties) : undefined}
    >
      <div className="flex h-28 w-full items-center justify-between gap-6 px-6 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <Logo className="h-24 w-24 shrink-0" inverted={!light} />
          <span className="hidden truncate text-lg text-navy sm:block">
            {firmInfo.legalName}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavItem to="/" end active={onHome && !howWeHelpActive}>
            Home
          </NavItem>

          <NavItem
            to={`/#${HOW_WE_HELP_ID}`}
            active={howWeHelpActive}
            onClick={handleHowWeHelpClick}
          >
            How we help
          </NavItem>

          <NavItem to="/firm">Attorneys</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <div className="hidden shrink-0 md:block">
          <Button to="/contact" variant="solid">
            Request a consultation
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
          <NavLink
            to="/"
            end
            className={`py-2 text-base ${onHome && !howWeHelpActive ? "text-navy" : "text-navy/60"}`}
          >
            Home
          </NavLink>

          <NavLink
            to={`/#${HOW_WE_HELP_ID}`}
            onClick={handleHowWeHelpClick}
            className={`py-2 text-base ${howWeHelpActive ? "text-navy" : "text-navy/60"}`}
          >
            How we help
          </NavLink>

          <NavLink to="/firm" className={({ isActive }) => `py-2 text-base ${isActive ? "text-navy" : "text-navy/60"}`}>
            Attorneys
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `py-2 text-base ${isActive ? "text-navy" : "text-navy/60"}`}>
            Contact
          </NavLink>

          <Button to="/contact" className="mt-2 w-full">
            Request a consultation
          </Button>
        </nav>
      )}
    </header>
  );
}
