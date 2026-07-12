import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { createArtistTheme, getThemeStyles } from '../theme/createArtistTheme';
import type { ReactNode } from 'react';

interface ThemedPageProps {
  themeId: string;
  children: ReactNode;
}

export function ThemedPage({ themeId, children }: ThemedPageProps) {
  const theme = createArtistTheme(themeId);
  const styles = getThemeStyles(themeId);

  return (
    <ThemeProvider theme={theme}>
      <Box
        className={`themed-page ${styles.motifClass}`}
        sx={{
          background: styles.background,
          backgroundImage: styles.backgroundImage,
          color: styles.color,
          pt: 2,
          pb: 6,
          backgroundSize: styles.backgroundSize,
          backgroundPosition: styles.backgroundPosition,
          backgroundRepeat: styles.backgroundRepeat,
          backgroundAttachment: styles.backgroundAttachment,
          '&::before': styles.backgroundOverlay
            ? {
                content: '""',
                position: 'fixed',
                inset: 0,
                backgroundColor: styles.backgroundOverlay,
                pointerEvents: 'none',
                zIndex: 0,
              }
            : undefined,
        }}
      >
        <Box className="themed-content">{children}</Box>
      </Box>
    </ThemeProvider>
  );
}
