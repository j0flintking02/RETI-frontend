import { Card, Avatar, Tag } from "antd";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { ClockCircleOutlined, LikeOutlined, UserOutlined, LikeFilled } from "@ant-design/icons";
import CustomDashboardLayout from "../../../components/secondary/CustomDashboardPagesLayout";
import {
  useGetNotificationsQuery,
  useMarkAsReadMutation,
} from "../../../services/notifications";
import { loginDetails, formatRelativeTime } from "../../../utils";
import { InspirationsType } from "../../../services/types";
import { useGetInspirationsQuery, useLikeInspirationMutation } from "../../../services/inspirations";
import Loader from "../../loader";
import { useGetUserProfileQuery } from "../../../services/profiles";
import Chat from "../../../components/secondary/Chat";
import { toast } from "react-toastify";
import MentorshipCalendar from "../../../components/secondary/Calendar";

const YouthDashboardPage = () => {
  const { data: notificationsData, isLoading } = useGetNotificationsQuery();
  const [markAsRead] = useMarkAsReadMutation();
  const [likeInspiration] = useLikeInspirationMutation();
  const user = loginDetails();
  const { data: inspirationsData } = useGetInspirationsQuery();
  const { data: userProfile } = useGetUserProfileQuery(user?.user?.id);
  const [inspirations, setInspirations] = useState<InspirationsType[]>([]);

  const reversedNotifications = notificationsData?.data?.slice().reverse();
  const handleNotificationClick = async (notificationId: number) => {
    try {
      await markAsRead(notificationId).unwrap();
    } catch (error) {
      toast.error("Failed to mark notification as read:", error);
    }
  };

  const handleInspirationLike = async (inspirationId: number) => {
    try {
      const updatedInspirations = inspirations.map(inspiration => 
        inspiration.id === inspirationId ? {
          ...inspiration,
          isLiked: !inspiration.isLiked,
          likesCount: inspiration.isLiked ? inspiration.likesCount - 1 : inspiration.likesCount + 1
        } : inspiration
      );
      setInspirations(updatedInspirations);
      await likeInspiration(
        inspirationId).unwrap();

    } catch (error) {
      setInspirations([...inspirations]);
      toast.error("Failed to update like status");
    }
  };

  useEffect(() => {
    if (inspirationsData) {
      setInspirations(inspirationsData?.data)
    }
  }, [inspirationsData]);

  return (
    <CustomDashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column - Main Content */}
        <div className="space-y-4">
          {/* User Greeting Card */}
          <Card className="shadow-sm text-black text-sm">
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
          <Card title="Recent Notifications" className="shadow-sm">
            <div className="space-y-2 p-2 overflow-y-auto h-[230px]">
              {isLoading ? (
                <Loader />
              ) : (
                <ul className="space-y-4">
                  {reversedNotifications?.map((notification) => (
                    <li
                      key={notification.id}
                      className="cursor-pointer flex justify-between items-center hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => handleNotificationClick(notification.id)}
                    >
                      <div>
                        <p className={`font-medium truncate ${!notification.isRead ? "text-blue-600" : "text-gray-800"}`}>
                          {notification.title}
                        </p>
                        <p className="text-sm text-gray-600 truncate">{notification.message}</p>
                      </div>
                      <p className="text-xs text-gray-500">
                      <ClockCircleOutlined /> {formatRelativeTime(notification.createdAt)}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Card>

          {/* Recent Inspirations */}
          <Card title="Inspiration Quotations" className="shadow-sm">
            <div className="space-y-2 p-2 overflow-y-auto h-[330px]">
              {inspirations?.map((inspiration) => (
                <div key={inspiration.id} className="border-b p-3">
                  <p className="text-red-500 font-medium">{inspiration.title}</p>
                  <div>
                    <p className="text-sm text-gray-600 whitespace-normal break-words">
                      {inspiration.content}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <span>
                      Posted By:
                      <Tag className="ml-2" color="red">
                        {`${inspiration?.mentor.firstName} ${inspiration?.mentor.lastName}`}
                      </Tag>
                    </span>
                    <span>
                      Posted At:
                      <Tag className="ml-2" color="blue">
                        <ClockCircleOutlined /> {formatRelativeTime(inspiration.createdAt)}
                      </Tag>
                    </span>
                    <div 
                      className="flex items-center cursor-pointer group"
                      onClick={() => handleInspirationLike(inspiration.id)}
                    >
                      {inspiration.isLiked ? (
                        <LikeFilled className="text-red-500 mr-1 transition-colors" />
                      ) : (
                        <LikeOutlined className="mr-1 text-gray-500 group-hover:text-red-400 transition-colors" />
                      )}
                      <span className={`${inspiration.isLiked ? 'text-red-500' : 'text-gray-600'} group-hover:text-red-400`}>
                        {inspiration.likesCount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column - Calendar */}
        <div className="space-y-4">
          <Card title="Activity Calendar" className="shadow-sm">
            <MentorshipCalendar />
          </Card>

          {/* Chats */}
          <Chat />
        </div>
      </div>
    </CustomDashboardLayout>
  );
};

export default YouthDashboardPage;
