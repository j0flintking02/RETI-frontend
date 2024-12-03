import CustomAppTitle from "../../../components/seconday/CustomAppTitle";
import Layout, { Content } from "antd/es/layout/layout";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../ThemeContext"; // Import the ThemeContext
import MessagingChats from "./MessagesChats";
import MessagingChatDetails from "./MessageChatDetails";
import MessagingItemDetails from "./MessageItemDetails";

const MessagesPage = () => {
    const { isDarkMode } = useContext(ThemeContext); // Access dark mode state

    useEffect(() => {
        // Apply the dark mode class to the body based on the theme
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div className="space-y-4">
            <CustomAppTitle>Messaging</CustomAppTitle>
            <Layout className={`transition-colors duration-500 ${isDarkMode ? "dark" : "light"}`}>
                <Content
                    className={`bg-white dark:bg-gray-900 mt-2 border border-gray-900/10 dark:border-gray-600 rounded-lg`}
                >
                    <div className="sm:flex">
                        <MessagingChats />
                        <MessagingChatDetails />
                        <MessagingItemDetails />
                    </div>
                </Content>
            </Layout>
        </div>
    );
};

export default MessagesPage;
