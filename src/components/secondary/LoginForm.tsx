import { useEffect } from "react"
import { Form, Input, Button, Typography, notification, Tag } from 'antd';
import { useLoginMutation } from "../../services/users.ts";
import { Link, useNavigate } from "react-router-dom";
import { userDetails } from "../../utils.ts";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import HelpandsupportForm from "../../layouts/DashboardPages/Forms/HelpAndSupportForm.tsx";

const LoginForm = () => {
    const [form] = Form.useForm();
    const [login, { isLoading, isSuccess, data }] = useLoginMutation()
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (values: { phoneNumber: string; password: string }) => {
        try {
            const fullPhoneNumber = `+256${values.phoneNumber.replace(/^0/, '')}`;
            await login({ phoneNumber: fullPhoneNumber, password: values.password }).unwrap()
        } catch (error) {
            notification.error({
                message: error.message,
                description: "Something went wrong"
            })
        }
    }
    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: 'Unable to log in with provided credentials.',
            description: 'Please check your phone number and password and try again.'
        });
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        if (isSuccess) {
            const results = JSON.stringify(data)
            localStorage.setItem('loginDetails', results)
            if (userDetails()){
                notification["success"]({
                    message: `Let's complete your onboarding`,
                })
                navigate("/onboarding");
            }else {
                notification["success"]({
                    message: `Welcome Back, ${data?.user.firstName}`,
                })
                navigate("/");
            }
        }
    }, [isSuccess, data]);
    return (
        <>
            <Form
                layout="vertical"
                className="max-w-[400px]"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>

                <Form.Item
                    name="phoneNumber"
                    label="Phone Number"
                    rules={[
                        { required: true, message: 'Please enter your phone number!' },
                        {
                            pattern: /^[0-9]{9}$/,
                            message: 'Phone number must be exactly 9 digits!'
                        }
                    ]}>
                    <Input
                        size='large'
                        placeholder="Enter your phone number"
                        className="rounded-md border-gray-300"
                        prefix={<span>+256</span>}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label={
                        <div className="flex items-center">
                            <span className="mr-4">Password</span>
                            <Link className="text-red-500 hover:text-red-700 hover:underline" to="/reset-password">Forgot your password?</Link>
                        </div>
                    }
                    rules={[{ required: true, message: 'Please enter your password!' }]}>
                    <Input.Password size='large' placeholder="Enter your password" className="rounded-md border-gray-300" />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={isLoading}
                        size='large'
                        style={{ backgroundColor: '#FF0000' }}
                    >
                        Login
                    </Button>
                </Form.Item>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link 
                        to="/register" 
                        className="text-red-500 hover:text-red-700 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>

                <div className="flex justify-center mt-24">
                    <Tag color="red" onClick={showModal} className="cursor-pointer">
                        <QuestionCircleOutlined /> Help and Support
                    </Tag>
                </div>
            </Form>

            <HelpandsupportForm
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                loading={false}
            />
        </>
    );
};

export default LoginForm;
