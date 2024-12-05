import CustomAppTitle from "../../../components/seconday/CustomAppTitle";
import Layout, { Content } from "antd/es/layout/layout";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import MessagingChats from "./MessagesChats";
import MessagingChatDetails from "./MessageChatDetails";
import MessagingItemDetails from "./MessageItemDetails";
import { globalStyles } from "../../../styles/globalStyles";

const MessagesPage = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div>
            <CustomAppTitle>Messaging</CustomAppTitle>
            <Layout className={`px-4 py-4 sm:rounded-[12px] ${
                isDarkMode ? globalStyles.background.gray.dark : 'bg-white'
            }`}>
                <Content className="mt-2">
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
