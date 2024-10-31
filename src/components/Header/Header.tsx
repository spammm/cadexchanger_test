import { AppBar, Toolbar, Typography, Container, styled } from '@mui/material';
import { ContactUsButton } from '../../shared/ContactUsButton';
import { Link } from 'react-router-dom';

const CompanyLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const StyledHeader = styled(AppBar)`
  background-color: #fff;
  box-shadow: none;
  border-bottom: 1px solid #e0e0e0;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const Header = () => {
  return (
    <StyledHeader position="static">
      <Container maxWidth="lg">
        <StyledToolbar>
          <Typography component="div" sx={{ fontWeight: 'bold' }}>
            <CompanyLink to="/" aria-label="Go to CAD Exchanger homepage">
              CAD Exchanger
            </CompanyLink>
          </Typography>
          <ContactUsButton />
        </StyledToolbar>
      </Container>
    </StyledHeader>
  );
};

export { Header };
