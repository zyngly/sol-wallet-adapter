import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import { AppBar } from './AppBar';
import { Typography } from 'antd';
const { Title } = Typography;
// import zyngly from './zyngly.svg';

const { Header, Content } = Layout;

const APP_TITLE = 'Million Sol Page';

export const AppLayout = ({ children }) => {
  return (
    <div className="App wormhole-bg">
      <Layout title={APP_TITLE}>
        <Header className="App-Bar">
          <Link to="/">
            <div className="app-title">
              <Title level={3}>SOLPAGE</Title>
            </div>
          </Link>
          <AppBar />
        </Header>
        <Content style={{ padding: '0 50px' }}>{children}</Content>
      </Layout>
    </div>
  );
};
