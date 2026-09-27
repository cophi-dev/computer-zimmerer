import { Resend } from "resend";
import { debug } from "@/lib/debug";
import { buildContactEmail, type ContactInput } from "@/lib/contact";

const DEFAULT_TO = "pzarindast@gmail.com";
const DEFAULT_FROM = "Kontaktformular Computer Zimmerer <noreply@phillipp-webseiten.de>";

function contactEnv() {
  const to = process.env.CONTACT_TO || DEFAULT_TO;
  return {
    apiKey: process.env.RESEND_API_KEY,
    to,
    from: process.env.CONTACT_FROM || DEFAULT_FROM,
    replyToExtra: process.env.CONTACT_REPLY_TO || "",
  };
}

export async function sendContactEmail(data: ContactInput) {
  const env = contactEnv();
  const payload = buildContactEmail(data);

  if (!env.apiKey) {
    debug("contact", { event: "missing_api_key", to: env.to, from: env.from });
    return { ok: false as const };
  }

  const replyTo = Array.from(new Set([data.email, env.replyToExtra].filter(Boolean)));

  try {
    const resend = new Resend(env.apiKey);
    const result = await resend.emails.send({
      from: env.from,
      to: env.to,
      replyTo,
      subject: payload.subject,
      text: payload.text,
    });

    if (result.error) {
      debug("contact", {
        event: "resend_error",
        statusCode: result.error.statusCode,
        name: result.error.name,
        message: result.error.message,
      });
      return { ok: false as const };
    }

    debug("contact", { event: "sent", id: result.data?.id ?? null });
    return { ok: true as const, id: result.data?.id };
  } catch (error) {
    debug("contact", { event: "resend_exception", error: error instanceof Error ? error.message : "unknown" });
    return { ok: false as const };
  }
}
