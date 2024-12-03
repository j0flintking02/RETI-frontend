import { useState, useContext } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { ThemeContext } from "../../ThemeContext"; // Import the ThemeContext

interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  children?: MenuItem[];
}

const { Sider } = Layout;

const getMenuItems = (closeDrawer: () => void): MenuItem[] => {
  return [
    {
      key: "dashboard",
      icon: <HomeOutlined />,
      label: (
        <Link to="/" onClick={closeDrawer}>
          Dashboard
        </Link>
      ),
    },
    {
      key: "messages",
      icon: <MessageOutlined />,
      label: (
        <Link to="/messages" onClick={closeDrawer}>
          Messages
        </Link>
      ),
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: (
        <Link to="/settings" onClick={closeDrawer}>
          Settings
        </Link>
      ),
    },
  ];
};

const SiderTwo: React.FC<{ closeDrawer: () => void }> = ({ closeDrawer }) => {
  const { isDarkMode } = useContext(ThemeContext); // Access theme state
  const [selectedKey, setSelectedKey] = useState("home");

  const handleMenuClick = (e) => {
    setSelectedKey(e.key); // Update the selected key when an item is clicked
  };

  return (
    <Sider
      width={250}
      theme={isDarkMode ? "dark" : "light"} // Apply dark or light theme based on context
      className="h-full border-r-2"
    >
      <div
        className={`h-16 py-4 px-8 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h4 className="font-bold text-lg">Logo</h4>
      </div>
      {/* Sidebar Menu */}
      <Menu
        theme={isDarkMode ? "dark" : "light"} // Apply theme to menu
        mode="inline"
        selectedKeys={[selectedKey]}
        items={getMenuItems(closeDrawer)}
        onClick={handleMenuClick}
        className="capitalize flex-1 text-md"
      />
    </Sider>
  );
};

export default SiderTwo;
