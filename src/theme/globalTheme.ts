import { createTheme } from '@mui/material/styles';

export const globalTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5b8def',
      light: '#8eb4f7',
      dark: '#3d6fbf',
    },
    secondary: {
      main: '#64dfdf',
      light: '#99ecec',
      dark: '#48baba',
    },
    background: {
      default: '#0f1a2e',
      paper: 'rgba(26, 42, 74, 0.85)',
    },
    text: {
      primary: '#e8f0ff',
      secondary: '#a8c0e8',
    },
  },
  typography: {
    fontFamily: '"Quicksand", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 26, 46, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(100, 223, 223, 0.15)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});
