import { useState } from "react";
import { Avatar, Layout, Menu, Tag } from "antd";
import { Link } from "react-router-dom";
import reti from "../../assets/reti.png";
import { HomeOutlined, LogoutOutlined, MessageOutlined, PhoneOutlined, ProjectOutlined, QuestionCircleOutlined, SettingOutlined, UsergroupAddOutlined, UserOutlined, } from "@ant-design/icons";
import { handleLogout, loginDetails } from "../../utils.ts";
import HelpandsupportForm from "../../layouts/DashboardPages/Forms/HelpAndSupportForm.tsx";

interface MenuItem {
    key: string;
    icon: React.ReactNode;
    label: React.ReactNode;
    children?: MenuItem[];
}

const { Sider } = Layout;


const SiderTwo: React.FC<{ closeDrawer: () => void }> = ({ closeDrawer }) => {
    const [selectedKey, setSelectedKey] = useState("home");
    const user = loginDetails();

    const handleMenuClick = (e) => {
        setSelectedKey(e.key); // Update the selected key when an item is clicked
    };

    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
        closeDrawer(); // Optional: close drawer when modal is triggered
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    // Function to generate menu items

    const getMenuItems = (closeDrawer: () => void): MenuItem[] => {
        return [
            {
                key: "dashboard",
                icon: <HomeOutlined />,
                label: <Link to="/" onClick={closeDrawer}>Dashboard</Link>,
            },
            {
                key: "opportunities",
                icon: <ProjectOutlined />,
                label: <Link to="/opportunities" onClick={closeDrawer}>Opportunities</Link>,
            },
            {
                key: "messages",
                icon: <MessageOutlined />,
                label: <Link to="/messages" onClick={closeDrawer}>Messages</Link>,
            },
            {
                key: "Community guidance",
                icon: <UsergroupAddOutlined />,
                label: <Link to="/mentorship" onClick={closeDrawer}>Community Guidance</Link>,
            },
            {
                key: "settings",
                icon: <SettingOutlined />,
                label: <Link to="/settings" onClick={closeDrawer}>Settings</Link>,
            },
            {
                key: "help-support",
                icon: <QuestionCircleOutlined />,
                label: (
                    <span onClick={showModal}>
                        Help & Support
                    </span>
                ),
            },
            {
                key: "logout",
                icon: <LogoutOutlined />,
                label: <Link type="link" onClick={handleLogout} to={""}>Log Out</Link>
            },
        ];
    };



    return (

        <Sider
            width={250}
            theme="light"
            className="relative h-full border-r-2 border-gray-300"
        >
            <div className="h-16 text-black py-4 px-8 bg-white mb-10">
                <h4 className="font-bold text-lg">
                    <img
                        alt="Your Company"
                        src={reti}
                        className="h-20 w-auto"
                    />
                </h4>
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
                <Avatar size={"large"} icon={<UserOutlined />} className="mr-2" />
                <div>
                    <Tag color="red">
                        <label className="block">{`${user.user.firstName} ${user.user.lastName}`}</label>
                    </Tag>
                    <div className="flex items-center gap-2">
                        <PhoneOutlined />
                        <label>{user.user.phoneNumber}</label>
                    </div>
                </div>
            </div>

            {/* help and support modal */}
            <HelpandsupportForm open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel} loading={loading} />
        </Sider>

    );
};

export default SiderTwo;


