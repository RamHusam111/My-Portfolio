import React from 'react'
import { Card, Typography, Stack, Chip, Box} from '@mui/material';
import TimelineComponent from '../TimelineComponent';


export default function ExperienceSection() {
  return (
    <>
    <Typography variant="h2" mb={3} gutterBottom sx={{ justifyContent: 'center', display: 'flex'}}>
                Experience
            </Typography>
            <TimelineComponent />
    </>
  )
}