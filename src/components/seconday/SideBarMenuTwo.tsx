import { useState } from "react";
import {Button, Layout, Menu} from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, MessageOutlined, SettingOutlined, } from "@ant-design/icons";
import {handleLogout} from "../../utils.ts";

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
            key: "dashboard",
            icon: <HomeOutlined/>,
            label: <Link to="/" onClick={closeDrawer}>Dashboard</Link>,
          },
          {
            key: "messages",
            icon: <MessageOutlined/>,
            label: <Link to="/messages" onClick={closeDrawer}>Messages</Link>,
          },
          {
            key: "settings",
            icon: <SettingOutlined/>,
            label: <Link to="/settings" onClick={closeDrawer}>Settings</Link>,
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
            className="relative h-full border-r-2 border-gray-300"
        >
            <div className="h-16 text-black py-4 px-8 bg-white">
                <h4 className="font-bold text-lg"> Reti</h4>
               
            </div>
            {/* Sidebar Menu */}
            <Menu
                theme="light"
                mode="inline"
                selectedKeys={[selectedKey]}
                items={getMenuItems(closeDrawer)}
                onClick={handleMenuClick}
                className="capitalize flex-1 text-md"
            />
            <div className="absolute bottom-0 w-full">
                <Button type="link" block onClick={handleLogout}>Logout</Button>
            </div>
        </Sider>

    );
};

export default SiderTwo;


