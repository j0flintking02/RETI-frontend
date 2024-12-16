import Layout, { Content } from "antd/es/layout/layout";
import MessagingChats from "./MessagesChats";
import MessagingChatDetails from "./MessageChatDetails";
import MessagingItemDetails from "./MessageItemDetails";
import Header from "../../../components/seconday/Header";
import CustomDahboardLayout from "../../../components/seconday/CustomDashboardPagesLayout";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { globalStyles } from "../../../styles/globalStyles";

const MessagesPage = () => {
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <>
            <Header pageTitle="Messaging" />
            <CustomDahboardLayout>
                <Layout className={`${
                    isDarkMode ? globalStyles.background.gray.dark : ""
                }`}>
                    <Content className={`mt-2 border rounded-lg ${
                        isDarkMode 
                            ? `${globalStyles.background.dark} border-gray-700` 
                            : 'bg-white border-gray-900/10'
                    }`}>
                        <div className='sm:flex'>
                            <MessagingChats />
                            <MessagingChatDetails />
                            <MessagingItemDetails />
                        </div>
                    </Content>
                </Layout>
            </CustomDahboardLayout>
        </>
    )
}

export default MessagesPage;