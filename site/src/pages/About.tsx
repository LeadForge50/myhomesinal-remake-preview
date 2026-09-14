import { Link } from 'react-router-dom'
import FaqAccordion from '../components/FaqAccordion'
import { AGENT, COUNTIES, CREDENTIALS, FAQ_ABOUT } from '../data/content'
import { IMG } from '../data/assets'

export default function About() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="relative mx-auto w-full max-w-md">
            <div
              className="absolute -top-4 -right-4 h-full w-full rounded-2xl border-2 border-era/25"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-dark">
              <img src={IMG.headshot} alt={AGENT.name} className="h-full w-full object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 via-charcoal/35 to-transparent p-6 text-center text-white">
                <p className="text-xl font-semibold">{AGENT.name}</p>
                <p className="mt-1 text-sm text-white/80">{AGENT.title}</p>
                <p className="text-sm text-white/70">{AGENT.brokerage}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-era">
              Native Calhoun County real estate agent
            </p>
            <h1 className="mb-4 font-display text-4xl font-bold text-charcoal sm:text-5xl">Meet Ashley</h1>
            <p className="mb-4 leading-relaxed text-muted">
              Ashley Stedham Mitchell is a REALTOR® with ERA King Real Estate serving families across East
              Alabama. As a Calhoun County native, she brings hometown familiarity to every showing, listing
              appointment, and negotiation.
            </p>
            <p className="mb-4 leading-relaxed text-muted">
              Her focus spans residential homes, land, and waterfront living across Calhoun, Cleburne,
              Cherokee, Talladega, and St. Clair counties — including Logan Martin Lake, Weiss Lake, and the
              Coosa River corridor.
            </p>
            <p className="mb-6 leading-relaxed text-muted">
              Credentials include Certified Home Stager, ERA Marketing Excellence Award Winner 2025, and ERA
              Cre@tor — recognition earned through client-centered work, not shortcuts.
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {CREDENTIALS.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cream px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-era"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mb-8">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-charcoal">
                Areas served
              </h2>
              <ul className="flex flex-wrap gap-2">
                {COUNTIES.map((c) => (
                  <li key={c} className="rounded-lg border border-charcoal/10 px-3 py-1.5 text-sm text-muted">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-era px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white hover:bg-era-dark"
              >
                Work with Ashley
              </Link>
              <a
                href={AGENT.phoneTel}
                className="rounded-full border border-charcoal/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-charcoal hover:border-era hover:text-era"
              >
                Call {AGENT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-3 font-display text-2xl font-bold text-charcoal">How Ashley works</h2>
          <p className="text-muted leading-relaxed">
            Expect straightforward communication, local market context, and respect for your timeline.
            Whether you’re relocating to Calhoun, Cleburne, Cherokee, Talladega, or St. Clair County — or
            listing a family home — the goal is the same: a smooth process and a result you feel good about.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <FaqAccordion
          className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
          eyebrow="About FAQs"
          title="Credentials & process"
          items={FAQ_ABOUT}
        />
      </section>
    </>
  )
}
