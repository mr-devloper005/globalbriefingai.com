import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

const FREEPIK = {
  listingHero: 'https://img.freepik.com/free-photo/business-team-analyzing-data_23-2148826808.jpg',
  cardA: 'https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg',
  cardB: 'https://img.freepik.com/free-photo/confident-business-team-with-leader_1098-3228.jpg',
} as const

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full press release for complete details.'
  return value.length > 180 ? value.slice(0, 177).trimEnd() + '...' : value
}

export async function TaskListPageOverride({ category }: { task: TaskKey; category?: string; date?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })
  const normalizedCategory = category ? normalizeCategory(category) : 'all'
  const filtered = normalizedCategory === 'all'
    ? posts
    : posts.filter((post) => normalizeCategory(String((post.content as any)?.category || '')) === normalizedCategory)

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-[#d4e6ff] bg-white p-6 shadow-[0_22px_55px_rgba(40,72,139,0.12)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#536ba3]">Latest Newsroom</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#0f1b3d]">Press Release Listing</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">Browse the latest releases with category and date filtering. Use search for quick discovery across all published posts.</p>
            </div>
            <Image src={FREEPIK.listingHero} alt="Latest news listing reference" width={1024} height={640} className="h-48 w-full rounded-2xl object-cover" />
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-[1fr_180px_180px_auto]">
            <form action="/search" className="flex items-center gap-2 rounded-xl border border-[#d7e8ff] bg-[#f8fbff] px-3 py-2">
              <Search className="h-4 w-4 text-[#566ca6]" />
              <input name="q" className="h-8 w-full bg-transparent text-sm outline-none" placeholder="Search press releases" />
            </form>
            <form action="/updates">
              <select name="category" defaultValue={normalizedCategory} className="h-12 w-full rounded-xl border border-[#d7e8ff] bg-white px-3 text-sm text-[#24345f] outline-none">
                <option value="all">All categories</option>
                {CATEGORY_OPTIONS.map((item) => (
                  <option key={item.slug} value={item.slug}>{item.name}</option>
                ))}
              </select>
            </form>
            <input type="date" className="h-12 rounded-xl border border-[#d7e8ff] bg-white px-3 text-sm text-[#24345f] outline-none" />
            <Link href="/updates" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#685AFF] px-4 text-sm font-semibold text-white transition hover:bg-[#5849f1]">
              Reset
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <article key={post.id} className="overflow-hidden rounded-3xl border border-[#d8e8ff] bg-white shadow-[0_16px_40px_rgba(35,66,132,0.1)] transition hover:-translate-y-1">
              <Image
                src={index % 2 === 0 ? FREEPIK.cardA : FREEPIK.cardB}
                alt={`${post.title} cover`}
                width={960}
                height={640}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5a6ea3]">{String((post.content as any)?.category || 'Press release')}</p>
                <h2 className="mt-2 line-clamp-2 text-xl font-semibold text-[#132347]">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{excerpt(post.summary)}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>{post.authorName || 'Editorial Team'}</span>
                </div>
                <Link href={`/updates/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#3c4ac6] hover:text-[#2e3897]">
                  Read release →
                </Link>
              </div>
            </article>
          ))}
        </section>

        {!filtered.length ? (
          <div className="mt-10 rounded-2xl border border-dashed border-[#cce0ff] bg-white p-10 text-center text-sm text-slate-500">
            No press releases match this filter.
          </div>
        ) : null}

        <aside className="mt-10 rounded-3xl border border-[#d4e6ff] bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526ca6]">Quick Links</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {['/pricing', '/contact', '/about', '/press'].map((href) => (
              <Link key={href} href={href} className="rounded-lg border border-[#dbe9ff] bg-[#f8fbff] px-3 py-2 text-sm font-semibold text-[#1f2f59] hover:border-[#9CCFFF]">
                {href.replace('/', '').replace('-', ' ') || 'home'}
              </Link>
            ))}
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
