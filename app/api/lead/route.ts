import { NextResponse } from "next/server";
import { INDUSTRIES } from "@/lib/industries";

// Demo requests (industry pages) and DealKit founding-list signups are emailed to you via Resend.
// Env vars (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY     your existing Resend key
//   LEAD_TO_EMAIL      where leads go, e.g. thomasdavidjacob@gmail.com
//   LEAD_FROM_EMAIL    a verified Resend sender, e.g. "TDJ <hello@thomasdavidjacob.com>"

const SOURCES = new Set(["dealkit", ...INDUSTRIES.map((i) => i.slug)]);
const TYPES = new Set(["demo", "waitlist"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max = 200): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled in = bot. Pretend success so it moves on.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const type = clean(body.type, 20);
  const source = clean(body.source, 40);
  const name = clean(body.name, 100);
  const email = clean(body.email, 200).toLowerCase();
  const phone = clean(body.phone, 40);
  const company = clean(body.company, 120);
  const role = clean(body.role, 80);

  if (!TYPES.has(type) || !SOURCES.has(source)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const phoneOk = type !== "demo" || phone.replace(/\D/g, "").length >= 10;
  const companyOk = type !== "demo" || company.length > 0;
  if (!name || !EMAIL_RE.test(email) || !role || !phoneOk || !companyOk) {
    return NextResponse.json(
      {
        error:
          type === "demo"
            ? "Please add your name, business, email, phone number and role."
            : "Please add your name, a valid email and your role.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Lead form: missing RESEND_API_KEY, LEAD_TO_EMAIL or LEAD_FROM_EMAIL");
    return NextResponse.json({ error: "This form is temporarily unavailable. Please call or email us." }, { status: 500 });
  }

  const label = type === "demo" ? "Demo request" : "DealKit founding list";
  const rows: [string, string][] = [
    ["Type", label],
    ["Page", source],
    ["Name", name],
    ["Business", company || "—"],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Role", role],
    ["Received", new Date().toISOString()],
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `${label}: ${source} · ${company || name}`,
      html: `<table>${rows
        .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
        .join("")}</table>`,
    }),
  });

  if (!res.ok) {
    console.error("Lead form: Resend error", res.status, await res.text());
    return NextResponse.json({ error: "Could not send your request. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
