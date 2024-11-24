import { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, MessageOutlined, } from "@ant-design/icons";

interface MenuItem {
    key: string;
    icon: React.ReactNode;
    label: React.ReactNode;
    children?: MenuItem[];
}

const { Sider } = Layout;


// Function to generate menu items

    const getMenuItems = (closeDrawer: () => void): MenuItem[] => {
    return [
        {
            key: "home",
            icon: <HomeOutlined/>,
            label: <Link to="/" onClick={closeDrawer}>Home</Link>,
          },
          {
            key: "messages",
            icon: <MessageOutlined/>,
            label: <Link to="/messages" onClick={closeDrawer}>messages</Link>,
          },
    ];
};

    const SiderTwo: React.FC<{ closeDrawer: () => void }> = ({ closeDrawer }) => {
    const [selectedKey, setSelectedKey] = useState("home");

    const handleMenuClick = (e) => {
        setSelectedKey(e.key); // Update the selected key when an item is clicked
    };

    return (
        <Sider
            width={250}
            theme="light"
            className="h-screen border-r border-gray-300 overflow-y-auto"
        >
            <div className="h-16 text-black py-4 px-8 bg-white">
                <h4 className="font-bold text-lg"> Logo</h4>
               
            </div>
            {/* Sidebar Menu */}
            <Menu
                theme="light"
                mode="inline"
                selectedKeys={[selectedKey]}
                items={getMenuItems(closeDrawer)}
                onClick={handleMenuClick}
                className="capitalize flex-1"
            />
        </Sider>

    );
};

export default SiderTwo;


