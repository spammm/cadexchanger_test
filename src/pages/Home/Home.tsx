import { ContactBlock } from '../../components/ContactBlock';
import { HeroBlock } from '../../components/HeroBlock';
import { InfoCards } from '../../components/InfoCards';

const Home: React.FC = () => {
  return (
    <>
      <HeroBlock />
      <InfoCards />
      <ContactBlock />
    </>
  );
};

export { Home };
