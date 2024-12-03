import { useState } from 'react';
import { Button, Input } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const ForgotPasswordForm = ({ isDarkMode }: { isDarkMode: boolean }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <div className={`mt-8 sm:mx-auto sm:w-full sm:max-w-sm`}>
            <form className="space-y-4">
                <div>
                    <label
                        className={`block text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-900"}`}
                    >
                        Password
                    </label>
                    <div className="mt-2">
                        <Input
                            placeholder="Enter password"
                            type={passwordVisible ? "text" : "password"}
                            suffix={
                                passwordVisible ? (
                                    <EyeOutlined
                                        className={`${isDarkMode ? "text-gray-300" : "text-gray-400"}`}
                                        onClick={() => setPasswordVisible(false)}
                                    />
                                ) : (
                                    <EyeInvisibleOutlined
                                        className={`${isDarkMode ? "text-gray-300" : "text-gray-400"}`}
                                        onClick={() => setPasswordVisible(true)}
                                    />
                                )
                            }
                            className={`${
                                isDarkMode
                                    ? "bg-gray-800 text-gray-500 border-gray-400"
                                    : "bg-white text-gray-900 border-gray-300"
                            } placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                        />
                    </div>
                </div>

                <div>
                    <label
                        className={`block text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-900"}`}
                    >
                        Confirm password
                    </label>
                    <div className="mt-2">
                        <Input
                            placeholder="Confirm password"
                            type={confirmPasswordVisible ? "text" : "password"}
                            suffix={
                                confirmPasswordVisible ? (
                                    <EyeOutlined
                                        className={`${isDarkMode ? "text-gray-300" : "text-gray-400"}`}
                                        onClick={() => setConfirmPasswordVisible(false)}
                                    />
                                ) : (
                                    <EyeInvisibleOutlined
                                        className={`${isDarkMode ? "text-gray-300" : "text-gray-400"}`}
                                        onClick={() => setConfirmPasswordVisible(true)}
                                    />
                                )
                            }
                            className={`${
                                isDarkMode
                                    ? "bg-gray-800 text-gray-300 border-gray-400"
                                    : "bg-white text-gray-900 border-gray-300"
                            } placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
                        />
                    </div>
                </div>

                <div>
                    <Button
                        type="primary"
                        className={`flex w-full justify-center px-3 py-4 text-sm font-semibold ${
                            isDarkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
                        }`}
                    >
                        Change password
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
