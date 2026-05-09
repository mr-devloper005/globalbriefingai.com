'use client'

import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Latest News', href: '/updates' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#cde1ff] bg-white/95 text-[#132245] backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-xl border border-[#cee1ff] bg-[#f3f8ff] p-1.5">
            <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="40" height="40" className="h-full w-full object-contain" />
          </div>
          <div>
            <p className="text-base font-semibold text-[#0f1c3f]">{SITE_CONFIG.name}</p>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#5c72a8]">Media Press Media</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-[#2e4271] transition hover:bg-[#f2f7ff] hover:text-[#14244f]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/search" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#d2e4ff] bg-white text-[#2a3e6d] transition hover:bg-[#f2f7ff]">
            <Search className="h-4 w-4" />
          </Link>
          <Link href="/register" className="inline-flex items-center rounded-lg bg-[#685AFF] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5849f1]">
            Submit Release
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#d2e4ff] text-[#2a3e6d] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#d8e8ff] bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg border border-transparent px-3 py-2.5 text-sm font-semibold text-[#2b3f6f] transition hover:border-[#d8e8ff] hover:bg-[#f5f9ff]"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link href="/search" onClick={() => setOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#d2e4ff]">
                <Search className="h-4 w-4" />
              </Link>
              <Link href="/register" onClick={() => setOpen(false)} className="inline-flex flex-1 items-center justify-center rounded-lg bg-[#685AFF] px-4 py-2.5 text-sm font-semibold text-white">
                Submit Release
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
