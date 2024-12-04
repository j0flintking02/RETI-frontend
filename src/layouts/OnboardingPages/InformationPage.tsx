import {Button, DatePicker, Form, Input, Select} from "antd";

const InformationPage = ({setInformData}) => {
    const [form] = Form.useForm();
    const {Option} = Select;
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{width: 80}} defaultValue="256">
                <Option value="256">+256</Option>
            </Select>
        </Form.Item>
    );
    return (
        <>
            <div className="text-xl/8 font-semibold text-gray-900 sm:text-lg/9">
                <p>General Information</p>
            </div>

            <Form
                form={form}
                layout="vertical"
                style={{maxWidth: '100%'}}
            >
                <Form.Item className="my-24">
                    <Form.Item
                        style={{display: 'inline-block', width: '50%', margin: '0'}}
                        label="First Name" name="firstName">
                        <Input
                            size="large"
                            placeholder="Enter your first name"
                            type="text"
                        />
                    </Form.Item>
                    <Form.Item
                        style={{display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 8px'}}
                        label="Last name" name="lastName">
                        <Input size="large" placeholder="Enter your Last name" type="text"/>
                    </Form.Item>
                </Form.Item>

                <Form.Item className="my-24">
                    <Form.Item
                        style={{display: 'inline-block', width: '50%', margin: '0'}}
                        label="Date of birth" name="dateOfBirth">
                        <DatePicker size="large" className="w-full" needConfirm/>
                    </Form.Item>

                    <Form.Item
                        style={{display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 8px'}}
                        label="Gender" name="gender">
                        <Input
                            size="large"
                            placeholder="Enter your gender"
                            type="text"/>
                    </Form.Item>
                </Form.Item>
                <Form.Item className="my-24">
                    <Form.Item
                        style={{display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 8px'}}
                        label="Email address" name="email">
                        <Input
                            size="large"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </Form.Item>
                    <Form.Item
                        style={{display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 0 0 8px'}}
                        label="Phone number" name="phoneNumber">
                        <Input size="large" addonBefore={prefixSelector}/>
                    </Form.Item>
                </Form.Item>
                <Form.Item className="my-24">
                    <Button type="default" block onClick={()=>{
                        const values = form.getFieldsValue();
                        setInformData(values);
                    }}>Save</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default InformationPage;
