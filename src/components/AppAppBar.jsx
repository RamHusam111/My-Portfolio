import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from './../shared-theme/ColorModeIconDropdown';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar({ activeSection, onNavClick }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const scrollTo = (id) => {
    onNavClick?.(id); // highlight immediately on click
    // document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  const NavButton = ({ id, children }) => (
    <Button
      variant={activeSection === id ? 'contained' : 'text'}
      color={activeSection === id ? 'primary' : 'info'}
      size="small"
      onClick={() => scrollTo(id)}
      sx={activeSection === id ? { fontWeight: 600, borderRadius: 10 } : undefined}
    >
      {children}
    </Button>
  );

  return (
    <AppBar position="fixed" enableColorOnDark sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none',
      mt: 'calc(var(--template-frame-height, 0px) + 28px)' }}>
      <Container maxWidth="sm">
        <StyledToolbar variant="dense">
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
              <NavButton id="about">About</NavButton>
              <NavButton id="projects">Projects</NavButton>
              <NavButton id="experience">Experience</NavButton>
              <NavButton id="skills">Skills</NavButton>
              <NavButton id="contact">Contact</NavButton>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <ColorModeIconDropdown />
          </Box>

          {/* Mobile drawer */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}
              PaperProps={{ sx: { top: 'var(--template-frame-height, 0px)' } }}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {/* Drawer items */}
                <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
                <MenuItem onClick={() => scrollTo('projects')}>Projects</MenuItem>
                <MenuItem onClick={() => scrollTo('skills')}>Skills</MenuItem>
                <MenuItem onClick={() => scrollTo('experience')}>Experience</MenuItem>
                <MenuItem onClick={() => scrollTo('contact')}>Contact</MenuItem>
                <Divider sx={{ my: 3 }} />
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}