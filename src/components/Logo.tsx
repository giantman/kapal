import logoUrl from "../assets/ktgd-logo.svg";
import logoInvertedUrl from "../assets/ktgd-logo-inverted.svg";

export default function Logo({
  className = "h-11 w-11",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <img
      src={inverted ? logoInvertedUrl : logoUrl}
      alt="Kaplan Trope Gekht DeCarolis"
      className={className}
    />
  );
}
