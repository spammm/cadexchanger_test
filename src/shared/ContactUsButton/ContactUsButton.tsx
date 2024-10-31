import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ContactUsButton: React.FC = () => {
  return (
    <Button
      component={Link}
      to="/contact-us"
      variant="contained"
      size="small"
      aria-label="Navigate to the contact us page"
    >
      Contact us
    </Button>
  );
};

export { ContactUsButton };
