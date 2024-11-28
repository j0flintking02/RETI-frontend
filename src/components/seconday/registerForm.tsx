import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { useState } from "react";

const { Title, Text, Link } = Typography;


const RegisterForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <>
            <div className="">
                <Form className="space-y-4">
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">Full name</label>
                        <div className="mt-2">
                            <Input
                                size='large'
                                placeholder="Enter your full name"
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">Email</label>
                        <div className="mt-2">
                            <Input
                                size='large'
                                placeholder="Enter your email"
                                type="Email"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">Password</label>
                        <div className="mt-2">
                            <Input
                                size='large'
                                placeholder="Enter password"
                                type={passwordVisible ? "text" : "password"}
                                suffix={
                                    passwordVisible ? (
                                        <EyeOutlined className='text-gray-400' onClick={() => setPasswordVisible(false)} />
                                    ) : (
                                        <EyeInvisibleOutlined className='text-gray-400' onClick={() => setPasswordVisible(true)} />
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm/6 font-medium text-gray-900">Confirm password</label>
                        <div className="mt-2">
                            <Input
                                size='large'
                                placeholder="Confirm password"
                                type={confirmPasswordVisible ? "text" : "password"}
                                suffix={
                                    confirmPasswordVisible ? (
                                        <EyeOutlined className='text-gray-400'
                                            onClick={() => setConfirmPasswordVisible(false)} />
                                    ) : (
                                        <EyeInvisibleOutlined className='text-gray-400' onClick={() => setConfirmPasswordVisible(true)} />
                                    )
                                }
                            />
                        </div>
                    </div>

                    <div className="text-sm py-4">
                        <Checkbox >Remember me</Checkbox>

                    </div>

                    <div>
                        <Button size='large' type="primary" className="flex w-full justify-center px-3 py-4 text-sm/6 font-semibold text-white">Sign up</Button>
                    </div>
                    <div className="mt-4">
                        <Button size='large' className="flex items-center w-full justify-center px-3 py-4 text-sm font-semibold  text-gray-700 hover:bg-gray-100">
                            <img className="w-4 h-4 mr-2" src='images/gogole.svg' alt="google" />
                            Sign up with Google
                        </Button>
                    </div>

                </Form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account? {''}
                    <Link href="/login" className="text-[#5B9BD5] hover:text-[#5B9BD5] hover:underline">Sign in</Link>
                </p>
            </div>
        </>
    )
}

export default RegisterForm;