"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CORE_SERVICES, INTAKE_LINK, liveVerticals, verticalHref } from "@/lib/verticals";

// Services menu: core services on the left, industry verticals on the right.
// Only vertical names live here; each vertical page lists the businesses it covers.

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const PANEL_WIDTH = 640;
const EDGE = 16; // min gap from the screen edge

const mobileHeading = "mb-2 text-xs font-bold uppercase tracking-[0.25em] text-amber-400";
const heading = "mb-3 px-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400";

/** Desktop: "Services" dropdown. Drop into your header nav. */
export function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const close = () => setOpen(false);
  // Horizontal offset (relative to the "Services" link) that keeps the panel on screen,
  // wherever the link sits in your nav.
  const [box, setBox] = useState({ left: -PANEL_WIDTH / 2, width: PANEL_WIDTH });

  useEffect(() => {
    if (!open) return;
    const place = () => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      const vw = document.documentElement.clientWidth;
      const width = Math.min(PANEL_WIDTH, vw - EDGE * 2);
      const centered = r.left + r.width / 2 - width / 2;
      const viewportLeft = Math.max(EDGE, Math.min(centered, vw - width - EDGE));
      setBox({ left: viewportLeft - r.left, width });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={close}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        // Hover opens it on desktop; click/tap opens it for keyboard and touch.
        // Escape, an outside click or leaving the menu closes it.
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 text-sm font-medium tracking-wide text-white transition-colors hover:text-amber-600"
      >
        Services <Chevron open={open} />
      </button>

      <div
        id={menuId}
        style={{ left: box.left, width: box.width }}
        className={`absolute top-full z-50 pt-3 transition-opacity duration-150 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="grid grid-cols-[1fr_1.15fr] gap-6 rounded-xl border border-zinc-800 bg-[#0d0d0d] p-5 shadow-xl shadow-black/50">
          <div>
            <p className={heading}>Core services</p>
            <ul className="space-y-0.5">
              {CORE_SERVICES.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    onClick={close}
                    className="group/item block rounded-lg px-3 py-2 transition-colors hover:bg-amber-400/5"
                  >
                    <span className="block text-sm font-medium tracking-wide text-zinc-200 transition-colors group-hover/item:text-amber-400">{s.name}</span>
                    <span className="mt-0.5 block text-xs text-zinc-500">{s.blurb}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              onClick={close}
              className="mt-3 inline-block px-3 text-xs font-bold tracking-wide text-amber-400 hover:text-amber-300"
            >
              All services →
            </Link>
          </div>

          <div>
            <p className={heading}>By industry</p>
            <ul className="space-y-0.5">
              {liveVerticals.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={verticalHref(v)}
                    onClick={close}
                    className="group/item block rounded-lg px-3 py-2 transition-colors hover:bg-amber-400/5"
                  >
                    <span className="block text-sm font-medium tracking-wide text-zinc-200 transition-colors group-hover/item:text-amber-400">{v.name}</span>
                    <span className="mt-0.5 block text-xs text-zinc-500">{v.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={INTAKE_LINK.href}
              onClick={close}
              className="mt-3 inline-block px-3 text-xs font-bold tracking-wide text-amber-400 hover:text-amber-300"
            >
              {INTAKE_LINK.label} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile: accordion version for the slide-out menu. Pass onNavigate to close the drawer. */
export function MobileServicesMenu({ onNavigate }: { onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <div className="border-b border-zinc-800">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-base font-medium tracking-wide text-white"
      >
        Services <Chevron open={open} />
      </button>
      {open && (
        <div id={menuId} className="space-y-6 pb-5">
          <div>
            <p className={mobileHeading}>Core services</p>
            {CORE_SERVICES.map((s) => (
              <Link key={s.name} href={s.href} onClick={onNavigate} className="block py-2 text-zinc-300 hover:text-amber-400">
                {s.name}
              </Link>
            ))}
            <Link href="/services" onClick={onNavigate} className="block py-2 text-sm font-bold text-amber-400">
              All services →
            </Link>
          </div>
          <div>
            <p className={mobileHeading}>By industry</p>
            {liveVerticals.map((v) => (
              <Link key={v.slug} href={verticalHref(v)} onClick={onNavigate} className="block py-2 text-zinc-300 hover:text-amber-400">
                {v.name}
              </Link>
            ))}
            <Link href={INTAKE_LINK.href} onClick={onNavigate} className="block py-2 text-sm font-bold text-amber-400">
              {INTAKE_LINK.label} →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
