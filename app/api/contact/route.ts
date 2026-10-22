import { NextResponse } from "next/server";

/**
 * Contact endpoint. Validates input and drops bot submissions.
 * Delivery is intentionally not wired yet: connect an email provider or CRM
 * here (e.g. a free-tier transactional email service) when one is chosen.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  // Delivery: set CONTACT_WEBHOOK_URL to any endpoint that accepts JSON
  // (a Formspree/Make/Zapier/Apps Script webhook, a Slack incoming webhook, etc).
  // Without it nothing is delivered, and the client falls back to mailto:.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, company: body.company ?? "", phone: body.phone ?? "", topic: body.topic ?? "", source: "bigbelief-website" }),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
}
