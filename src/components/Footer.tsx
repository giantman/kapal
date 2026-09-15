import { firmInfo } from "../data/services";
import Logo from "./Logo";

const [addressStreet, addressCity] = firmInfo.address.split(/,\s*(?=Los Angeles)/);

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-cream-dark/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center lg:px-10">
        <Logo className="h-[30rem] w-[30rem]" inverted />
        <p className="mt-6 font-serif text-3xl text-navy">{firmInfo.legalName}</p>

        <div className="mt-8 flex flex-col gap-8 text-navy/80">
          <div>
            <p>
              {addressStreet},
              <br />
              {addressCity}
            </p>
            <a
              href={firmInfo.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="text-navy underline underline-offset-4"
            >
              Get directions
            </a>
          </div>
          <div>
            <a href={`tel:${firmInfo.phone}`} className="block hover:text-navy">
              Call us: {firmInfo.phone}
            </a>
            <p>Fax us: {firmInfo.fax}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-navy/10 px-6 py-6 text-xs text-navy/60 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {firmInfo.name}. All rights reserved.
          </p>
          <p>Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
}
