import React from 'react'
import { Card, Typography, Stack, Chip, Box} from '@mui/material';
import TimelineComponent from '../TimelineComponent';


export default function ExperienceSection() {
  return (
    <Card variant="outlined" sx={{ boxShadow: 2, padding: 2, borderRadius: 2 }}>
        {/* <Stack direction="column" spacing={3} useFlexGap> */}
            <Typography variant="h2" mb={3} gutterBottom sx={{ justifyContent: 'center', display: 'flex'}}>
                Experience
            </Typography>
            {/* <AccordionExperience /> */}
            <TimelineComponent />
        {/* </Stack> */}
    </Card>
  )
}