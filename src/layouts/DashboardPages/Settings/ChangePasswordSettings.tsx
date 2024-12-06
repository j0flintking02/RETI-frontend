import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Input, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState, useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { globalStyles } from "../../../styles/globalStyles";

const ChangePasswordSettings = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="mt-2">
      <Layout
        className={`${globalStyles.container.card.base} ${
          isDarkMode
            ? `${globalStyles.background.dark} border-[#3A3B3C]`
            : globalStyles.container.card.light
        }`}
      >
        <Content className="px-4 py-4 space-y-4">
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

          <div className="py-4">
            <div className="sm:w-9/12 space-y-4">
              {/* Current Password */}
              <div className="sm:w-6/12">
                <label
                  className={`block mb-2 ${globalStyles.text.primary.base} ${
                    isDarkMode
                      ? globalStyles.text.primary.dark
                      : globalStyles.text.primary.light
                  }`}
                >
                  Current password
                </label>
                <Input
                  placeholder="Enter your current password"
                  size="large"
                  type={currentPasswordVisible ? "text" : "password"}
                  className={`w-full ${
                    isDarkMode
                      ? `bg-transparent border-gray-700 text-white ${globalStyles.input.search.dark}`
                      : "bg-transparent border-gray-300 text-gray-900"
                  }`}
                  style={{
                    backgroundColor: "transparent",
                  }}
                  suffix={
                    currentPasswordVisible ? (
                      <EyeOutlined
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-400"
                        }
                        onClick={() => setCurrentPasswordVisible(false)}
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-400"
                        }
                        onClick={() => setCurrentPasswordVisible(true)}
                      />
                    )
                  }
                />
              </div>

              {/* New Password */}
              <div className="sm:w-6/12">
                <label
                  className={`block mb-2 ${globalStyles.text.primary.base} ${
                    isDarkMode
                      ? globalStyles.text.primary.dark
                      : globalStyles.text.primary.light
                  }`}
                >
                  New password
                </label>
                <Input
                  placeholder="Enter your new password"
                  size="large"
                  type={newPasswordVisible ? "text" : "password"}
                  className={`w-full ${
                    isDarkMode
                      ? `bg-transparent border-gray-700 text-white ${globalStyles.input.search.dark}`
                      : "bg-transparent border-gray-300 text-gray-900"
                  }`}
                  style={{
                    backgroundColor: "transparent",
                  }}
                  suffix={
                    newPasswordVisible ? (
                      <EyeOutlined
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-400"
                        }
                        onClick={() => setNewPasswordVisible(false)}
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-400"
                        }
                        onClick={() => setNewPasswordVisible(true)}
                      />
                    )
                  }
                />
              </div>

              {/* Confirm Password */}
              <div className="sm:w-6/12">
                <label
                  className={`block mb-2 ${globalStyles.text.primary.base} ${
                    isDarkMode
                      ? globalStyles.text.primary.dark
                      : globalStyles.text.primary.light
                  }`}
                >
                  Confirm password
                </label>
                <Input
                  placeholder="Confirm your new password"
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
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-400"
                        }
                        onClick={() => setConfirmPasswordVisible(false)}
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        className={
                          isDarkMode ? "text-gray-300" : "text-gray-400"
                        }
                        onClick={() => setConfirmPasswordVisible(true)}
                      />
                    )
                  }
                />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default ChangePasswordSettings;
