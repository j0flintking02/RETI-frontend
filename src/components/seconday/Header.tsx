
// import React from "react";
// import { Button, Badge, Input } from "antd";
// import { MenuOutlined, BellOutlined, SearchOutlined } from "@ant-design/icons";

// interface HeaderProps {
//     onMenuClick?: () => void;
//     pageTitle?: string;
    
// }

// // const { Search } = Input;

// const Header: React.FC<HeaderProps> = ({ onMenuClick , pageTitle }) => {
//     return (
//         <div className="h-16 bg-white flex justify-between items-center px-4 border-b border-gray-300 shadow-sm">
         

//             <h2 className="hidden text-xl font-medium lg:block px-4">{pageTitle}</h2>

//             <div className="text-lg font-bold block lg:hidden">My Dashboard</div>

//             {/* Notifications and Avatar */}
//             <div className="flex items-center space-x-4 mr-2">
//                 <Badge count={5} className="hidden lg:block">
//                     <BellOutlined className="text-xl" />
//                 </Badge>
//                 {/* Hamburger Menu */}
//                 <Button
//                     className="block lg:hidden mt-2"
//                     type="text"
//                     icon={<MenuOutlined className="text-xl lg:hidden" />}
//                     onClick={onMenuClick}
//                 />
//             </div>

//         </div>
//     );
// };

// export default Header;


import React, { useState } from 'react';
import { Drawer, Button, Badge } from 'antd';
import { BellOutlined, MenuOutlined } from '@ant-design/icons';
import SiderTwo from './SideBarMenuTwo';



interface HeaderProps {
    onMenuClick?: () => void;
    pageTitle?: string;
    
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
    // State for controlling the drawer visibility
    const [drawerVisible, setDrawerVisible] = useState(false);

    // Drawer toggle functions
    const showDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);

    return (
        <div className="h-16 bg-white flex justify-between items-center px-4 border-b border-gray-300 shadow-sm">
            <h2 className="hidden text-xl font-medium lg:block px-4">{pageTitle}</h2>
            <div className="text-lg font-bold block lg:hidden">Reti</div>

            {/* Notifications and Avatar */}
            <div className="flex items-center space-x-4 mr-2">
                <Badge count={5} className="hidden lg:block">
                    <BellOutlined className="text-xl" />
                </Badge>

                {/* Hamburger Menu */}
                <Button
                    className="block lg:hidden mt-2"
                    type="text"
                    icon={<MenuOutlined className="text-xl lg:hidden" />}
                    onClick={showDrawer} // Show drawer on click
                />
            </div>

            {/* Drawer for small screens */}
            <Drawer
                title="Menu"
                placement="left"
                onClose={closeDrawer} // Close the drawer
                open={drawerVisible} // Controlled by state
                className="lg:hidden"
                bodyStyle={{ padding: 0 }}
                width={250}
            >
                <SiderTwo closeDrawer={closeDrawer} />
            </Drawer>
        </div>
    );
};

export default Header;
