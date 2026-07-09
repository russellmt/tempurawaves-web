import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from './Logo';
import { siteConfig } from '../content/siteConfig';
import { artists, getArtistPath } from '../content/artists';

function NavDropdown({
  label,
  slugs,
}: {
  label: string;
  slugs: readonly string[];
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => setAnchorEl(null), 150);
  };

  const handleMenuEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <Box onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <Button
        color="inherit"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{ fontSize: '1rem' }}
      >
        {label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ onMouseEnter: handleMenuEnter, onMouseLeave: handleClose }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        disableScrollLock
      >
        {slugs.map((slug) => {
          const artist = artists[slug];
          if (!artist) return null;
          return (
            <MenuItem
              key={slug}
              component={Link}
              to={getArtistPath(artist)}
              onClick={() => setAnchorEl(null)}
            >
              {artist.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { nav } = siteConfig;

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 280, pt: 2 }} role="presentation">
        <Typography variant="h6" sx={{ px: 2, mb: 2, fontFamily: '"Orbitron", sans-serif' }}>
          Menu
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemText primary={nav.producers.label} sx={{ px: 2, pt: 1, opacity: 0.7 }} />
          </ListItem>
          {nav.producers.slugs.map((slug) => {
            const artist = artists[slug];
            if (!artist) return null;
            return (
              <ListItem key={slug} disablePadding>
                <ListItemButton component={Link} to={getArtistPath(artist)} onClick={onClose}>
                  <ListItemText primary={artist.name} />
                </ListItemButton>
              </ListItem>
            );
          })}

          <ListItem disablePadding>
            <ListItemText primary={nav.collaborators.label} sx={{ px: 2, pt: 2, opacity: 0.7 }} />
          </ListItem>
          {nav.collaborators.slugs.map((slug) => {
            const artist = artists[slug];
            if (!artist) return null;
            return (
              <ListItem key={slug} disablePadding>
                <ListItemButton component={Link} to={getArtistPath(artist)} onClick={onClose}>
                  <ListItemText primary={artist.name} />
                </ListItemButton>
              </ListItem>
            );
          })}

          <ListItem disablePadding>
            <ListItemButton component={Link} to={nav.goatGum.path} onClick={onClose}>
              <ListItemText primary={nav.goatGum.label} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to={nav.about.path} onClick={onClose}>
              <ListItemText primary={nav.about.label} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { nav } = siteConfig;

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Logo />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            <NavDropdown label={nav.producers.label} slugs={nav.producers.slugs} />
            <NavDropdown label={nav.collaborators.label} slugs={nav.collaborators.slugs} />
            <Button
              color="inherit"
              component={Link}
              to={nav.goatGum.path}
              sx={{
                fontSize: '1rem',
                fontWeight: location.pathname === nav.goatGum.path ? 700 : 400,
              }}
            >
              {nav.goatGum.label}
            </Button>
            <Button
              color="inherit"
              component={Link}
              to={nav.about.path}
              sx={{
                fontSize: '1rem',
                fontWeight: location.pathname === nav.about.path ? 700 : 400,
              }}
            >
              {nav.about.label}
            </Button>
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { md: 'none' } }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <Toolbar />
    </>
  );
}
