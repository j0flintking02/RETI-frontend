
import CustomAppTitle from "../../../components/seconday/CustomAppTitle";
import Layout, { Content } from "antd/es/layout/layout";

import MessagingChats from "./MessagesChats";
import MessagingChatDetails from "./MessageChatDetails";
import MessagingItemDetails from "./MessageItemDetails";

const MessagesPage = () => {
    return (
        <div className="space-y-4">
            <CustomAppTitle>Messaging</CustomAppTitle>
            <Layout>
                <Content className="bg-white mt-2 border border-gray-900/10 rounded-lg">
                    <div className='sm:flex'>
                        <MessagingChats />
                        <MessagingChatDetails />
                        <MessagingItemDetails />
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default MessagesPage;