import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Input, Layout } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Content } from "antd/es/layout/layout";


const PersonalInformationSettings = () => {
    return (
        <div className="mt-2">
            <Layout>
                <Content className="px-4 py-4 space-y-4 bg-white border border-gray-900/10 rounded-lg"
                >
                    <div className="sm:flex sm:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">Update your photo and personal details here.</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <Button className="w-32 p-2" >
                                Cancel
                            </Button>
                            <Button className="w-32 p-2" type="primary" >
                                Save changes
                            </Button>
                        </div>
                    </div>

                    {/* profile picture and inputs */}
                    <div className="sm:flex gap-2 border-b border-gray-900/10 py-8">
                        <div className="sm:w-3/12 text-center text-gray-900 mb-8">
                            <div>
                                <Avatar size={80} icon={<UserOutlined />} />
                                <p className="text-md font-semibold mt-2">Jenny Blum</p>
                                <Button type="text" icon={<EditOutlined />} className="text-blue-500 mt-2">
                                    Change avator
                                </Button>
                            </div>
                        </div>

                        <div className="sm:w-9/12 space-y-4">
                            <div className="sm:flex gap-4">
                                <div className="sm:w-6/12">
                                    <label className="block text-sm/6 font-medium text-gray-900 mb-2">First name</label>
                                    <Input value='John' size="large" />
                                </div>
                                <div className="sm:w-6/12">
                                    <label className="block text-sm/6 font-medium text-gray-900 mb-2">Last name</label>
                                    <Input value='Doe' size="large" />
                                </div>
                            </div>
                            <div className="sm:flex gap-4">
                                <div className="sm:w-6/12">
                                    <label className="block text-sm/6 font-medium text-gray-900 mb-2">Date of birth</label>
                                    <Input value='28/12/2009' size="large" />
                                </div>
                                <div className="sm:w-6/12">
                                    <label className="block text-sm/6 font-medium text-gray-900 mb-2">Gender</label>
                                    <Input value='Male' size="large" />
                                </div>
                            </div>
                            <div className="sm:flex gap-4">
                                <div className="sm:w-6/12">
                                    <label className="block text-sm/6 font-medium text-gray-900 mb-2">Email address</label>
                                    <Input value='johnd@gmail.com' size="large" />
                                </div>
                                <div className="sm:w-6/12">
                                    <label className="block text-sm/6 font-medium text-gray-900 mb-2">Phone number</label>
                                    <Input value='+256787123456' size="large" />
                                </div>
                            </div>
                            <div className="sm:flex gap-4">
                                <div className="sm:w-full">
                                    <label className="block text-sm/6 font-medium text-gray-900 mb-2">About</label>
                                    <TextArea value='Lorem ipsum dolor sit' size="large" />
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="mt-10">
                        <Alert
                            message="Delete your account"
                            className="p-4 flex"
                            // showIcon
                            description="Once you delete your account, all your data will be permanently removed."
                            type="error"
                            action={
                                <Button size="large" danger>
                                    Delete your account
                                </Button>
                            }
                        />
                    </div>
                </Content>
            </Layout>
        </div>
    )
};

export default PersonalInformationSettings;