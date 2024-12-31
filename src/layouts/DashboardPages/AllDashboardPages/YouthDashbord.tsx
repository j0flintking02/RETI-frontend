import { Card, Calendar, Avatar, Tag } from "antd";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

import { LikeOutlined, UserOutlined } from "@ant-design/icons";
import Header from "../../../components/secondary/Header";
import CustomDahboardLayout from "../../../components/secondary/CustomDashboardPagesLayout";
import {
  useGetNotificationsQuery,
  useMarkAsReadMutation,
} from "../../../services/notifications";
import { useGetUserConversationsQuery } from "../../../services/conversations";
import { loginDetails } from "../../../utils";
import { ConversationType, InspirationsType } from "../../../services/types";
import { useGetInspirationsQuery } from "../../../services/inspirations";

const YouthDashboardPage = () => {
  const { data: notificationsData, isLoading } = useGetNotificationsQuery();
  const [markAsRead] = useMarkAsReadMutation();
  const user = loginDetails();
  const userId = user.user.id;
  const { data } = useGetUserConversationsQuery(userId);

  const [conversations, setConversations] = useState<any>([]);

  const { data: inspirationsData } = useGetInspirationsQuery();
  const [inspirations, setInspirations] = useState<InspirationsType[]>([]);

  const handleNotificationClick = async (notificationId: number) => {
    try {
      await markAsRead(notificationId).unwrap();
    } catch (error) {
      console.error("Failed to mark notification as read:", error);
    }
  };

  useEffect(() => {
    if (data || inspirationsData) {
      setConversations(data?.data);
      setInspirations(inspirationsData?.data)
    }
  }, [data, inspirationsData]);

  const chatMessages =
    conversations?.map((conversation) => {
      const lastMessage =
        conversation.messages[conversation.messages.length - 1];

      return {
        id: conversation.id,
        title: `User ${conversation.id}`,
        message: lastMessage.content,
        unread: !lastMessage.isRead,
        status: "online",
      };
    }) || [];

  return (
    <>
      {/* <Header pageTitle="Dashboard" /> */}

      <CustomDahboardLayout>
        <div className="sm:flex items-center justify-between gap-2">
          {/* one */}
          <div className="sm:w-8/12">
            {/* banner */}
            <Card className="shadow-sm text-black text-sm mb-1">
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  <Avatar
                    size="large"
                    icon={<UserOutlined />}
                    className="mr-2"
                  />
                </div>
                <div className="flex-1">
                  <h2> Hi {user?.user.firstName} 👋</h2>
                  <div className="text-gray-500">You're amazing!</div>
                </div>
                <div>
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
            </Card>

            {/*  recent notifications Quotes */}
            <Card title="Recent Notifications" className="shadow-sm mb-1">
              <div className="space-y-2 p-2 overflow-y-auto h-[230px]">
                {isLoading ? (
                  <div>Loading notifications...</div>
                ) : (
                  <ul className="space-y-4">
                    {notificationsData?.data.map((notification) => (
                      <li
                        key={notification.id}
                        className="cursor-pointer flex justify-between items-center hover:bg-gray-100 p-2 rounded-md"
                        onClick={() => handleNotificationClick(notification.id)}
                      >
                        <div>
                          <p
                            className={`font-medium truncate ${!notification.isRead
                              ? "text-blue-600"
                              : "text-gray-800"
                              }`}
                          >
                            {notification.title}
                          </p>
                          <p className="text-sm text-gray-600 truncate">
                            {notification.message}
                          </p>
                        </div>
                        <p className="text-xs text-gray-500">
                          {new Date(notification.createdAt).toLocaleTimeString(
                            [],
                            { hour: "2-digit", minute: "2-digit" }
                          )}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>

            {/*recent inspirations Quotes */}
            <Card title="Inspiration Quotations" className="shadow-sm">
              <div className="space-y-2 p-2 overflow-y-auto h-52">
                {inspirations?.map((inspiration) => (
                  <div key={inspiration.id} className="border-b p-3">
                    <p className="text-red-500 font-medium">
                      {inspiration.title}
                    </p>
                    <div>
                      <p className="text-sm text-gray-600 truncate">
                        {inspiration.content}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                      <span>Posted At:   
                        <Tag className="ml-2">
                        {new Date(inspiration.createdAt).toLocaleTimeString(
                        [],
                        { hour: "2-digit", minute: "2-digit" }
                        )}
                        </Tag>                        
                      </span>
                      <div
                      //  onClick={() => handleLike(inspiration.id)}
                      >
                        <LikeOutlined />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* two */}
          <div className="sm:w-4/12">
            {/* Calendar with Activities */}
            <Card title="Activity Calendar" className="shadow-sm mb-1">
              <Calendar fullscreen={false} />
            </Card>

            {/*  chats */}
            <Card title="Chats" className="shadow-sm">
              <div className="overflow-y-auto h-52">
                <ul className="space-y-2">
                  {chatMessages?.map((chat, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    // onClick={() => handleChatClick(chat.id)}
                    >
                      <div>
                        <div className="flex justify-between gap-2">
                          <div
                            className={`font-bold ${chat.unread ? "text-blue-600" : "text-gray-800"
                              }`}
                          >
                            {chat.title}
                          </div>
                          <div
                            className={`text-xs ${chat.status === "online"
                              ? "text-green-500"
                              : "text-gray-500"
                              }`}
                          >
                            {chat.status === "online" ? "Online" : "Offline"}
                          </div>
                        </div>
                        <div className="text-gray-600 truncate">
                          {chat.message}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </CustomDahboardLayout>
    </>
  );
};

export default YouthDashboardPage;
