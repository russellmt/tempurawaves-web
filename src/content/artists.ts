import type { Artist } from '../types/content';

export const artists: Record<string, Artist> = {
  'dj-shuvohl': {
    slug: 'dj-shuvohl',
    name: 'DJ Shuvohl',
    group: 'producers',
    tagline: 'Electronic, melodic, experimental',
    bio: 'Primary producer of Tempura Waves. DJ Shuvohl crafts electronic melodic and experimental music rooted in lush green botanical aesthetics — synthesizers woven through organic textures like vines through forest canopy.',
    themeId: 'djShuvohl',
    image: '/images/dj-shuvohl/profile.svg',
    albums: [
      {
        title: 'Photosynthesis',
        year: 2025,
        cover: '/images/dj-shuvohl/photosynthesis.svg',
        tracks: [
          { title: 'Chlorophyll Dreams', duration: '5:23' },
          { title: 'Root System', duration: '4:47' },
          { title: 'Canopy Light', duration: '6:12' },
          { title: 'Moss Frequency', duration: '3:58' },
        ],
      },
      {
        title: 'Greenhouse Sessions',
        year: 2024,
        cover: '/images/dj-shuvohl/greenhouse.svg',
        tracks: [
          { title: 'Humid Air', duration: '4:31' },
          { title: 'Fern Loop', duration: '5:05' },
          { title: 'Terrarium', duration: '7:20' },
        ],
      },
    ],
  },

  'dj-mellow-d': {
    slug: 'dj-mellow-d',
    name: 'DJ Mellow-D',
    group: 'producers',
    tagline: 'Folk, psych rock, melodic trance & chiptune',
    bio: 'Producer associated with Rascal Stew, a comic punk band. DJ Mellow-D spans folk, psychedelic rock, melodic trance, trip hop, and chiptune — visualized through fractal patterns in orange, brown, and teal.',
    themeId: 'djMellowD',
    image: '/images/dj-mellow-d/profile.svg',
    albums: [
      {
        title: 'Fractal Drift',
        year: 2025,
        cover: '/images/dj-mellow-d/fractal-drift.svg',
        tracks: [
          { title: 'Mandelbrot Morning', duration: '5:44' },
          { title: 'Teal Horizon', duration: '4:18' },
          { title: 'Orange Spiral', duration: '6:33' },
        ],
      },
      {
        title: 'Rascal Stew Sessions',
        year: 2023,
        cover: '/images/dj-mellow-d/rascal-stew.svg',
        tracks: [
          { title: 'Punk Comic Interlude', duration: '3:12' },
          { title: 'Folk Fracture', duration: '4:56' },
          { title: 'Trip Hop Tale', duration: '5:21' },
        ],
      },
    ],
  },

  ernieshmitz: {
    slug: 'ernieshmitz',
    name: 'Ernieshmitz',
    group: 'producers',
    tagline: 'Dubstep, riddim & chiptune',
    bio: 'Producer specializing in dubstep, riddim, and chiptune. Ernieshmitz brings an electronic 8-bit videogame aesthetic — neon grids, pixel borders, and heavy bass drops rendered in retro digital glory.',
    themeId: 'ernieshmitz',
    image: '/images/ernieshmitz/profile.svg',
    albums: [
      {
        title: '8-Bit Annihilation',
        year: 2025,
        cover: '/images/ernieshmitz/8bit-annihilation.svg',
        tracks: [
          { title: 'Boss Fight', duration: '3:45' },
          { title: 'Riddim Runner', duration: '4:02' },
          { title: 'Coin Collect', duration: '2:58' },
          { title: 'Game Over (Remix)', duration: '5:11' },
        ],
      },
      {
        title: 'Pixel Wobble',
        year: 2024,
        cover: '/images/ernieshmitz/pixel-wobble.svg',
        tracks: [
          { title: 'Drop Code', duration: '3:33' },
          { title: 'Chiptune Chaos', duration: '4:44' },
        ],
      },
    ],
  },

  jacobplaylists: {
    slug: 'jacobplaylists',
    name: 'Jacobplaylists',
    group: 'collaborators',
    tagline: 'RnB, chill, pop & ballads',
    bio: 'Producer of RnB, chill, pop, and ballads. Jacobplaylists paints sonic landscapes in pink and aquatic tones — stars, sparkles, and gentle waves of melody drifting through midnight water.',
    themeId: 'jacobplaylists',
    image: '/images/jacobplaylists/profile.svg',
    albums: [
      {
        title: 'Starlit Currents',
        year: 2025,
        cover: '/images/jacobplaylists/starlit-currents.svg',
        tracks: [
          { title: 'Pink Tide', duration: '4:22' },
          { title: 'Sparkle Ballad', duration: '5:01' },
          { title: 'Aquatic RnB', duration: '3:47' },
        ],
      },
      {
        title: 'Chill Constellation',
        year: 2024,
        cover: '/images/jacobplaylists/chill-constellation.svg',
        tracks: [
          { title: 'Floating Stars', duration: '4:15' },
          { title: 'Pop Current', duration: '3:33' },
        ],
      },
    ],
  },

  soficchi: {
    slug: 'soficchi',
    name: 'Soficchi',
    group: 'collaborators',
    tagline: 'Vibrant vocalist — RnB & operatic range',
    bio: 'A vibrant vocalist with RnB and operatic range who also plays viola. Soficchi\'s world is cute Japanese-inspired imagery — sparkles, pastel dreams, and the occasional lethargic rat companion.',
    themeId: 'soficchi',
    image: '/images/soficchi/profile.svg',
    albums: [
      {
        title: 'Kawaii Lullaby',
        year: 2025,
        cover: '/images/soficchi/kawaii-lullaby.svg',
        tracks: [
          { title: 'Sparkle Viola', duration: '4:38' },
          { title: 'Operatic Dawn', duration: '6:02' },
          { title: 'Lazy Rat Nap', duration: '3:21' },
        ],
      },
      {
        title: 'Pastel Opera',
        year: 2024,
        cover: '/images/soficchi/pastel-opera.svg',
        tracks: [
          { title: 'Sakura Song', duration: '5:14' },
          { title: 'RnB Reverie', duration: '4:09' },
        ],
      },
    ],
  },

  junipher: {
    slug: 'junipher',
    name: 'Junipher',
    group: 'collaborators',
    tagline: 'Gentle vocals & trumpet',
    bio: 'Vocalist with gentle and calming vocals who also plays trumpet. Junipher loves green landscapes and dogs — her music feels like a warm walk through a sunlit park with a loyal companion at your side.',
    themeId: 'junipher',
    image: '/images/junipher/profile.svg',
    albums: [
      {
        title: 'Green Park Serenade',
        year: 2025,
        cover: '/images/junipher/green-park.svg',
        tracks: [
          { title: 'Trumpet at Dawn', duration: '4:51' },
          { title: 'Dog Days', duration: '3:44' },
          { title: 'Calm Green', duration: '5:28' },
        ],
      },
      {
        title: 'Gentle Horns',
        year: 2024,
        cover: '/images/junipher/gentle-horns.svg',
        tracks: [
          { title: 'Soft Breeze', duration: '4:03' },
          { title: 'Puppy Love', duration: '3:56' },
        ],
      },
    ],
  },

  onionoid: {
    slug: 'onionoid',
    name: 'Onionoid',
    group: 'collaborators',
    tagline: 'Violin — rocks, gems & running water',
    bio: 'Violin player whose visual world is rocks, mined gemstones, and running water. Onionoid\'s performances crystallize into amethyst and sapphire tones, flowing like a stream over ancient stone.',
    themeId: 'onionoid',
    image: '/images/onionoid/profile.svg',
    albums: [
      {
        title: 'Gemstone Current',
        year: 2025,
        cover: '/images/onionoid/gemstone-current.svg',
        tracks: [
          { title: 'Amethyst Flow', duration: '5:17' },
          { title: 'River Stone', duration: '4:42' },
          { title: 'Crystal Violin', duration: '6:05' },
        ],
      },
      {
        title: 'Mined Melodies',
        year: 2024,
        cover: '/images/onionoid/mined-melodies.svg',
        tracks: [
          { title: 'Sapphire Stream', duration: '4:28' },
          { title: 'Granite Echo', duration: '5:33' },
        ],
      },
    ],
  },
};

export function getArtist(slug: string): Artist | undefined {
  return artists[slug];
}

export function getArtistsBySlugs(slugs: readonly string[]): Artist[] {
  return slugs.map((slug) => artists[slug]).filter(Boolean) as Artist[];
}

export function getArtistPath(artist: Artist): string {
  return `/${artist.group}/${artist.slug}`;
}
