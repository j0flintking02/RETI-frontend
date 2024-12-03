import { DownloadOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../ThemeContext"; // Import the ThemeContext

const MyDataSettings = () => {
    const { isDarkMode } = useContext(ThemeContext); // Access dark mode state

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
                    className={`px-4 py-4 space-y-4 bg-white dark:bg-gray-900 border border-gray-900/10 dark:border-gray-600 rounded-lg`}
                >
                    <div className="sm:flex sm:justify-between border-b border-gray-900/10 dark:border-gray-600 py-4">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">My data</h2>
                            <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-300">Here you can download all your data.</p>
                        </div>
                    </div>

                    {/* downloads */}
                    <div className="py-4">
                        <div className="sm:flex sm:justify-between border-b border-gray-900/10 dark:border-gray-600 py-4">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Messages</h2>
                                <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet </p>
                            </div>
                            <div className=" space-y-2">
                                <div className="flex items-center gap-x-3 pt-2">
                                    <Button className="px-4" icon={<DownloadOutlined />} size="large">
                                        Download your data
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="sm:flex sm:justify-between border-b border-gray-900/10 dark:border-gray-600 py-4">
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Profile</h2>
                                <p className="mt-1 text-sm/6 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet </p>
                            </div>
                            <div className=" space-y-2">
                                <div className="flex items-center gap-x-3 pt-2">
                                    <Button className="px-4" icon={<DownloadOutlined />} size="large">
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
