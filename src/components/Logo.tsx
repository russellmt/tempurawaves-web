import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { siteConfig } from '../content/siteConfig';
import logo from '@/assets/logo.svg';

interface LogoProps {
  height?: number;
}

export function Logo({ height = 40 }: LogoProps) {
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Tempura Waves logo"
        sx={{ height, width: 'auto' }}
      />
      <Box
        component="span"
        sx={{
          fontFamily: '"Orbitron", sans-serif',
          fontWeight: 700,
          fontSize: height * 0.35,
          display: { xs: 'none', sm: 'inline' },
        }}
      >
        {siteConfig.labelName}
      </Box>
    </Box>
  );
}
