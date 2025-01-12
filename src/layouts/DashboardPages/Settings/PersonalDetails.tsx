import { EditOutlined, InboxOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Input, Spin, Form, DatePicker, Select, notification } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Content } from "antd/es/layout/layout";
import { useGetUserProfileQuery, useUpdateProfileMutation } from "../../../services/users.ts";
import { loginDetails } from "../../../utils.ts";
import { useEffect } from "react";
import moment from "moment";
import Dragger from "antd/es/upload/Dragger";


const PersonalDetailsSettings = () => {
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
        <Content className="p-8 space-y-2 border border-gray-900/10 rounded-lg bg-white">
            <div className="py-4">
                {!isLoading && <Form layout="vertical" form={form} initialValues={{
                    firstName: data?.data.user.firstName,
                    lastName: data?.data.user.lastName,
                    email: data?.data.email,
                    phoneNumber: data?.data.user.phoneNumber,
                    gender: data?.data.gender,
                    bio: data?.data.bio,
                    dateOfBirth: moment(data?.data.dateOfBirth),
                    "prefix": "256",
                }} onFinish={handleFinish} className="">

                    <div>
                        <div className="sm:flex sm:justify-between">
                            <div>
                                <h2 className="text-md font-semibold text-gray-900">Bio Data</h2>
                            </div>
                        </div>

                        {/* profile picture and inputs */}
                        <div className="sm:flex gap-10 py-4">
                            <div>
                                <Avatar size={80} icon={<UserOutlined />} />
                                <p className="text-md font-semibold mt-2">{data && `${data?.data.user.firstName} ${data?.data.user.lastName}`}</p>
                            </div>

                            {isLoading && <div className="w-auto text-center">
                                <Spin size="large" />
                            </div>}

                            <div className="w-full">
                                <Form.Item>
                                    <div style={{ width: '100%', display: 'flex', gap: '16px' }}>
                                        <Form.Item
                                            label="First Name"
                                            name="firstName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your first name"
                                                type="text"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Last Name"
                                            name="lastName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your last name"
                                                type="text"
                                            />
                                        </Form.Item>
                                    </div>

                                    <Form.Item
                                       
                                        label="Phone number" name="phoneNumber">
                                        <Input size="large" />
                                    </Form.Item>

                                    <Form.Item

                                        label="Role" >
                                        <div className="bg-gray-200 p-3 rounded text-sm">Tailor</div>
                                    </Form.Item>
                                </Form.Item>
                            </div>
                        </div>
                    </div>

                    {/* account */}


                    <div>
                        <div className="sm:flex sm:justify-between">
                            <div>
                                <h2 className="text-md font-semibold text-gray-900">Address</h2>
                            </div>
                        </div>

                        {/* profile picture and inputs */}
                        <div className="sm:flex gap-10 py-4">


                            {isLoading && <div className="w-auto text-center">
                                <Spin size="large" />
                            </div>}

                            <div className="w-full">
                                <Form.Item>
                                    <div style={{ width: '100%', display: 'flex', gap: '16px' }}>
                                        <Form.Item
                                            label="Street"
                                            name="firstName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your first name"
                                                type="text"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Plot Number"
                                            name="lastName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your last name"
                                                type="text"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', gap: '16px' }}>
                                        <Form.Item
                                            label="City"
                                            name="firstName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your first name"
                                                type="text"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Country"
                                            name="lastName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your last name"
                                                type="text"
                                            />
                                        </Form.Item>
                                    </div>


                                </Form.Item>
                            </div>
                        </div>
                    </div>

                    {/* id */}


                    <div>
                        <div className="sm:flex sm:justify-between">
                            <div>
                                <h2 className="text-md font-semibold text-gray-900">Identification</h2>
                            </div>
                        </div>

                        {/* profile picture and inputs */}
                        <div className="sm:flex gap-10 py-4">


                            {isLoading && <div className="w-auto text-center">
                                <Spin size="large" />
                            </div>}

                            <div className="w-full">
                                <Form.Item>
                                    <Dragger>
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Drag and drop or click to upload</p>
                                        <p className="ant-upload-hint">
                                           PNG, JPG accepted. Max 5MB
                                        </p>
                                    </Dragger>

                                </Form.Item>
                            </div>
                        </div>
                    </div>


                    <Button className="float-end" htmlType="submit" form="passwordForm" type="primary">
                        Save
                    </Button>



                </Form>}
            </div>
        </Content>
    )
};

export default PersonalDetailsSettings;