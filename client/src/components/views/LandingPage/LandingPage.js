import React, { useEffect } from "react";
import Axios from "axios";
import { Layout, BackTop } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function LandingPage() {
  return (
    <div>
      <Layout>
        <Header style={{ background: "gray" }}>아반도네즈</Header>
        <Content style={{ background: "white" }}></Content>
        <Footer style={{ background: "white" }}></Footer>
      </Layout>
    </div>
  );
}

export default LandingPage;
