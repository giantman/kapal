import { useState } from "react";
import { firmInfo } from "../data/services";
import Button from "../components/Button";

const fieldCls =
  "mt-2 w-full border-0 border-b border-navy/25 bg-transparent px-0 py-2 text-navy outline-none focus:border-navy";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
      <div className="text-center">
        <h1 className="font-serif text-5xl text-navy sm:text-6xl">Get in touch.</h1>
        <p className="mt-4 text-navy/70">
          We'll get back to you in one business day.
        </p>
      </div>

      {submitted ? (
        <div className="mx-auto mt-14 max-w-md border border-navy/15 bg-cream-dark/40 px-6 py-8 text-center">
          <p className="font-serif text-xl text-navy">Thank you.</p>
          <p className="mt-2 text-navy/70">
            Your message has been received. A member of our team will reach
            out within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-14 max-w-xl space-y-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="text-sm font-medium text-navy/80">
                First Name
              </label>
              <input id="firstName" name="firstName" type="text" required className={fieldCls} />
            </div>
            <div>
              <label htmlFor="lastName" className="text-sm font-medium text-navy/80">
                Last Name
              </label>
              <input id="lastName" name="lastName" type="text" className={fieldCls} />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-navy/80">
              Email <span className="text-navy/40">(required)</span>
            </label>
            <input id="email" name="email" type="email" required className={fieldCls} />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-navy/80">
              Message <span className="text-navy/40">(required)</span>
            </label>
            <textarea id="message" name="message" rows={4} required className={`${fieldCls} resize-none`} />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-navy/80">
              Phone <span className="text-navy/40">(required)</span>
            </label>
            <input id="phone" name="phone" type="tel" required className={fieldCls} />
          </div>

          <div className="text-center">
            <Button type="submit">Request a consultation</Button>
          </div>
        </form>
      )}

      <div className="mx-auto mt-24 flex max-w-xl flex-col gap-8 border-t border-navy/15 pt-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-xs font-medium tracking-widest text-navy/50 uppercase">
            Address
          </p>
          <p className="mt-2 text-navy/80">{firmInfo.address}</p>
          <a
            href={firmInfo.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block text-sm text-navy underline underline-offset-4"
          >
            Get directions
          </a>
        </div>
        <div>
          <p className="text-xs font-medium tracking-widest text-navy/50 uppercase">
            Phone &amp; Fax
          </p>
          <a href={`tel:${firmInfo.phone}`} className="mt-2 block text-navy/80 hover:text-navy">
            Call us: {firmInfo.phone}
          </a>
          <p className="text-navy/80">Fax us: {firmInfo.fax}</p>
        </div>
      </div>
    </section>
  );
}
