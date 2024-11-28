import { Form, Input, Button, Checkbox, Typography } from 'antd';
const { Title, Text, Link } = Typography;

const LoginForm = () => {
    return (
        <Form layout="vertical" className="max-w-[400px]">
            <Form.Item
                name="email"
                label="Email"
                rules={[{ message: 'Please enter your email!' }]}>
                <Input placeholder="Enter your email" size='large' className="rounded-md border-gray-300" />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[{ message: 'Please enter your password!' }]}>
                <Input.Password placeholder="Enter your password" size='large' className="rounded-md border-gray-300" />
            </Form.Item>

            <Form.Item>
                <Link href="/reset-password" className="text-[#5B9BD5] hover:text-[#5B9BD5] hover:underline">Forgot your password?</Link>
            </Form.Item>

            <Form.Item  name="remember" valuePropName="checked">
                <Checkbox className="text-sm">Remember me</Checkbox>
            </Form.Item>

            <Form.Item >
                <Button type="primary" size='large' htmlType="submit" block className="bg-blue-600 hover:bg-blue-700 text-white">
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
                Don't have an account? {''}
                <Link href="/register" className=" text-[#5B9BD5] hover:text-[#5B9BD5] hover:underline">Sign up</Link>
            </p>
        </Form>
    );
};

export default LoginForm;
