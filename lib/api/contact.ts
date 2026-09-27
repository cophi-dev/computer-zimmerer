import type { ContactFieldErrors, ContactInput } from "@/lib/contact";

export type ContactApiResult =
  | { ok: true }
  | { ok: false; message: string; errors?: ContactFieldErrors };

export async function postContact(data: ContactInput): Promise<ContactApiResult> {
  let response: Response;
  try {
    response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    return {
      ok: false,
      message: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
    };
  }

  let payload: unknown = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (response.ok && payload && typeof payload === "object" && "ok" in payload && payload.ok === true) {
    return { ok: true };
  }

  const errors =
    payload && typeof payload === "object" && "errors" in payload && payload.errors && typeof payload.errors === "object"
      ? (payload.errors as ContactFieldErrors)
      : undefined;

  return {
    ok: false,
    errors,
    message: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
  };
}
