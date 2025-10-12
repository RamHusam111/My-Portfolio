import React from 'react'
import { Grid, Stack } from '@mui/system'
import {
  Card, CardContent, CardMedia, Typography, Box, IconButton, Dialog, useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useTheme } from '@mui/material/styles';

export default function CertificationsCard({ img, title, description, date }) {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleFocus = (index) => setFocusedCardIndex(index);
  const handleBlur = () => setFocusedCardIndex(null);

  const openLightbox = () => img && setOpen(true);
  const closeLightbox = () => setOpen(false);

  const handleKeyOpen = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox();
    }
  };

  return (
    <>
      <Grid size={{ xs: 12, md: 6 }}>
        <SyledCard
          variant="outlined"
          onFocus={() => handleFocus(0)}
          onBlur={handleBlur}
          tabIndex={0}
          className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
          onClick={openLightbox}
          onKeyDown={handleKeyOpen}
          aria-label={title ? `Open ${title} image` : 'Open image'}
        >
          {img && (
            <CardMedia
              component="img"
              alt={title || 'Certification image'}
              image={img}
              sx={{
                aspectRatio: '13 / 9',
                borderBottom: '1px solid',
                borderColor: 'divider',
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
              }}
            />
          )}

          <SyledCardContent>
            {(title || description) && (
              <>
                {title && (
                  <Typography gutterBottom variant="h6" component="div">
                    {title}
                  </Typography>
                )}
                {description && (
                  <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                    {description}
                  </StyledTypography>
                )}
              </>
            )}
          </SyledCardContent>

          <CardFooter date={date} />
        </SyledCard>
      </Grid>

      {/* Fullscreen lightbox */}
      <Dialog
        open={open}
        onClose={closeLightbox}
        fullScreen={fullScreen}
        maxWidth="xl"
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0,0,0,0.9)',
            boxShadow: 'none',
          },
        }}
      >
        <Box sx={{ position: 'relative', width: '100%', height: '100%', p: { xs: 1, md: 2 } }}>
          <IconButton
            aria-label="Close"
            onClick={closeLightbox}
            sx={{
              position: 'fixed',
              top: 12,
              right: 12,
              color: 'common.white',
              bgcolor: 'rgba(0,0,0,0.4)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>

          <Box
            component="img"
            src={img}
            alt={title || 'Certification image'}
            sx={{
              display: 'block',
              margin: '0 auto',
              maxWidth: '100%',
              maxHeight: '100vh',
              objectFit: 'contain',
              userSelect: 'none',
            }}
            onClick={closeLightbox} // click image to close (optional)
          />

          {title && (
            <Typography
              variant="subtitle1"
              sx={{
                color: 'grey.200',
                position: 'fixed',
                left: 16,
                bottom: 10,
                pr: 6,
              }}
            >
              {title}
            </Typography>
          )}
        </Box>
      </Dialog>
    </>
  )
}

/* ---- styles and footer (unchanged) ---- */

const SyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    boxShadow: 6,
    transform: 'scale(1.02)',
    transition: 'transform 0.3s ease-in-out',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
}));

const SyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  paddingLeft: '16px',
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

function CardFooter({ date }) {
  const hasDate = Boolean(date);
  if (!hasDate) return null;
  return (
    <Stack direction="column" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', gap: 1, padding: '0 16px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'right', justifyContent: 'right' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>{date}</Typography>
      </Box>
    </Stack>
  );
}

const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
});
