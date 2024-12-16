'use client'

import { CaretRightOutlined, FileAddOutlined } from "@ant-design/icons"
import { Button } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useEffect, useState } from "react"

const MessagingChatDetails = ({ conversation, socket, userId }: { conversation: any, socket: any, userId: number | null }) => {
    const [messages, setMessages] = useState<any[]>([])
    const [newMessage, setNewMessage] = useState<string>('')

    useEffect(() => {
        if (conversation) {
            setMessages(conversation.messages || [])
        }

        if (socket) {
            // Handle incoming messages
            socket.on('receiveMessage', (updatedConversation: any) => {
                if (updatedConversation.id === conversation.id) {
                    setMessages(updatedConversation.messages)
                }
            })

            // Cleanup on unmount
            return () => {
                socket.off('receiveMessage')
            }
        }
    }, [conversation, socket])

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return

        const message = {
            senderId: userId, // Use the dynamic user ID
            receiverId: 2, // Adjust as needed
            content: newMessage,
            createdAt: new Date().toISOString(),
            isRead: false,
        }

        // Update state with the new message
        setMessages(prevMessages => [...prevMessages, message])

        // Send message to the server
        if (socket) {
            socket.emit('sendMessage', { messages: [message] })
        }

        // Clear the input field
        setNewMessage('')
    }

    return (
        <>
            {/* typing */}
            <div className="sm:w-11/12">
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <h2 className="text-lg/6 truncate font-semibold text-gray-900">
                        Leslie Alexander
                    </h2>
                    <div className="flex items-center justify-center gap-x-1.5">
                        <p className="text-xs/5 text-green-500">Online</p>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="p-4 h-[550px] xl:h-screen overflow-y-auto bg-gray-50">
                    {/* Example messages */}
                    <h2 className="pb-8 text-xs flex items-center justify-center">Today 12:00pm</h2>

                    {/* received */}
                    {messages.filter(msg => msg.receiverId === userId).map((msg, index) => (
                        <div key={index} className="mb-4">
                            <div className="bg-blue-500 max-w-xs p-3 rounded-lg shadow-sm text-white">
                                {msg.content}
                            </div>
                        </div>
                    ))}

                    {/* sent */}
                    {messages.filter(msg => msg.senderId === userId).map((msg, index) => (
                        <div key={index} className="mb-4 text-right">
                            <div className="bg-gray-200 max-w-xs p-3 rounded-lg shadow-sm text-gray-900 inline-block">
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-2 border-t border-gray-200 flex items-center justify-between">
                    <Button className="px-4 py-2" type="link" icon={<FileAddOutlined />} size="large" />
                    <TextArea
                        className="p-2 mr-2 ml-2"
                        placeholder="Type a message"
                        autoSize
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <div>
                        <Button
                            className="px-4 py-2"
                            type="primary"
                            icon={<CaretRightOutlined />}
                            size="large"
                            onClick={handleSendMessage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessagingChatDetails