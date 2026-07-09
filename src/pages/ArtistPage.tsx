import { Navigate, useParams } from 'react-router-dom';
import { ThemedPage } from '../components/ThemedPage';
import { ArtistHero } from '../components/ArtistHero';
import { AlbumGrid } from '../components/AlbumGrid';
import { getArtist } from '../content/artists';

export function ArtistPage() {
  const { slug } = useParams<{ slug: string }>();
  const artist = slug ? getArtist(slug) : undefined;

  if (!artist) {
    return <Navigate to="/" replace />;
  }

  const isChiptune = artist.themeId === 'ernieshmitz';

  return (
    <ThemedPage themeId={artist.themeId}>
      <ArtistHero artist={artist} chiptune={isChiptune} />
      <AlbumGrid albums={artist.albums} chiptune={isChiptune} />
    </ThemedPage>
  );
}
