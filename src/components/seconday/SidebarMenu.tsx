import React, {useEffect, useState} from "react";
import {HomeOutlined,} from "@ant-design/icons";
import {Layout, Menu} from "antd";
import viteLogo from '/vite.svg'
import {Link} from "react-router-dom";


interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  children?: MenuItem[];
}

const getMenuItems = (): MenuItem[] => {
  return [
    {
      key: "home",
      icon: <HomeOutlined/>,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "messages",
      icon: <HomeOutlined/>,
      label: <Link to="/messages">messages</Link>,
    },
  ];
};

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  left: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

export const SidebarMenu = () => {
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState<string>('1');

    useEffect(() => {
      const path = location.pathname.split("/")[1] || "home";
      setSelectedKey(path);
    }, []);

    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={siderStyle}
      >
        <div
          style={{
            height: 100,
            margin: 30,
          }}
        >
          <img
            src={viteLogo}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "174px",
              objectFit: "contain",
              padding: "8px",
            }}
            alt="logo"
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={getMenuItems()}
        />
      </Sider>
    );
}