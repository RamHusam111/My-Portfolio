import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { PROJECTS_DATA } from '../../constants';
import ProjectsCard from '../cards/ProjectsCard';
import { Card } from '@mui/material';

export default function ProjectsSection() {
  return (
    <Card variant="outlined" sx={{ boxShadow: 2, padding: 2, borderRadius: 2 }}>
      <Stack direction="column" spacing={3} useFlexGap>

            <Typography variant="h2" mb={3} gutterBottom sx={{ justifyContent: 'center', display: 'flex' }}>
          Projects
        </Typography>
      
      <Grid container spacing={2} columns={12}>
        {PROJECTS_DATA.map((project, index) => (
          <ProjectsCard
  key={index}
  img={project.img}
  tag={project.tag}
  title={project.title}
  descriptionParagraphs={project.descriptionParagraphs}
  note={project.note}
  noteHighlights={project.noteHighlights}
  authors={project.authors}
  technologies={project.technologies}
  date={project.date}
/>

        ))}
        
      </Grid>

        </Stack>

    </Card>
    
  )
}
