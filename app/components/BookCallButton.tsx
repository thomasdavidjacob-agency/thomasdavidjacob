import { BOOKING_URL } from '@/lib/booking'

/** "Book a call" button. Renders nothing until NEXT_PUBLIC_BOOKING_URL is set. */
export default function BookCallButton({
  label = 'Book a 20-Min Call',
  className = 'inline-flex items-center justify-center gap-2 text-zinc-300 hover:text-white border border-white/15 hover:border-amber-400/60 px-8 py-4 rounded-full transition-all hover:bg-white/5',
}: {
  label?: string
  className?: string
}) {
  if (!BOOKING_URL) return null
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className}>
      <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      {label}
    </a>
  )
}
