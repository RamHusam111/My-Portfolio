import React from 'react'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ContactWebsites from '../ContactWebsites';
import { ABOUT_ME_CARDS, ABOUT_ME_PARAGRAPH } from '../../constants';
import Grid from '@mui/material/Grid';
import CertificationsCard from '../cards/CertificationsCard';
import Card from '@mui/material/Card';


export default function AboutMeSection() {
  return (

    <Card variant="outlined" sx={{ boxShadow: 2, padding: 2, borderRadius: 2}}>
      <Stack direction="column" spacing={3} useFlexGap>
        <Typography variant="h2"  gutterBottom sx={{ justifyContent: 'center', display: 'flex' }}>
          About Me
        </Typography>
        <Typography variant='body1' gutterBottom sx={{ textAlign: 'justify', textSizeAdjust: 'auto', fontSize: '1.2rem' }}>
          {ABOUT_ME_PARAGRAPH}
        </Typography>
        <Typography variant='h5' gutterBottom>
          University Achievements
        </Typography>
        <Grid container spacing={2} columns={12}>

          {ABOUT_ME_CARDS.map((project, index) => (
                    <CertificationsCard
                      key={index}
                      img={project.img}
                      title={project.title}
                      description={project.description}
                      date={project.date}
                    />
                  ))}

        </Grid>
      

        <Stack
          
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary', }}
          >
            <ContactWebsites />


          </Stack>
        
      </Stack>

    </Card>
    
  )
}
