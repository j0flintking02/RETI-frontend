import CustomAppTitle from '../../../components/secondary/CustomAppTitle';
import { Content } from 'antd/es/layout/layout';
import CustomDashboardLayout from '../../../components/secondary/CustomDashboardPagesLayout';
import Header from '../../../components/secondary/Header';
import { Avatar, Button, Form, Input } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { InboxOutlined, UserOutlined } from '@ant-design/icons';


const  UsersDetailsPage = () => {
  
    return (
        <div>
            <Header pageTitle="User Details" />
            <CustomAppTitle showBackButton={true}></CustomAppTitle>
            <CustomDashboardLayout>
                <Content className="bg-white px-8 py-8 mt-2 border border-gray-900/10 rounded-lg relative">
                <div className="py-4">
                <Form layout="vertical"  initialValues={{
                }}>

                    <div>
                        <div className="sm:flex sm:justify-between">
                            <div>
                                <h2 className="text-md font-semibold text-gray-900">Bio Data</h2>
                            </div>
                        </div>

                        {/* profile picture and inputs */}
                        <div className="sm:flex gap-10 py-4">
                            <div>
                                <Avatar size={80} icon={<UserOutlined />} />
                                <p className="text-md font-semibold mt-2">John Doe </p>
                            </div>

                            {/* {isLoading && <div className="w-auto text-center">
                                <Spin size="large" />
                            </div>} */}

                            <div className="w-full">
                                <Form.Item>
                                    <div style={{ width: '100%', display: 'flex', gap: '16px' }}>
                                        <Form.Item
                                            label="First Name"
                                            name="firstName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your first name"
                                                type="text"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Last Name"
                                            name="lastName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your last name"
                                                type="text"
                                            />
                                        </Form.Item>
                                    </div>

                                    <Form.Item
                                       
                                        label="Phone number" name="phoneNumber">
                                        <Input size="large" />
                                    </Form.Item>

                                    <Form.Item

                                        label="Role" >
                                        <div className="bg-gray-200 p-3 rounded text-sm">Tailor</div>
                                    </Form.Item>
                                </Form.Item>
                            </div>
                        </div>
                    </div>

                    {/* account */}


                    <div>
                        <div className="sm:flex sm:justify-between">
                            <div>
                                <h2 className="text-md font-semibold text-gray-900">Address</h2>
                            </div>
                        </div>

                        {/* profile picture and inputs */}
                        <div className="sm:flex gap-10 py-4">


                           

                            <div className="w-full">
                                <Form.Item>
                                    <div style={{ width: '100%', display: 'flex', gap: '16px' }}>
                                        <Form.Item
                                            label="Street"
                                            name="firstName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your first name"
                                                type="text"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Plot Number"
                                            name="lastName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your last name"
                                                type="text"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div style={{ width: '100%', display: 'flex', gap: '16px' }}>
                                        <Form.Item
                                            label="City"
                                            name="firstName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your first name"
                                                type="text"
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Country"
                                            name="lastName"
                                            style={{ flex: 1 }}
                                        >
                                            <Input
                                                size="large"
                                                placeholder="Enter your last name"
                                                type="text"
                                            />
                                        </Form.Item>
                                    </div>


                                </Form.Item>
                            </div>
                        </div>
                    </div>

                    {/* id */}


                    <div>
                        <div className="sm:flex sm:justify-between">
                            <div>
                                <h2 className="text-md font-semibold text-gray-900">Identification</h2>
                            </div>
                        </div>

                        {/* profile picture and inputs */}
                        <div className="sm:flex gap-10 py-4">
                            
                           

                            <div className="w-full">
                                <Form.Item>
                                    <Dragger>
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Drag and drop or click to upload</p>
                                        <p className="ant-upload-hint">
                                           PNG, JPG accepted. Max 5MB
                                        </p>
                                    </Dragger>

                                </Form.Item>
                            </div>
                        </div>
                    </div>


                    <Button className="float-end" htmlType="submit" form="passwordForm" type="primary">
                        Save
                    </Button>



                </Form>
            </div>
                </Content>
            </CustomDashboardLayout>
        </div>
    );
};

export default UsersDetailsPage;