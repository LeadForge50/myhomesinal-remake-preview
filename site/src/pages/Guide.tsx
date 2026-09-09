import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FEATURED_GUIDES } from '../data/content'
import { IMG } from '../data/assets'

const GUIDE_PHOTOS: Record<string, string> = {
  'chief-ladiga-trail': IMG.mcclellanTrails,
  'weiss-lake-living': IMG.heroLake,
  'first-time-buyers-east-alabama': IMG.suburbanHomes,
  'sell-for-top-dollar': IMG.homeExterior,
}

export default function Guide() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-era">Living guide</p>
        <h1 className="mb-3 font-display text-4xl font-bold text-charcoal sm:text-5xl">
          East Alabama living
        </h1>
        <p className="mb-12 max-w-2xl text-muted">
          Practical notes on buying, selling, lake living, and relocating — written for real decisions, not
          fluff.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURED_GUIDES.map((g) => (
            <Link
              key={g.slug}
              to={`/guide/${g.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-cream transition hover:border-era/30 hover:shadow-md"
            >
              <div className="aspect-[21/9] overflow-hidden">
                <img
                  src={GUIDE_PHOTOS[g.slug] ?? IMG.downtownCharm}
                  alt={g.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <span className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
                  {g.readTime} read
                </span>
                <h2 className="mb-2 font-display text-2xl font-bold text-charcoal group-hover:text-era">
                  {g.title}
                </h2>
                <p className="mb-6 flex-1 text-sm text-muted">{g.teaser}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-era">
                  Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
