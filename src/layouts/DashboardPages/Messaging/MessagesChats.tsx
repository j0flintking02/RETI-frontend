'use client'

import { SearchOutlined } from "@ant-design/icons"
import { Badge, Button } from "antd"

export default function MessagingChats() {


    const messages = [
        {
            id: 1,
            title: 'Leslie Alexander',
            message: 'leslie.alexander@example.com',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
            status: 'read',
        },
        {
            id: 2,
            title: 'Michael Foster',
            message: 'michael.foster@example.com',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
            status: 'unread',
        },
        {
            id: 3,
            title: 'Dries Vincent',
            message: 'dries.vincent@example.com',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: null,
            status: 'unread',
        },

    ]


    return (
        <>
            {/* messages */}
            <div className="sm:w-6/12 border-r border-gray-200">
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="text-lg/6 truncate font-semibold text-gray-900">
                            Messages
                        </h2>
                        <Badge className="site-badge-count-109" count='2' style={{ backgroundColor: '#189bcc ' }} />
                    </div>

                    <div>
                    <Button  size="small" shape="circle" icon={<SearchOutlined />} />
                    </div>
                </div>

                <div className='h-[550px] xl:h-screen overflow-y-auto'>
                    <ul role="list" className="divide-y divide-gray-100">
                        {messages.map((message) => (
                            <li key={message.id} className="flex justify-between gap-x-2 py-5 px-4 hover:bg-gray-50">
                                <div className="flex min-w-0 gap-x-4">
                                    <img alt="" src={message.imageUrl} className="size-8 flex-none rounded-full bg-gray-50" />
                                    <div className="min-w-0 flex-auto">
                                        <p
                                            className={`text-sm/6 truncate font-semibold ${message.status === 'unread' ? 'text-blue-600' : 'text-gray-900'
                                                }`}
                                        >
                                            {message.title}
                                        </p>
                                        <p className="mt-1 truncate text-xs/5 text-gray-500">{message.message}</p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">

                                    {message.lastSeen ? (
                                        <p className="mt-1 text-xs/5 text-gray-500">
                                            <time dateTime={message.lastSeenDateTime}>{message.lastSeen}</time>
                                        </p>
                                    ) : (
                                        <div className="mt-1 flex items-center gap-x-1.5">
                                            <p className="text-xs/5 text-gray-500">Online</p>
                                            <Badge status="success" />
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}