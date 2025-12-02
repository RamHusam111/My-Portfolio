import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { SECTIONS } from '../../constants';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Logo from './Logo';




const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: '8px',
  margin: '4px 0',
  padding: '12px 16px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    transform: 'translateX(4px)',
  },
}));

export default function MobileDrawer({setOpen, handleToggleColorMode, isDark, open, scrollTo}) {
    const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton
              onClick={handleToggleColorMode}
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'rotate(180deg)' },
              }}
            >
              {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
              aria-label="Menu button"
              onClick={toggleDrawer(true)}
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.1)' },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  width: 280,
                  backdropFilter: 'blur(20px)',
                  backgroundColor: (theme) => alpha(theme.palette.background.default, 0.95),
                  borderLeft: (theme) => `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                }
              }}
            >
              <Box sx={{ p: 3 }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                }}>
                  <Logo>Menu</Logo>
                  <IconButton
                    onClick={toggleDrawer(false)}
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'rotate(90deg)' },
                    }}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ mb: 2 }} />
                {SECTIONS.map((section) => (
                  <StyledMenuItem
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                  >
                    {section.label}
                  </StyledMenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
  )
}
