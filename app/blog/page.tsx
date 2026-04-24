import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { posts } from '../../lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Thomas David Jacob — Oregon City & Portland Digital Marketing',
  description:
    'Practical web design, SEO, and digital marketing insights for small businesses in Oregon City, Portland, and the greater metro area. Written by the Thomas David Jacob team.',
  openGraph: {
    title: 'Blog | Thomas David Jacob — Oregon City & Portland Digital Marketing',
    description:
      'Practical web design, SEO, and digital marketing insights for small businesses in Oregon City, Portland, and the greater metro area.',
    url: 'https://thomasdavidjacob.com/blog',
    siteName: 'Thomas David Jacob',
    locale: 'en_US',
    type: 'website',
  },
}

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero_blogpost.jpg"
            alt="Thomas David Jacob digital agency blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div
          className="relative z-10 text-center px-6 py-20"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
        >
          <span className="inline-block text-amber-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Insights &amp; Strategy
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            The TDJ Blog
          </h1>
          <p className="text-zinc-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Practical web design, SEO, and digital marketing advice for small businesses in
            Oregon City, Portland, and the greater metro area.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Featured Article
          </p>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-400/30 transition-colors">
              <div className="relative h-72 md:h-auto">
                <Image
                  src={featured.heroImage}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div className="bg-zinc-900/60 p-10 flex flex-col justify-center">
                <p className="text-zinc-500 text-sm mb-4">{featured.date}</p>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight group-hover:text-amber-400 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm tracking-wide">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-10">
            All Articles
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-zinc-900/40 border border-zinc-800 hover:border-amber-400/25 rounded-2xl overflow-hidden transition-colors h-full flex flex-col">
                  <div className="relative h-52">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-zinc-500 text-xs mb-3">{post.date}</p>
                    <h3 className="text-lg font-black text-white mb-3 leading-snug group-hover:text-amber-400 transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm">
                      Read More
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
