export type ArtistGroup = 'producers' | 'collaborators';

export interface Track {
  title: string;
  duration: string;
}

export interface Album {
  title: string;
  year: number;
  cover: string;
  tracks: Track[];
}

export interface Artist {
  slug: string;
  name: string;
  group: ArtistGroup;
  tagline: string;
  bio: string;
  themeId: ThemeId;
  image: string;
  albums: Album[];
}

export type ThemeId =
  | 'djShuvohl'
  | 'jacobplaylists'
  | 'soficchi'
  | 'junipher'
  | 'onionoid'
  | 'ernieshmitz'
  | 'djMellowD'
  | 'squishedGum'
  | 'goatGum';

export interface ThemeConfig {
  id: ThemeId;
  primary: string;
  secondary: string;
  background: string;
  backgroundImage?: string;
  text: string;
  accent: string;
  motifClass: string;
  fontFamily?: string;
}

export interface NavDropdown {
  label: string;
  slugs: string[];
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ArchiveRelease {
  title: string;
  artistSlug: string;
  year: number;
  cover: string;
}

export interface SquishedGumRelease {
  title: string;
  year: number;
  cover: string;
  tracks: Track[];
}
