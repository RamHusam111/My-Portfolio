import React from 'react'
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';


const StyledNavButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  position: 'relative',
  padding: '8px 20px',
  borderRadius: '12px',
  fontSize: '0.875rem',
  fontWeight: active ? 600 : 500,
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  color: active
    ? theme.palette.primary.main
    : theme.palette.text.primary,
  backgroundColor: active
    ? alpha(theme.palette.primary.main, 0.12)
    : 'transparent',
  '&:hover': {
    backgroundColor: active
      ? alpha(theme.palette.primary.main, 0.2)
      : alpha(theme.palette.action.hover, 0.08),
    transform: 'translateY(-2px)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%) scaleX(0)',
    width: '80%',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '2px',
    transition: 'transform 0.3s ease',
  },
  '&:hover::before': {
    transform: 'translateX(-50%) scaleX(1)',
  },
}));

export default function NavButton({ id, activeSection, onClick, children }) {
  return (
    <StyledNavButton
      active={activeSection === id}
      onClick={() => onClick(id)}
    >
      {children}
    </StyledNavButton>
  );
}