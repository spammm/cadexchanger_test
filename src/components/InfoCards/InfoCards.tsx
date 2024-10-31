import { Container, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import { ContactUsButton } from '../../shared/ContactUsButton';
import { cards } from './cardsData';
import { CardItem } from './CardItem';

const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  gap: 24px;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const InfoCards: React.FC = () => {
  return (
    <Container maxWidth="lg" component={'section'}>
      <Typography
        variant="h3"
        component="h2"
        sx={{ fontSize: 42, marginY: '2rem', textAlign: 'center' }}
      >
        Also very important title
      </Typography>

      <GridContainer>
        {cards.map((card) => (
          <CardItem key={card.id} title={card.title} text={card.text} />
        ))}
      </GridContainer>
      <Box sx={{ textAlign: 'center', marginY: '2rem' }}>
        <ContactUsButton />
      </Box>
    </Container>
  );
};

export { InfoCards };
