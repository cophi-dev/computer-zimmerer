import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen an.").max(120),
  email: z.string().trim().email("Bitte eine gültige E-Mail-Adresse angeben.").max(160),
  message: z
    .string()
    .trim()
    .min(10, "Bitte formulieren Sie Ihr Anliegen in mindestens 10 Zeichen.")
    .max(4000),
  consent: z.literal(true, {
    message: "Bitte stimmen Sie der Speicherung zum Zweck der Kontaktaufnahme zu.",
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactField = "name" | "email" | "message" | "consent";
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export function fieldErrorsFromZod(error: z.ZodError): ContactFieldErrors {
  const next: ContactFieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (key === "name" || key === "email" || key === "message" || key === "consent") {
      next[key] = issue.message;
    }
  }
  return next;
}

export function parseContactPayload(input: unknown) {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, errors: fieldErrorsFromZod(parsed.error) };
  }
  return { ok: true as const, data: parsed.data };
}

export function buildContactEmail(data: ContactInput) {
  return {
    subject: `Anfrage über computer-zimmerer.de von ${data.name}`,
    text: [`Name: ${data.name}`, `E-Mail: ${data.email}`, "", data.message].join("\n"),
  };
}
