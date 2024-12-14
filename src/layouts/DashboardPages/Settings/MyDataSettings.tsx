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
            <Layout>
                <Content className={`px-4 py-4 space-y-4 rounded-lg ${
                    isDarkMode 
                        ? `${globalStyles.background.dark} border-gray-700` 
                        : 'bg-white border-gray-900/10'
                }`}>
                    <div className={`sm:flex sm:justify-between border-b py-4 ${
                        isDarkMode ? 'border-gray-700' : 'border-gray-300'
                    }`}>
                        <div>
                            <h2 className={`${globalStyles.heading.secondary} ${
                                isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
                            }`}>My data</h2>
                            <p className={`mt-1 ${globalStyles.text.secondary.base} ${
                                isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                            }`}>Here you can download all your data.</p>
                        </div>
                    </div>

                    {/* downloads */}
                    <div className="py-4">
                        <div
                            className={`sm:flex sm:justify-between border-b py-4 ${
                                isDarkMode ? 'border-gray-700' : 'border-gray-300'
                            }`}
                        >
                            <div>
                                <h2 className={`${globalStyles.heading.secondary} ${
                                    isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
                                }`}>Messages</h2>
                                <p className={`mt-1 ${globalStyles.text.secondary.base} ${
                                    isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                                }`}>Lorem ipsum dolor sit, amet </p>
                            </div>
                            <div className=" space-y-2">
                                <div className="flex items-center gap-x-3 pt-2">
                                    <Button className={`px-4 ${
                                            isDarkMode 
                                                ? "bg-transparent border border-gray-700 text-gray-300 hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-gray-100 hover:border-gray-600" 
                                                : "bg-transparent border border-gray-300 text-gray-700 hover:bg-transparent focus:bg-transparent active:bg-transparent hover:text-gray-900 hover:border-gray-400"
                                        }`} 
                                        icon={<DownloadOutlined />} 
                                        size="large"
                                        style={{
                                            backgroundColor: 'transparent'
                                        }} size='large'>
                                        Download your data
                                    </Button>

                                </div>
                            </div>
                        </div>
                        <div
                           className={`sm:flex sm:justify-between border-b py-4 ${
                            isDarkMode ? 'border-gray-700' : 'border-gray-300'
                        }`}
                        >
                            <div>
                                <h2 className={`${globalStyles.heading.secondary} ${
                                    isDarkMode ? globalStyles.heading.dark : globalStyles.heading.light
                                }`}>Profile</h2>
                                <p className={`mt-1 ${globalStyles.text.secondary.base} ${
                                    isDarkMode ? globalStyles.text.secondary.dark : globalStyles.text.secondary.light
                                }`}>Lorem ipsum dolor sit, amet </p>
                            </div>
                            <div className=" space-y-2">
                                <div className="flex items-center gap-x-3 pt-2">
                                    <Button className="px-4" icon={<DownloadOutlined />} size='large'>
                                        Download your data
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </div>
    )
};

export default MyDataSettings;