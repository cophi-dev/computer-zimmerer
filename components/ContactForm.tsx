"use client";

import { useRef, useState } from "react";
import { postContact } from "@/lib/api/contact";
import { parseContactPayload, type ContactFieldErrors } from "@/lib/contact";
import { site } from "@/lib/site";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    const parsed = parseContactPayload({
      name: values.get("name"),
      email: values.get("email"),
      message: values.get("message"),
      consent: values.get("consent") === "on",
    });

    if (!parsed.ok) {
      setErrors(parsed.errors);
      setStatus("idle");
      setFormError(null);
      return;
    }

    setErrors({});
    setFormError(null);
    setStatus("submitting");

    const result = await postContact(parsed.data);
    if (!result.ok) {
      setErrors(result.errors ?? {});
      setFormError(result.message);
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="rounded-xl border border-line bg-paper p-6 sm:p-8">
        <p className="text-xl font-semibold leading-snug text-accent-deep sm:text-2xl">
          Vielen Dank — Ihre Nachricht wurde gesendet.
        </p>
        <p className="mt-4 leading-7 text-ink-soft">
          Sie erreichen uns weiterhin unter{" "}
          <a className="font-semibold text-accent" href={`tel:${site.phone}`}>
            {site.phoneDisplay}
          </a>{" "}
          oder{" "}
          <a className="font-semibold text-accent" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="field"
        />
        {errors.name ? <p className="mt-1 text-sm text-red-700">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold">
          E-Mail-Adresse *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="field"
        />
        {errors.email ? <p className="mt-1 text-sm text-red-700">{errors.email}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="field"
        />
        {errors.message ? <p className="mt-1 text-sm text-red-700">{errors.message}</p> : null}
      </div>
      <label className="flex items-start gap-3 text-sm text-ink-soft">
        <input id="consent" name="consent" type="checkbox" className="mt-1 h-4 w-4" required />
        <span>
          Hiermit erkläre ich mich einverstanden, dass meine in das Kontaktformular eingegebenen Daten
          elektronisch gespeichert und zum Zweck der Kontaktaufnahme verarbeitet und genutzt werden. Mir ist
          bekannt, dass ich meine Einwilligung jederzeit widerrufen kann.
        </span>
      </label>
      {errors.consent ? <p className="text-sm text-red-700">{errors.consent}</p> : null}
      <p className="text-xs text-ink-soft">Felder, die mit * bezeichnet sind, sind Pflichtfelder.</p>
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Wird gesendet …" : "Nachricht senden"}
      </button>
      {status === "error" && formError ? (
        <p className="text-sm text-red-700" role="alert">
          {formError}
        </p>
      ) : null}
    </form>
  );
}
