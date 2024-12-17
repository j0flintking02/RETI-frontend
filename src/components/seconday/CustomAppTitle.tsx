

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { globalStyles } from '../../styles/globalStyles';

interface LayoutProps {
    children?: React.ReactNode;
    showBackButton?: boolean; // Optional prop to control the back button visibility
}

const CustomAppTitle: React.FC<LayoutProps> = ({ children, showBackButton = false }) => {
    const navigate = useNavigate();
    const { isDarkMode } = useContext(ThemeContext);
    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="flex items-center gap-4">
            {showBackButton && (
                <button
                    onClick={handleBackClick}
                    className={`ml-8 mt-8 text-sm font-medium text-gray-700 ${
                        isDarkMode ? globalStyles.text.primary.white : globalStyles.text.primary.light
                    }`}
                >
                    ← Back
                </button>
            )}
            <h2 className="hidden text-2xl font-medium lg:block">{children}</h2>
        </div>
    );
};

export default CustomAppTitle;

