import { Card, Calendar, Avatar, Tag, Badge } from "antd";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import io from "socket.io-client";

import { LikeOutlined, UserOutlined, MessageOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";
import CustomDashboardLayout from "../../../components/secondary/CustomDashboardPagesLayout";
import {
  useGetNotificationsQuery,
  useMarkAsReadMutation,
} from "../../../services/notifications";
import { useGetUserConversationsQuery } from "../../../services/conversations";
import { loginDetails } from "../../../utils";
import { InspirationsType } from "../../../services/types";
import { useGetInspirationsQuery } from "../../../services/inspirations";
import Loader from "../../loader";
import { useGetUserProfileQuery } from "../../../services/profiles";

const YouthDashboardPage = () => {
  const { data: notificationsData, isLoading } = useGetNotificationsQuery();
  const [markAsRead] = useMarkAsReadMutation();
  const user = loginDetails();
  const userId = user.user.id;
  const { data } = useGetUserConversationsQuery(userId);
  const { data: userProfile } = useGetUserProfileQuery(userId);

  const [conversations, setConversations] = useState<any>([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [socket, setSocket] = useState(null);

  const { data: inspirationsData } = useGetInspirationsQuery();
  const [inspirations, setInspirations] = useState<InspirationsType[]>([]);

  const [isChatsVisible, setIsChatsVisible] = useState(false);

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
      console.log("Conversations", conversations)
      setInspirations(inspirationsData?.data)
    }
    const newSocket = io(`${import.meta.env.VITE_BASE_URL}`, {
      query: { token: user.access_token, userId },
    });

    setSocket(newSocket);
    return () => newSocket.disconnect();
  }, [data, inspirationsData, user.access_token, userId]);

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  

  return (
    <CustomDashboardLayout>
      <div className="sm:flex items-start justify-between gap-2">
        <div className="flex flex-col flex-1 space-y-4">
          <Card className="shadow-sm text-black text-sm mb-1">
            <div className="flex items-center space-x-6">
              <div className="shrink-0">
                <Avatar
                  size="large"
                  icon={<UserOutlined />}
                  src={userProfile?.data?.profileImage || 'https://via.placeholder.com/80'}
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

          {/* Recent Notifications */}
          <Card title="Recent Notifications" className="shadow-sm mb-1">
            <div className="space-y-2 p-2 overflow-y-auto h-[230px]">
              {isLoading ? (
                <Loader />
              ) : (
                notificationsData?.data?.map((notification) => (
                  <div key={notification.id} onClick={() => handleNotificationClick(notification.id)}>
                    <p>{notification.title}</p>
                    <p>{notification.message}</p>
                  </div>
                ))
              )}
            </div>
          </Card>

          {/* Recent Inspirations */}
          <Card title="Inspiration Quotations" className="shadow-sm">
            <div className="space-y-2 p-2 overflow-y-auto h-52">
              {inspirations?.map((inspiration) => (
                <div key={inspiration.id} className="border-b p-3">
                  <p className="text-red-500 font-medium">{inspiration.title}</p>
                  <p className="text-sm text-gray-600 truncate">{inspiration.content}</p>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <span>
                      Posted At:
                      <Tag className="ml-2">
                        {new Date(inspiration.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </Tag>
                    </span>
                    <div>
                      <LikeOutlined />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Activity Calendar and Chats */}
        <div className="sm:w-4/12">
          <Card title="Activity Calendar" className="shadow-sm mb-1">
            <Calendar fullscreen={false} />
          </Card>

          {/* Chats */}
          {isChatsVisible && <Chat />}
        </div>
      </div>
    </CustomDashboardLayout>
  );
};

export default YouthDashboardPage;
