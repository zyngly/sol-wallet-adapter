import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

import { AppBar } from "./AppBar";
import zyngly from "./zyngly.svg";

const { Header, Content } = Layout;

const APP_TITLE = "Million Sol Page"

export const AppLayout = ({children}) => {
  return (
    <div className="App wormhole-bg">
      <Layout title={APP_TITLE}>
        <Header className="App-Bar">
          <Link to="/">
            <div className="app-title">
              <img src={zyngly} alt="Zyngly" width={100} />
            </div>
          </Link>
          <AppBar />
        </Header>
        <Content style={{ padding: "0 50px" }}>{children}</Content>
      </Layout>
    </div>
  );
};
