import Image from 'next/image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const CONTACT_IMAGE = 'https://img.magnific.com/free-photo/documents-paperwork-business-strategy-concept_53876-120383.jpg?t=st=1777640595~exp=1777644195~hmac=67200109ab0454c74dcf5d82c2cabc2527bec0b323a25c2d92de6034c0cd821f&w=1480'

export function ContactPageOverride() {
  return (
    <div className="min-h-screen factory-brand-editorial text-[#241711]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-[#dcc8b7] bg-[#fffdfa] p-6 shadow-[0_22px_55px_rgba(77,47,27,0.12)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6e5547]">Contact Us</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#241711]">Talk to our press distribution team.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6e5547]">Share your campaign goals, timeline, and publication priorities. We will match you with the right workflow quickly.</p>

              <form className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="h-12 rounded-xl border border-[#dcc8b7] bg-[#fff4e8] px-4 text-sm outline-none" placeholder="Contact name" />
                  <input className="h-12 rounded-xl border border-[#dcc8b7] bg-[#fff4e8] px-4 text-sm outline-none" placeholder="Phone number" />
                </div>
                <input className="h-12 w-full rounded-xl border border-[#dcc8b7] bg-[#fff4e8] px-4 text-sm outline-none" placeholder="Email" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <select className="h-12 rounded-xl border border-[#dcc8b7] bg-[#fff4e8] px-4 text-sm outline-none">
                    <option>Please select organization type</option>
                    <option>Startup</option>
                    <option>Agency</option>
                    <option>Enterprise</option>
                  </select>
                  <select className="h-12 rounded-xl border border-[#dcc8b7] bg-[#fff4e8] px-4 text-sm outline-none">
                    <option>How may we help you?</option>
                    <option>Press media writing</option>
                    <option>Distribution package</option>
                    <option>PR consultation</option>
                  </select>
                </div>
                <textarea className="min-h-[150px] w-full rounded-2xl border border-[#dcc8b7] bg-[#fff4e8] px-4 py-3 text-sm outline-none" placeholder="Message / Comment" />
                <button type="submit" className="inline-flex rounded-xl bg-[#241711] px-5 py-3 text-sm font-semibold text-[#fff1e2] transition hover:bg-[#3a241b]">
                  Submit Now
                </button>
              </form>
            </div>
            <div className="space-y-4">
              <Image src={CONTACT_IMAGE} alt="Contact page visual reference" width={900} height={1200} className="h-auto w-full rounded-2xl border border-[#dcc8b7] object-cover" />

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
