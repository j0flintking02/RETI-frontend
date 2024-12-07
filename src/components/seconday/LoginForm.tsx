import { useEffect } from "react"
import { Form, Input, Button, Checkbox, Typography, notification } from 'antd';
import { useLoginMutation } from "../../services/users.ts";
import {Link, useNavigate} from "react-router-dom";
import {userDetails} from "../../utils.ts";



const LoginForm = () => {
    const [form] = Form.useForm();
    const [login, { isLoading, isSuccess, data }] = useLoginMutation()
    const navigate = useNavigate();
    const onFinish = async (values: never) => {
        try {
            await login(values).unwrap()
        } catch (e) {
            notification.error({
                message: e,
                description: "Something went wrong"
            })
        }
    }
    const onFinishFailed = (errorInfo: never) => {
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
        <Form
            layout="vertical"
            className="max-w-[400px]"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
     
            <Form.Item
                name="email"
                label="Email"
                rules={[{ message: 'Please enter your email!' }]}>
                <Input size='large' placeholder="Enter your email" className="rounded-md border-gray-300" />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[{ message: 'Please enter your password!' }]}>
                <Input.Password  size= 'large' placeholder="Enter your password" className="rounded-md border-gray-300" />
            </Form.Item>

            <Form.Item>
                <Link className="text-[#5B9BD5] hover:text-[#5B9BD5] hover:underline" to="/reset-password">Forgot your password?</Link>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                <Checkbox className="text-sm">Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={isLoading}
                     size= 'large'
                >
                    Sign in
                </Button>

                <div className='mt-4'>
                    <Button size='large' className="flex items-center w-full justify-center px-3 py-4 text-sm font-semibold  text-gray-700 hover:bg-gray-100">
                        <img className="w-4 h-4 mr-2" src='images/gogole.svg' alt="google" />
                        Sign up with Google
                    </Button>
                </div>
            </Form.Item>
            <p className="mt-6 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Typography.Link className="text-[#5B9BD5] hover:text-[#5B9BD5] hover:underline" href="/register">Sign up</Typography.Link>
            </p>
        </Form>
    );
};

export default LoginForm;
