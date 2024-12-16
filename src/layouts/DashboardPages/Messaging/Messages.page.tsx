import { useEffect, useState } from "react"
import Layout, { Content } from "antd/es/layout/layout"
import MessagingChats from "./MessagesChats"
import MessagingChatDetails from "./MessageChatDetails"
import MessagingItemDetails from "./MessageItemDetails"
import Header from "../../../components/seconday/Header"
import CustomDahboardLayout from "../../../components/seconday/CustomDashboardPagesLayout"
import io from "socket.io-client"

const MessagesPage = () => {
    const [conversations, setConversations] = useState<any[]>([])
    const [selectedConversation, setSelectedConversation] = useState<any>(null)
    const [socket, setSocket] = useState<any>(null)
    const [userId, setUserId] = useState<number | null>(null)

    useEffect(() => {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        const user = JSON.parse(localStorage.getItem('user') || '{}'); // Retrieve user data from local storage
        if (!token || !user.id) {
            console.error('No token or user data found');
            return;
        }

        setUserId(user.id); // Set the user ID from the stored user data

        const socket = io('http://localhost:3000', { query: { token, userId: user.id } });

        socket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socket.on('receiveMessage', (conversation) => {
            setConversations((prevConversations) => {
                const updatedConversations = prevConversations.map((conv) => {
                    if (conv.id === conversation.id) {
                        return { ...conv, messages: conversation.messages }
                    }
                    return conv
                })
                return updatedConversations
            });
        });

        setSocket(socket);

        // Fetch conversations from the server
        const fetchConversations = async () => {
            try {
                const response = await fetch('http://localhost:3000/v1/conversations/user', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }) // Adjust the URL as needed
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                const conversations = data.data // Assuming the response structure has a data field
                setConversations(conversations)
            } catch (error) {
                console.error('Error fetching conversations:', error)
            }
        }

        fetchConversations()

        // Cleanup on unmount
        return () => {
            socket.disconnect();
        }
    }, [])

    const handleConversationClick = (conversation: any) => {
        setSelectedConversation(conversation)
    }

    return (
        <>
            <Header pageTitle="Messaging" />

            <CustomDahboardLayout>
                <Layout>
                    <Content className="bg-white mt-2 border border-gray-900/10 rounded-lg">
                        <div className='sm:flex'>
                            <MessagingChats conversations={conversations} onConversationClick={handleConversationClick} />
                            <MessagingChatDetails conversation={selectedConversation} socket={socket} userId={userId} />
                            <MessagingItemDetails />
                        </div>
                    </Content>
                </Layout>
            </CustomDahboardLayout>
        </>
    )
}

export default MessagesPage