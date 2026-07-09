import { Box, Container, Typography } from '@mui/material';
import { siteConfig } from '../content/siteConfig';

export function AboutPage() {
  const { about } = siteConfig;

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        background: 'linear-gradient(180deg, #0f1a2e 0%, #1a2a4a 100%)',
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            background: 'linear-gradient(135deg, #8eb4f7, #64dfdf)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {about.title}
        </Typography>
        {about.paragraphs.map((paragraph) => (
          <Typography
            key={paragraph.slice(0, 40)}
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.9, color: 'text.secondary', fontSize: '1.1rem' }}
          >
            {paragraph}
          </Typography>
        ))}
      </Container>
    </Box>
  );
}
