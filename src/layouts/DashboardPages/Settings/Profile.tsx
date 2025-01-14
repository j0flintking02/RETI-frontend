import { EditOutlined, EnvironmentOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import {Avatar, Button, notification } from "antd";

import { Content } from "antd/es/layout/layout";
import { useGetUserProfileQuery, useUpdateProfileMutation } from "../../../services/profiles.ts";
import { loginDetails } from "../../../utils.ts";
import { useEffect } from "react";
import ProfileTabs from "./ProfileTabs.tsx";
import { toast } from "react-toastify";


const ProfileSettings = () => {
    const { data, isError, error, } = useGetUserProfileQuery(loginDetails().user.id)
    const [updateUser, { isSuccess }] = useUpdateProfileMutation();

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong")
        }
    }, [isError, error]);

    const handleFinish = async (values) => {
        try {
            await updateUser({ data: values, profileId: loginDetails().user.id }).unwrap()
        } catch (e) {
            let message = 'Try again'
            if (typeof e.data.message === "string") {
                message = e.data.message
            } else {
                message = e.data.message[0]
            }
            toast.error('Something went wrong');
        }
    }

    useEffect(() => {
        if (isSuccess) {
            notification["success"]({
                message: 'Profile updated successfully',
            })
        }
    }, [isSuccess]);

    return (
        <Content className="px-4 py-4  bg-white border border-gray-900/10 rounded-lg">
            <div className=" text-gray-900  p-4">
                <div className="space-y-4">
                    <Avatar size={80} icon={<UserOutlined />} />
                    <p className="text-lg  font-semibold mt-2">{data && `${data?.data.user.firstName} ${data?.data.user.lastName}`}</p>
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
            </div>
            <div className=" text-gray-900 p-4">
                <ProfileTabs />
            </div>
        </Content>
    )
};

export default ProfileSettings;