import React, { useState, useContext } from "react";
import { Layout as AntdLayout } from "antd";

import SiderTwo from "./SideBarMenuTwo";

const { Content } = AntdLayout;
import { ThemeContext } from "../../ThemeContext"; // Import ThemeContext
import { globalStyles } from "../../styles/globalStyles"

interface LayoutProps {
  children: React.ReactNode;
}

const CustomAppLayout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Drawer toggle functions
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <AntdLayout className={`min-h-screen ${isDarkMode ? globalStyles.background.dark : "bg-white"}`}>
      {/* Sidebar */}
      <div  className={`hidden lg:block ${isDarkMode ? globalStyles.background.gray.dark : "bg-white"} border-r-2 ${
          isDarkMode ? "border-gray-700" : "border-gray-200"
        }`}>
        <SiderTwo
          closeDrawer={closeDrawer}
        />
      </div>


      <AntdLayout className={`${isDarkMode ? globalStyles.background.gray.dark : ""}`}>
        {/* Main Content */}
        <Content className={` ${isDarkMode ? "text-white" : "text-gray-900"} ${
            isDarkMode ? globalStyles.background.gray.dark : ""
          }`}>
          {children}
        </Content>
      </AntdLayout>

    </AntdLayout>
  );
};

export default CustomAppLayout;






















