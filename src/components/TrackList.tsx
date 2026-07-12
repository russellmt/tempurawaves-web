import { Box, Typography } from '@mui/material';
import type { Track } from '../types/content';
import { Link } from 'react-router-dom';

interface TrackListProps {
  tracks: Track[];
  chiptune?: boolean;
}

export function TrackList({ tracks, chiptune = false }: TrackListProps) {
  return (
    <Box component="ol" sx={{ m: 0, pl: 2.5 }}>
      {tracks.map((track, i) => (
        <Box
          component="li"
          key={track.title}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            py: 0.75,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            fontFamily: chiptune ? '"Orbitron", monospace' : 'inherit',
            fontSize: chiptune ? '0.85rem' : 'inherit',
          }}
        >
          <Typography variant="body2" component="span">
            {i + 1}. {track.title} 
            {track.feat ? (
              <>
                {' ('}feat.{' '}
                <Link
                  to={`/artists/${track.feat.slug}`}
                  style={{
                    color: 'inherit',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                    {track.feat.name}{')'}
                </Link>
              </>
            ) : null}
          </Typography>
          <Typography variant="body2" component="span" sx={{ opacity: 0.7 }}>
            {track.duration}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
