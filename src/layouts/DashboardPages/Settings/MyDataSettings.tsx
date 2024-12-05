import { DownloadOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { globalStyles } from "../../../styles/globalStyles";

const MyDataSettings = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className="mt-2">
            <Layout className={`${globalStyles.container.card.base} ${
                isDarkMode ? globalStyles.background.dark : globalStyles.container.card.light
            }`}>
                <Content className="px-4 py-4 space-y-4">
                    <div className={`sm:flex sm:justify-between border-b py-4 ${
                        isDarkMode ? 'border-gray-700' : 'border-gray-300'
                    }`}>
                        <div>
                            <h2 className={`${globalStyles.heading.secondary} ${
                                isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
                            }`}>
                                My data
                            </h2>
                            <p className={`mt-1 ${globalStyles.text.secondary.base} ${
                                isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                            }`}>
                                Here you can download all your data.
                            </p>
                        </div>
                    </div>

                    <div className="py-4">
                        {/* Messages Section */}
                        <div className={`sm:flex sm:justify-between border-b py-4 ${
                            isDarkMode ? 'border-gray-700' : 'border-gray-300'
                        }`}>
                            <div>
                                <h2 className={`${globalStyles.heading.secondary} ${
                                    isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
                                }`}>
                                    Messages
                                </h2>
                                <p className={`mt-1 ${globalStyles.text.secondary.base} ${
                                    isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                                }`}>
                                    Lorem ipsum dolor sit, amet
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-x-3 pt-2">
                                    <Button 
                                        className={`px-4 ${globalStyles.button.secondary.base} ${
                                            isDarkMode ? globalStyles.button.secondary.dark : globalStyles.button.secondary.light
                                        }`} 
                                        icon={<DownloadOutlined />} 
                                        size="large"
                                    >
                                        Download your data
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Profile Section */}
                        <div className={`sm:flex sm:justify-between border-b py-4 ${
                            isDarkMode ? 'border-gray-700' : 'border-gray-300'
                        }`}>
                            <div>
                                <h2 className={`${globalStyles.heading.secondary} ${
                                    isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
                                }`}>
                                    Profile
                                </h2>
                                <p className={`mt-1 ${globalStyles.text.secondary.base} ${
                                    isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                                }`}>
                                    Lorem ipsum dolor sit, amet
                                </p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-x-3 pt-2">
                                    <Button 
                                        className={`px-4 ${globalStyles.button.secondary.base} ${
                                            isDarkMode ? globalStyles.button.secondary.dark : globalStyles.button.secondary.light
                                        }`} 
                                        icon={<DownloadOutlined />} 
                                        size="large"
                                    >
                                        Download your data
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </div>
    );
};

export default MyDataSettings;
