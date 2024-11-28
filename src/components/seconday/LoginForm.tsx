import {useEffect} from "react"
import {Form, Input, Button, Checkbox, Typography, notification} from 'antd';
import {useLoginMutation} from "../../services/users.ts";
import {useNavigate} from "react-router-dom";


const {Title, Text, Link} = Typography;

const LoginForm = () => {
    const [form] = Form.useForm();
    const [login, {isLoading, isSuccess, data}] = useLoginMutation()
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

            notification["success"]({
                message: `Welcome Back, ${data?.user.first_name}`,
            })
            navigate("/");
        }
    }, [isSuccess, data]);
    return (
        <Form
            layout="vertical"
            className="max-w-[400px]"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Title level={2} className="mb-4 text-2xl font-semibold">Sign in to your account</Title>
            <Text className="mb-8 block text-gray-600">Experience the power of networking</Text>

            <Form.Item
                name="email"
                label="Email"
                rules={[{message: 'Please enter your email!'}]}>
                <Input placeholder="Enter your email" className="rounded-md border-gray-300"/>
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[{message: 'Please enter your password!'}]}>
                <Input.Password placeholder="Enter your password" className="rounded-md border-gray-300"/>
            </Form.Item>

            <Form.Item>
                <Link href="#" className="text-blue-600">Forgot your password?</Link>
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
                >
                    Sign in
                </Button>
            </Form.Item>
            <p className="mt-6 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Typography.Link href="/register">Sign up</Typography.Link>
            </p>
        </Form>
    );
};

export default LoginForm;
