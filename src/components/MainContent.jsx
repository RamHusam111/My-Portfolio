import Box from '@mui/material/Box';
import AboutMe from './sections/AboutMe.section';
import ProjectsSection from './sections/Projects.section';
import Card from '@mui/material/Card';
import SkillsSection from './sections/Skills.section';
import ExperienceSection from './sections/Experience.section';
import ContactForm from './ContactForm';



export default function MainContent() {


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10, mt: 3 }}>

      <AboutMe />
      <ProjectsSection /> 
      <ExperienceSection />
      <SkillsSection />
      <ContactForm />
    </Box>
  );
}
