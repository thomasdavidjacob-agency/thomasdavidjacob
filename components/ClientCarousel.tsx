'use client'

import Image from 'next/image'
import { useRef } from 'react'
import type { Client } from '@/lib/clients'

/** Horizontal, swipeable strip of small live-site cards. Scroll-snap does the work; arrows are a desktop nicety. */
export default function ClientCarousel({ clients }: { clients: Client[] }) {
  const track = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  const btn =
    'hidden md:flex absolute top-[18%] -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-[#0a0a0a]/90 border border-zinc-700 text-white hover:border-amber-400 hover:text-amber-400 transition-colors'

  return (
    <div className="relative">
      <button type="button" aria-label="Previous clients" onClick={() => scroll(-1)} className={`${btn} -left-5`}>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        ref={track}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-px-6 pb-4 -mx-6 px-6 [scrollbar-width:thin] [scrollbar-color:#3f3f46_transparent]"
      >
        {clients.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group snap-start shrink-0 w-[86%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)] flex flex-col bg-[#0d0d0d] border border-zinc-800 hover:border-amber-400/40 rounded-2xl overflow-hidden transition-colors duration-300"
          >
            <div className="relative aspect-[2/1] overflow-hidden border-b border-zinc-800">
              <Image
                src={c.thumb!}
                alt={`${c.name} website`}
                fill
                sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 86vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-amber-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-1.5">{c.industry}</p>
              <h3 className="text-lg font-bold text-white leading-snug mb-1">{c.name}</h3>
              <p className="text-sm text-zinc-500 mb-4">{c.location}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">{c.summary}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-amber-400 group-hover:text-amber-300 font-bold text-sm">
                Visit the site
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>

      <button type="button" aria-label="Next clients" onClick={() => scroll(1)} className={`${btn} -right-5`}>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
