export const siteConfig = {
  labelName: 'Tempura Waves',
  tagline: 'Chill & cerebral sounds from the deep',

  home: {
    heroTitle: 'Tempura Waves',
    subtitle: 'A record label for chill and cerebral music — electronic melodies, experimental textures, and soulful collaborations.',
    ctaProducers: 'Explore Producers',
    ctaCollaborators: 'Meet Collaborators',
  },

  about: {
    title: 'About Tempura Waves',
    paragraphs: [
      'Tempura Waves is an independent record label publishing and producing a host of both chill and cerebral music. Founded around the vision of primary producer DJ Shuvohl, the label spans electronic melodic experimentation, soulful vocals, and genre-bending collaborations.',
      'Our roster includes producers, vocalists, and instrumentalists who each bring a distinct visual and sonic identity — from lush green botanical soundscapes to pink aquatic sparkle, kawaii-inspired vocals, gemstone violin textures, and 8-bit riddim energy.',
      'Beneath the main label lives Goat Gum Records, a sub-label preserving older catalog releases and hosting Squished Gum — a psychedelic pop collaboration between DJ Shuvohl, DJ Mellow-D, Onionoid, and Junipher.',
    ],
  },

  nav: {
    producers: {
      label: 'Producers',
      slugs: ['dj-shuvohl', 'dj-mellow-d', 'ernieshmitz'],
    },
    collaborators: {
      label: 'Collaborators',
      slugs: ['jacobplaylists', 'soficchi', 'onionoid', 'junipher'],
    },
    goatGum: {
      label: 'Goat Gum Records',
      path: '/goat-gum-records',
    },
    about: {
      label: 'About',
      path: '/about',
    },
  },
} as const;
