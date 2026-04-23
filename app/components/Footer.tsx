import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="inline-block opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-xl font-black tracking-tight">
              <span className="text-white">Thomas</span>
              <span className="text-amber-400">+</span>
              <span className="text-white">David</span>
              <span className="text-amber-400">+</span>
              <span className="text-white">Jacob</span>
            </span>
          </Link>
          <p className="text-zinc-500 text-sm mt-2">
            Oregon City, OR — Serving Portland Metro &amp; Beyond
          </p>
        </div>
        <p className="text-zinc-600 text-sm">
          © 2026 Thomas+David+Jacob. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
