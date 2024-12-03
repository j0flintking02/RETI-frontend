import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Input, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../../ThemeContext"; // Import the ThemeContext

const ChangePasswordSettings = () => {
    const { isDarkMode } = useContext(ThemeContext); // Access dark mode state from context

    const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    useEffect(() => {
        // Apply the dark mode class to the body based on the theme
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div className="mt-2">
            <Layout
                className={`transition-colors duration-500 ${isDarkMode ? "dark" : "light"}`} // Add transition for smooth mode change
            >
                <Content
                    className={`px-4 py-4 space-y-4 bg-white dark:bg-gray-900 border border-gray-900/10 dark:border-gray-700 rounded-lg`}
                >
                    <div className="sm:flex sm:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Change password</h2>
                            <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-300">Here you can change your password.</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <Button className="w-32 p-2">Cancel</Button>
                            <Button className="w-32 p-2" type="primary">
                                Save changes
                            </Button>
                        </div>
                    </div>

                    {/* inputs */}
                    <div className="py-4">
                        <div className="sm:w-9/12 space-y-4">
                            <div className="sm:w-6/12">
                                <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mb-2">Current password</label>
                                <Input
                                    placeholder="Enter your current password"
                                    size="large"
                                    type={currentPasswordVisible ? "text" : "password"}
                                    className={`bg-transparent border ${isDarkMode ? "border-gray-700" : "border-gray-300"} text-gray-900 dark:text-gray-300 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                                    suffix={
                                        currentPasswordVisible ? (
                                            <EyeOutlined className='text-gray-400' onClick={() => setCurrentPasswordVisible(false)} />
                                        ) : (
                                            <EyeInvisibleOutlined className='text-gray-400' onClick={() => setCurrentPasswordVisible(true)} />
                                        )
                                    }
                                />
                            </div>
                            <div className="sm:w-6/12">
                                <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mb-2">New password</label>
                                <Input
                                    placeholder="Enter your new password"
                                    size="large"
                                    type={newPasswordVisible ? "text" : "password"}
                                    className={`bg-transparent border ${isDarkMode ? "border-gray-700" : "border-gray-300"} text-gray-900 dark:text-gray-300 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                                    suffix={
                                        newPasswordVisible ? (
                                            <EyeOutlined className='text-gray-400' onClick={() => setNewPasswordVisible(false)} />
                                        ) : (
                                            <EyeInvisibleOutlined className='text-gray-400' onClick={() => setNewPasswordVisible(true)} />
                                        )
                                    }
                                />
                            </div>
                            <div className="sm:w-6/12">
                                <label className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100 mb-2">Confirm password</label>
                                <Input
                                    placeholder="Confirm your new password"
                                    size="large"
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    className={`bg-transparent border ${isDarkMode ? "border-gray-700" : "border-gray-300"} text-gray-900 dark:text-gray-300 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                                    suffix={
                                        confirmPasswordVisible ? (
                                            <EyeOutlined className='text-gray-400' onClick={() => setConfirmPasswordVisible(false)} />
                                        ) : (
                                            <EyeInvisibleOutlined className='text-gray-400' onClick={() => setConfirmPasswordVisible(true)} />
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
