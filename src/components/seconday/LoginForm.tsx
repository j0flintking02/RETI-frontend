import { useEffect, useContext, useState } from "react";
import { Form, Input, Button, Checkbox, Typography, notification } from "antd";
import { useLoginMutation } from "../../services/users.ts";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const { Link } = Typography;

const LoginForm = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [form] = Form.useForm();
  const [login, { isLoading, isSuccess, data }] = useLoginMutation();
  const navigate = useNavigate();
  const onFinish = async (values: never) => {
    try {
      await login(values).unwrap();
    } catch (e) {
      notification.error({
        message: e,
        description: "Something went wrong",
      });
    }
  };
  const onFinishFailed = (errorInfo: never) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    if (isSuccess) {
      const results = JSON.stringify(data);
      localStorage.setItem("loginDetails", results);

      notification["success"]({
        message: `Welcome Back, ${data?.user.first_name}`,
      });
      navigate("/");
    }
  });
  return (
    <Form
      layout="vertical"
      className="max-w-[400px]"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        label={
          <span
            className={`${globalStyles.text.primary.base} ${
              isDarkMode
                ? globalStyles.text.primary.dark
                : globalStyles.text.primary.light
            }`}
          >
            Email
          </span>
        }
        rules={[{ message: "Please enter your email!" }]}
      >
        <Input
          size="large"
          placeholder="Enter your email"
          className={`${globalStyles.input.base} ${
            isDarkMode
              ? `${globalStyles.input.dark} ${globalStyles.placeholder.white}`
              : `${globalStyles.input.light} ${globalStyles.placeholder.black}`
          }`}
          style={{
            backgroundColor: "transparent",
          }}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label={
          <span
            className={`${globalStyles.text.primary.base} ${
              isDarkMode
                ? globalStyles.text.primary.dark
                : globalStyles.text.primary.light
            }`}
          >
            Password
          </span>
        }
        rules={[{ message: "Please enter your password!" }]}
      >
        <Input
          size="large"
          placeholder="Enter your password"
          type={passwordVisible ? "text" : "password"}
          className={`${globalStyles.input.base} ${
            isDarkMode
              ? `${globalStyles.input.dark} ${globalStyles.placeholder.white}`
              : `${globalStyles.input.light} ${globalStyles.placeholder.black}`
          }`}
          style={{
            backgroundColor: "transparent",
          }}
          suffix={
            passwordVisible ? (
              <EyeOutlined
                className={isDarkMode ? "text-white" : "text-gray-400"}
                onClick={() => setPasswordVisible(false)}
              />
            ) : (
              <EyeInvisibleOutlined
                className={isDarkMode ? "text-white" : "text-gray-400"}
                onClick={() => setPasswordVisible(true)}
              />
            )
          }
        />
      </Form.Item>

      <Form.Item>
        <Link
          href="/reset-password"
          className="text-[#5B9BD5] hover:text-[#5B9BD5] hover:underline"
        >
          Forgot your password?
        </Link>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox
          className={
            isDarkMode
              ? "text-gray-300 [&>.ant-checkbox>.ant-checkbox-inner]:bg-transparent [&>.ant-checkbox>.ant-checkbox-inner]:border-gray-700"
              : "text-gray-900"
          }
        >
          Remember me
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={isLoading}
          size="large"
          className={`${globalStyles.button.primary.base} ${
            isDarkMode
              ? globalStyles.button.primary.dark
              : globalStyles.button.primary.light
          }`}
        >
          Sign in
        </Button>

        <div className="mt-4">
          <Button
            size="large"
            className={`flex items-center w-full justify-center ${
              isDarkMode
                ? `bg-transparent border-gray-700 text-white ${globalStyles.input.search.dark} hover:bg-transparent focus:bg-transparent`
                : "bg-transparent border-gray-300 text-gray-900 hover:bg-transparent focus:bg-transparent"
            }`}
            style={{
              backgroundColor: "transparent",
            }}
          >
            <img
              className="w-4 h-4 mr-2"
              src="images/gogole.svg"
              alt="google"
            />
            Sign up with Google
          </Button>
        </div>
      </Form.Item>
      <p className={`mt-6 text-center text-sm ${
        isDarkMode ? globalStyles.text.primary.white : "text-gray-500"
      }`}>
        Don't have an account?{" "}
        <Typography.Link
          className="text-[#5B9BD5] hover:text-[#5B9BD5] hover:underline"
          href="/register"
        >
          Sign up
        </Typography.Link>
      </p>
    </Form>
  );
};

export default LoginForm;
