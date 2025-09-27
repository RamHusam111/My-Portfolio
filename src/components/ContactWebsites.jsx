import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import { GITHUB_URL, LINKEDIN_URL } from '../constants';
import IconButton from '@mui/material/IconButton';
export default function ContactWebsites() {
  return (
    <>
    <IconButton
              color="inherit"
              size="medium"
              href={GITHUB_URL}
              aria-label="GitHub"
              sx={{ alignSelf: 'center' }}
            >
              <GitHubIcon />
            </IconButton>
            
            <IconButton
              color="inherit"
              size="medium"
              href= {LINKEDIN_URL}
              aria-label="LinkedIn"
              sx={{ alignSelf: 'center' }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              color="inherit"
              size="medium"
              href= 'mailto:husamramoni@gmail.com'
              aria-label="LinkedIn"
              sx={{ alignSelf: 'center' }}
            >
              <MarkunreadIcon />
            </IconButton>
    </>
  )
}
