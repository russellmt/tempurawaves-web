import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import type { Album } from '../types/content';
import { TrackList } from './TrackList';

interface ReleaseTypeGridProps {
  releases: Album[];
  chiptune?: boolean;
}

function ReleaseTypeGrid({ releases, chiptune = false }: ReleaseTypeGridProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  return (
    <>
    {releases.map((album, index) => (
    <Box key={album.title}>
      <Card
        className={chiptune ? 'chiptune-border' : undefined}
        sx={{
          cursor: 'pointer',
          transition: 'transform 0.2s',
          '&:hover': { transform: 'translateY(-4px)' },
        }}
        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
      >
        <CardMedia
          component="img"
          image={album.cover}
          alt={album.title}
          className="album-cover"
          sx={{
            aspectRatio: '1 / 1',
            objectFit: 'contain',
            width: '100%',
          }}
        />
        <CardContent>
          <Typography variant="h6">{album.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {album.year}
          </Typography>
          {expandedIndex === index && (
            <Box sx={{ mt: 2 }}>
              <TrackList tracks={album.tracks} chiptune={chiptune} />
            </Box>
          )}
          {expandedIndex !== index && (
            <Typography variant="caption" sx={{ mt: 1, display: 'block', opacity: 0.7 }}>
              Click to view tracks
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  ))}
  </>
  );
}

interface AlbumGridProps {
  albums: Album[];
  compilations: Album[];
  chiptune?: boolean;
}

export function AlbumGrid({ albums, compilations = [], chiptune = false }: AlbumGridProps) {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Discography
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 3,
        }}
      >
        <ReleaseTypeGrid releases={albums} chiptune={chiptune} /> 
      </Box>
      <Box sx={{ height: 70 }} />
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Compilations
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 3,
        }}
      >
        <ReleaseTypeGrid releases={compilations} chiptune={chiptune} /> 
      </Box>
    </Box>
  );
}
