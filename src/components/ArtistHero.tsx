import { Box, Typography } from '@mui/material';
import type { Artist } from '../types/content';

interface ArtistHeroProps {
  artist: Artist;
  chiptune?: boolean;
}

export function ArtistHero({ artist, chiptune = false }: ArtistHeroProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4,
        px: { xs: 2, md: 6 },
        py: 4,
      }}
    >
      <Box
        component="img"
        src={artist.image}
        alt={artist.name}
        className="profile-image"
        sx={chiptune ? { borderRadius: 0, border: '3px solid #00ff41' } : undefined}
      />
      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h2" gutterBottom>
          {artist.name}
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.85, mb: 2 }}>
          {artist.tagline}
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 560, lineHeight: 1.8, opacity: 0.9 }}>
          {artist.bio}
        </Typography>
      </Box>
    </Box>
  );
}
