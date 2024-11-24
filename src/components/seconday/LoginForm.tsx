import { Form, Input, Button, Checkbox, Typography } from 'antd';
const { Title, Text, Link } = Typography;

const LoginForm = () => {
    return (
        <Form layout="vertical" className="max-w-[400px]">
            <Title level={2} className="mb-4 text-2xl font-semibold">Sign in to your account</Title>
            <Text className="mb-8 block text-gray-600">Experience the power of networking</Text>

            <Form.Item
                name="email"
                label="Email"
                rules={[{ message: 'Please enter your email!' }]}>
                <Input placeholder="Enter your email" className="rounded-md border-gray-300" />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[{ message: 'Please enter your password!' }]}>
                <Input.Password placeholder="Enter your password" className="rounded-md border-gray-300" />
            </Form.Item>

            <Form.Item>
                <Link href="#" className="text-blue-600">Forgot your password?</Link>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                <Checkbox className="text-sm">Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block className="bg-blue-600 hover:bg-blue-700 text-white">
                    Sign in
                </Button>
            </Form.Item>

            <Text className="flex justify-center items-center text-sm">
                Don't have an account? <Link href="#" className="ml-2 text-blue-600">Sign up</Link>
            </Text>
        </Form>
    );
};

export default LoginForm;
