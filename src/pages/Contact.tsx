import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { firmInfo, services } from "../data/services";
import Button from "../components/Button";
import Seo from "../components/Seo";

const fieldCls =
  "w-full border-0 border-b border-navy/25 bg-transparent px-0 py-2 text-navy placeholder-navy/40 outline-none focus:border-navy";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/e2d5e8b6f2a949eef545d70aa2a6ee5c";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      data-navbar-theme="light"
      className="w-full bg-white px-6 py-20 lg:py-28"
      style={{ "--color-navy": "var(--color-ink)" } as React.CSSProperties}
    >
      <Seo
        title={`Contact Us | ${firmInfo.legalName}`}
        description="Tell us about your situation and we'll get back to you in one business day. Request a consultation with our Southern California family law attorneys."
        path="/contact"
      />
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-5xl text-navy sm:text-6xl">Get in touch.</h1>
        <p className="mt-4 text-navy/70">
          We'll get back to you in one business day.
        </p>
      </div>

      {status === "success" ? (
        <div className="mx-auto mt-14 max-w-md border border-navy/20 px-6 py-8 text-center">
          <p className="font-serif text-xl text-navy">Thank you.</p>
          <p className="mt-2 text-navy/70">
            Your message has been received. A member of our team will reach
            out within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-14 max-w-xl space-y-8">
          <input type="hidden" name="_subject" value="New consultation request" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid gap-8 sm:grid-cols-2">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              aria-label="First Name"
              required
              className={fieldCls}
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              aria-label="Last Name"
              className={fieldCls}
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            required
            className={fieldCls}
          />

          <select
            name="service"
            defaultValue={preselectedService}
            aria-label="Service"
            className={fieldCls}
          >
            <option value="">Select a service (optional)</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            aria-label="Message"
            required
            className={`${fieldCls} resize-none`}
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            aria-label="Phone"
            required
            className={fieldCls}
          />

          <div className="text-center">
            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Request a consultation"}
            </Button>
            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">
                Something went wrong sending your message. Please try again or call us at{" "}
                {firmInfo.phone}.
              </p>
            )}
          </div>
        </form>
      )}
    </section>
  );
}
