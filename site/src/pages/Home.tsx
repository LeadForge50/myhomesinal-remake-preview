import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, MapPin, Play, Shield, Sparkles, Waves } from 'lucide-react'
import { useEffect, useState } from 'react'
import ConsultForm from '../components/ConsultForm'
import FaqAccordion from '../components/FaqAccordion'
import { IMG } from '../data/assets'
import { HERO_SLIDES } from '../data/banners'
import {
  AGENT,
  AREAS,
  CREDENTIALS,
  FAQ_AREAS,
  FAQ_HOME_BASICS,
  FEATURED_GUIDES,
  LAKES,
} from '../data/content'

const AREA_PHOTOS: Record<string, string> = {
  Anniston: IMG.anniston,
  Oxford: IMG.oxford,
  Jacksonville: IMG.jacksonville,
  Heflin: IMG.heflin,
  Piedmont: IMG.mcclellanTrails,
  Lincoln: IMG.lincoln,
}

const LAKE_PHOTOS: Record<string, string> = {
  'Logan Martin Lake': IMG.lakeHome,
  'Weiss Lake': IMG.heroLake,
  'Coosa River': IMG.horseLand,
}

const GUIDE_PHOTOS: Record<string, string> = {
  'chief-ladiga-trail': IMG.mcclellanTrails,
  'weiss-lake-living': IMG.heroLake,
  'first-time-buyers-east-alabama': IMG.suburbanHomes,
  'sell-for-top-dollar': IMG.homeExterior,
}

const TRUST = [
  {
    icon: MapPin,
    title: 'Local roots',
    body: 'Calhoun County native who knows the streets, schools, and lake communities — not a drive-by outsider.',
  },
  {
    icon: Sparkles,
    title: 'Staging edge',
    body: 'Certified Home Stager — presentation advice that helps sellers show well and buyers see potential.',
  },
  {
    icon: Shield,
    title: 'ERA King trusted',
    body: 'ERA Marketing Excellence Award Winner 2025 & Cre@tor recognition, backed by a brokerage buyers and sellers already know.',
  },
]

export default function Home() {
  const [slide, setSlide] = useState(0)
  const [playingIntro, setPlayingIntro] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => setSlide((i) => (i + 1) % HERO_SLIDES.length), 4500)
    return () => window.clearInterval(id)
  }, [])

  const current = HERO_SLIDES[slide]

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-charcoal text-white">
        <div
          className="absolute inset-0 bg-cover bg-center transition-[background-image] duration-700"
          style={{
            backgroundImage: `linear-gradient(105deg, rgba(10,10,10,.82) 0%, rgba(10,10,10,.55) 45%, rgba(200,16,46,.35) 100%), url('${current.image}')`,
          }}
          role="img"
          aria-label={current.alt}
        />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            {AGENT.brokerage} · East Alabama
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
            {current.main}
          </h1>
          <p className="mt-3 text-xl font-semibold text-era-light sm:text-2xl">{current.sub}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {AGENT.name} — Native Calhoun County {AGENT.title} with {AGENT.brokerage}. Residential homes,
            land, and premier waterfront properties across East Alabama.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full bg-era px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-era-dark"
            >
              Meet Ashley
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
            >
              Schedule Consultation
            </Link>
            <a
              href={AGENT.phoneTel}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
            >
              Call Now
            </a>
          </div>
          <div className="mt-10 flex gap-2" aria-hidden>
            {HERO_SLIDES.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSlide(i)}
                className={`h-1 rounded-full transition-all ${i === slide ? 'w-10 bg-era' : 'w-6 bg-white/35'}`}
                aria-label={`Show banner ${i + 1}`}
              />
            ))}
          </div>
          <a
            href="#meet-ashley"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 transition hover:text-white"
            aria-label="Scroll to About Ashley"
          >
            <ChevronDown className="h-7 w-7 animate-bounce" />
          </a>
        </div>
      </section>

      <section id="value" className="border-b border-charcoal/5 bg-cream py-8 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 sm:px-6 lg:px-8">
          {CREDENTIALS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-era/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-era"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mx-auto mt-6 grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {TRUST.map((item) => (
            <div key={item.title} className="rounded-2xl border border-charcoal/8 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-era/10 text-era">
                <item.icon className="h-5 w-5" />
              </div>
              <h2 className="mb-1 text-base font-bold text-charcoal">{item.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="meet-ashley" className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="relative mx-auto w-full max-w-md">
            <div
              className="absolute -top-3 -right-3 h-full w-full rounded-2xl border-2 border-era/30"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-dark">
              <img src={IMG.headshot} alt={AGENT.name} className="h-full w-full object-cover object-top" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent p-6 text-center text-white">
                <p className="text-lg font-semibold drop-shadow">{AGENT.name}</p>
                <p className="text-sm text-white/85">
                  {AGENT.title} · {AGENT.brokerage}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-era">
              Native Calhoun County real estate agent
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Oxford, Anniston, Jacksonville & <span className="text-era">Alabama lakefront homes</span>
            </h2>
            <p className="mb-4 text-muted leading-relaxed">
              Ashley Stedham Mitchell helps families buy and sell across East Alabama — with the
              neighborhood knowledge of someone who grew up here and the polish of a Certified Home Stager.
            </p>
            <p className="mb-6 text-muted leading-relaxed">
              Whether you’re chasing a dock on Logan Martin, acreage near the Coosa, or a move-in-ready home
              in Oxford — you’ll get clear advice and responsive communication.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-era px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-era-dark"
            >
              More about Ashley <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-era">Meet Ashley</p>
              <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
                A quick hello from Ashley
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted leading-relaxed">
                Same illustrated intro avatar from the live site — tap play, then text or call when you’re
                ready to talk homes, land, or lake living.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setPlayingIntro(true)
                    document.getElementById('intro-avatar')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                  className="rounded-full bg-era px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:bg-era-dark"
                >
                  Play intro
                </button>
                <a
                  href={AGENT.phoneTel}
                  className="rounded-full border border-charcoal/15 bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-charcoal hover:border-era hover:text-era"
                >
                  Call now
                </a>
                <a
                  href={AGENT.phoneSms}
                  className="rounded-full border border-charcoal/15 bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-charcoal hover:border-era hover:text-era"
                >
                  Text Ashley
                </a>
              </div>
            </div>
            <div id="intro-avatar" className="mx-auto w-full max-w-[420px]">
              <div className="relative mx-auto aspect-square max-w-[380px] overflow-hidden rounded-full bg-charcoal shadow-2xl ring-8 ring-white">
                {playingIntro ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={IMG.introVideo}
                    poster={IMG.introAvatarPoster}
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <>
                    <img
                      src={IMG.introAvatarCircle}
                      alt="Ashley intro avatar"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                    <button
                      type="button"
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white"
                      onClick={() => setPlayingIntro(true)}
                    >
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-era shadow-xl transition hover:scale-105">
                        <Play className="ml-1 h-8 w-8 fill-era" />
                      </span>
                      <span className="rounded-full bg-charcoal/80 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider">
                        Play intro
                      </span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-areas" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-era">Featured areas</p>
            <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Lakes, towns & land worth calling home
            </h2>
          </div>
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {LAKES.map((lake) => (
              <div
                key={lake.name}
                className="relative min-h-[180px] overflow-hidden rounded-2xl bg-charcoal p-6 text-white"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(10,10,10,.85) 0%, rgba(10,10,10,.45) 100%), url('${LAKE_PHOTOS[lake.name] ?? IMG.heroLake}')`,
                  }}
                />
                <div className="relative">
                  <Waves className="mb-4 h-8 w-8 text-era-light" />
                  <h3 className="mb-2 text-xl font-bold">{lake.name}</h3>
                  <p className="text-sm text-white/80">{lake.blurb}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => (
              <div
                key={area.name}
                className="group relative flex min-h-[120px] items-end overflow-hidden rounded-xl border border-charcoal/10"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(10,10,10,.75) 0%, rgba(10,10,10,.25) 100%), url('${AREA_PHOTOS[area.name] ?? IMG.downtownCharm}')`,
                  }}
                />
                <div className="relative p-4 text-white">
                  <h3 className="font-semibold">{area.name}</h3>
                  <p className="text-sm text-white/80">{area.blurb}</p>
                </div>
              </div>
            ))}
          </div>
          <FaqAccordion
            className="mx-auto mt-14 max-w-3xl"
            eyebrow="Area FAQs"
            title="Where Ashley works"
            items={FAQ_AREAS}
          />
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Link
            to="/buyers"
            className="group relative min-h-[240px] overflow-hidden rounded-2xl border border-white/10 p-8 transition hover:border-era/50"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition group-hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(10,10,10,.88) 0%, rgba(10,10,10,.55) 100%), url('${IMG.suburbanHomes}')`,
              }}
            />
            <div className="relative">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-era-light">Buyers</p>
              <h2 className="mb-3 font-display text-3xl font-bold">Find your next chapter</h2>
              <p className="mb-6 text-sm leading-relaxed text-white/80">
                From first homes in Oxford to lakefront weekends — a clear buying path with a local guide.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-era-light group-hover:gap-3">
                Buyer guide <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
          <Link
            to="/sellers"
            className="group relative min-h-[240px] overflow-hidden rounded-2xl border border-white/10 p-8 transition hover:border-white/40"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition group-hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(200,16,46,.88) 0%, rgba(200,16,46,.55) 100%), url('${IMG.modernInterior}')`,
              }}
            />
            <div className="relative">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/80">Sellers</p>
              <h2 className="mb-3 font-display text-3xl font-bold">Sell for top dollar</h2>
              <p className="mb-6 text-sm leading-relaxed text-white/90">
                Staging-smart prep and ERA King marketing so East Alabama buyers notice — and compete.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3">
                Seller guide <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-era">Living guide</p>
              <h2 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">
                East Alabama insights
              </h2>
            </div>
            <Link to="/guide" className="inline-flex items-center gap-2 text-sm font-semibold text-era hover:underline">
              View all guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_GUIDES.map((g) => (
              <Link
                key={g.slug}
                to={`/guide/${g.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition hover:border-era/30 hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden bg-cream">
                  <img
                    src={GUIDE_PHOTOS[g.slug] ?? IMG.downtownCharm}
                    alt={g.title}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
                    {g.readTime} read
                  </span>
                  <h3 className="mb-2 font-semibold text-charcoal group-hover:text-era">{g.title}</h3>
                  <p className="flex-1 text-sm text-muted">{g.teaser}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-era">Testimonials</p>
          <h2 className="mb-3 font-display text-2xl font-bold text-charcoal sm:text-3xl">
            Reviews coming soon
          </h2>
          <p className="text-sm text-muted">
            We’re collecting client stories the right way — no invented quotes or fabricated sale prices.
            Check back shortly, or ask Ashley for recent references when you connect.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <FaqAccordion
          className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
          eyebrow="FAQs"
          title="Buying & selling basics"
          items={FAQ_HOME_BASICS}
        />
      </section>

      <section className="bg-charcoal pb-32 pt-16 text-white sm:pb-24 sm:pt-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-3 font-display text-3xl font-bold sm:text-4xl">
              Let's <span className="text-era">Connect</span>
            </h2>
            <p className="mb-8 max-w-md text-white/70">
              Ready to buy, sell, or just explore? Reach out however works best. No pressure — just honest
              conversation.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: 'Call or Text', value: AGENT.phoneDisplay, href: AGENT.phoneTel },
                { label: 'Email', value: AGENT.email, href: `mailto:${AGENT.email}` },
                { label: 'Text Me', value: 'Quick questions welcome', href: AGENT.phoneSms },
                { label: 'Serving', value: 'East Alabama', href: '/about' },
              ].map((item) =>
                item.href.startsWith('/') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="rounded-xl border border-white/10 bg-charcoal-soft p-4 hover:border-era/40"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-era-light">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium">{item.value}</p>
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-xl border border-white/10 bg-charcoal-soft p-4 hover:border-era/40"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-era-light">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium">{item.value}</p>
                  </a>
                ),
              )}
            </div>
          </div>
          <ConsultForm dark />
        </div>
      </section>
    </>
  )
}
