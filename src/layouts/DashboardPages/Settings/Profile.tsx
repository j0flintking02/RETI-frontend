import { EditOutlined, EnvironmentOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Input, Spin, Form, DatePicker, Select, notification } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Content } from "antd/es/layout/layout";
import { useGetUserProfileQuery, useUpdateProfileMutation } from "../../../services/users.ts";
import { loginDetails } from "../../../utils.ts";
import { useEffect } from "react";
import moment from "moment";
import ProfileTabs from "./ProfileTabs.tsx";


const ProfileSettings = () => {
    const { data, isLoading, isError, error, } = useGetUserProfileQuery(loginDetails().user.id)
    const [updateUser, { isSuccess }] = useUpdateProfileMutation()
    const [form] = Form.useForm();
    useEffect(() => {
        if (isError) {
            notification['error']({
                message: "Something went wrong",
                description: error.data.message,
            })
        }
    }, [isError, error]);
    const handleFinish = async (values) => {
        try {
            await updateUser({ data: values, user_id: loginDetails().user.id }).unwrap()
        } catch (e) {
            let message = 'Try again'
            if (typeof e.data.message === "string") {
                message = e.data.message
            } else {
                message = e.data.message[0]
            }
            notification['error']({
                message: 'Something went wrong',
                description:
                    message,
            });
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
                            Kampala, Uganda
                        </p>
                        <p className="text-md truncate text-blue-500 flex items-center gap-1">
                            <span className="text-blue-400">
                                <ShoppingOutlined />
                            </span>
                            Tailor
                        </p>
                    </div>
                    <p className="text-md text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit asperiores, exercitationem illo eaque ipsum quae quia, sunt unde accusamus dicta voluptatum. Eius, maiores quod ut tempore iusto enim illum neque?</p>

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