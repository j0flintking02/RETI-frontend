import { Form, Input, Button, Checkbox, Typography, Space, Switch } from "antd";
const { Title, Text, Link } = Typography;

const LoginForm = ({ isDarkMode, toggleTheme }) => {
  return (
    <Form layout="vertical" className="max-w-[400px]">
      <Title level={2} className="mb-4 text-2xl font-semibold">
        Sign in to your account
      </Title>
      <Text  className={`mb-8 block ${isDarkMode ? "text-white" : "text-gray-600"}`}>
        Experience the power of networking
      </Text>

      <Form.Item
        name="email"
        label="Email"
        rules={[{ message: "Please enter your email!" }]}
      >
        <Input
          placeholder="Enter your email"
          className={`rounded-md px-3 py-2 w-full
            ${isDarkMode ? "bg-gray-900 text-white border-white" : "bg-white text-black border-gray-300"}
            border focus:outline-none focus:ring-2 focus:ring-blue-500
          `}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ message: "Please enter your password!" }]}
      >
        <Input.Password
          placeholder="Enter your password"
          className={`rounded-md px-3 py-2 w-full
            ${isDarkMode ? "bg-gray-900 text-white border-white" : "bg-white text-black border-gray-300"}
            border focus:outline-none focus:ring-2 focus:ring-blue-500
          `}
        />
      </Form.Item>

      <Form.Item>
        <Link href="#" className="text-blue-600">
          Forgot your password?
        </Link>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox className="text-sm">Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Sign in
        </Button>
      </Form.Item>

      <Text className="flex justify-center items-center text-sm">
        Don't have an account?{" "}
        <Link href="#" className="ml-2 text-blue-600">
          Sign up
        </Link>
      </Text>
      <Space className="mt-5">
        <Switch checked={isDarkMode} onChange={toggleTheme} />
      </Space>
    </Form>
  );
};

export default LoginForm;
