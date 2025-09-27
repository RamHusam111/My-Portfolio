import * as React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GITHUB_URL, LINKEDIN_URL } from './../constants';
import ContactWebsites from './ContactWebsites';


function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      © {new Date().getFullYear()} Husam Ramoni - All rights reserved.
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 6, sm: 6 },
          py: { xs: 3, sm: 2 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        
            <Copyright />
          
          <Stack
          mt={-4}
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'left', color: 'text.secondary' }}
          >
            <ContactWebsites />

          </Stack>
        
      </Container>
    </React.Fragment>
  );
}
