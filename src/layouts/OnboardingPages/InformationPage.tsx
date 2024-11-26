import { DatePicker, Input, Space } from "antd";

const InformationPage = () => {
    return (
        <div
            className="space-y-6"
        >
            <div className="mt-2">
                <div className="text-xl/8 font-semibold text-gray-900 sm:text-lg/9">
                    <p>General Information</p>
                </div>

            </div>
            <div className="mt-4">
                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label className="block text-sm/6 font-medium text-gray-900">First name</label>
                        <div className="mt-2">
                            <Input
                                size="large"
                                placeholder="Enter your first name"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label className="block text-sm/6 font-medium text-gray-900">Last name</label>
                        <div className="mt-2">
                            <Input
                                size="large"
                                placeholder="Enter your Last name"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label className="block text-sm/6 font-medium text-gray-900">Date of birth</label>
                        <div className="mt-2">
                            <DatePicker
                                size="large"
                                className="w-full"
                                needConfirm />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label className="block text-sm/6 font-medium text-gray-900">Gender</label>
                        <div className="mt-2">
                            <Input
                                size="large"
                                placeholder="Enter your gender"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label className="block text-sm/6 font-medium text-gray-900">Email address</label>
                        <div className="mt-2">
                            <Input
                                size="large"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label className="block text-sm/6 font-medium text-gray-900">Phone number</label>
                        <div className="mt-2">
                            <Space.Compact>
                                <Input size="large" className="w-20" defaultValue="+256" readOnly />
                                <Input size="large" defaultValue="786123456" />
                            </Space.Compact>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InformationPage;
