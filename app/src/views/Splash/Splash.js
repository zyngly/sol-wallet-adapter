import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Center = styled.div`
  background-color: #1e2423;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
`;

const StyledHeading = styled.h1`
  font-size: 150px;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff8a00),
    to(#e52e71)
  );
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
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
