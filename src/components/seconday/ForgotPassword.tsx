import { useState } from 'react';
import { Button, Input } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { globalStyles } from "../../styles/globalStyles";

const ForgotPasswordForm = ({ isDarkMode }: { isDarkMode: boolean }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <div className={`mt-8 sm:mx-auto sm:w-full sm:max-w-sm`}>
            <form className="space-y-4">
                <div>
                    <label className={`block ${globalStyles.text.secondary.base} ${
                        isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                    }`}>
                        Password
                    </label>
                    <div className="mt-2">
                        <Input
                            placeholder="Enter password"
                            type={passwordVisible ? "text" : "password"}
                            suffix={
                                passwordVisible ? (
                                    <EyeOutlined
                                        className={`${globalStyles.text.secondary.base} ${
                                            isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                                        }`}
                                        onClick={() => setPasswordVisible(false)}
                                    />
                                ) : (
                                    <EyeInvisibleOutlined
                                        className={`${globalStyles.text.secondary.base} ${
                                            isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                                        }`}
                                        onClick={() => setPasswordVisible(true)}
                                    />
                                )
                            }
                            className={`${globalStyles.input.base} ${
                                isDarkMode ? globalStyles.input.dark : globalStyles.input.light
                            }`}
                        />
                    </div>
                </div>

                <div>
                    <label className={`block ${globalStyles.text.secondary.base} ${
                        isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                    }`}>
                        Confirm password
                    </label>
                    <div className="mt-2">
                        <Input
                            placeholder="Confirm password"
                            type={confirmPasswordVisible ? "text" : "password"}
                            suffix={
                                confirmPasswordVisible ? (
                                    <EyeOutlined
                                        className={`${globalStyles.text.secondary.base} ${
                                            isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                                        }`}
                                        onClick={() => setConfirmPasswordVisible(false)}
                                    />
                                ) : (
                                    <EyeInvisibleOutlined
                                        className={`${globalStyles.text.secondary.base} ${
                                            isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                                        }`}
                                        onClick={() => setConfirmPasswordVisible(true)}
                                    />
                                )
                            }
                            className={`${globalStyles.input.base} ${
                                isDarkMode ? globalStyles.input.dark : globalStyles.input.light
                            }`}
                        />
                    </div>
                </div>

                <div>
                    <Button
                        type="primary"
                        className={`w-full ${globalStyles.button.primary.base} ${
                            isDarkMode ? globalStyles.button.primary.dark : globalStyles.button.primary.light
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
