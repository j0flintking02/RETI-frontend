import React from "react";


interface LayoutProps {
    children: React.ReactNode;
}

const CustomAppTitle: React.FC<LayoutProps> = ({ children }) => {
  

    return (

        <div>
            <h2 className="hidden text-2xl font-medium lg:block">{children}</h2>

        </div>
    );
};

export default CustomAppTitle;
