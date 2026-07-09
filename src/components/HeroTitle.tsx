import { Box, Typography } from '@mui/material';

interface HeroTitleProps {
  title: string;
  subtitle?: string;
}

export function HeroTitle({ title, subtitle }: HeroTitleProps) {
  return (
    <Box sx={{ textAlign: 'center', py: { xs: 6, md: 10 } }}>
      <Typography
        variant="h1"
        className="hero-title"
        sx={{
          fontSize: { xs: '2.5rem', sm: '4rem', md: '5.5rem' },
          background: 'linear-gradient(135deg, #8eb4f7 0%, #64dfdf 50%, #5b8def 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          mb: 2,
          textTransform: 'uppercase',
          width: '100%',
          maxWidth: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h6"
          className="hero-subtitle"
          sx={{
            color: 'text.secondary',
            maxWidth: 640,
            mx: 'auto',
            fontWeight: 300,
            lineHeight: 1.8,
            px: 2,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
