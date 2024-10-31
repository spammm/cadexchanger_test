import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ContactUsButton } from '../../shared/ContactUsButton';
import { GraySection } from '../../shared/GraySection';

const ContactBlock: React.FC = () => {
  return (
    <GraySection>
      <Box sx={{ textAlign: 'center', paddingY: '2rem' }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontSize: 42, marginY: '2rem', textAlign: 'center' }}
        >
          Less important title
        </Typography>

        <ContactUsButton />
      </Box>
    </GraySection>
  );
};

export { ContactBlock };
