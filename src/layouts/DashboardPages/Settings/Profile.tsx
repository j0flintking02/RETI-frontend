import { DownloadOutlined, EditOutlined, EnvironmentOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, notification, Space } from "antd";

import { Content } from "antd/es/layout/layout";
import { useGetUserProfileQuery } from "../../../services/profiles.ts";
import { loginDetails } from "../../../utils.ts";
import { useEffect } from "react";
import ProfileTabs from "./ProfileTabs.tsx";
import { toast } from "react-toastify";
import jsPDF from "jspdf";


const ProfileSettings = () => {
    const { data, isError, error, } = useGetUserProfileQuery(loginDetails().user.id)

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong")
        }
    }, [isError, error]);

    const handleDownloadData = () => {
        if (!data) {
            notification.error({
                message: "No data available",
                description: "Unable to download data at this moment.",
            });
            return;
        }
        const userProfile = data?.data;
        const doc = new jsPDF();
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Profile Information", 10, 20);

        doc.setFontSize(16);
        doc.text("Personal Information", 10, 35);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text("Full Name:", 10, 45);
        doc.setFont("helvetica", "bold");
        doc.text(`${userProfile?.user.firstName} ${userProfile?.user.lastName}`, 40, 45);

        doc.setFont("helvetica", "normal");
        doc.text("Date of Birth:", 10, 55);
        doc.setFont("helvetica", "bold");
        doc.text(
            `${new Date(userProfile?.dateOfBirth).toLocaleDateString()}`,
            40,
            55
        );

        doc.setFont("helvetica", "normal");
        doc.text("Gender:", 10, 65);
        doc.setFont("helvetica", "bold");
        doc.text(`${userProfile?.gender}`, 40, 65);

        doc.setFont("helvetica", "normal");
        doc.text("Location:", 10, 75);
        doc.setFont("helvetica", "bold");
        doc.text(`${userProfile?.location || "Not provided"}`, 40, 75);

        doc.setFont("helvetica", "normal");
        doc.text("Phone Number:", 10, 85);
        doc.setFont("helvetica", "bold");
        doc.text(`${userProfile?.phoneNumber}`, 40, 85);

        doc.setFont("helvetica", "normal");
        doc.text("Email:", 10, 95);
        doc.setFont("helvetica", "bold");
        doc.text(`${userProfile?.email}`, 40, 95);

        doc.setDrawColor(200);
        doc.line(10, 105, 200, 105);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("Profile Summary", 10, 115);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(userProfile?.bio || "No bio provided.", 10, 125);

        doc.line(10, 135, 200, 135);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("Skills", 10, 145);
        doc.setFont("helvetica", "normal");
        const skills = userProfile?.skills || [];
        if (skills.length > 0) {
            let startY = 155;
            skills.forEach((skill) => {
                doc.text(`• ${skill}`, 15, startY);
                startY += 10;
            });
        } else {
            doc.text("No skills provided.", 10, 155);
        }

        const fileName = `${userProfile?.user.firstName}_${userProfile?.user.lastName}.pdf`;
        doc.save(fileName);
    };

    return (
        <Content className="px-4 py-4  bg-white border border-gray-900/10 rounded-lg">
            <div className=" text-gray-900  p-4">
                <div className="flex justify-between items-start">
                    <div className="space-y-4">
                        <Space wrap size={16}>
                            <Avatar
                                size={80}
                                icon={<UserOutlined />}
                                src={
                                    data?.data?.profileImage ||
                                    data?.data.profileImage ||
                                    "https://via.placeholder.com/80"
                                }
                            />
                        </Space>
                        <p className="text-lg font-semibold mt-2">{data && `${data?.data.user.firstName} ${data?.data.user.lastName}`}</p>
                        <div className="flex items-center gap-4">
                            <p className="text-md truncate text-blue-500 flex items-center gap-1">
                                <span className="text-blue-400">
                                    <EnvironmentOutlined />
                                </span>
                                {data?.data?.location}
                            </p>
                            <p className="text-md truncate text-blue-500 flex items-center gap-1">
                                <span className="text-blue-400">
                                    <ShoppingOutlined />
                                </span>
                                {data?.data?.skills[0]}
                            </p>
                        </div>
                        <p className="text-md text-gray-500">{data?.data?.bio}</p>
                        <Button type="text" icon={<EditOutlined />} className="text-red-500 mt-2">
                            Edit Profile
                        </Button>
                    </div>
                    <Button className="px-4 text-red-500" icon={<DownloadOutlined />} onClick={handleDownloadData}>
                        Download your data
                    </Button>
                </div>
                <div className="text-gray-900 p-4">
                    <ProfileTabs />
                </div>
            </div>
        </Content>
    )
};

export default ProfileSettings;