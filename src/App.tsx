import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { globalTheme } from './theme/globalTheme';
import { AppLayout } from './components/AppLayout';
import { HomePage } from './pages/HomePage';
import { ArtistPage } from './pages/ArtistPage';
import { GoatGumPage } from './pages/GoatGumPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <BrowserRouter basename="/tempurawaves-web">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/producers/:slug" element={<ArtistPage />} />
            <Route path="/collaborators/:slug" element={<ArtistPage />} />
            <Route path="/goat-gum-records" element={<GoatGumPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
