import { Button, Form, Input, Layout } from "antd";

import { Content } from "antd/es/layout/layout";

import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { globalStyles } from "../../../styles/globalStyles";
const ChangePasswordSettings = () => {
  const [form] = Form.useForm();
  const handleFinish = (values) => {
    console.log(values, "values");
  };
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="mt-2">
      <Content
        className={`px-4 py-4 space-y-4 rounded-lg ${
          isDarkMode
            ? `${globalStyles.background.dark} border-gray-700`
            : "bg-white border-gray-900/10"
        }`}
      >
        <div className="sm:flex sm:justify-between">
          <div>
            <h2
              className={`${globalStyles.heading.secondary} ${
                isDarkMode
                  ? globalStyles.heading.dark
                  : globalStyles.heading.light
              }`}
            >
              Change password
            </h2>
            <p
              className={`mt-1 ${globalStyles.text.secondary.base} ${
                isDarkMode
                  ? globalStyles.text.secondary.dark
                  : globalStyles.text.secondary.light
              }`}
            >
              Here you can change your password.
            </p>
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              className={`w-32 p-2 ${
                isDarkMode
                  ? "bg-transparent border border-gray-700 text-gray-300 hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-gray-100 hover:border-gray-600"
                  : "bg-transparent border border-gray-300 text-gray-700 hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-gray-900 hover:border-gray-400"
              }`}
              style={{
                backgroundColor: "transparent",
              }}
            >
              Cancel
            </Button>
            <Button
              htmlType="submit"
              form="passwordForm"
              className={`w-32 p-2 ${globalStyles.button.primary.base} ${
                isDarkMode
                  ? globalStyles.button.primary.dark
                  : globalStyles.button.primary.light
              }`}
              type="primary"
            >
              Save changes
            </Button>
          </div>
        </div>

        {/* inputs */}
        <Form
          id="passwordForm"
          name="passwordForm"
          onFinish={handleFinish}
          form={form}
          layout="vertical"
          className="sm:w-5/12 space-y-4"
        >
          <Form.Item
            label="Current Password"
            name="oldPassword"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 8, message: "Password must be at least 8 characters!" },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            label="New Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 8, message: "Password must be at least 8 characters!" },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>
        </Form>
      </Content>
    </div>
  );
};

export default ChangePasswordSettings;
