import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";

interface LayoutProps {
    children: React.ReactNode;
}

const CustomAppTitle: React.FC<LayoutProps> = ({ children }) => {
    const { isDarkMode } = useContext(ThemeContext); 

    return (
        <div className={`${isDarkMode ? globalStyles.background.gray.dark : "bg-white"}`}>
            <h2
                className={`text-2xl font-medium lg:block ${
                    isDarkMode ? globalStyles.text.primary.dark : globalStyles.text.primary.light
                }`}
            >
                {children}
            </h2>
        </div>
    );
};

export default CustomAppTitle;
