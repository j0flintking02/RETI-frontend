
import React from "react";
import { Button, Badge, Input } from "antd";
import { MenuOutlined, BellOutlined, SearchOutlined } from "@ant-design/icons";

interface HeaderProps {
    onMenuClick: () => void;
}

// const { Search } = Input;

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <div className="h-16 bg-white flex justify-between items-center px-4 border-b border-gray-300 shadow-sm">
            {/* search / logo */}
            <div className="hidden lg:block px-4"> 
            <Input size="large" placeholder="Search" style={{ width: 400 }}  prefix={<SearchOutlined/>}/>
            {/* <Search  size="large"placeholder="input search text" style={{ width: 200 }} /> */}
            </div>
            <div className="text-lg font-bold block lg:hidden">My Dashboard</div>
            
            {/* Notifications and Avatar */}
            <div className="flex items-center space-x-4 mr-2">
                <Button type="primary" className="hidden lg:block">Find a place</Button>
                
                <Badge count={5} className="hidden lg:block">
                    <BellOutlined  className="text-xl" />
                </Badge>
<<<<<<< HEAD
                {/* <Avatar size="default" icon={<UserOutlined />} /> */}
=======
>>>>>>> develop
                {/* Hamburger Menu */}
                <Button
                    className="block lg:hidden mt-2"
                    type="text"
                    icon={<MenuOutlined className="text-xl lg:hidden" />}
                    onClick={onMenuClick}
                />
            </div>

        </div>
    );
};

export default Header;
