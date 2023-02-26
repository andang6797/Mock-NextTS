import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MainHeader } from "./header";
import { MainFooter } from "./footer";
import { MainBreadcrumb } from "./breadcrumb";
import { HeadTitle } from "./head-title";

const { Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

export const MainLayout = ({ children, title }: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <HeadTitle title={title} />
      <Layout style={{ height: "100vh" }}>
        <MainHeader />
        <Content style={{ padding: "0 50px" }}>
          <MainBreadcrumb />
          <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
            <Sider style={{ background: colorBgContainer }} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
                items={items2}
              />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              {children}
            </Content>
          </Layout>
        </Content>
        <MainFooter />
      </Layout>
    </>
  );
};
