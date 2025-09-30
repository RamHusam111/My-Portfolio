import React from 'react'
import { Grid, Stack } from '@mui/system'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import { useChipHighlighter } from '../../hooks/useChipHighlighter';

export default function TimelineCard({ tag, title, description = [], date, technologies = [] }) {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

    const handleFocus = (index) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };
    const highlight = useChipHighlighter(technologies);
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

                    <SyledCardContent>
                        {(tag || title || description) && (
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

                                <List sx={{ listStyleType: 'disc', pl: 3 }}>
                                    {description.map((p, idx) => (
                                        <ListItem key={idx} sx={{ display: 'list-item', py: 0.6 }}>
                                            {/* Render mixed text + chips inside ListItemText */}
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    variant: 'body2',
                                                    color: 'text.secondary',
                                                    sx: { textAlign: 'justify', textJustify: 'inter-word', lineHeight: 1.8,  },
                                                }}
                                                primary={<Box component="span">{highlight(p)}</Box>}
                                            />
                                        </ListItem>
                                    ))}
                                </List>

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

    if (!hasDate) {
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


                {(hasDate) && (
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
