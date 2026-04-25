import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, CheckCircle2, Clock4, PlayCircle, Star } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const FREEPIK = {
  hero: 'https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg',
  service: 'https://img.freepik.com/free-photo/close-up-young-business-team-working_23-2149151160.jpg',
  why: 'https://img.freepik.com/free-photo/business-people-meeting_53876-15186.jpg',
  cardA: 'https://img.freepik.com/free-photo/business-team-analyzing-data_23-2148826808.jpg',
  cardB: 'https://img.freepik.com/free-photo/confident-business-team-with-leader_1098-3228.jpg',
  cardC: 'https://img.freepik.com/free-photo/young-business-people-meeting-office_1303-13701.jpg',
  insightA: 'https://img.freepik.com/free-photo/close-up-businesswoman-working-laptop-office_1098-18710.jpg',
  insightB: 'https://img.freepik.com/free-photo/portrait-businesswoman-working-laptop_23-2148767031.jpg',
} as const

const faqItems = [
  {
    question: 'How fast can my press release go live?',
    answer:
      'Most releases are reviewed and published quickly with distribution-ready formatting, metadata checks, and newsroom placement.',
  },
  {
    question: 'Do you support writing and optimization?',
    answer:
      'Yes. Our writing team supports headline optimization, media angle refinement, and SEO structure before distribution.',
  },
  {
    question: 'Can agencies use this as a white-label extension?',
    answer:
      'Agencies can use our publishing workflow as an extension of their delivery pipeline while maintaining client consistency.',
  },
]

const testimonials = [
  {
    name: 'Aarav Malhotra',
    role: 'Founder, Synapse Robotics',
    rating: 5,
    text: 'Global Briefing AI helped us turn technical updates into media-ready stories. Reach and pickup quality improved in the first month.',
  },
  {
    name: 'Lisa Fernandes',
    role: 'PR Manager, NorthBridge Labs',
    rating: 5,
    text: 'The publishing workflow is clean, predictable, and easy for our team. The writing support removed a lot of bottlenecks.',
  },
  {
    name: 'Noah Patel',
    role: 'Growth Lead, Orbit SaaS',
    rating: 5,
    text: 'Great balance between distribution and clarity. We now treat releases as a real growth channel, not just an announcement tool.',
  },
]

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 18, { fresh: true })
  const featured = posts[0]
  const industryCards = posts.slice(0, 3)
  const insights = posts.slice(3, 6)
  const newsroom = posts.slice(6, 9)
  const dateToday = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-900">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-[#d7e7ff] bg-[radial-gradient(circle_at_top_left,#d9ecff_0%,#f8fbff_60%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
            <div>
              <p className="inline-flex items-center rounded-full border border-[#cfe1ff] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#4034b2]">
                Media Press Release Platform
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#101935] sm:text-5xl lg:text-6xl">
                Press releases built for credibility, reach, and search impact.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                {SITE_CONFIG.name} helps teams publish, distribute, and amplify announcements with a modern newsroom workflow.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-1 rounded-full border border-[#d7e7ff] bg-white px-3 py-1.5 font-semibold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-[#fbbf24] text-[#fbbf24]" />)}
                  4.9 rating
                </span>
                <span>trusted by founders, agencies, and growth teams</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/updates" className="inline-flex items-center justify-center rounded-xl bg-[#685AFF] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5748f0]">
                  Explore Releases
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center rounded-xl border border-[#c8ddff] bg-white px-6 py-3 text-sm font-semibold text-[#1d2b4f] transition hover:-translate-y-0.5 hover:border-[#9CCFFF]">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-[#d5e7ff] bg-white p-5 shadow-[0_30px_70px_rgba(56,93,171,0.16)] transition hover:-translate-y-1">
              <div className="overflow-hidden rounded-2xl">
                <Image src={FREEPIK.hero} alt="Press release writing preview" width={1200} height={760} className="h-auto w-full object-cover" />
              </div>
              <div className="mt-4 rounded-2xl border border-[#e2ecff] bg-[#f6f9ff] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5b6da3]">Service Focus</p>
                <h2 className="mt-2 text-xl font-semibold text-[#16244b]">Press Release Writing</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">Human-first narrative structure with SEO-friendly formatting and distribution-ready messaging.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526ca6]">Team Extension</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0f1b3d]">Extend your in-house team with specialized press release support.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Whether you need occasional writing support or full-cycle release operations, we integrate into your workflow.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-[#d6e8ff] bg-white p-6 shadow-[0_16px_45px_rgba(34,66,134,0.1)] transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-[#111f45]">For Freelancers</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Scale client delivery with pre-structured writing, revisions, and publication support across multiple niches.</p>
            </article>
            <article className="rounded-3xl border border-[#d6e8ff] bg-white p-6 shadow-[0_16px_45px_rgba(34,66,134,0.1)] transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-[#111f45]">For PR & SEO Agencies</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Use our distribution-ready framework as a backend extension for campaigns, launches, and authority-building programs.</p>
            </article>
          </div>
        </section>

        <section className="border-y border-[#d6e8ff] bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526ca6]">Why Choose Us</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0f1b3d]">Built for performance across media visibility and search indexing.</h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
                {[
                  'Editorial-quality writing flow with business context alignment',
                  'Distribution-ready formatting for press channels and syndication',
                  'Topic and structure optimization for search and newsroom indexing',
                  'Scalable process for startup teams, founders, and agencies',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#685AFF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-[#d6e8ff] bg-[#eef5ff] p-4 shadow-[0_16px_45px_rgba(34,66,134,0.12)]">
                <Image src={FREEPIK.why} alt="Video placeholder for platform introduction" width={1200} height={760} className="h-auto w-full rounded-2xl object-cover" />
              <button className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-[#685AFF] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#5748f0]">
                <PlayCircle className="h-4 w-4" />
                Watch Overview
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526ca6]">Industry Solutions</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0f1b3d]">Tailored release workflows for high-growth sectors.</h2>
            </div>
            <Link href="/updates" className="text-sm font-semibold text-[#3c4ac6] hover:text-[#2c3899]">View all industries</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {industryCards.map((post, index) => (
              <article key={post.id} className="overflow-hidden rounded-3xl border border-[#d6e8ff] bg-white shadow-[0_16px_45px_rgba(34,66,134,0.1)] transition hover:-translate-y-1">
                <Image
                  src={index === 0 ? FREEPIK.cardA : index === 1 ? FREEPIK.cardB : FREEPIK.cardC}
                  alt={`${post.title} card image`}
                  width={900}
                  height={540}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="line-clamp-2 text-xl font-semibold text-[#111f45]">{post.title}</h3>
                  <Link href={`/updates/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#3c4ac6] hover:text-[#2b3694]">Read case study →</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#d6e8ff] bg-[linear-gradient(180deg,#f4f8ff_0%,#ffffff_100%)]">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1fr_0.85fr] lg:px-8">
            <div className="rounded-3xl border border-[#d6e8ff] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526ca6]">Consultation</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#0f1b3d]">Book your strategy call.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">Pick a date and discuss your launch, distribution goals, and expected media outcomes.</p>
              <Link href="/contact" className="mt-5 inline-flex rounded-xl bg-[#685AFF] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5748f0]">
                Book Consultation
              </Link>
            </div>
            <div className="rounded-3xl border border-[#d6e8ff] bg-white p-6">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#526ca6]"><CalendarDays className="h-3.5 w-3.5" /> {dateToday}</p>
              <div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm text-slate-700">
                {Array.from({ length: 28 }, (_, idx) => idx + 1).map((d) => (
                  <div key={d} className={`rounded-lg border px-2 py-2 ${d === 15 ? 'border-[#685AFF] bg-[#685AFF] text-white' : 'border-[#e2ecff] bg-[#f7faff]'}`}>
                    {d}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#d6e8ff] bg-white p-6">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#526ca6]"><Clock4 className="h-3.5 w-3.5" /> Available Time Slots</p>
              <div className="mt-4 space-y-2">
                {['09:30 AM', '11:00 AM', '01:30 PM', '04:00 PM'].map((slot) => (
                  <button key={slot} className="w-full rounded-xl border border-[#dce8ff] bg-[#f8fbff] px-4 py-2.5 text-left text-sm font-semibold text-[#1f2b52] transition hover:border-[#9CCFFF]">
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526ca6]">Insights</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0f1b3d]">From our blog and press desk.</h2>
            </div>
            <Link href="/updates" className="text-sm font-semibold text-[#3c4ac6] hover:text-[#2c3899]">Open all posts</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {insights.map((post, index) => (
              <Link key={post.id} href={`/updates/${post.slug}`} className="overflow-hidden rounded-3xl border border-[#d6e8ff] bg-white shadow-[0_16px_45px_rgba(34,66,134,0.1)] transition hover:-translate-y-1">
                <Image
                  src={index % 2 === 0 ? FREEPIK.insightA : FREEPIK.insightB}
                  alt={`${post.title} insight image`}
                  width={800}
                  height={500}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="line-clamp-2 text-lg font-semibold text-[#111f45]">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#d6e8ff] bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526ca6]">FAQs</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0f1b3d]">Common questions from founders and PR teams.</h2>
            <div className="mt-6 space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-2xl border border-[#d9e7ff] bg-[#fbfdff] p-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-[#1f2b52]">{item.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d6e8ff] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526ca6]">Newsroom</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0f1b3d]">Recent case studies and media stories.</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {newsroom.map((post) => (
                <Link key={post.id} href={`/updates/${post.slug}`} className="overflow-hidden rounded-3xl border border-[#d6e8ff] bg-white shadow-[0_16px_45px_rgba(34,66,134,0.1)] transition hover:-translate-y-1">
                  <Image src={FREEPIK.service} alt={`${post.title} newsroom visual`} width={900} height={560} className="h-44 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="line-clamp-2 text-lg font-semibold text-[#111f45]">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#526ca6]">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#0f1b3d]">What teams say about our media workflow.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-3xl border border-[#d6e8ff] bg-white p-6 shadow-[0_16px_45px_rgba(34,66,134,0.1)]">
                <div className="flex gap-1 text-[#fbbf24]">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[#fbbf24]" />)}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-700">"{item.text}"</p>
                <p className="mt-4 text-sm font-semibold text-[#1a2a51]">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </article>
            ))}
          </div>
          {featured ? (
            <div className="mt-10 rounded-3xl border border-[#c9ddff] bg-[linear-gradient(90deg,#685AFF_0%,#7f72ff_100%)] px-6 py-5 text-white">
              <p className="text-sm uppercase tracking-[0.16em] text-white/80">Latest Release</p>
              <p className="mt-2 text-2xl font-semibold">{featured.title}</p>
              <Link href={`/updates/${featured.slug}`} className="mt-4 inline-flex rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#4c3fdc] transition hover:bg-[#e8e9ff]">Read full press release</Link>
            </div>
          ) : null}
        </section>
      </main>
      <Footer />
    </div>
  )
}
