import styled from 'styled-components';

const StyledFooter = styled('footer')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  font-weight: bold;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <StyledFooter>CadEx {currentYear}</StyledFooter>;
};
export { Footer };
