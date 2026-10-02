import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import { firmInfo } from "../data/services";

const HOW_WE_HELP_ID = "how-we-help";
const OUR_PRACTICE_ID = "our-practice";
const HEADER_HEIGHT = 112; // px, matches h-28
const REAPPEAR_DELAY = 300; // ms

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
    <NavLink to={to} end={end} onClick={onClick} className="group">
      {({ isActive }) => {
        const active = activeOverride ?? isActive;
        return (
          <span
            className={`inline-flex items-center rounded-full px-3 py-1.5 text-base tracking-tight text-navy transition-colors ${
              active ? "bg-slate/15 font-medium" : "font-normal group-hover:bg-slate/10"
            }`}
          >
            {children}
          </span>
        );
      }}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const directionStartY = useRef(0);
  const direction = useRef<"up" | "down" | null>(null);
  const reappearTimeout = useRef<number | null>(null);
  const location = useLocation();
  const onHome = location.pathname === "/";
  const howWeHelpActive = onHome && location.hash === `#${HOW_WE_HELP_ID}`;
  const ourPracticeActive = onHome && !howWeHelpActive;

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

  const handleOurPracticeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (ourPracticeActive) {
      e.preventDefault();
      document
        .getElementById(OUR_PRACTICE_ID)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Hide the header as soon as the user scrolls down; bring it back only
  // after they've held an upward scroll for a moment, sliding in from the
  // top. Distance is tracked cumulatively since the last direction change
  // (rather than judged event-to-event) so a burst of many small scroll
  // events — as browsers/trackpads often fire — still adds up correctly
  // instead of each tiny step falling under the threshold on its own.
  useEffect(() => {
    const HIDE_DISTANCE = 24;
    const SHOW_DISTANCE = 24;

    const clearReappearTimeout = () => {
      if (reappearTimeout.current !== null) {
        window.clearTimeout(reappearTimeout.current);
        reappearTimeout.current = null;
      }
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const instant = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      if (currentY <= HEADER_HEIGHT) {
        clearReappearTimeout();
        setVisible(true);
        direction.current = null;
        return;
      }

      if (open || instant === 0) return;

      const dir = instant > 0 ? "down" : "up";
      if (dir !== direction.current) {
        direction.current = dir;
        directionStartY.current = currentY - instant;
      }
      const traveled = Math.abs(currentY - directionStartY.current);

      if (dir === "down" && traveled > HIDE_DISTANCE) {
        clearReappearTimeout();
        setVisible(false);
      } else if (dir === "up" && traveled > SHOW_DISTANCE && reappearTimeout.current === null) {
        reappearTimeout.current = window.setTimeout(() => {
          setVisible(true);
          reappearTimeout.current = null;
        }, REAPPEAR_DELAY);
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearReappearTimeout();
    };
  }, [open]);

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
      className={`fixed inset-x-0 top-0 z-50 bg-transparent transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
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

        <nav className="hidden items-center gap-6 md:flex">
          <NavItem
            to={`/#${OUR_PRACTICE_ID}`}
            active={ourPracticeActive}
            onClick={handleOurPracticeClick}
          >
            Our practice
          </NavItem>

          <NavItem
            to={`/#${HOW_WE_HELP_ID}`}
            active={howWeHelpActive}
            onClick={handleHowWeHelpClick}
          >
            How we help
          </NavItem>

          <NavItem to="/firm">Our Attorneys</NavItem>
        </nav>

        <div className="hidden shrink-0 md:block">
          <Link
            to="/contact"
            className="text-sm font-bold text-navy underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
          >
            Request a consultation
          </Link>
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
        <nav
          className={`flex flex-col gap-1 border-t border-navy/10 px-6 py-4 md:hidden ${
            light ? "bg-white" : "bg-cream"
          }`}
        >
          <NavLink
            to={`/#${OUR_PRACTICE_ID}`}
            onClick={handleOurPracticeClick}
            className={`py-2 text-base ${ourPracticeActive ? "text-navy" : "text-navy/60"}`}
          >
            Our practice
          </NavLink>

          <NavLink
            to={`/#${HOW_WE_HELP_ID}`}
            onClick={handleHowWeHelpClick}
            className={`py-2 text-base ${howWeHelpActive ? "text-navy" : "text-navy/60"}`}
          >
            How we help
          </NavLink>

          <NavLink to="/firm" className={({ isActive }) => `py-2 text-base ${isActive ? "text-navy" : "text-navy/60"}`}>
            Our Attorneys
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
