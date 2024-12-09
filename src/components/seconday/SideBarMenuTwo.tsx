import { useState } from "react";
import {Avatar, Layout, Menu} from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, LogoutOutlined, MessageOutlined, SettingOutlined, TeamOutlined, UserOutlined, } from "@ant-design/icons";
import {handleLogout, loginDetails} from "../../utils.ts";

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
            key: "opportunities",
            icon: <TeamOutlined/>,
            label: <Link to="/opportunities" onClick={closeDrawer}>Opportunities</Link>,
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
          {
            key: "logout",
            icon: <LogoutOutlined />,
            label: <Link type="link" onClick={handleLogout} to={""}>Log Out</Link>
          },
    ];
};

    const SiderTwo: React.FC<{ closeDrawer: () => void }> = ({ closeDrawer }) => {
    const [selectedKey, setSelectedKey] = useState("home");
    const user = loginDetails();

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
            <div className="absolute bottom-0 w-full flex items-center p-4"> 
                <Avatar size="default" icon={<UserOutlined />} className="mr-2" /> 
                <div> 
                    <label className="block">{`${user.user.firstName} ${user.user.lastName}`}</label>
                    <label className="block">{user.user.phoneNumber}</label>
                </div>
            </div>
        </Sider>

    );
};

export default SiderTwo;


