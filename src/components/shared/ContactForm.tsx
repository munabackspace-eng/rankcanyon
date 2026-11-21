"use client";

import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "company" | "revenue" | "message";
type Errors = Partial<Record<Field, string>>;

const revenueOptions = [
  "Under $500k / year",
  "$500k – $2M / year",
  "$2M – $10M / year",
  "$10M – $50M / year",
  "$50M+ / year",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const get = (key: Field) => String(data.get(key) ?? "").trim();

  if (!get("name")) errors.name = "Please enter your name.";
  if (!get("email")) errors.email = "Please enter your work email.";
  else if (!EMAIL_PATTERN.test(get("email")))
    errors.email = "Please enter a valid email address.";
  if (!get("company")) errors.company = "Please enter your brand or company name.";
  if (!get("revenue")) errors.revenue = "Please select your annual Amazon revenue.";
  if (get("message").length < 10)
    errors.message = "Tell us a little more (at least 10 characters).";

  return errors;
}

const inputClass =
  "block w-full rounded-xl border border-border bg-card px-4 py-3 text-navy-950 placeholder:text-navy-400 shadow-sm transition-colors focus:border-navy-950 focus:outline-none focus:ring-4 focus:ring-navy-950/8 aria-[invalid=true]:border-red-400";

/**
 * Contact / audit request form.
 *
 * Client-side validation only — there is intentionally no backend yet.
 * TODO: connect to a Server Action or email provider when ready.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    // Placeholder for a real submission (Server Action / API). Simulated latency:
    window.setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 600);
  }

  const fieldProps = (name: Field) => ({
    id: name,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const renderError = (name: Field) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
        {errors[name]}
      </p>
    ) : null;

  return (
    <div className="relative rounded-3xl border border-border bg-background p-6 shadow-premium sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <m.div
            key="success"
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center py-12 text-center"
          >
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-navy-950 text-white shadow-button">
              <CheckCircle2 aria-hidden="true" className="size-7" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-navy-950">
              Thanks — we&apos;ve got it!
            </h2>
            <p className="mt-3 max-w-md text-muted">
              A senior strategist will review your details and reach out within one
              business day to schedule your free audit.
            </p>
            <Button className="mt-8" onClick={() => setStatus("idle")}>
              Send Another Message
            </Button>
          </m.div>
        ) : (
          <m.form
            key="form"
            noValidate
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
            aria-labelledby="contact-form-heading"
          >
            <div>
              <h2 id="contact-form-heading" className="text-2xl font-bold text-navy-950">
                Request your free Amazon audit
              </h2>
              <p className="mt-2 text-sm text-muted">
                Fields marked <span aria-hidden="true">*</span>
                <span className="sr-only">with an asterisk</span> are required.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-navy-950"
                >
                  Full name <span aria-hidden="true">*</span>
                </label>
                <input
                  {...fieldProps("name")}
                  type="text"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
                {renderError("name")}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-navy-950"
                >
                  Work email <span aria-hidden="true">*</span>
                </label>
                <input
                  {...fieldProps("email")}
                  type="email"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
                {renderError("email")}
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-sm font-medium text-navy-950"
                >
                  Brand / company <span aria-hidden="true">*</span>
                </label>
                <input
                  {...fieldProps("company")}
                  type="text"
                  autoComplete="organization"
                  required
                  className={inputClass}
                />
                {renderError("company")}
              </div>
              <div>
                <label
                  htmlFor="revenue"
                  className="mb-1.5 block text-sm font-medium text-navy-950"
                >
                  Annual Amazon revenue <span aria-hidden="true">*</span>
                </label>
                <select
                  {...fieldProps("revenue")}
                  required
                  defaultValue=""
                  className={cn(inputClass, "appearance-none")}
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {revenueOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {renderError("revenue")}
              </div>
            </div>

            <div>
              <label
                htmlFor="website"
                className="mb-1.5 block text-sm font-medium text-navy-950"
              >
                Amazon storefront or website URL
              </label>
              <input
                id="website"
                name="website"
                type="url"
                inputMode="url"
                placeholder="https://www.amazon.com/stores/…"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-navy-950"
              >
                What are your goals? <span aria-hidden="true">*</span>
              </label>
              <textarea
                {...fieldProps("message")}
                rows={5}
                required
                placeholder="E.g. lower TACoS, launch new products, expand to Europe…"
                className={cn(inputClass, "resize-y")}
              />
              {renderError("message")}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Request Free Audit"}
              <Send aria-hidden="true" />
            </Button>
            <p className="text-xs text-muted">
              By submitting, you agree to our privacy policy. We never share your data.
            </p>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
