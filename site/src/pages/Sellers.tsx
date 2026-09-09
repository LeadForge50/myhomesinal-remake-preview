import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import FaqAccordion from '../components/FaqAccordion'
import { FAQ_SELLERS, SELLER_STEPS } from '../data/content'
import { IMG } from '../data/assets'

export default function Sellers() {
  return (
    <>
      <section className="relative overflow-hidden bg-era px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(105deg, rgba(200,16,46,.88) 0%, rgba(200,16,46,.7) 100%), url('${IMG.modernInterior}')`,
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/80">Sellers</p>
          <h1 className="max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            Sell for top dollar — staged to stand out
          </h1>
          <p className="mt-4 max-w-xl text-white/85">
            Certified Home Stager + ERA King marketing. Ashley helps East Alabama sellers launch strong,
            negotiate wisely, and close with clarity.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-era hover:bg-cream"
          >
            Get a listing plan
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-start gap-3">
            <Sparkles className="mt-1 h-6 w-6 text-era" />
            <div>
              <h2 className="font-display text-3xl font-bold text-charcoal">
                Staging is part of the strategy
              </h2>
              <p className="mt-2 max-w-2xl text-muted">
                Buyers decide fast from photos. Ashley’s staging guidance focuses on high-impact, practical
                prep — not expensive makeovers for the sake of it.
              </p>
            </div>
          </div>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SELLER_STEPS.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-charcoal">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <FaqAccordion
          className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
          eyebrow="Seller FAQs"
          title="Staging, pricing & launch"
          items={FAQ_SELLERS}
        />
      </section>

      <section className="py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              Curious what your home could list for?
            </h2>
            <p className="mt-1 text-sm text-muted">
              No hard pitch — just a thoughtful conversation about timing and prep.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-era px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white hover:bg-era-dark"
            >
              Talk with Ashley
            </Link>
            <Link
              to="/guide/selling-east-alabama"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal hover:border-era hover:text-era"
            >
              Selling guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
