import { EditOutlined, InboxOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Spin, Form,notification } from "antd";
import { Content } from "antd/es/layout/layout";
import { useGetUserProfileQuery, useUpdateProfileMutation } from "../../../services/profiles.ts";
import { loginDetails } from "../../../utils.ts";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import Dragger from "antd/es/upload/Dragger";
import { uploadImage, validateFile } from "../../../utils/uploadImage.ts";
import { toast } from "react-toastify";


const PersonalDetailsSettings = () => {
    const { data, isLoading, isError, error, refetch } = useGetUserProfileQuery(loginDetails().user.id)
    const [updateUser, { isSuccess }] = useUpdateProfileMutation()
    const [form] = Form.useForm();

      const [uploadedImages, setUploadedImages] = useState<string[]>([]);
      const [avatarUrl, setAvatarUrl] = useState<string>("");
      const fileInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong")
        }
    }, [isError, error]);

    const handleFinish = async (values) => {
        try {
            await updateUser({
                data: { ...values, profileImage: avatarUrl },
                profileId: loginDetails()?.user.id,
            }).unwrap();

            // Update local storage
            const currentUser = loginDetails();
            if (currentUser) {
                currentUser.profileImage = avatarUrl;
                localStorage.setItem('user', JSON.stringify(currentUser));
            }

            // Force refetch of user profile data to update sidebar
            await refetch();

            notification.success({
                message: "Success",
                description: "Profile updated successfully!",
            });
        } catch (e) {
            let message = "Try again";
            if (typeof e.data.message === "string") {
                message = e.data.message;
            } else {
                message = e.data.message[0];
            }
            toast.error("Something went wrong");
        }
    };

    useEffect(() => {
        if (data?.data.user.profilePicture) {
          setAvatarUrl(data.data.user.profilePicture);
        }
      }, [data]);

    useEffect(() => {
        if (isSuccess) {
          toast.success( "Profile updated successfully");
        }
      }, [isSuccess]);
    

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!validateFile(file)) return;

        try {
            const imageUrl = await uploadImage(file);
            if (imageUrl) {
                setUploadedImages((prev) => [...prev, imageUrl]);
                setAvatarUrl(imageUrl);
                form.setFieldsValue({ profilePicture: imageUrl });
                notification.success({
                    message: "Success",
                    description: "Image uploaded successfully!",
                });
            }
        } catch (error) {
            notification.error({
                message: "Upload failed",
                description:
                    error instanceof Error ? error.message : "Failed to upload image",
            });
        }
    };


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
                            <Avatar
                            size={80}
                            icon={<UserOutlined />}
                            src={
                                avatarUrl ||
                                data?.data.profileImage ||
                                "https://via.placeholder.com/80"
                            }
                        />
                                <p className="text-md font-semibold mt-2">{data && `${data?.data.user.firstName} ${data?.data.user.lastName}`}</p>
                            </div>
                            <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept="image/*"
                        style={{ display: "none" }}
                    />
                    <Button
                        type="text"
                        icon={<EditOutlined />}
                        className="text-blue-500 mt-2"
                        onClick={handleAvatarClick}
                    >
                        Change avatar
                    </Button>

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

                    <Button className="w-32 p-2" type="primary" onClick={form.submit}>
            Save
          </Button>



                </Form>}
            </div>
        </Content>
    )
};

export default PersonalDetailsSettings;