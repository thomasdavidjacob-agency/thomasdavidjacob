import Link from 'next/link'
import { CORE_SERVICES, liveVerticals, verticalHref } from '@/lib/verticals'

const company = [
  { name: 'About', href: '/about' },
  { name: 'Our Work', href: '/clients' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

const columns = [
  { heading: 'Services', links: [...CORE_SERVICES, { name: 'All services', href: '/services' }] },
  { heading: 'Industries', links: liveVerticals.map((v) => ({ name: v.name, href: verticalHref(v) })) },
  { heading: 'Company', links: company },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="text-center md:text-left">
          <Link href="/" className="inline-block opacity-90 hover:opacity-100 transition-opacity">
            <span className="font-[family-name:var(--font-display)] text-2xl font-black tracking-tight lowercase">
            <span className="text-white">thomas</span>
            <span className="text-amber-400">+</span>
            <span className="text-white">david</span>
            <span className="text-amber-400">+</span>
            <span className="text-white">jacob</span>
          </span>
          </Link>
          <p className="text-zinc-500 text-sm mt-2">
            Oregon City, OR — Serving Portland Metro &amp; Beyond
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading} className="text-center md:text-left">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">{col.heading}</p>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-amber-400">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="max-w-6xl mx-auto mt-10 text-center md:text-left text-zinc-600 text-sm">
        © 2026 Thomas+David+Jacob. All rights reserved.
      </p>
    </footer>
  )
}
