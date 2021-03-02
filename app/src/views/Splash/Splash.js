import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledHeading } from '../../components';

const Center = styled.div`
  background-color: #1e2423;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
`;

const SubHeading = styled.h2`
  font-family: 'JetBrains Mono', monospace;
`;

const StyledLink = styled(Link)`
  color: rgb(0, 255, 163);
  border-bottom: 1px solid rgb(0, 255, 163);
  padding-bottom: 3px;
  font-weight: 500;

  &:hover {
    color: #fff;
    transition-duration: 0.2s;
    border-bottom: 1px solid rgb(255, 255, 255);
  }
`;

const SplashView = () => {
  return (
    <Center>
      <SubHeading>COMING SOON</SubHeading>
      <StyledHeading>SOLPAGE</StyledHeading>
      <SubHeading>
        VIEW THE <StyledLink to="/beta">BETA</StyledLink> LAUNCH NOW
      </SubHeading>
      <div className="builton" style={{ marginTop: 100 }} />
    </Center>
  );
};

export default SplashView;
