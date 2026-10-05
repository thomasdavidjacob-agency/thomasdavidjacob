"use client";

import { useState, type FormEvent } from "react";

type Props = {
  /** "demo" = done-for-you industry request (asks for phone), "waitlist" = DealKit founding list */
  type: "demo" | "waitlist";
  /** page the lead came from: "dealkit" or an industry slug */
  source: string;
  roles: string[];
  roleLabel?: string;
  cta: string;
  successTitle?: string;
  successBody?: string;
};

type Status = "idle" | "sending" | "done" | "error";

export function LeadForm({
  type,
  source,
  roles,
  roleLabel = "I am a…",
  cta,
  successTitle = "Got it. We'll be in touch.",
  successBody = "Expect a call or email from TDJ within one business day.",
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const isDemo = type === "demo";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type, source }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-8 text-center">
        <p className="text-2xl font-black text-white">{successTitle}</p>
        <p className="mt-2 text-zinc-400">{successBody}</p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-zinc-800 bg-[#0a0a0a] px-4 py-3.5 text-white placeholder-zinc-500 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400";

  return (
    <form onSubmit={onSubmit} className="relative space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Name</span>
          <input name="name" required autoComplete="name" placeholder="Full name" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Business name</span>
          <input
            name="company"
            required={isDemo}
            autoComplete="organization"
            placeholder={isDemo ? "Business name" : "Company or brokerage (optional)"}
            className={field}
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="Email" className={field} />
        </label>
        {isDemo ? (
          <label className="block">
            <span className="sr-only">Phone</span>
            <input name="phone" type="tel" required autoComplete="tel" placeholder="Best phone number" className={field} />
          </label>
        ) : (
          <RoleSelect roles={roles} label={roleLabel} className={field} />
        )}
      </div>
      {isDemo && <RoleSelect roles={roles} label={roleLabel} className={field} />}

      {/* Honeypot: hidden from people, bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-amber-400 px-8 py-4 font-black tracking-wide text-black shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : cta}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
      <p className="text-center text-xs text-zinc-500">
        {isDemo
          ? "No obligation. We'll only contact you about your request."
          : "We'll only email you about DealKit. Unsubscribe anytime."}
      </p>
    </form>
  );
}

function RoleSelect({ roles, label, className }: { roles: string[]; label: string; className: string }) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select name="role" required defaultValue="" className={className}>
        <option value="" disabled>
          {label}
        </option>
        {roles.map((r) => (
          <option key={r} value={r} className="bg-[#0d0d0d]">
            {r}
          </option>
        ))}
      </select>
    </label>
  );
}
