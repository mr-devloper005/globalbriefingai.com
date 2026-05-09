import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const plans = [
  {
    name: 'Basic',
    price: '$89',
    description: 'For founders shipping early announcements.',
    features: ['Standard distribution', 'Basic analytics', 'Email support', '1 featured image'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$179',
    description: 'For growing brands and launch campaigns.',
    features: ['Priority distribution', 'Expanded analytics', 'SEO optimization', '3 featured images'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$349',
    description: 'For agencies and multi-market visibility.',
    features: ['Premium media reach', 'Deep performance reporting', 'Dedicated editor', 'White-label workflow'],
    popular: false,
  },
]

const comparison = [
  { label: 'Distribution level', basic: 'Standard', pro: 'Priority', premium: 'Premium' },
  { label: 'Analytics', basic: 'Core', pro: 'Extended', premium: 'Advanced' },
  { label: 'Media reach', basic: 'Regional', pro: 'National', premium: 'National + niche' },
]

const addons = [
  'Press media writing support',
  'Social snippet package',
  'Launch announcement sequencing',
  'Crisis response fast turnaround',
]

const faqs = [
  {
    question: 'Can I upgrade later?',
    answer: 'Yes. You can upgrade from Basic to Pro or Premium at any time.',
  },
  {
    question: 'Do plans include writing?',
    answer: 'Writing is available as an add-on, while all plans include publishing and distribution support.',
  },
  {
    question: 'Do agencies get custom billing?',
    answer: 'Yes. Agency workflows can be scoped with custom volume and billing terms.',
  },
]

const PRICING_HERO_IMAGE = 'https://img.freepik.com/free-vector/gradient-dashboard-template_23-2149056719.jpg'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-[#d4e6ff] bg-white p-6 shadow-[0_22px_55px_rgba(40,72,139,0.12)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#536ba3]">Pricing</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-[#0f1c3d]">Flexible plans for every press media growth stage.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">Pick a plan based on campaign depth, media reach goals, and reporting needs.</p>
            </div>
            <Image src={PRICING_HERO_IMAGE} alt="Pricing page reference visual" width={1100} height={700} className="h-52 w-full rounded-2xl border border-[#d9e8ff] object-cover" />
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-6 shadow-[0_16px_40px_rgba(35,66,132,0.1)] ${
                plan.popular ? 'border-[#685AFF] bg-[#f6f4ff]' : 'border-[#d8e8ff] bg-white'
              }`}
            >
              {plan.popular ? <p className="inline-flex rounded-full bg-[#685AFF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">Popular</p> : null}
              <h2 className="mt-3 text-2xl font-semibold text-[#112249]">{plan.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <p className="mt-4 text-4xl font-semibold text-[#112249]">{plan.price}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">per release</p>
              <ul className="mt-5 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 text-[#685AFF]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-6 inline-flex rounded-xl bg-[#685AFF] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#5849f1]">
                Choose {plan.name}
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-[#d7e8ff] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#112249]">Feature Comparison</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#e2ecff] text-[#455b91]">
                  <th className="px-3 py-3">Capability</th>
                  <th className="px-3 py-3">Basic</th>
                  <th className="px-3 py-3">Pro</th>
                  <th className="px-3 py-3">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-[#eef4ff]">
                    <td className="px-3 py-3 font-semibold text-[#17274d]">{row.label}</td>
                    <td className="px-3 py-3 text-slate-600">{row.basic}</td>
                    <td className="px-3 py-3 text-slate-600">{row.pro}</td>
                    <td className="px-3 py-3 text-slate-600">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#d8e8ff] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[#112249]">Add-ons</h2>
            <ul className="mt-4 space-y-2">
              {addons.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 text-[#685AFF]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[#d8e8ff] bg-white p-6">
            <h2 className="text-2xl font-semibold text-[#112249]">Pricing FAQs</h2>
            <div className="mt-4 space-y-3">
              {faqs.map((item) => (
                <details key={item.question} className="rounded-xl border border-[#dce9ff] bg-[#fbfdff] p-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-[#1f315f]">{item.question}</summary>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
