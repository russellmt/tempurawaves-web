import { Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { HeroTitle } from '../components/HeroTitle';
import { siteConfig } from '../content/siteConfig';
import { getArtistPath, getArtistsBySlugs } from '../content/artists';

export function HomePage() {
  const { home, nav } = siteConfig;
  const featuredProducers = getArtistsBySlugs(nav.producers.slugs.slice(0, 1));
  const featuredCollaborators = getArtistsBySlugs(nav.collaborators.slugs.slice(0, 1));

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        background: 'linear-gradient(180deg, #0f1a2e 0%, #1a2a4a 40%, #2a4a6a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(100, 223, 223, 0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <HeroTitle title={home.heroTitle} subtitle={home.subtitle} />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap',
            pb: 8,
          }}
        >
          {featuredProducers[0] && (
            <Button
              variant="contained"
              size="large"
              component={Link}
              to={getArtistPath(featuredProducers[0])}
              sx={{
                background: 'linear-gradient(135deg, #5b8def, #64dfdf)',
                '&:hover': { background: 'linear-gradient(135deg, #3d6fbf, #48baba)' },
              }}
            >
              {home.ctaProducers}
            </Button>
          )}
          {featuredCollaborators[0] && (
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to={getArtistPath(featuredCollaborators[0])}
              sx={{
                borderColor: '#64dfdf',
                color: '#64dfdf',
                '&:hover': { borderColor: '#99ecec', bgcolor: 'rgba(100, 223, 223, 0.08)' },
              }}
            >
              {home.ctaCollaborators}
            </Button>
          )}
          <Button
            variant="text"
            size="large"
            component={Link}
            to={nav.goatGum.path}
            sx={{ color: '#a8c0e8' }}
          >
            {nav.goatGum.label}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
