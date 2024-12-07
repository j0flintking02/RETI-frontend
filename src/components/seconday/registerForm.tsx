import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, notification, Form, Typography } from "antd";
import { useEffect, useState, useContext } from "react";
import { useGoogleAuthMutation, useRegisterMutation } from "../../services/users.ts";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import { globalStyles } from "../../styles/globalStyles";
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
          label={
            <span className={`block ${globalStyles.text.secondary.base} ${
              isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
            }`}>
              Full name
            </span>
          }
          name="full_name"
        >
          <Input
            placeholder="Enter your full name"
            size="large"
            className={`w-full ${
              isDarkMode
                ? "bg-transparent border-gray-700 text-white placeholder-white focus:ring-0 focus:border-blue-500"
                : "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-blue-500"
            }`}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Form.Item>

        <Form.Item
          label={
            <span className={`block ${globalStyles.text.secondary.base} ${
              isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
            }`}>
              Email
            </span>
          }
          name="email"
        >
          <Input
            placeholder="Enter your email"
            size="large"
            className={`w-full ${
              isDarkMode
                ? "bg-transparent border-gray-700 text-white placeholder-white focus:ring-0 focus:border-blue-500"
                : "bg-transparent border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-0 focus:ring-blue-500"
            }`}
            style={{
              backgroundColor: "transparent",
            }}
          />
        </Form.Item>

        <Form.Item
          label={
            <span className={`block ${globalStyles.text.secondary.base} ${
              isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
            }`}>
              Password
            </span>
          }
          name="password"
        >
          <Input
            placeholder="Enter password"
            size="large"
            type={passwordVisible ? "text" : "password"}
            className={`w-full ${
              isDarkMode
                ? `bg-transparent border-gray-700 text-white ${globalStyles.input.search.dark}`
                : "bg-transparent border-gray-300 text-gray-900"
            }`}
            style={{
              backgroundColor: "transparent",
            }}
            suffix={
              passwordVisible ? (
                <EyeOutlined
                  className={isDarkMode ? "text-gray-300" : "text-gray-400"}
                  onClick={() => setPasswordVisible(false)}
                />
              ) : (
                <EyeInvisibleOutlined
                  className={isDarkMode ? "text-gray-300" : "text-gray-400"}
                  onClick={() => setPasswordVisible(true)}
                />
              )
            }
          />
        </Form.Item>

        <Form.Item
          label={
            <span className={`block ${globalStyles.text.secondary.base} ${
              isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
            }`}>
              Confirm password
            </span>
          }
          name="confirm_password"
        >
          <Input
            placeholder="Confirm password"
            size="large"
            type={confirmPasswordVisible ? "text" : "password"}
            className={`w-full ${
              isDarkMode
                ? `bg-transparent border-gray-700 text-white ${globalStyles.input.search.dark}`
                : "bg-transparent border-gray-300 text-gray-900"
            }`}
            style={{
              backgroundColor: "transparent",
            }}
            suffix={
              confirmPasswordVisible ? (
                <EyeOutlined
                  className={isDarkMode ? "text-gray-300" : "text-gray-400"}
                  onClick={() => setConfirmPasswordVisible(false)}
                />
              ) : (
                <EyeInvisibleOutlined
                  className={isDarkMode ? "text-gray-300" : "text-gray-400"}
                  onClick={() => setConfirmPasswordVisible(true)}
                />
              )
            }
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox 
            className={isDarkMode ? "text-gray-300 [&>.ant-checkbox>.ant-checkbox-inner]:bg-transparent [&>.ant-checkbox>.ant-checkbox-inner]:border-gray-700" : "text-gray-700"}
          >
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
            className={`w-full ${
              isDarkMode
                ? `bg-transparent border-gray-700 text-white ${globalStyles.input.search.dark} hover:bg-transparent focus:bg-transparent`
                : "bg-transparent border-gray-300 text-gray-900 hover:bg-transparent focus:bg-transparent"
            }`}
            style={{
              backgroundColor: "transparent",
            }}
          >
            <img className="w-4 h-4 mr-2" src="images/gogole.svg" alt="google" />
            Sign up with Google
          </Button>
        </div>
      </Form>

      <p className={`mt-6 text-center text-sm ${
        isDarkMode ? "text-gray-300" : "text-gray-500"
      }`}>
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
