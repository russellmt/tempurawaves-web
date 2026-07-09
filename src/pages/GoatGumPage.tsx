import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemedPage } from '../components/ThemedPage';
import { TrackList } from '../components/TrackList';
import { goatGumConfig } from '../content/goatGum';
import { artists, getArtistPath } from '../content/artists';
import { getThemeStyles } from '../theme/createArtistTheme';

export function GoatGumPage() {
  const { squishedGum, archive } = goatGumConfig;

  return (
    <ThemedPage themeId="goatGum">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom>
          {goatGumConfig.title}
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.85, mb: 2 }}>
          {goatGumConfig.tagline}
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 720, lineHeight: 1.8, mb: 6 }}>
          {goatGumConfig.intro}
        </Typography>

        <Box
          className={`motif-psychedelic ${getThemeStyles(squishedGum.themeId).motifClass}`}
          sx={{
            mb: 8,
            background: getThemeStyles(squishedGum.themeId).background,
            borderRadius: 2,
            px: { xs: 2, md: 3 },
            py: 4,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{ fontFamily: '"Quicksand", sans-serif', fontStyle: 'italic' }}
              >
                {squishedGum.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 1, opacity: 0.9 }}>
                {squishedGum.tagline}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, maxWidth: 640, lineHeight: 1.8 }}>
                {squishedGum.description}
              </Typography>
              <Typography variant="body2" sx={{ mb: 4, opacity: 0.8 }}>
                {squishedGum.memberSlugs
                  .map((slug) => artists[slug]?.name)
                  .filter(Boolean)
                  .join(' · ')}
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 3,
                }}
              >
                {squishedGum.releases.map((release) => (
                  <Card key={release.title}>
                    <CardMedia
                      component="img"
                      image={release.cover}
                      alt={release.title}
                      className="album-cover"
                    />
                    <CardContent>
                      <Typography variant="h6">{release.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {release.year}
                      </Typography>
                      <TrackList tracks={release.tracks} />
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
        </Box>

        <Typography variant="h4" gutterBottom>
          {archive.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
          {archive.description}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
            gap: 3,
          }}
        >
          {archive.releases.map((release) => {
            const artist = artists[release.artistSlug];
            return (
              <Card key={release.title}>
                <CardMedia
                  component="img"
                  image={release.cover}
                  alt={release.title}
                  className="album-cover"
                />
                <CardContent>
                  <Typography variant="h6">{release.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {release.year}
                  </Typography>
                  {artist && (
                    <Typography
                      variant="body2"
                      component={Link}
                      to={getArtistPath(artist)}
                      sx={{ mt: 1, display: 'block', color: 'secondary.main', textDecoration: 'none' }}
                    >
                      {artist.name}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </ThemedPage>
  );
}
