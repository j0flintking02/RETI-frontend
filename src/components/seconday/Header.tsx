import React, { useContext } from "react";
import { Button, Avatar, Badge, Input } from "antd";
import { MenuOutlined, BellOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`h-16 flex justify-between items-center px-4 ${
      isDarkMode ? globalStyles.background.dark : 'bg-white'
    }`}>
      {/* search / logo */}
      <div className="hidden lg:block px-4 w-1/3">
        <Input
           size="large"
           placeholder="Search"
           className={`w-full ${
             isDarkMode
               ? `bg-transparent border-gray-700 text-white ${globalStyles.input.search.dark}`
               : "bg-transparent border-gray-300 text-gray-900"
           }`}
          prefix={<SearchOutlined className={
            isDarkMode ? 'text-gray-300' : 'text-gray-500'
          } />}
          style={{
            backgroundColor: 'transparent'
          }}
          styles={{
            input: {
              '&::placeholder': {
                color: isDarkMode ? '#D1D5DB' : '#6B7280'
              }
            }
          }}
        />
      </div>
      <div className={`text-lg font-bold block lg:hidden ${globalStyles.text.primary.base} ${
        isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
      }`}>
        My Dashboard
      </div>

      {/* Notifications and Avatar */}
      <div className="flex items-center space-x-4">
        <Button className={`hidden lg:block flex items-center justify-center h-9 ${globalStyles.button.primary.base} ${
          isDarkMode ? globalStyles.button.primary.dark : globalStyles.button.primary.light
        }`} type="primary">
          <span className="flex items-center justify-center">Find a place</span>
        </Button>
        <Badge count={5} className="hidden lg:block">
          <BellOutlined className={`text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`} />
        </Badge>
        <Avatar size="default" icon={<UserOutlined />} />
        {/* Hamburger Menu */}
        <Button
          className={`block lg:hidden mt-2 ${globalStyles.button.secondary.base} ${
            isDarkMode ? globalStyles.button.secondary.dark : globalStyles.button.secondary.light
          }`}
          type="text"
          icon={<MenuOutlined className="text-xl lg:hidden" />}
          onClick={onMenuClick}
        />
      </div>
    </div>
  );
};

export default Header;
