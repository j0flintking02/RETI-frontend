import {
  DownloadOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Alert,
  Avatar,
  Button,
  Input,
  Spin,
  Form,
  DatePicker,
  Select,
  notification,
  Space,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { Content } from "antd/es/layout/layout";
import {
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} from "../../../services/profiles.ts";
import { loginDetails } from "../../../utils.ts";
import { useEffect, useState, useRef } from "react";
import moment from "moment";
import { uploadImage, validateFile } from "../../../utils/uploadImage";
import jsPDF from "jspdf";

const PersonalInformationSettings = () => {
  const { data, isLoading, isError, error } = useGetUserProfileQuery(
    loginDetails().user.id
  );
  const [updateUser, { isSuccess }] = useUpdateProfileMutation();
  const [form] = Form.useForm();
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const userProfile = data.data;


  useEffect(() => {
    if (isError) {
      notification["error"]({
        message: "Something went wrong",
        description: error.data.message,
      });
    }
  }, [isError, error]);

  useEffect(() => {
    if (data?.data.user.profilePicture) {
      setAvatarUrl(data.data.user.profilePicture);
    }
  }, [data]);

  const handleFinish = async (values) => {
    try {
      await updateUser({
        data: { ...values, profileImage: avatarUrl },
        profileId: loginDetails()?.user.id,
      }).unwrap();
    } catch (e) {
      let message = "Try again";
      if (typeof e.data.message === "string") {
        message = e.data.message;
      } else {
        message = e.data.message[0];
      }
      notification["error"]({
        message: "Something went wrong",
        description: message,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      notification["success"]({
        message: "Profile updated successfully",
      });
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

  const handleDownloadData = () => {
    if (!data) {
      notification.error({
        message: "No data available",
        description: "Unable to download data at this moment.",
      });
      return;
    }

    const userProfile = data.data;

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
  doc.text(`${userProfile.user.firstName} ${userProfile.user.lastName}`, 40, 45);

  doc.setFont("helvetica", "normal");
  doc.text("Date of Birth:", 10, 55);
  doc.setFont("helvetica", "bold");
  doc.text(
    `${new Date(userProfile.dateOfBirth).toLocaleDateString()}`,
    40,
    55
  );

  doc.setFont("helvetica", "normal");
  doc.text("Gender:", 10, 65);
  doc.setFont("helvetica", "bold");
  doc.text(`${userProfile.gender}`, 40, 65);

  doc.setFont("helvetica", "normal");
  doc.text("Location:", 10, 75);
  doc.setFont("helvetica", "bold");
  doc.text(`${userProfile.location || "Not provided"}`, 40, 75);

  doc.setFont("helvetica", "normal");
  doc.text("Phone Number:", 10, 85);
  doc.setFont("helvetica", "bold");
  doc.text(`${userProfile.phoneNumber}`, 40, 85);

  doc.setFont("helvetica", "normal");
  doc.text("Email:", 10, 95);
  doc.setFont("helvetica", "bold");
  doc.text(`${userProfile.email}`, 40, 95);

  doc.setDrawColor(200); 
  doc.line(10, 105, 200, 105);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Profile Summary", 10, 115);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(userProfile.bio || "No bio provided.", 10, 125);

  doc.line(10, 135, 200, 135);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Skills", 10, 145);
  doc.setFont("helvetica", "normal");
  const skills = userProfile.skills || [];
  if (skills.length > 0) {
    let startY = 155;
    skills.forEach((skill) => {
      doc.text(`• ${skill}`, 15, startY);
      startY += 10;
    });
  } else {
    doc.text("No skills provided.", 10, 155);
  }

    const fileName = `${userProfile.user.firstName}_${userProfile.user.lastName}.pdf`;
    doc.save(fileName);
  };

  if (isLoading) return <Content>Loading...</Content>;
  if (isError) {
    notification.error({
      message: "Error loading profile",
      description: error.data.message,
    });
    return <Content>Error loading profile data</Content>;
  }

  return (
    <Content className="px-4 py-4 space-y-4 bg-white border border-gray-900/10 rounded-lg">
      <div className="sm:flex sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Update your photo and personal details here.
          </p>
        </div>
        <div className="flex gap-2 mt-4">
          <Button className="w-32 p-2">Cancel</Button>
          <Button className="w-32 p-2" type="primary" onClick={form.submit}>
            Save changes
          </Button>
          <Button className="px-4" icon={<DownloadOutlined />} onClick={handleDownloadData}>
            Download your data
          </Button>
        </div>
      </div>

      {/* profile picture and inputs */}
      <div className="sm:flex gap-2 border-b border-gray-900/10 py-8">
        <div className="sm:w-3/12 text-center text-gray-900 mb-8">
          <div>
            <Space wrap size={16}>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                src={
                  avatarUrl ||
                  data?.data.profileImage ||
                  "https://via.placeholder.com/80"
                }
              />
            </Space>
            <p className="text-md font-semibold mt-2">
              {data &&
                `${data?.data.user.firstName} ${data?.data.user.lastName}`}
            </p>
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
          </div>
        </div>
        {isLoading && (
          <div className="w-auto text-center">
            <Spin size="large" />
          </div>
        )}

        {!isLoading && (
          <Form
            layout="vertical"
            form={form}
            initialValues={{
              firstName: data?.data.user.firstName,
              lastName: data?.data.user.lastName,
              email: data?.data.email,
              phoneNumber: data?.data.user.phoneNumber,
              gender: data?.data.gender,
              bio: data?.data.bio,
              dateOfBirth: moment(data?.data.dateOfBirth),
              profilePicture: data?.data.user.profilePicture,
              prefix: "256",
            }}
            onFinish={handleFinish}
            className="sm:w-9/12 space-y-4"
          >
            <Form.Item>
              <Form.Item
                style={{ display: "inline-block", width: "50%", margin: "0" }}
                label="First Name"
                name="firstName"
              >
                <Input
                  size="large"
                  placeholder="Enter your first name"
                  type="text"
                />
              </Form.Item>
              <Form.Item
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 0 0 8px",
                }}
                label="Last name"
                name="lastName"
              >
                <Input
                  size="large"
                  placeholder="Enter your Last name"
                  type="text"
                />
              </Form.Item>
            </Form.Item>
            <Form.Item className="">
              <Form.Item
                style={{ display: "inline-block", width: "50%", margin: "0" }}
                label="Date of birth"
                name="dateOfBirth"
              >
                <DatePicker size="large" className="w-full" />
              </Form.Item>

              <Form.Item
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 0 0 8px",
                }}
                label="Gender"
                name="gender"
              >
                <Select size="large">
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
              </Form.Item>
            </Form.Item>
            <Form.Item className="my-24">
              <Form.Item
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 0 0 8px",
                }}
                label="Email address"
                name="email"
              >
                <Input
                  size="large"
                  placeholder="Enter your email"
                  type="email"
                />
              </Form.Item>
              <Form.Item
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 0 0 8px",
                }}
                label="Phone number"
                name="phoneNumber"
              >
                <Input size="large" />
              </Form.Item>
            </Form.Item>
            <Form.Item label="About me" className="my-24" name="bio">
              <TextArea placeholder="" allowClear />
            </Form.Item>
          </Form>
        )}
      </div>

      <div className="mt-10">
        <Alert
          message="Delete your account"
          className="p-4 flex"
          description="Once you delete your account, all your data will be permanently removed."
          type="error"
          action={
            <Button size="large" danger>
              Delete your account
            </Button>
          }
        />
      </div>
    </Content>
  );
};

export default PersonalInformationSettings;
