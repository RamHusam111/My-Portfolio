import React from 'react'
import Chip from '@mui/material/Chip';


export function useChipHighlighter(technologies = []) {
  const { regex, tokens } = React.useMemo(() => {
    const unique = Array.from(
      new Set(technologies.filter(Boolean).map(String))
    ).sort((a, b) => b.length - a.length); 
    if (!unique.length) return { regex: null, tokens: [] };

    const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = unique.map(escape).join('|');

    // \b: word boundaries at the ends; handles multi-words fine.
    // "gi": global, case-insensitive
    const re = new RegExp(`\\b(?:${pattern})\\b`, 'gi');
    return { regex: re, tokens: unique };
  }, [technologies]);

  const highlight = React.useCallback(
    (text) => {
      if (!regex) return text;

      const result = [];
      let lastIndex = 0;
      let match;
      while ((match = regex.exec(text)) !== null) {
        const start = match.index;
        const end = start + match[0].length;

        // Push preceding plain text
        if (start > lastIndex) result.push(text.slice(lastIndex, start));

        const matched = match[0];
        // Find original label casing from the tokens array
        const label =
          tokens.find((t) => t.toLowerCase() === matched.toLowerCase()) ||
          matched;

        result.push(
          <Chip
            key={`${start}-${label}`}
            component="span"
            label={label}
            size="small"
            variant="outlined"
            sx={{
              mx: 0.2,
              verticalAlign: 'baseline', // aligns nicely with text
            }}
          />
        );

        lastIndex = end;
      }

      // Trailing text
      if (lastIndex < text.length) result.push(text.slice(lastIndex));

      return result;
    },
    [regex, tokens]
  );

  return highlight;
}