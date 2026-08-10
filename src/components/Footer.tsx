import { firmInfo } from "../data/services";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:flex-row sm:items-start sm:justify-between lg:px-10">
        <div>
          <p className="font-serif text-3xl text-neutral-900">
            Kaplan Trope &amp; Gekht
          </p>
          <p className="mt-2 text-neutral-500">
            A Partnership Including Professional Corporations
          </p>
        </div>

        <div className="space-y-4 text-neutral-700 sm:text-right">
          <div>
            <p>{firmInfo.address}</p>
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

      <div className="border-t border-black/5 px-6 py-6 text-xs text-neutral-500 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kaplan Trope &amp; Gekht. All rights reserved.</p>
          <p>Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
}
