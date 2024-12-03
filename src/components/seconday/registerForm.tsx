import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, notification, Form, Typography } from "antd";
import { useEffect, useState, useContext } from "react";
import { useGoogleAuthMutation, useRegisterMutation } from "../../services/users.ts";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

const RegisterForm = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [registerUser, { isLoading, isSuccess, data }] = useRegisterMutation();
  const [googleAuth] = useGoogleAuthMutation();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: never) => {
    try {
      await registerUser(values).unwrap();
    } catch (e) {
      notification.error({
        message: e,
        description: "Something went wrong",
      });
    }
  };

  const onFinishFailed = (errorInfo: never) => {
    notification.error({
      message: errorInfo,
      description: "Something went wrong",
    });
  };

  const handleGoogleAuth = async () => {
    await googleAuth().unwrap();
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
  }, [isSuccess, data]);

  return (
    <div>
      <Form layout="vertical" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label={<span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Full name</span>}
          name="full_name"
        >
          <Input
            placeholder="Enter your full name"
            type="text"
            size="large"
            className={`bg-transparent border ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            } text-gray-900 dark:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
              isDarkMode ? "placeholder-gray-500" : "placeholder-gray-500"
            }`}
          />
        </Form.Item>

        <Form.Item
          label={<span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Email</span>}
          name="email"
        >
          <Input
            placeholder="Enter your email"
            type="email"
            size="large"
            className={`bg-transparent border ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            } text-gray-900 dark:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
              isDarkMode ? "placeholder-gray-500" : "placeholder-gray-500"
            }`}
          />
        </Form.Item>

        <Form.Item
          label={<span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Password</span>}
          name="password"
        >
          <Input
            size="large"
            placeholder="Enter password"
            type={passwordVisible ? "text" : "password"}
            suffix={
              passwordVisible ? (
                <EyeOutlined
                  className="text-gray-400"
                  onClick={() => setPasswordVisible(false)}
                />
              ) : (
                <EyeInvisibleOutlined
                  className="text-gray-400"
                  onClick={() => setPasswordVisible(true)}
                />
              )
            }
            className={`bg-transparent border ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            } text-gray-900 dark:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
              isDarkMode ? "placeholder-gray-500" : "placeholder-gray-500"
            }`}
          />
        </Form.Item>

        <Form.Item
          label={<span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Confirm password</span>}
        >
          <Input
            size="large"
            placeholder="Confirm password"
            type={confirmPasswordVisible ? "text" : "password"}
            suffix={
              confirmPasswordVisible ? (
                <EyeOutlined
                  className="text-gray-400"
                  onClick={() => setConfirmPasswordVisible(false)}
                />
              ) : (
                <EyeInvisibleOutlined
                  className="text-gray-400"
                  onClick={() => setConfirmPasswordVisible(true)}
                />
              )
            }
            className={`bg-transparent border ${
              isDarkMode ? "border-gray-700" : "border-gray-300"
            } text-gray-900 dark:text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
              isDarkMode ? "placeholder-gray-500" : "placeholder-gray-500"
            }`}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
            Remember me
          </Checkbox>
        </Form.Item>

        <div>
          <Button block htmlType="submit" type="primary" size="large" loading={isLoading}>
            Sign up
          </Button>
        </div>

        <div className="mt-4">
          <Button
            size="large"
            onClick={handleGoogleAuth}
            className="flex items-center w-full justify-center px-3 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            <img className="w-4 h-4 mr-2" src="images/gogole.svg" alt="google" />
            Sign up with Google
          </Button>
        </div>
      </Form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Typography.Link
          className="text-[#5B9BD5] hover:text-[#5B9BD5] hover:underline"
          href="/login"
        >
          Sign in
        </Typography.Link>
      </p>
    </div>
  );
};

export default RegisterForm;
