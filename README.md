# Tempura Waves Web

A React + Material UI website for the **Tempura Waves** record label — chill and cerebral music from DJ Shuvohl and collaborators.

## Quick start

```bash
./bootstrap.sh dev
```

Or manually:

```bash
npm install
node scripts/generate-placeholders.mjs
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Other commands

| Command | Description |
|---------|-------------|
| `./bootstrap.sh build` | Production build to `dist/` |
| `./bootstrap.sh preview` | Build and serve locally |
| `npm run dev` | Development server |
| `npm run build` | Type-check + production build |

## Editing content

All site content lives in **`src/content/`** — no component changes needed for most updates.

### Navigation labels and home page copy

Edit [`src/content/siteConfig.ts`](src/content/siteConfig.ts):

- `nav.producers.label` / `nav.collaborators.label` — navbar button names
- `nav.producers.slugs` / `nav.collaborators.slugs` — who appears in each dropdown
- `home.heroTitle`, `home.subtitle` — home page text
- `about.paragraphs` — About page content

### Artists, albums, and tracks

Edit [`src/content/artists.ts`](src/content/artists.ts):

```typescript
albums: [
  {
    title: 'My New Album',
    year: 2026,
    cover: '/images/dj-shuvohl/my-new-album.jpg',
    tracks: [
      { title: 'Track Name', duration: '4:20' },
    ],
  },
],
```

### Visual themes

Per-artist colors and motifs are in [`src/content/themes.ts`](src/content/themes.ts).

### Goat Gum Records

Sub-label content, Squished Gum releases, and archive catalog: [`src/content/goatGum.ts`](src/content/goatGum.ts).

## Adding images

1. Place files in `public/images/<artist-slug>/` (e.g. `public/images/dj-shuvohl/photosynthesis.jpg`)
2. Update the `cover` or `image` path in the content file

Run `node scripts/generate-placeholders.mjs` to regenerate themed placeholder SVGs.

## Adding a new artist

1. Add an entry to [`src/content/artists.ts`](src/content/artists.ts)
2. Add a theme in [`src/content/themes.ts`](src/content/themes.ts)
3. Add the artist's `slug` to the appropriate list in [`src/content/siteConfig.ts`](src/content/siteConfig.ts) (`producers.slugs` or `collaborators.slugs`)
4. Add images under `public/images/<slug>/`

Routes are automatic: `/producers/<slug>` or `/collaborators/<slug>` based on the artist's `group` field.

## Project structure

```
src/
├── content/          ← edit site content here
├── components/       ← UI components
├── pages/            ← route pages
├── theme/            ← MUI theme configuration
└── types/            ← TypeScript content types
```

## Tech stack

- React 18 + TypeScript
- Vite
- Material UI (MUI) v6
- React Router v6
