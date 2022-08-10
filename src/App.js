import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Input, Button } from "antd";
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import _ from "lodash";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [items, setItems] = useState(["001", "002", "003", "004"]);
  const [selectKey, setSelectKey] = useState(3);
  const [val, setVal] = useState("");

  const changeMenu = (e) => {
    console.log(e);
    const i = e.key - 1;
    setSelectKey(i);
    setVal(items[i]);
  };

  const changeVal = (val) => {
    setVal(val);
  };

  const submit = () => {
    const newItems = _.cloneDeep(items);
    newItems[selectKey] = val;
    setItems(newItems);
  };

  useEffect(() => {
    setVal(items[selectKey]);
  }, []);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: items[index],
          }))}
          onClick={(e) => changeMenu(e)}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Input
              placeholder="Basic usage"
              value={val}
              onChange={(e) => {
                changeVal(e.target.value);
              }}
            />
            <Button type="primary" onClick={submit}>
              提交
            </Button>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
