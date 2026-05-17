import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const FOOTER_OVERRIDE_ENABLED = true


const getCategoryLabel = (value: string) => {
  const normalized = normalizeCategory(value)
  return CATEGORY_OPTIONS.find((item) => item.slug === normalized)?.name || value
}


export async function FooterOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 200, { allowMockFallback: false })
  const categories = Array.from(
    new Map(
      posts
        .map((post) => {
          const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
          const raw = typeof content.category === 'string' ? content.category.trim() : ''
          if (!raw) return null
          const slug = normalizeCategory(raw)
          return { slug, name: getCategoryLabel(raw) }
        })
        .filter((item): item is { slug: string; name: string } => Boolean(item))
        .map((item) => [item.slug, item])
    ).values()
  ).slice(0, 8)

  return (
    <footer className="border-t border-[#cfe2ff] bg-[linear-gradient(180deg,#13254a_0%,#0b1a36_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.02em]">{SITE_CONFIG.name}</h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#c1d5ff]">Media press media publishing for founders, agencies, and growth teams that need speed with credibility.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#93b4ee]">Platform</p>
            <div className="mt-4 space-y-3 text-sm text-[#d4e3ff]">
              <Link href="/updates" className="block hover:text-white">Latest News</Link>
              <Link href="/search" className="block hover:text-white">Search</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#93b4ee]">Company</p>
            <div className="mt-4 space-y-3 text-sm text-[#d4e3ff]">
              <Link href="/about" className="block hover:text-white">About Us</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#93b4ee]">Legal</p>
            <div className="mt-4 space-y-3 text-sm text-[#d4e3ff]">
              <Link href="/privacy" className="block hover:text-white">Privacy</Link>
              <Link href="/terms" className="block hover:text-white">Terms</Link>
              <Link href="/cookies" className="block hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>

        {categories.length ? (
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Categories</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/updates?category=${category.slug}`}
                  className="opacity-80 underline-offset-4 transition hover:opacity-100 hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10 border-t border-white/10 pt-5 text-sm text-[#afc8f5]">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
