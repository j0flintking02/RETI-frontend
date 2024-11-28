import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import {Button, Checkbox, Input, notification, Form, Typography} from "antd";
import {useEffect, useState} from "react";
import {useGoogleAuthMutation, useRegisterMutation} from "../../services/users.ts";
import {useNavigate} from "react-router-dom";


const RegisterForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [registerUser, {isLoading, isSuccess, data}] = useRegisterMutation()
    const [googleAuth] = useGoogleAuthMutation()
    const [form] = Form.useForm();

    const navigate = useNavigate();

    const onFinish = async (values: never) => {
        try {
            await registerUser(values).unwrap()
        } catch (e) {
            notification.error({
                message: e,
                description: "Something went wrong"
            })
        }
    }
    const onFinishFailed = (errorInfo: never) => {
        notification.error({
            message: errorInfo,
            description: "Something went wrong"
        })
    };
    const handleGoogleAuth = async ()=>{
        await googleAuth().unwrap()
    }
    useEffect(() => {
        if (isSuccess) {
            const results = JSON.stringify(data)
            localStorage.setItem('loginDetails', results)

            notification["success"]({
                message: `Welcome Back, ${data?.user.first_name}`,
            })
            navigate("/");
        }
    }, [isSuccess, data]);

    return (
        <>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                <Form
                    layout="vertical"
                    className="space-y-2"
                    form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <Form.Item label="Full name" name="full_name">
                        <Input
                            placeholder="Enter your full name"
                            type="text"
                        />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input
                            placeholder="Enter your email"
                            type="Email"
                        />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                            <Input
                                placeholder="Enter password"
                                type={passwordVisible ? "text" : "password"}
                                suffix={
                                    passwordVisible ? (
                                        <EyeOutlined className='text-gray-400'
                                                     onClick={() => setPasswordVisible(false)}/>
                                    ) : (
                                        <EyeInvisibleOutlined className='text-gray-400'
                                                              onClick={() => setPasswordVisible(true)}/>
                                    )
                                }
                            />
                    </Form.Item>
                    <Form.Item label="Confirm password">
                            <Input
                                placeholder="Confirm password"
                                type={confirmPasswordVisible ? "text" : "password"}
                                suffix={
                                    confirmPasswordVisible ? (
                                        <EyeOutlined className='text-gray-400'
                                                     onClick={() => setConfirmPasswordVisible(false)}/>
                                    ) : (
                                        <EyeInvisibleOutlined className='text-gray-400'
                                                              onClick={() => setConfirmPasswordVisible(true)}/>
                                    )
                                }
                            />
                    </Form.Item>

                    <div className="text-sm py-4">
                        <Checkbox>Remember me</Checkbox>

                    </div>

                    <div>
                        <Button
                            block
                            htmlType="submit"
                            type="primary"
                            loading={isLoading}>
                            Sign up
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={handleGoogleAuth}
                            className="flex items-center w-full justify-center px-3 py-4 text-sm font-semibold  text-gray-700 hover:bg-gray-100">
                            <svg
                                className="w-4 h-4 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="#EA4335"
                                    d="M24 9.5c3.28 0 6.11 1.14 8.39 3.02l6.24-6.24C34.83 2.34 29.67 0 24 0 14.75 0 7.1 5.6 4.07 13.57l7.47 5.8C13.6 13.26 18.5 9.5 24 9.5z"
                                />
                                <path
                                    fill="#4285F4"
                                    d="M47.53 24.5c0-1.3-.11-2.47-.3-3.65H24v7.3h13.43c-.56 2.9-2.2 5.35-4.8 6.98l7.47 5.8C44.65 36.86 47.53 31.1 47.53 24.5z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M10.47 28.43c-.85-1.34-1.34-2.9-1.34-4.43 0-1.53.49-3.09 1.34-4.43l-7.47-5.8C1.09 17.68 0 20.53 0 24c0 3.47 1.09 6.32 3 8.23l7.47-5.8z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M24 48c5.67 0 10.83-1.86 14.43-5.05l-7.47-5.8c-2.02 1.32-4.55 2.13-6.96 2.13-5.5 0-10.4-3.76-12.22-8.87l-7.47 5.8C7.1 42.4 14.75 48 24 48z"
                                />
                            </svg>
                            Sign up with Google
                        </Button>
                    </div>

                </Form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account? {' '}
                    <Typography.Link href="/login">Sign in</Typography.Link>
                </p>
            </div>
        </>
    )
}

export default RegisterForm;