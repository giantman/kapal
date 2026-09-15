import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  disabled?: boolean;
  children: ReactNode;
};

export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "solid",
  className = "",
  disabled = false,
  children,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? "bg-ink text-white hover:bg-ink-light"
      : variant === "ghost"
        ? "border border-white/40 bg-transparent text-white hover:bg-white hover:text-ink hover:border-white"
        : "border border-ink/15 bg-white text-ink hover:bg-ink hover:text-white hover:border-ink";
  const cls = `${base} ${styles} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
