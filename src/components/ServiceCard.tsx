import { Link } from "react-router-dom";
import Button from "./Button";

export default function ServiceCard({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex w-72 shrink-0 snap-start flex-col justify-between rounded-[8px] bg-white p-6 sm:w-80"
      style={{ aspectRatio: "4 / 5" }}
    >
      <div>
        <Link to={`/service/${slug}`}>
          <h3 className="font-serif text-2xl text-ink hover:underline">{title}</h3>
        </Link>
        <p className="mt-4 text-sm leading-relaxed text-ink/80">{description}</p>
      </div>
      <Button to="/contact" className="self-start">
        Request consultation
      </Button>
    </div>
  );
}
