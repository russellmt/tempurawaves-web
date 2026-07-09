import type { ArchiveRelease, SquishedGumRelease } from '../types/content';

export const goatGumConfig = {
  title: 'Goat Gum Records',
  tagline: 'Archive releases & psychedelic collaborations',
  intro: 'Goat Gum Records is a sub-label beneath Tempura Waves, preserving older catalog outputs from our artists and hosting special collaborative projects that don\'t quite fit anywhere else.',

  squishedGum: {
    name: 'Squished Gum',
    tagline: '60s & 70s pop and psychedelic music',
    description:
      'Squished Gum is a collaboration between DJ Shuvohl, DJ Mellow-D, Onionoid, and Junipher — blending vintage pop sensibilities with psychedelic experimentation. Think sunshine pop through a kaleidoscope.',
    memberSlugs: ['dj-shuvohl', 'dj-mellow-d', 'onionoid', 'junipher'] as const,
    themeId: 'squishedGum' as const,
    releases: [
      {
        title: 'Chew on This',
        year: 2024,
        cover: '/images/goat-gum/chew-on-this.svg',
        tracks: [
          { title: 'Bubblegum Sun', duration: '3:42' },
          { title: 'Psychedelic Pop Dream', duration: '4:18' },
          { title: 'Gum Wrapper Sky', duration: '5:01' },
          { title: 'Squish & Stretch', duration: '3:55' },
        ],
      },
      {
        title: 'Vintage Waves',
        year: 2023,
        cover: '/images/goat-gum/vintage-waves.svg',
        tracks: [
          { title: '70s Daydream', duration: '4:33' },
          { title: 'Flower Power Loop', duration: '3:28' },
          { title: 'Tape Hiss Lullaby', duration: '5:44' },
        ],
      },
    ] satisfies SquishedGumRelease[],
  },

  archive: {
    title: 'Archive Catalog',
    description: 'Older releases from Tempura Waves artists, preserved under the Goat Gum umbrella.',
    releases: [
      {
        title: 'Early Greenhouse',
        artistSlug: 'dj-shuvohl',
        year: 2022,
        cover: '/images/goat-gum/archive-greenhouse.svg',
      },
      {
        title: 'First Fractals',
        artistSlug: 'dj-mellow-d',
        year: 2021,
        cover: '/images/goat-gum/archive-fractals.svg',
      },
      {
        title: 'Demo Tape Vol. 1',
        artistSlug: 'jacobplaylists',
        year: 2022,
        cover: '/images/goat-gum/archive-demo.svg',
      },
      {
        title: 'River Sessions',
        artistSlug: 'onionoid',
        year: 2021,
        cover: '/images/goat-gum/archive-river.svg',
      },
    ] satisfies ArchiveRelease[],
  },
};
