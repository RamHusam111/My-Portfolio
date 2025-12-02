import * as React from 'react';
import { alpha, styled, useColorScheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { keyframes } from '@mui/system';
import NavButton from './NavButton';
import Logo from './Logo';
import { PORTFOLIO_TITLE, SECTIONS } from '../../constants';
import MobileDrawer from './MobileDrawer';

// Smooth fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: '20px',
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  border: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.1),
  backgroundColor: theme.palette.mode === 'dark'
    ? alpha(theme.palette.background.default, 0.6)
    : alpha(theme.palette.background.default, 0.7),
  boxShadow: `0 8px 32px 0 ${alpha(theme.palette.common.black, 0.1)}`,
  padding: '10px 16px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${fadeIn} 0.6s ease-out`,
  '&:hover': {
    boxShadow: `0 12px 40px 0 ${alpha(theme.palette.common.black, 0.15)}`,
    transform: 'translateY(-2px)',
  },
}));


export default function AppAppBar({ activeSection = 'about', onNavClick }) {
  const [open, setOpen] = React.useState(false);

  const { mode, setMode } = useColorScheme();
  const isDark = mode === 'dark';


  const scrollTo = (id) => {
    onNavClick?.(id);
    setOpen(false);
  };



  const handleToggleColorMode = () => {
    setMode(isDark ? 'light' : 'dark');
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense">
          <Logo onClick={() => scrollTo('about')}>
            {PORTFOLIO_TITLE}
          </Logo>

          <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: 0.5,
          }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
              {SECTIONS.map((section) => (
                <NavButton
                  key={section.id}
                  id={section.id}
                  activeSection={activeSection}
                  onClick={scrollTo}
                >
                  {section.label}
                </NavButton>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <IconButton
              onClick={handleToggleColorMode}
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'rotate(180deg)',
                  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                },
              }}
            >
              {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

          
          <MobileDrawer
            setOpen={setOpen}
            handleToggleColorMode={handleToggleColorMode}
            isDark={isDark}
            open={open}
            scrollTo={scrollTo}
          />
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}