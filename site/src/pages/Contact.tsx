import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import { AGENT, SOCIAL } from '../data/content'

function SocialLink({ href, label }: { href: string; label: string }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md border border-white/30 px-3 py-1.5 text-xs text-white/90 hover:border-white hover:text-white"
      >
        {label}
      </a>
    )
  }
  return (
    <button
      type="button"
      disabled
      className="cursor-not-allowed rounded-md border border-white/20 px-3 py-1.5 text-xs text-white/40"
    >
      {label} · Coming soon
    </button>
  )
}

export default function Contact() {
  return (
    <section className="bg-charcoal pb-32 pt-16 text-white sm:pb-24 sm:pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="mb-3 font-display text-4xl font-bold sm:text-5xl">
            Let's <span className="text-era">Connect</span>
          </h1>
          <p className="mb-8 max-w-md text-white/70">
            Ready to buy, sell, or just explore? Reach out however works best for you. No pressure. Just
            honest conversation.
          </p>
          <div className="mb-8 grid gap-3 sm:grid-cols-2">
            <a
              href={AGENT.phoneTel}
              className="rounded-xl border border-white/10 bg-charcoal-soft p-4 hover:border-era/40"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-era-light">
                Call or Text
              </p>
              <p className="mt-1 text-sm font-medium">{AGENT.phoneDisplay}</p>
            </a>
            <a
              href={`mailto:${AGENT.email}`}
              className="rounded-xl border border-white/10 bg-charcoal-soft p-4 hover:border-era/40"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-era-light">Email</p>
              <p className="mt-1 text-sm font-medium">{AGENT.email}</p>
            </a>
            <a
              href={AGENT.phoneSms}
              className="rounded-xl border border-white/10 bg-charcoal-soft p-4 hover:border-era/40"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-era-light">Text Me</p>
              <p className="mt-1 text-sm font-medium">Quick questions welcome</p>
            </a>
            <div className="rounded-xl border border-white/10 bg-charcoal-soft p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-era-light">Serving</p>
              <p className="mt-1 text-sm font-medium">Calhoun · Cherokee · St. Clair</p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">Follow</p>
            <div className="flex flex-wrap gap-2">
              <SocialLink href={SOCIAL.instagramUrl} label="Instagram" />
              <SocialLink href={SOCIAL.facebookUrl} label="Facebook" />
            </div>
          </div>
          <p className="mt-8 text-sm text-white/50">
            Prefer listings first?{' '}
            <a
              href={AGENT.listingsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-era-light hover:underline"
            >
              {AGENT.listingsLabel}
            </a>{' '}
            ·{' '}
            <Link to="/about" className="text-era-light hover:underline">
              Meet Ashley
            </Link>
          </p>
        </div>
        <ConsultForm dark />
      </div>
    </section>
  )
}
