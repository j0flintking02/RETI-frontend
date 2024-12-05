import { useState, useContext } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";

interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  children?: MenuItem[];
}

const { Sider } = Layout;

const getMenuItems = (closeDrawer: () => void, isDarkMode: boolean): MenuItem[] => {
  return [
    {
      key: "dashboard",
      icon: <HomeOutlined className={isDarkMode ? "text-white" : "text-inherit"} />,
      label: (
        <Link to="/" onClick={closeDrawer} className={`${globalStyles.text.primary.base} ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}>
          Dashboard
        </Link>
      ),
    },
    {
      key: "messages",
      icon: <MessageOutlined className={isDarkMode ? "text-white" : "text-inherit"} />,
      label: (
        <Link to="/messages" onClick={closeDrawer} className={`${globalStyles.text.primary.base} ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}>
          Messages
        </Link>
      ),
    },
    {
      key: "settings",
      icon: <SettingOutlined className={isDarkMode ? "text-white" : "text-inherit"} />,
      label: (
        <Link to="/settings" onClick={closeDrawer} className={`${globalStyles.text.primary.base} ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}>
          Settings
        </Link>
      ),
    },
  ];
};

const SiderTwo: React.FC<{ closeDrawer: () => void }> = ({ closeDrawer }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedKey, setSelectedKey] = useState("home");

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <Sider
  width={250}
  theme={isDarkMode ? "dark" : "light"}
  className={`h-full ${
    isDarkMode ? globalStyles.background.dark : globalStyles.background.light
  }`}
>
      <div className={`h-16 py-4 px-8 ${globalStyles.text.primary.base} ${
        isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
      }`}>
        <h4 className={`font-bold text-lg ${globalStyles.heading.secondary} ${
          isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
        }`}>Logo</h4>
      </div>
      <Menu
        theme={isDarkMode ? "dark" : "light"}
        mode="inline"
        selectedKeys={[selectedKey]}
        items={getMenuItems(closeDrawer, isDarkMode)}
        onClick={handleMenuClick}
        className={`capitalize text-md border-0 ${
          isDarkMode ? globalStyles.background.dark : "bg-white"
        }`}
      />
    </Sider>
  );
};

export default SiderTwo;
