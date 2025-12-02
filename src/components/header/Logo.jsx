import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const LogoRoot = styled(Box)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.25rem',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export default function Logo({ children, ...props }) {
  return <LogoRoot {...props}>{children}</LogoRoot>;
}
