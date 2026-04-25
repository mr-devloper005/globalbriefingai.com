import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { formatRichHtml, RichContent } from '@/components/shared/rich-content'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

const FREEPIK = {
  feature: 'https://img.freepik.com/free-photo/business-people-meeting_53876-15186.jpg',
  sidebar: 'https://img.freepik.com/free-photo/close-up-young-business-team-working_23-2149151160.jpg',
} as const

export async function TaskDetailPageOverride({ slug }: { task: TaskKey; slug: string }) {
  const post = await fetchTaskPostBySlug('mediaDistribution', slug)
  if (!post) notFound()
  const recent = (await fetchTaskPosts('mediaDistribution', 8, { fresh: true })).filter((item) => item.slug !== slug).slice(0, 5)
  const content = (post.content || {}) as Record<string, unknown>
  const html = formatRichHtml((content.body as string) || post.summary || '', 'Post body will appear here.')
  const publishDate = new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  const pageUrl = `/updates/${post.slug}`

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-900">
      <NavbarShell />
      <section className="border-b border-[#d2e6ff] bg-[radial-gradient(circle_at_top_left,#d8ecff_0%,#f8fbff_60%)] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4f69a6]">Single Press Release</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#0f1c3d] sm:text-5xl">{post.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{post.summary || 'Media update with release details and official announcement context.'}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[#495f95]">
            <span className="rounded-full border border-[#cfddfb] bg-white px-3 py-1.5">{publishDate}</span>
            <span>By {post.authorName || 'Editorial Team'}</span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#3f58a6] hover:text-[#293b79]">Home</Link>
            <span>›</span>
            <Link href="/updates" className="text-[#3f58a6] hover:text-[#293b79]">Newsroom</Link>
            <span>›</span>
            <span className="truncate text-slate-600">{post.title}</span>
          </div>
        </div>
      </section>
      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="rounded-3xl border border-[#d5e7ff] bg-white p-6 shadow-[0_20px_55px_rgba(33,64,128,0.1)] sm:p-8">
          <div className="overflow-hidden rounded-2xl border border-[#dbe9ff]">
            <Image src={FREEPIK.feature} alt={`${post.title} featured image`} width={1400} height={820} className="h-auto w-full object-cover" />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#dbe8ff] bg-[#f7faff] px-4 py-3">
            <p className="text-sm text-slate-600">Share this release</p>
            <div className="flex items-center gap-2">
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#d2e1ff] bg-white text-[#314583] hover:bg-[#f2f7ff]"><Twitter className="h-4 w-4" /></a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#d2e1ff] bg-white text-[#314583] hover:bg-[#f2f7ff]"><Facebook className="h-4 w-4" /></a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#d2e1ff] bg-white text-[#314583] hover:bg-[#f2f7ff]"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="prose prose-lg mt-8 max-w-none prose-headings:text-[#112249] prose-a:text-[#3f4fbe]">
            <RichContent html={html} />
          </div>
          <div className="mt-10 rounded-2xl border border-[#d9e8ff] bg-[#f8fbff] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#556ca4]">Related Articles</p>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {recent.slice(0, 4).map((item) => (
                <Link key={item.id} href={`/updates/${item.slug}`} className="rounded-xl border border-[#dce8ff] bg-white p-4 text-sm font-semibold text-[#1a2a52] hover:border-[#9CCFFF]">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </article>
        <aside className="space-y-6">
          <div className="rounded-2xl border border-[#d5e7ff] bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5b71a8]">Author</p>
            <p className="mt-3 text-lg font-semibold text-[#15264f]">{post.authorName || 'Editorial Team'}</p>
            <p className="mt-2 text-sm text-slate-600">{publishDate}</p>
          </div>
          <div className="rounded-2xl border border-[#d5e7ff] bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5b71a8]">Latest News</p>
            <div className="mt-3 space-y-3">
              {recent.map((item) => (
                <Link key={item.id} href={`/updates/${item.slug}`} className="block rounded-xl border border-[#dce8ff] bg-[#f8fbff] p-3 text-sm font-semibold text-[#1e315d] hover:border-[#9CCFFF]">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#d5e7ff] bg-white">
            <Image src={FREEPIK.sidebar} alt="Single press release page reference" width={800} height={1400} className="h-auto w-full object-cover" />
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
