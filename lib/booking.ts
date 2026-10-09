// Booking link for "Book a call" buttons (Google Calendar appointment page,
// Calendly, etc.). Set NEXT_PUBLIC_BOOKING_URL in Vercel; while it's empty the
// buttons don't render, so there's never a dead link.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? ''
