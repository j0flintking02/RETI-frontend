import {Button, Form, Input, Layout} from "antd";

import {Content} from "antd/es/layout/layout";


const ChangePasswordSettings = () => {
    const [form] = Form.useForm();
    const handleFinish = (values)=>{
        console.log(values, 'values')
    }

    return (
        <div className="mt-2">
            <Layout>
                <Content className="px-4 py-4 space-y-4 bg-white border border-gray-900/10 rounded-lg"
                >
                    <div className="sm:flex sm:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Change password</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">Here you can change your password.</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <Button className="w-32 p-2">
                                Cancel
                            </Button>
                            <Button htmlType="submit" form="passwordForm" className="w-32 p-2" type="primary">
                                Save changes
                            </Button>
                        </div>
                    </div>

                    {/* inputs */}
                    <Form
                        id="passwordForm"
                        name="passwordForm"
                        onFinish={handleFinish}
                        form={form}
                        layout="vertical"
                        className="sm:w-5/12 space-y-4">
                        <Form.Item
                            label="Current Password"
                            name="oldPassword"
                            rules={[
                                {required: true, message: 'Please input your password!'},
                                {min: 8, message: 'Password must be at least 8 characters!'},
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Enter your password"/>
                        </Form.Item>

                        <Form.Item
                            label="New Password"
                            name="password"
                            rules={[
                                {required: true, message: 'Please input your password!'},
                                {min: 8, message: 'Password must be at least 8 characters!'},
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Enter your password"/>
                        </Form.Item>

                        <Form.Item
                            label="Confirm Password"
                            name="confirmPassword"
                            dependencies={['password']}
                            rules={[
                                {required: true, message: 'Please confirm your password!'},
                                ({getFieldValue}) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Passwords do not match!'));
                                    },
                                }),
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Confirm your password"/>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </div>
    )
};

export default ChangePasswordSettings;