import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import {Button, Checkbox, Input, notification, Form, Typography} from "antd";
import {useEffect, useState} from "react";
import {useGoogleAuthMutation, useRegisterMutation} from "../../services/users.ts";
import {useNavigate} from "react-router-dom";

// const { Title, Text, Link } = Typography;


const RegisterForm = () => {
    const [api, contextHolder] = notification.useNotification();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [registerUser, {isLoading, isSuccess, data, isError}] = useRegisterMutation()
    const [googleAuth] = useGoogleAuthMutation()
    const [form] = Form.useForm();

    const navigate = useNavigate();

    const onFinish = async (values: never) => {
        try {
            await registerUser(values).unwrap()
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
    const onFinishFailed = (errorInfo: never) => {
        notification['error']({
            message: errorInfo,
            description: "Something went wrong"
        })
    };
    const handleGoogleAuth = async () => {
        await googleAuth().unwrap()
    }
    useEffect(() => {
        if (isSuccess) {
            const results = JSON.stringify(data)
            localStorage.setItem('userDetails', results)

            notification["success"]({
                message: 'Account created successfully',
            })
            navigate("/login");
        }
    }, [isSuccess, data]);

    return (
        <>
            <Form
                layout="vertical"
                form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item>
                    <Form.Item
                        style={{display: 'inline-block', width: '50%', margin: '0'}}
                        label="First Name" name="firstName">
                        <Input
                            size="large"
                            placeholder="Enter your first name"
                            type="text"
                        />
                    </Form.Item>
                    <Form.Item
                        style={{display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 8px'}}
                        label="Last name" name="lastName">
                        <Input size="large" placeholder="Enter your Last name" type="text"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input
                        placeholder="Enter your email"
                        type="Email"
                        size='large'
                    />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input
                        size='large'
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
                        size='large'
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

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox className="text-sm">Remember me</Checkbox>
                </Form.Item>

                <div>
                    <Button
                        block
                        htmlType="submit"
                        type="primary"
                        size='large'
                        loading={isLoading}>
                        Sign up
                    </Button>
                </div>
                <div className='mt-4'>
                    <Button
                        size='large'
                        onClick={handleGoogleAuth}
                        className="flex items-center w-full justify-center px-3 py-4 text-sm font-semibold  text-gray-700 hover:bg-gray-100">
                        <img className="w-4 h-4 mr-2" src='images/gogole.svg' alt="google"/>
                        Sign up with Google
                    </Button>
                </div>

            </Form>

            <p className="mt-6 text-center text-sm text-gray-500">
                Already have an account? {' '}
                <Typography.Link className="text-[#5B9BD5] hover:text-[#5B9BD5] hover:underline" href="/login">Sign
                    in</Typography.Link>
            </p>
        </>
    )
}

export default RegisterForm;