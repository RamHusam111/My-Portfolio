import React from 'react'
import { Grid, Stack } from '@mui/system'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function CertificationsCard({ img, title, description, date }) {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
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
        >
          {img && (
            <CardMedia
              component="img"
              alt="Image should be here"
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
            {( title || description) && (
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
    </>
  )
}








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

  // If nothing to show, render nothing
  if ( !hasDate) {
    return null;
  }

  return (
    <>
      <Stack
        direction="column"
        spacing={1}
        useFlexGap
        sx={{ flexWrap: 'wrap', gap: 1, padding: '0 16px' }}
      >
        

        {( hasDate) && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'right',
              justifyContent: 'right',
            }}
          >

            {hasDate && <Typography variant="body2" color="text.secondary" gutterBottom>{date}</Typography>}
          </Box>
        )}
      </Stack>
    </>
  );
}


const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  // WebkitLineClamp: 2,
  // overflow: 'hidden',
  textOverflow: 'ellipsis',
});
