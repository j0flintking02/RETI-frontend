// import React from "react";


// interface LayoutProps {
//     children: React.ReactNode;
// }

// const CustomAppTitle: React.FC<LayoutProps> = ({ children }) => {
  

//     return (

//         <div>
//             <h2 className="hidden text-2xl font-medium lg:block">{children}</h2>

//         </div>
//     );
// };

// export default CustomAppTitle;

import React from 'react';
import { useNavigate } from 'react-router-dom';


interface LayoutProps {
    children?: React.ReactNode;
    showBackButton?: boolean; // Optional prop to control the back button visibility
}

const CustomAppTitle: React.FC<LayoutProps> = ({ children, showBackButton = false }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="flex items-center gap-4">
            {showBackButton && (
                <button
                    onClick={handleBackClick}
                    className="px-4 py-2 text-sm font-medium text-gray-700 "
                >
                    ← Back
                </button>
            )}
            <h2 className="hidden text-2xl font-medium lg:block">{children}</h2>
        </div>
    );
};

export default CustomAppTitle;

