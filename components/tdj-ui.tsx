// Building blocks matched to thomasdavidjacob.com: Geist, font-black headlines,
// amber-400 gold on #0a0a0a, pill buttons, wide-tracked gold eyebrows, #0d0d0d cards.
import Link from "next/link";
import type { ReactNode } from "react";

/** Pulsing-dot pill badge, as above the homepage hero. */
export function PillBadge({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-5 py-2">
      <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-400">{children}</span>
    </div>
  );
}

/** Headline with one phrase in gold. Falls back to plain text if the phrase isn't found. */
export function AccentHeadline({ text, accent, className = "" }: { text: string; accent: string; className?: string }) {
  const i = accent ? text.indexOf(accent) : -1;
  return (
    <h1 className={`text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl ${className}`}>
      {i < 0 ? (
        text
      ) : (
        <>
          {text.slice(0, i)}
          <span className="text-amber-400">{accent}</span>
          {text.slice(i + accent.length)}
        </>
      )}
    </h1>
  );
}

/** Centered section header: gold eyebrow, black-weight title, zinc intro. */
export function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-16 text-center">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-amber-400">{eyebrow}</p>
      <h2 className="mb-5 text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
      {intro && <p className="mx-auto max-w-xl text-lg leading-relaxed text-zinc-400">{intro}</p>}
    </div>
  );
}

/** Page section. `alt` gives the darker band with hairline borders used on the homepage. */
export function Section({
  id,
  alt = false,
  narrow = false,
  children,
}: {
  id?: string;
  alt?: boolean;
  narrow?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-28 ${alt ? "border-y border-zinc-800/50 bg-zinc-950/60" : ""}`}
    >
      <div className={`mx-auto ${narrow ? "max-w-3xl" : "max-w-6xl"}`}>{children}</div>
    </section>
  );
}

const primary =
  "inline-block rounded-full bg-amber-400 px-10 py-4 text-center font-black tracking-wide text-black shadow-lg shadow-amber-400/20 transition-all hover:scale-105 hover:bg-amber-300";
const secondary =
  "inline-block rounded-full border border-white/15 px-8 py-4 text-center text-zinc-300 transition-all hover:border-zinc-500 hover:bg-white/5 hover:text-white";

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return href.startsWith("#") ? (
    <a href={href} className={primary}>
      {children}
    </a>
  ) : (
    <Link href={href} className={primary}>
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return href.startsWith("#") ? (
    <a href={href} className={secondary}>
      {children}
    </a>
  ) : (
    <Link href={href} className={secondary}>
      {children}
    </Link>
  );
}

/** Card surface. `featured` = gold border, as on the AI Systems card. */
export const cardClass = (featured = false) =>
  `rounded-2xl border bg-[#0d0d0d] p-8 transition-all duration-300 ${
    featured ? "border-amber-400/30 hover:border-amber-400/60" : "border-zinc-800 hover:border-amber-400/40"
  }`;

export function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function FaqList({ items }: { items: [string, string][] }) {
  return (
    <div className="divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-[#0d0d0d]">
      {items.map(([q, a]) => (
        <details key={q} className="group px-6 py-5 md:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
            {q}
            <svg
              className="h-4 w-4 flex-shrink-0 text-amber-400 transition-transform duration-200 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 leading-relaxed text-zinc-400">{a}</p>
        </details>
      ))}
    </div>
  );
}
