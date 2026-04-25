import Image from 'next/image'
import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const values = [
  {
    title: 'Editorial quality first',
    body: 'We prioritize clarity, structure, and relevance so each release reads like a trustworthy media story.',
  },
  {
    title: 'Distribution with intent',
    body: 'Every release is prepared for visibility and discoverability, not just publication.',
  },
  {
    title: 'Long-term newsroom value',
    body: 'We help teams build an ongoing press narrative instead of one-off announcements.',
  },
]

const ABOUT_IMAGE = 'https://img.freepik.com/free-photo/young-business-people-meeting-office_1303-13701.jpg'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-[#d4e6ff] bg-white p-6 shadow-[0_22px_55px_rgba(40,72,139,0.12)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#536ba3]">About Us</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#0f1c3d]">A media-first platform for brands that need consistent press visibility.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">{SITE_CONFIG.name} supports startups, agencies, and PR teams with release writing, publication, and newsroom growth workflows.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/updates" className="rounded-xl bg-[#685AFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5849f1]">
                  Explore Newsroom
                </Link>
                <Link href="/contact" className="rounded-xl border border-[#d4e6ff] bg-white px-5 py-3 text-sm font-semibold text-[#1f2f59] transition hover:border-[#9CCFFF]">
                  Contact Team
                </Link>
              </div>
            </div>
            <Image src={ABOUT_IMAGE} alt="About page visual" width={1200} height={900} className="h-auto w-full rounded-2xl border border-[#dbe9ff] object-cover" />
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <article key={item.title} className="rounded-3xl border border-[#d6e8ff] bg-white p-6 shadow-[0_16px_45px_rgba(34,66,134,0.1)]">
              <h2 className="text-xl font-semibold text-[#112249]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-[#d6e8ff] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#112249]">Our Mission</h2>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-600">We want every company update to be publication-ready, strategically positioned, and easy to discover. The platform combines strong writing structure with practical distribution flow so press releases become a durable growth channel.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
