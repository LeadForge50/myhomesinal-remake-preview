import { Link } from 'react-router-dom'
import { AGENT, FEATURED_GUIDES, SOCIAL } from '../data/content'
import { IMG } from '../data/assets'

function SocialLink({ href, label }: { href: string; label: string }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md border border-white/25 px-3 py-1.5 text-xs text-white/80 hover:border-white hover:text-white"
      >
        {label}
      </a>
    )
  }
  return (
    <button
      type="button"
      disabled
      title={`${label} URL not set yet — edit SOCIAL.instagramUrl / facebookUrl in content.ts`}
      className="cursor-not-allowed rounded-md border border-white/20 px-3 py-1.5 text-xs text-white/40"
    >
      {label} · Coming soon
    </button>
  )
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <img
              src={IMG.logo}
              alt="ERA King Real Estate"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <div>
              <div className="text-sm font-bold">ERA KING</div>
              <div className="text-xs text-white/60">Real Estate</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            {AGENT.name}, {AGENT.title}
            <br />
            Homes, land & lakefront across East Alabama.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/50">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="text-white/80 hover:text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white/80 hover:text-white" to="/buyers">
                Buyers
              </Link>
            </li>
            <li>
              <Link className="text-white/80 hover:text-white" to="/sellers">
                Sellers
              </Link>
            </li>
            <li>
              <Link className="text-white/80 hover:text-white" to="/about">
                About Ashley
              </Link>
            </li>
            <li>
              <Link className="text-white/80 hover:text-white" to="/guide">
                Living Guide
              </Link>
            </li>
            <li>
              <Link className="text-white/80 hover:text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/50">Living guide</h3>
          <ul className="space-y-2 text-sm">
            {FEATURED_GUIDES.map((g) => (
              <li key={g.slug}>
                <Link className="text-white/80 hover:text-white" to={`/guide/${g.slug}`}>
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/50">Connect</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={AGENT.phoneTel} className="hover:text-white">
                  {AGENT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${AGENT.email}`} className="hover:text-white">
                  {AGENT.email}
                </a>
              </li>
              <li>
                <a
                  href={AGENT.listingsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {AGENT.listingsLabel} ↗
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">Follow</p>
              <div className="flex flex-wrap gap-2">
                <SocialLink href={SOCIAL.instagramUrl} label="Instagram" />
                <SocialLink href={SOCIAL.facebookUrl} label="Facebook" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/50">Service areas</h3>
          <p className="text-sm leading-relaxed text-white/70">
            Calhoun, Cherokee & St. Clair Counties — Anniston, Oxford, Jacksonville, Heflin, Piedmont,
            Lincoln, Logan Martin Lake, Weiss Lake, Coosa River, Chief Ladiga Trail corridor.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/50 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {AGENT.name} · {AGENT.brokerage}. All rights reserved.
          </p>
          <p className="flex max-w-xl items-start gap-2">
            <img
              src={IMG.equalHousing}
              alt="Equal Housing Opportunity"
              className="mt-0.5 h-4 w-4 shrink-0 object-contain opacity-70"
            />
            <span>
              Equal Housing Opportunity. We are committed to the letter and spirit of U.S. policy for the
              achievement of equal housing opportunity throughout the Nation.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
