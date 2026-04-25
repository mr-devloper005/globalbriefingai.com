import Image from 'next/image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const CONTACT_IMAGE = 'https://img.freepik.com/free-photo/woman-working-call-center_23-2149288197.jpg'

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-[#d5e7ff] bg-white p-6 shadow-[0_22px_55px_rgba(40,72,139,0.12)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#536ba3]">Contact Us</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#0f1c3d]">Talk to our press distribution team.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">Share your campaign goals, timeline, and publication priorities. We will match you with the right workflow quickly.</p>

              <form className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="h-12 rounded-xl border border-[#d9e8ff] bg-[#f8fbff] px-4 text-sm outline-none" placeholder="Contact name" />
                  <input className="h-12 rounded-xl border border-[#d9e8ff] bg-[#f8fbff] px-4 text-sm outline-none" placeholder="Phone number" />
                </div>
                <input className="h-12 w-full rounded-xl border border-[#d9e8ff] bg-[#f8fbff] px-4 text-sm outline-none" placeholder="Email" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <select className="h-12 rounded-xl border border-[#d9e8ff] bg-[#f8fbff] px-4 text-sm outline-none">
                    <option>Please select organization type</option>
                    <option>Startup</option>
                    <option>Agency</option>
                    <option>Enterprise</option>
                  </select>
                  <select className="h-12 rounded-xl border border-[#d9e8ff] bg-[#f8fbff] px-4 text-sm outline-none">
                    <option>How may we help you?</option>
                    <option>Press release writing</option>
                    <option>Distribution package</option>
                    <option>PR consultation</option>
                  </select>
                </div>
                <textarea className="min-h-[150px] w-full rounded-2xl border border-[#d9e8ff] bg-[#f8fbff] px-4 py-3 text-sm outline-none" placeholder="Message / Comment" />
                <button type="submit" className="inline-flex rounded-xl bg-[#685AFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5849f1]">
                  Submit Now
                </button>
              </form>
            </div>
            <div className="space-y-4">
              <Image src={CONTACT_IMAGE} alt="Contact page visual reference" width={900} height={1200} className="h-auto w-full rounded-2xl border border-[#d8e9ff] object-cover" />
              <div className="rounded-2xl border border-[#d8e9ff] bg-[#f8fbff] p-5">
                <p className="text-sm font-semibold text-[#1a2a52]">Telephone Hours</p>
                <p className="mt-2 text-sm text-slate-600">Monday to Friday</p>
                <p className="text-sm text-slate-600">8:30 AM to 5:00 PM (PDT)</p>
                <p className="mt-4 text-sm font-semibold text-[#1a2a52]">Toll Free</p>
                <p className="text-sm text-slate-600">+1 888-880-9539</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
