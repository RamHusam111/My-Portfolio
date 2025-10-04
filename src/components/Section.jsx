// Section.jsx
import Box from '@mui/material/Box';

export default function Section({ id, children }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        // adjust to your AppBar height
        scrollMarginTop: { xs: '96px', md: '120px' },
        // optional: ensure there’s enough height to be “observable”
        minHeight: '40vh',
      }}
    >
      {children}
    </Box>
  );
}
