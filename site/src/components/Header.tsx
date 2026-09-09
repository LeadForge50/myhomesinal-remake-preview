import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Calendar, Menu, Phone, X } from 'lucide-react'
import { AGENT, NAV } from '../data/content'
import { IMG } from '../data/assets'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={IMG.logo} alt="ERA King Real Estate" className="h-10 w-auto shrink-0 object-contain" />
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-bold tracking-wide text-charcoal">
              ERA <span className="font-semibold text-era">KING</span>
            </div>
            <div className="truncate text-[11px] text-muted">Ashley Stedham Mitchell</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-widest transition ${
                  isActive ? 'bg-cream text-era' : 'text-charcoal/80 hover:bg-cream hover:text-era'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={AGENT.listingsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-widest text-charcoal/80 transition hover:bg-cream hover:text-era"
            title="Opens Greater Alabama MLS (Alabama Home Search) in a new tab"
          >
            Search Listings
            <span className="sr-only"> (Greater Alabama MLS, opens in new tab)</span>
          </a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={AGENT.phoneTel}
            className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/20 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal transition hover:border-era hover:text-era"
          >
            <Phone className="h-3.5 w-3.5" />
            Call
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-era px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-era-dark"
          >
            <Calendar className="h-3.5 w-3.5" />
            Book Consult
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <a href={AGENT.phoneTel} className="rounded-full p-2 text-era" aria-label="Call Ashley">
            <Phone className="h-5 w-5" />
          </a>
          <a href={AGENT.phoneSms} className="rounded-full p-2 text-era" aria-label="Text Ashley">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </a>
          <button
            type="button"
            className="rounded-full p-2 text-charcoal"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wider ${
                    isActive ? 'bg-cream text-era' : 'text-charcoal'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={AGENT.listingsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wider text-charcoal"
            >
              Search Listings
              <span className="mt-0.5 block text-[11px] font-normal normal-case tracking-normal text-muted">
                Greater Alabama MLS · opens in new tab
              </span>
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-era px-4 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white"
            >
              Book Consult
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
