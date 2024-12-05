import React, { useState, useContext } from "react";
import { Layout as AntdLayout, Drawer } from "antd";
import Header from "./Header";
import SiderTwo from "./SideBarMenuTwo";
import { ThemeContext } from "../../ThemeContext"; // Import ThemeContext
import { globalStyles } from "../../styles/globalStyles"; // Add this import

const { Content } = AntdLayout;

interface LayoutProps {
  children: React.ReactNode;
}

const CustomAppLayout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext); // Access dark mode state
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Drawer toggle functions
  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <AntdLayout
      className={`min-h-screen ${isDarkMode ? globalStyles.background.dark : "bg-white"}`}
    >
      {/* Sidebar */}
      <div
        className={`hidden lg:block ${isDarkMode ? globalStyles.background.gray.dark : "bg-white"} border-r-2 ${
          isDarkMode ? "border-gray-700" : "border-gray-200"
        }`} // Sidebar background and border
      >
        <SiderTwo closeDrawer={closeDrawer} />
      </div>

      {/* Drawer for small screens */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
        className="lg:hidden"
        bodyStyle={{
          padding: 0,
          backgroundColor: isDarkMode ? "#202020" : "#fff",
        }}
        width={250}
      >
        <SiderTwo closeDrawer={closeDrawer} />
      </Drawer>

      <AntdLayout
        className={`${isDarkMode ? globalStyles.background.gray.dark : "bg-white"}`}
      >
        {/* Header */}
        <Header onMenuClick={showDrawer} />

        {/* Main Content */}
        <Content
          className={`sm:px-6 sm:py-8 p-4 ${isDarkMode ? "text-white" : "text-gray-900"} ${
            isDarkMode ? globalStyles.background.gray.dark : "bg-white"
          }`}
        >
          <div>{children}</div>
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default CustomAppLayout;
