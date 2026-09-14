import { Link } from 'react-router-dom'
import { ArrowRight, CircleCheck } from 'lucide-react'
import FaqAccordion from '../components/FaqAccordion'
import { AGENT, BUYER_STEPS, FAQ_BUYERS } from '../data/content'
import { IMG } from '../data/assets'

export default function Buyers() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(105deg, rgba(10,10,10,.88) 0%, rgba(10,10,10,.65) 100%), url('${IMG.homeExterior}')`,
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-era-light">Buyers</p>
          <h1 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            Buy with a local guide who knows East Alabama
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Ashley Stedham Mitchell helps you cut through noise — clear goals, smart tours, and strong
            offers across Calhoun, Cleburne, Cherokee, Talladega, and St. Clair counties.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-full bg-era px-6 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-era-dark"
            >
              Start a conversation
            </Link>
            <a
              href={AGENT.listingsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider hover:bg-white/10"
            >
              {AGENT.listingsLabel} ↗
            </a>
          </div>
          <p className="mt-3 text-xs text-white/45">
            Search Listings opens Greater Alabama MLS (Alabama Home Search) in a new tab.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 font-display text-3xl font-bold text-charcoal">The buying process</h2>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BUYER_STEPS.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-charcoal/10 bg-cream p-6">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-era text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-charcoal">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 font-display text-2xl font-bold text-charcoal">What you can expect</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              'Honest feedback on condition, value, and negotiation room',
              'Help prioritizing lake vs. in-town vs. land lifestyle',
              'Coordination with lenders, inspectors, and closing teams',
              'Responsive texts and calls — you’re never guessing what’s next',
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl bg-white p-4 text-sm text-charcoal shadow-sm"
              >
                <CircleCheck className="h-5 w-5 shrink-0 text-era" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/guide/buying-calhoun-county"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-era hover:underline"
          >
            Read: Buying in Calhoun County <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <FaqAccordion
          className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
          eyebrow="Buyer FAQs"
          title="Questions from East Alabama buyers"
          items={FAQ_BUYERS}
        />
      </section>

      <section className="py-14 text-center">
        <Link
          to="/contact"
          className="inline-flex rounded-full bg-era px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-era-dark"
        >
          Schedule a buyer consult
        </Link>
      </section>
    </>
  )
}
