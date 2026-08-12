'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

type NavLink = {
  label: string
  href: string
  badge?: boolean
  children?: { label: string; href: string }[]
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'AI Systems', href: '/ai-systems', badge: true },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      { label: 'Our Clients', href: '/clients' },
    ],
  },
  { label: 'Our SEO Process', href: '/our-seo-process' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="inline-block opacity-90 hover:opacity-100 transition-opacity">
          <span className="text-xl font-black tracking-tight">
            <span className="text-white">Thomas</span>
            <span className="text-amber-400">+</span>
            <span className="text-white">David</span>
            <span className="text-amber-400">+</span>
            <span className="text-white">Jacob</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            if (link.badge) {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-bold tracking-wide px-4 py-1.5 rounded-full border transition-all ${
                      active
                        ? 'bg-amber-400/25 border-amber-400/50 text-white'
                        : 'bg-amber-400/8 border-amber-400/20 text-white hover:bg-amber-400/18 hover:border-amber-400/35'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            }
            if (link.children) {
              const parentActive = active || link.children.some((child) => isActive(child.href))
              return (
                <li key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 text-sm tracking-wide font-medium transition-colors ${
                      parentActive ? 'text-amber-400' : 'text-white hover:text-amber-600'
                    }`}
                  >
                    {link.label}
                    <svg
                      className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Dropdown — pt-2 keeps the hover bridge from the trigger */}
                  <div className="absolute left-0 top-full pt-3 hidden group-hover:block group-focus-within:block">
                    <ul className="min-w-[13rem] bg-[#0d0d0d] border border-zinc-800 rounded-xl py-2 shadow-xl shadow-black/50">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                              isActive(child.href)
                                ? 'text-amber-400 bg-amber-400/5'
                                : 'text-zinc-300 hover:text-amber-400 hover:bg-amber-400/5'
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            }
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-wide font-medium transition-colors ${
                    active
                      ? 'text-amber-400'
                      : 'text-white hover:text-amber-600'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-zinc-800 overflow-y-auto max-h-[calc(100vh-64px)]">
          <ul className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              if (link.badge) {
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`inline-block font-bold tracking-wide px-4 py-1.5 rounded-full border transition-all ${
                        active
                          ? 'bg-amber-400/25 border-amber-400/50 text-white'
                          : 'bg-amber-400/8 border-amber-400/20 text-white hover:bg-amber-400/18 hover:border-amber-400/35'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              }
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-medium tracking-wide transition-colors ${
                      active
                        ? 'text-amber-400'
                        : 'text-white hover:text-amber-600'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>

                  {link.children && (
                    <ul className="mt-4 ml-4 pl-4 border-l border-zinc-800 flex flex-col gap-4">
                      {link.children
                        .filter((child) => child.href !== link.href)
                        .map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`text-sm font-medium tracking-wide transition-colors ${
                                isActive(child.href)
                                  ? 'text-amber-400'
                                  : 'text-zinc-400 hover:text-amber-400'
                              }`}
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
