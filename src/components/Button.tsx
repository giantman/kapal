import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "solid" | "outline";
  className?: string;
  children: ReactNode;
};

export default function Button({
  to,
  href,
  onClick,
  type = "button",
  variant = "solid",
  className = "",
  children,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? "bg-navy text-white hover:bg-navy-light"
      : "border border-navy text-navy hover:bg-navy hover:text-white";
  const cls = `${base} ${styles} ${className}`;

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
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
