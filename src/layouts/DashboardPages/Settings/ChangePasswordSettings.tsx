import { Button, Col, Form, Input, Layout, Row } from "antd";

import { Content } from "antd/es/layout/layout";


const ChangePasswordSettings = () => {
    const [form] = Form.useForm();
    const handleFinish = (values) => {
        console.log(values, 'values')
    }

    return (
        <div className="mt-2">
            <Layout>
                <Content className="p-8 space-y-10 bg-white border border-gray-900/10 rounded-lg"
                >
                  
                    <div>
                        <div className="sm:flex sm:justify-between">
                            <div>
                                <h2 className="text-md font-semibold text-gray-900">Change password</h2>
                                <p className="py-2 text-sm/6 text-gray-600">Here you can change your password.</p>
                            </div>
                        </div>

                        {/* inputs */}
                        <Form form={form} layout="vertical" >
                            <Row gutter={[16, 16]}>
                                {/* Job Title */}
                                <Col span={8}>
                                    <Form.Item
                                        label="Current Password"
                                        name="oldPassword"
                                        rules={[
                                            { required: true, message: 'Please input your password!' },
                                            { min: 8, message: 'Password must be at least 8 characters!' },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password placeholder="Enter your current password" size="large" />
                                    </Form.Item>
                                </Col>

                                <Col span={8}>
                                    <Form.Item
                                        label="New Password"
                                        name="password"
                                        rules={[
                                            { required: true, message: 'Please input your password!' },
                                            { min: 8, message: 'Password must be at least 8 characters!' },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password placeholder="Enter your password" size="large" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>

                        <Button htmlType="submit" form="passwordForm" type="primary">
                            Save
                        </Button>
                    </div>

                    <div>
                        <div className="sm:flex sm:justify-between">
                            <div>
                                <h2 className="text-md font-semibold text-gray-900">Change email</h2>
                                <p className="py-2 text-sm/6 text-gray-600">Here you can change your email.</p>
                            </div>
                        </div>

                        {/* inputs */}
                        <Form form={form} layout="vertical" >
                            <Row gutter={[16, 16]}>
                                {/* Job Title */}
                                <Col span={8}>
                                    <Form.Item
                                        label="New Email Address"
                                        name="oldPassword"
                                        rules={[
                                            { required: true, message: 'Please input your password!' },
                                            { min: 8, message: 'Password must be at least 8 characters!' },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password placeholder="john@gmail.com" size="large" />
                                    </Form.Item>
                                </Col>

                                <Col span={8}>
                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            { required: true, message: 'Please input your password!' },
                                            { min: 8, message: 'Password must be at least 8 characters!' },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password placeholder="Enter your password" size="large" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>

                        <Button htmlType="submit" form="passwordForm" type="primary">
                            Save
                        </Button>
                    </div>

                    <div>
                        <div className="mb-2">
                           
                                <h2 className="text-md font-semibold text-gray-900">Deactivate Accont</h2>
                           
                        </div>

                        <Button htmlType="submit" size='large' form="passwordForm">
                           Deactivate my account
                        </Button>
                    </div>
                   
                </Content>
            </Layout>
        </div>
    )
};

export default ChangePasswordSettings;