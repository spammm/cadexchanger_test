import { useId } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';
import type { ICard } from './cardsData';

const CardBlock = styled(Card)`
  max-width: 100%;
  @media (min-width: 600px) {
    max-width: 260px;
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    scale: 1.03;
  }
  }
`;

export const CardItem: React.FC<Omit<ICard, 'id'>> = ({ title, text }) => {
  const id = useId();

  return (
    <CardBlock role="region" aria-labelledby={id}>
      <CardContent>
        <Typography
          id={id}
          variant="h3"
          component="h3"
          sx={{ fontSize: 24, marginBottom: '16px' }}
        >
          {title}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </CardBlock>
  );
};
