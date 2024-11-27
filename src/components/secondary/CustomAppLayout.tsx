import React, { useState } from "react";
import { Layout as AntdLayout, Drawer } from "antd";
import Header from "./Header";
import SiderTwo from "./SideBarMenuTwo";

const { Content } = AntdLayout;

interface LayoutProps {
  children: React.ReactNode;
}

const CustomAppLayout: React.FC<LayoutProps> = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Drawer toggle functions
  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <AntdLayout className="min-h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <SiderTwo closeDrawer={closeDrawer} />
      </div>

      {/* Drawer for small screens */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
        className="lg:hidden"
        bodyStyle={{ padding: 0 }}
        width={250}
      >
        <SiderTwo closeDrawer={closeDrawer} />
      </Drawer>

      <AntdLayout>
        {/* Header */}
        <Header onMenuClick={showDrawer} />

        {/* Main Content */}
        <Content className="p-4">
          <div className="w-full max-w-7xl">
            {children}
          </div>
        </Content>
      </AntdLayout>
      
    </AntdLayout>
  );
};

export default CustomAppLayout;






















