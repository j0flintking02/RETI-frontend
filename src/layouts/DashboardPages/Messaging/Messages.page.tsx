
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
                <Layout>
                    <Content className="bg-white mt-2 border border-gray-900/10 rounded-lg">
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