// MainContent.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import AboutMe from './sections/AboutMe.section';
import ProjectsSection from './sections/Projects.section';
import SkillsSection from './sections/Skills.section';
import ExperienceSection from './sections/Experience.section';
import ContactForm from './ContactForm';
import Section from './Section';


export default function MainContent({ onSectionInView, scrollRoot }) {
  React.useEffect(() => {
    const ids = ['about', 'projects', 'experience', 'skills', 'contact'];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    // Build fine-grained thresholds so we can pick the most visible section
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const observer = new IntersectionObserver(
      (entries) => {
        
        let best = null;
        let bestRatio = 0;
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= bestRatio) {
            // tie-breaker: prefer the one closer to the top
            if (e.intersectionRatio > bestRatio ||
                (best && e.boundingClientRect.top < best.boundingClientRect.top)) {
              best = e;
              bestRatio = e.intersectionRatio;
            }
          }
        }
        if (best?.target?.id) onSectionInView?.(best.target.id);
      },
      {

        root: scrollRoot?.current || null,
        rootMargin: '-120px 0px -55% 0px',
        threshold: thresholds,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [onSectionInView, scrollRoot]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8, mt: 2 }}>
      <Section id="about"><AboutMe /></Section>
      <Section id="projects"><ProjectsSection /></Section>
      <Section id="experience"><ExperienceSection /></Section>
      <Section id="skills"><SkillsSection /></Section>
      <Section id="contact"><ContactForm /></Section>
    </Box>
  );
}
