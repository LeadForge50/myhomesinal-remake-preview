# My Homes in AL — remake preview

Clickable remake of [myhomesinal.com](https://myhomesinal.com) for Ashley Stedham Mitchell (ERA King Real Estate). Live preview: [GitHub Pages](https://leadforge50.github.io/myhomesinal-remake-preview/).

## Source vs. Pages deploy

GitHub Pages is set to **Deploy from a branch** (`main`, `/`). This repo therefore keeps:

- **Editable source** in `site/` — Vite + React + TypeScript + Tailwind v4
- **Built preview files** at the repo root (`index.html`, `404.html`, `assets/`) so a merge to `main` updates the live site automatically

Do not edit root `index.html` / `assets/` by hand. Change `site/`, then build.

```bash
cd site
npm install
npm run lint
npm run build   # typecheck + Vite build + copy dist to repo root for Pages
npm run dev     # local preview at /myhomesinal-remake-preview/
```

`listingsUrl`, areas, credentials, FAQs, and **hero/banner slides** are data files:

- `site/src/data/content.ts` — agent, areas, credentials, grouped FAQs
- `site/src/data/banners.ts` — home hero carousel (swap images here only)
- `site/src/data/assets.ts` — paths under `originals/`

## Client follow-ups (photos)

**TODO — Ashley’s new featured/banner photos are not in this repo yet.** She asked to update the main banner photos and said files were attached; those attachments were not available at build time.

Until new files land in `originals/`:

1. Drop the new images into `originals/` (keep filenames unique).
2. Point the slides in `site/src/data/banners.ts` at those files (via `IMG` keys in `assets.ts` or new keys).
3. Run `npm run build` in `site/` and commit the rebuilt Pages files.

Temporary hero slides use existing East Alabama **home/exterior** photography only (`al-home-exterior`, lake home, suburban neighborhood/homes) — no invented stock people photos.

## Listing search

Alabama Home Search / Search Listings must open Greater Alabama MLS:

`https://www.liveinalabama.com/listing/listingsearch.aspx?clear=1`

Brokerage name (ERA King Real Estate) and `ashley@eraking.com` stay as-is.

## Contact form / CRM

The consult form currently opens a pre-filled `mailto:` to Ashley. Optional next step: Formspree or Follow Up Boss. Set social URLs in `SOCIAL` inside `content.ts`.
