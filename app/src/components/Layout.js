import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import { AppBar } from './AppBar';
import { StyledHeading } from '../components';
import styled from 'styled-components';

const { Header, Content } = Layout;

const Margins = styled.div`
  margin: 10px;
`;

const APP_TITLE = 'Million Sol Page';

export const AppLayout = ({ children }) => {
  return (
    <div className="App wormhole-bg">
      <Layout title={APP_TITLE}>
        <Header className="App-Bar">
          <Link to="/">
            <Margins>
              <StyledHeading fontSize="24px" fontWeight={300}>
                SOLPAGE
              </StyledHeading>
            </Margins>
          </Link>
          <AppBar />
        </Header>
        <Content style={{ padding: '0 50px' }}>{children}</Content>
      </Layout>
    </div>
  );
};
