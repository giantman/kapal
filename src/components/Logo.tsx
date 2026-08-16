import logoUrl from "../assets/ktgd-logo.svg";

export default function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return <img src={logoUrl} alt="Kaplan Trope Gekht DeCarolis" className={className} />;
}
