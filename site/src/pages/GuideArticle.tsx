import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ALL_GUIDES, FEATURED_GUIDES, findGuide } from '../data/content'
import { IMG } from '../data/assets'

const GUIDE_PHOTOS: Record<string, string> = {
  'chief-ladiga-trail': IMG.mcclellanTrails,
  'weiss-lake-living': IMG.heroLake,
  'first-time-buyers-east-alabama': IMG.suburbanHomes,
  'sell-for-top-dollar': IMG.homeExterior,
  'buying-calhoun-county': IMG.suburbanHomes,
  'lake-living-weiss-logan-martin': IMG.heroLake,
  'selling-east-alabama': IMG.homeExterior,
  'relocating-anniston-oxford-jacksonville': IMG.jsuAerial,
}

export default function GuideArticle() {
  const { slug } = useParams()
  const article = findGuide(slug)

  if (!article) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="mb-4 font-display text-3xl font-bold">Article not found</h1>
        <Link to="/guide" className="text-era hover:underline">
          Back to Living Guide
        </Link>
      </section>
    )
  }

  const more =
    FEATURED_GUIDES.filter((g) => g.slug !== article.slug).slice(0, 4).length > 0
      ? FEATURED_GUIDES.filter((g) => g.slug !== article.slug).slice(0, 4)
      : ALL_GUIDES.filter((g) => g.slug !== article.slug).slice(0, 4)
  const hero = GUIDE_PHOTOS[article.slug] ?? IMG.downtownCharm

  return (
    <article className="pb-20">
      <header className="relative overflow-hidden border-b border-charcoal/10 bg-cream">
        <div className="relative h-56 sm:h-72">
          <img src={hero} alt="" role="presentation" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
          <Link
            to="/guide"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-era hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Living Guide
          </Link>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
            {article.readTime} read
          </p>
          <h1 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">{article.title}</h1>
          <p className="mt-3 text-muted">{article.teaser}</p>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {article.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="mb-3 text-xl font-bold text-charcoal">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mb-3 leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </section>
        ))}
        <div className="rounded-2xl bg-charcoal p-6 text-white sm:p-8">
          <h2 className="mb-2 font-display text-2xl font-bold">Want to talk it through?</h2>
          <p className="mb-4 text-sm text-white/70">
            Ashley is happy to answer questions specific to your search or sale.
          </p>
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-era px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-era-dark"
          >
            Contact Ashley
          </Link>
        </div>
        <div className="mt-12">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
            More from the guide
          </h3>
          <ul className="space-y-2">
            {more.map((g) => (
              <li key={g.slug}>
                <Link to={`/guide/${g.slug}`} className="text-charcoal hover:text-era">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
