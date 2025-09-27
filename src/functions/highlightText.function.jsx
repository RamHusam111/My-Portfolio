import React from 'react';
import Box from '@mui/material/Box';

export function highlightText(text, parts = [], underlineSx) {
  if (!parts?.length) return text;

  const escaped = parts.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');

  const segments = text.split(regex);
  return segments.map((seg, i) =>
    parts.includes(seg)
      ? (
          <Box
            key={i}
            component="span"
            sx={{
              textDecoration: 'underline wavy',
              textUnderlineOffset: '3px',
              textDecorationColor: 'warning.main',
              ...underlineSx,
            }}
          >
            {seg}
          </Box>
        )
      : <React.Fragment key={i}>{seg}</React.Fragment>
  );
}
