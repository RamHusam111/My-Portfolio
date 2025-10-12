import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
export default function Section({ id, children }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        scrollMarginTop: { xs: '96px', md: '120px' },
        minHeight: '40vh',
      }}
    >
      <Card variant="outlined" sx={{ boxShadow: 2, padding: 2, borderRadius: 2}}>
        {children}

      </Card>
      
    </Box>
  );
}
