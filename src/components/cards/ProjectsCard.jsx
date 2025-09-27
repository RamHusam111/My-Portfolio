import { Grid, Stack } from '@mui/system'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { highlightText } from '../../functions/highlightText.function';

export default function ProjectsCard({
  img, tag, title, descriptionParagraphs = [], note = '', noteHighlights = [],authors, technologies, date}) {

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
                aspectRatio: '16 / 9',
                borderBottom: '1px solid',
                borderColor: 'divider',

                objectFit: 'cover',
                width: '100%',
                height: 'auto',

              }}
            />
          )}

          <SyledCardContent>
            {(tag || title || descriptionParagraphs.length || note) && (

              <>
                {tag && (
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {tag}
                  </Typography>
                )}

                {title && (
                  <Typography gutterBottom variant="h6" component="div">
                    {title}
                  </Typography>
                )}

{/* paragraphs */}
              {descriptionParagraphs.map((p, idx) => (
                <StyledTypography key={idx} variant="body2" color="text.secondary" gutterBottom>
                  {p}
                </StyledTypography>
              ))}

              {/* note */}
              {note && (
                <StyledTypography variant="body2" color="text.secondary" sx={{mt: 3}} gutterBottom>
                  <Box
                    component="span"
                    sx={{ fontWeight: 600, color: 'warning.main', mr: 0.5 }}
                  >
                    NOTE:
                  </Box>
                  {highlightText(note, noteHighlights)}
                </StyledTypography>
              )}
            </>
          )}
          </SyledCardContent>

          <Author authors={authors} date={date} technologies={technologies} />
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
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  },
});

function Author({ authors, date, technologies }) {
  const hasTechnologies =
    Array.isArray(technologies) && technologies.length > 0;

  const hasAuthors =
    Array.isArray(authors) && authors.length > 0;

  const hasDate = Boolean(date);

  // If nothing to show, render nothing
  if (!hasTechnologies && !hasAuthors && !hasDate) {
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
        {hasTechnologies && (
          <>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              sx={{ marginTop: 1 }}
            >
              Technologies:
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ flexWrap: 'wrap', gap: 1, marginTop: 1 }}
            >
              {technologies.map((tech) => (
                <Chip key={tech} label={tech} variant="outlined" size="small" />
              ))}
            </Stack>
          </>
        )}

        {hasAuthors && (
          <>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              sx={{ marginTop: 1 }}
            >
              Authors:
            </Typography>
          </>
        )}

        {(hasAuthors || hasDate) && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
              pb: '16px',
            }}
          >
            <Box
              sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
            >
              {hasAuthors && (
                <>
                  <AvatarGroup max={3}>
                    {authors.map((author, index) => (
                      <Avatar
                        key={index}
                        alt={author?.name}
                        src={author?.avatar}
                        sx={{ width: 24, height: 24 }}
                      />
                    ))}
                  </AvatarGroup>

                  <Typography variant="caption">
                    {authors.map((author) => author?.name).filter(Boolean).join(', ')}
                  </Typography>
                </>
              )}
            </Box>

            {hasDate && <Typography variant="caption">{date}</Typography>}
          </Box>
        )}
      </Stack>
    </>
  );
}


Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const StyledTypography = styled(Typography)({
  whiteSpace: 'pre-line',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
  lineHeight: 1.6,
  textAlign: 'justify',
});
