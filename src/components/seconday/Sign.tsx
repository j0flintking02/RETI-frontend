

// Sign.js
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

const Sign = () => {
    return (
        <Form layout="vertical" style={{ maxWidth: 400 }}>
            <Title level={2} style={{ marginBottom: 9 }} >Sign in to your account</Title>
            <Text style={{ marginBottom: 32, display: 'block' }}>Experience the power of networking</Text>

            <Form.Item
                name="email"
                label="Email"
                rules={[{ message: 'Please enter your email!' }]}
                style={{ fontWeight: 'bold' }} >
                <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[{ message: 'Please enter your password!' }]}
                // rules={[{ required: true, message: 'Please enter your password!' }]}
                style={{ fontWeight: 'bold' }}>
                <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
                <Link href="#">Forgot your password?</Link>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block>
                    Sign in
                </Button>
            </Form.Item>

            <Text style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                Don't have an account? <Link href="#" style={{marginLeft:'10px'}}>Sign up</Link>
            </Text>
        </Form>
    );
};

export default Sign;
