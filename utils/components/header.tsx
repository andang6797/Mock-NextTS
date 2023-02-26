import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";

const { Header } = Layout;

const pages = ["Admin", "Home", "Audit"]

const items1: MenuProps["items"] = pages.map((key) => ({
  key,
  label: key,
}));

export const MainHeader = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
  );
};
