import { NextResponse } from "next/server";
import { parseContactPayload } from "@/lib/contact";
import { sendContactEmail } from "@/lib/contact-mail";
import { debug } from "@/lib/debug";

const FAIL_MESSAGE =
  "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    debug("contact", { event: "invalid_json" });
    return NextResponse.json({ ok: false, message: FAIL_MESSAGE }, { status: 400 });
  }

  const parsed = parseContactPayload(body);
  if (!parsed.ok) {
    debug("contact", { event: "validation_failed", fields: Object.keys(parsed.errors) });
    return NextResponse.json({ ok: false, errors: parsed.errors, message: FAIL_MESSAGE }, { status: 400 });
  }

  const sent = await sendContactEmail(parsed.data);
  if (!sent.ok) {
    return NextResponse.json({ ok: false, message: FAIL_MESSAGE }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
