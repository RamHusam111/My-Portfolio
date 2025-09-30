import React from 'react'
import { SKILLS } from '../../constants';
import Grid from '@mui/material/Grid';
import { Card, Typography, Stack, Chip, Box} from '@mui/material';

export default function SkillsSection() {
  return (
    <Card variant="outlined" sx={{ boxShadow: 2, padding: 2, borderRadius: 2 }}>
        <Stack direction="column" spacing={3} useFlexGap>
          <Typography variant="h2" mb={3} gutterBottom sx={{ justifyContent: 'center', display: 'flex'}}>
            Skills
          </Typography>


          
            {/* === Programming Languages === */}
    <Box>
      <Typography variant="h6" gutterBottom>
        Programming Languages
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {SKILLS[0].programmingLanguages.map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined" />
        ))}
      </Stack>
    </Box>


{/* === Frameworks and Libraries === */}
    <Box>
      <Typography variant="h6" gutterBottom>
        Frameworks and Libraries
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {SKILLS[1].frameWorksAndLibraries.map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined" />
        ))}
      </Stack>
    </Box>

    {/* === Databases === */}
    <Box>
      <Typography variant="h6" gutterBottom>
        Databases
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {SKILLS[2].databases.map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined" />
        ))}
      </Stack>
    </Box>

    {/* === Testing Tools === */}
    <Box>
      <Typography variant="h6" gutterBottom>
        Testing Tools
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {SKILLS[3].testingTools.map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined" />
        ))}
      </Stack>
    </Box>

    {/* === Management Tools === */}
    <Box>
      <Typography variant="h6" gutterBottom>
        Management Tools
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {SKILLS[4].managementTools.map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined"/>
        ))}
      </Stack>
    </Box>

    {/* === Operating Systems === */}
    <Box>
      <Typography variant="h6" gutterBottom>
        Operating Systems
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {SKILLS[5].operatingSystems.map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined"/>
        ))}
      </Stack>
    </Box>

    {/* === Others === */}
    <Box>
      <Typography variant="h6" gutterBottom>
        Others
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {SKILLS[6].others.map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined"/>
        ))}
      </Stack>
    </Box>

        </Stack>
    </Card>
  )
}
