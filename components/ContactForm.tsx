"use client";

import { useEffect, useRef, useState } from "react";
import { postContact } from "@/lib/api/contact";
import { parseContactPayload, type ContactFieldErrors } from "@/lib/contact";
import { site } from "@/lib/site";

type Values = {
  name: string;
  email: string;
  message: string;
  consent: boolean;
};

const emptyValues: Values = { name: "", email: "", message: "", consent: false };

export function ContactForm() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "success") {
      panelRef.current?.focus();
    }
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = parseContactPayload(values);

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

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        ref={panelRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="bg-forest px-6 py-14 text-paper outline-none sm:px-10 sm:py-20"
      >
        <p className="font-display text-3xl leading-tight sm:text-4xl">Vielen Dank — Ihre Nachricht wurde gesendet.</p>
        <p className="mt-6 max-w-xl text-lg leading-8 text-paper/90">
          Sie erreichen uns weiterhin unter{" "}
          <a className="font-semibold underline decoration-copper underline-offset-4" href={`tel:${site.phone}`}>
            {site.phoneDisplay}
          </a>{" "}
          oder{" "}
          <a className="font-semibold underline decoration-copper underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
          value={values.name}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          className="field"
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 text-sm text-danger">
            {errors.name}
          </p>
        ) : null}
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
          value={values.email}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          className="field"
        />
        {errors.email ? (
          <p id="email-error" className="mt-1 text-sm text-danger">
            {errors.email}
          </p>
        ) : null}
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
          value={values.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          className="field"
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-danger">
            {errors.message}
          </p>
        ) : null}
      </div>
      <label className="flex items-start gap-3 text-sm leading-6 text-ink-soft">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 accent-forest"
          required
          checked={values.consent}
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          onChange={(event) => setValues((current) => ({ ...current, consent: event.target.checked }))}
        />
        <span>
          Hiermit erkläre ich mich einverstanden, dass meine in das Kontaktformular eingegebenen Daten elektronisch
          gespeichert und zum Zweck der Kontaktaufnahme verarbeitet und genutzt werden. Mir ist bekannt, dass ich
          meine Einwilligung jederzeit widerrufen kann.
        </span>
      </label>
      {errors.consent ? (
        <p id="consent-error" className="text-sm text-danger">
          {errors.consent}
        </p>
      ) : null}
      <p className="text-xs text-ink-soft">Felder, die mit * bezeichnet sind, sind Pflichtfelder.</p>
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Wird gesendet …" : "Nachricht senden"}
      </button>
      {status === "error" && formError ? (
        <p className="text-sm text-danger" role="alert">
          {formError}{" "}
          <a className="font-semibold underline" href={`tel:${site.phone}`}>
            {site.phoneDisplay}
          </a>
        </p>
      ) : null}
    </form>
  );
}
