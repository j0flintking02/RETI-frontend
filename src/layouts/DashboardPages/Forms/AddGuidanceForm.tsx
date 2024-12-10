import { Form, Input, Select, DatePicker, Button, Row, Col, Modal } from 'antd';
import 'antd/dist/reset.css';

const { TextArea } = Input;
const { Option } = Select;

const AddInspirationsForm = ({ onOk, onCancel, open, loading }) => {

    const [form] = Form.useForm();

    const handleSubmit = () => {
        form
            .validateFields() // Validate form fields
            .then((values) => {
                console.log('Form Values:', values); // Replace with actual submission logic
                onOk(); // close modal
            })
            .catch((info) => {
                console.log('Validation Failed:', info);
            });
    };

    return (
        <div className="space-y-4">
            <Modal
                open={open}
                onOk={onOk}
                onCancel={onCancel}
                width={600}
                title={
                    <div>
                        <h2 className="text-lg font-semibold">Create an Inspiration</h2>
                        <p className="text-sm font-normal text-gray-500">
                            Please fill in the form below to create a new inspiration or guidance. <br />
                            <span className="font-normal text-blue-500">This will be visible to others seeking inspiration.</span>
                        </p>
                    </div>
                }
                footer={[
                    <Button key="back" onClick={onCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
                        Submit
                    </Button>
                ]}
            >
                <div className="mt-4 p-2">
                    <Form
                        form={form}
                        layout="vertical"
                    >
                        <Row gutter={[16, 16]}>
                            {/* Inspiration Title */}
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Inspiration Title"
                                    name="inspirationTitle"
                                    rules={[{ required: true, message: 'Please enter the inspiration title' }]}
                                >
                                    <Input placeholder="e.g., Overcoming Challenges" size='large' />
                                </Form.Item>
                            </Col>

                            {/* Inspiration Category */}
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Inspiration Category"
                                    name="inspirationCategory"
                                    rules={[{ required: true, message: 'Please select a category' }]}
                                >
                                    <Select placeholder="Select a category" size='large'>
                                        <Option value="personal-growth">Personal Growth</Option>
                                        <Option value="career">Career</Option>
                                        <Option value="mindset">Mindset</Option>
                                        <Option value="success">Success</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={[16, 16]}>
                            {/* Source of Inspiration */}
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Source of Inspiration"
                                    name="sourceOfInspiration"
                                    rules={[{ required: true, message: 'Please enter the source of inspiration' }]}
                                >
                                    <Input placeholder="e.g., Book, Person, Event" size='large' />
                                </Form.Item>
                            </Col>

                            {/* Location or Context */}
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Location/Context"
                                    name="locationOrContext"
                                    rules={[{ required: true, message: 'Please enter the location or context' }]}
                                >
                                    <Input placeholder="e.g., Online, Event, Specific Place" size='large' />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={[16, 16]}>
                            {/* Audience */}
                            <Col xs={24} sm={12}>
                                <Form.Item label="Audience" name="audience">
                                    <Input placeholder="e.g., Youth, Entrepreneurs" size='large' />
                                </Form.Item>
                            </Col>

                            {/* Deadline or Timeframe */}
                            <Col xs={24} sm={12}>
                                <Form.Item label="Deadline/Timeframe" name="deadlineOrTimeframe">
                                    <Input placeholder="e.g., 3 Months" size='large' />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={[16, 16]}>
                            {/* Date of Creation */}
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Date of Creation"
                                    name="creationDate"
                                    rules={[{ required: true, message: 'Please select the creation date' }]}
                                >
                                    <DatePicker className="w-full" size='large' />
                                </Form.Item>
                            </Col>

                            {/* Contact Email */}
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Contact Email"
                                    name="contactEmail"
                                    rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                                >
                                    <Input placeholder="e.g., info@example.com" size='large' />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Inspiration Description */}
                        <Form.Item
                            label="Inspiration Description"
                            name="inspirationDescription"
                            rules={[{ required: true, message: 'Please enter the description' }]}
                        >
                            <TextArea rows={4} placeholder="Type the inspiration or guidance" />
                        </Form.Item>

                    </Form>
                </div>
            </Modal>
        </div>
    );
}

export default AddInspirationsForm;
