import { createTheme } from '@mui/material/styles';
import { getTheme } from '../content/themes';

export function createArtistTheme(themeId: string) {
  const config = getTheme(themeId);

  return createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: config.primary,
        light: config.secondary,
        dark: config.primary,
      },
      secondary: {
        main: config.secondary,
      },
      background: {
        default: config.primary,
        paper: 'rgba(0, 0, 0, 0.35)',
      },
      text: {
        primary: config.text,
        secondary: config.accent,
      },
    },
    typography: {
      fontFamily: config.fontFamily ?? '"Quicksand", sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 600 },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${config.accent}33`,
          },
        },
      },
    },
  });
}

export function getThemeStyles(themeId: string) {
  const config = getTheme(themeId);
  return {
    background: config.background,
    backgroundImage: config.backgroundImage,
    color: config.text,
    motifClass: config.motifClass,
    backgroundSize: config.backgroundSize,
    backgroundPosition: config.backgroundPosition,
    backgroundRepeat: config.backgroundRepeat,
    backgroundAttachment: config.backgroundAttachment,
    backgroundOverlay: config.backgroundOverlay,
  };
}
