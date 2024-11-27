
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";

import { Content } from "antd/es/layout/layout";



const MyDataSettings = () => {




    return (
        <div className="mt-2">
            <Layout>
                <Content className="px-4 py-4 space-y-4 bg-white border border-gray-900/10 rounded-lg"
                >
                    <div className="sm:flex sm:justify-between  border-b border-gray-900/10 py-4">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">My data</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">Here you can download all your data.</p>
                        </div>
                    </div>

                    {/* downloads */}
                    <div className="py-4">
                        <div
                            className="sm:flex sm:justify-between border-b border-gray-900/10 py-4"
                        >
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
                                <p className="mt-1 text-sm/6 text-gray-600">Lorem ipsum dolor sit, amet </p>
                            </div>
                            <div className=" space-y-2">
                                <div className="flex items-center gap-x-3 pt-2">
                                    <Button className="px-4" icon={<DownloadOutlined />} size='large'>
                                        Download your data
                                    </Button>

                                </div>
                            </div>
                        </div>
                        <div
                            className="sm:flex sm:justify-between border-b border-gray-900/10 py-4"
                        >
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
                                <p className="mt-1 text-sm/6 text-gray-600">Lorem ipsum dolor sit, amet </p>
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