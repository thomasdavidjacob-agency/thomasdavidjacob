import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { posts, getPost } from '../../../lib/blog'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://thomasdavidjacob.com/blog/${post.slug}`,
      siteName: 'Thomas David Jacob',
      images: [{ url: `https://thomasdavidjacob.com${post.heroImage}` }],
      locale: 'en_US',
      type: 'article',
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden pt-20">
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
          className="relative z-10 w-full px-6 pb-16 pt-32"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
        >
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-amber-400 text-sm font-bold tracking-wide mb-6 hover:text-amber-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-zinc-400 text-sm">
              <span>{post.author}</span>
              <span className="text-zinc-600">·</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="
              text-zinc-300 leading-relaxed text-lg
              [&>p]:mb-6
              [&>h2]:text-2xl [&>h2]:font-black [&>h2]:text-white [&>h2]:mt-12 [&>h2]:mb-4
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-3
              [&>ul]:mb-6 [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ul>li]:list-disc [&>ul>li]:text-zinc-400
              [&>ol]:mb-6 [&>ol]:pl-6 [&>ol>li]:mb-2 [&>ol>li]:list-decimal [&>ol>li]:text-zinc-400
              [&>blockquote]:border-l-4 [&>blockquote]:border-amber-400 [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-8 [&>blockquote]:text-zinc-400 [&>blockquote]:italic
              [&>em]:text-zinc-200
              [&>strong]:text-white [&>strong]:font-bold
              [&_em]:text-zinc-200
              [&_strong]:text-white [&_strong]:font-bold
              [&_a]:text-amber-400 [&_a]:underline [&_a:hover]:text-amber-300
            "
          >
            {post.content}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-400/5 border border-amber-400/20 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              The Thomas David Jacob team works with businesses across Oregon City, Portland, and
              the greater metro area. Let&apos;s talk about what we can do for yours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black px-10 py-4 rounded-full transition-all tracking-widest uppercase text-sm hover:scale-[1.02]"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="pb-28 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-10 text-center">
              More From the Blog
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {otherPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                  <article className="bg-zinc-900/40 border border-zinc-800 hover:border-amber-400/25 rounded-2xl overflow-hidden transition-colors h-full flex flex-col">
                    <div className="relative h-44">
                      <Image
                        src={related.heroImage}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-zinc-500 text-xs mb-3">{related.date}</p>
                      <h3 className="text-base font-black text-white mb-4 leading-snug group-hover:text-amber-400 transition-colors flex-1">
                        {related.title}
                      </h3>
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
      )}

      <Footer />
    </div>
  )
}
