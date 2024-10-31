import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { GraySection } from '../../shared/GraySection';

const HeroSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '32px 0',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const TextContent = styled('div')(({ theme }) => ({
  maxWidth: '360px',
  marginBottom: '24px',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0,
  },
}));

const VideoContainer = styled('div')`
  width: 100%;
  max-width: 530px;
`;

export const HeroBlock: React.FC = () => {
  return (
    <GraySection>
      <Container maxWidth="lg">
        <HeroSection>
          <TextContent>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontSize: 42, marginBottom: '16px' }}
            >
              Most important title on the page
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum ultricies, sem urna convallis metus,
              vel suscipit nibh lacus tincidunt ante
            </Typography>
          </TextContent>
          <VideoContainer>
            <LiteYouTubeEmbed
              id="dQw4w9WgXcQ"
              title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
              wrapperClass="yt-lite"
            />
          </VideoContainer>
        </HeroSection>
      </Container>
    </GraySection>
  );
};
