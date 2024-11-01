import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface SubmissionConfirmationProps {
  message: string;
  error?: boolean;
}

const SubmissionConfirmation: React.FC<SubmissionConfirmationProps> = ({
  message,
  error = false,
}) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingY: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 270px)',
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{ color: error ? 'error.main' : 'text.primary' }}
        role="alert"
        tabIndex={-1}
      >
        {message}
      </Typography>
    </Container>
  );
};

export { SubmissionConfirmation };
