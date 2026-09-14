/**
 * Hero / featured banner slides.
 * Swap image filenames here (files live in public/originals) — no layout edits needed.
 *
 * TODO (client photos): Ashley asked to update main featured/banner photos and said
 * files were attached. Those new assets are not in this repo yet. Until they arrive,
 * these slides use existing East Alabama home/exterior photography only
 * (no invented stock people photos).
 */
import { IMG } from './assets'

export type HeroSlide = {
  id: string
  main: string
  sub: string
  image: string
  alt: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'live-roam',
    main: 'Live. Roam. Sold.',
    sub: 'Sweet Home Alabama Living',
    image: IMG.homeExterior,
    alt: 'East Alabama home exterior',
  },
  {
    id: 'lake-land',
    main: 'Lake. Land. Home.',
    sub: 'East Alabama Waterfront & Beyond',
    image: IMG.lakeHome,
    alt: 'Lakefront home in East Alabama',
  },
  {
    id: 'rooted',
    main: 'Rooted Locally.',
    sub: 'Calhoun County Native REALTOR®',
    image: IMG.suburbanNeighborhood,
    alt: 'Suburban neighborhood street in East Alabama',
  },
  {
    id: 'family-homes',
    main: 'Find Your Next Chapter.',
    sub: 'Calhoun · Cleburne · Cherokee · Talladega · St. Clair',
    image: IMG.suburbanHomes,
    alt: 'Family homes in an East Alabama neighborhood',
  },
]
