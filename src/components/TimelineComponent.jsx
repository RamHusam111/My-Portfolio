import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineCard from './cards/TimelineCard';
import { EXPERIENCE_DATA } from '../constants';

export default function TimelineComponent() {
  return (
    <Timeline
      position="alternate"
      sx={{
        
        '& .MuiTimelineContent-root': {
          textAlign: 'left !important',
          display: 'flex',
          justifyContent: 'flex-start',
        },
        
        '& .MuiTimelineItem-root': {
          '&:nth-of-type(even) .MuiTimelineContent-root': {
            alignItems: 'flex-start',
          },
          '&:nth-of-type(odd) .MuiTimelineContent-root': {
            alignItems: 'flex-start',
          },
        },
      }}
    >
      {EXPERIENCE_DATA.map((e, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot  />
            {index < EXPERIENCE_DATA.length - 1 && <TimelineConnector />}
          </TimelineSeparator>

           <TimelineContent>
            <TimelineCard
              tag={e.tag}
              title={e.title}
              description={e.description}
              date={e.date}
              technologies={e.technologies}
            />
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}