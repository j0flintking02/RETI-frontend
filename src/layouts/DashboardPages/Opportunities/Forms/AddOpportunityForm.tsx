
import { Form, Input, Select, DatePicker, Button, Row, Col, Modal } from 'antd';
import 'antd/dist/reset.css';

const { TextArea } = Input;
const { Option } = Select;


const AddOpportunitiesForm = ({ onOk, onCancel, open, loading }) => {

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
                        <h2 className="text-lg font-semibold">Add Opportunity</h2>
                        <p className="text-sm font-normal text-gray-500">
                            Please fill in the form below to create a new opportunity. <br />
                            <span className="font-normal text-blue-500">Jobs will be seen by youth.</span>
                        </p>
                    </div>
                }
                footer={[
                    <Button key="back" onClick={onCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
                        Submit
                    </Button>,

                ]}
            >
                <div className="mt-4 p-2">

                    <Form
                        form={form}
                        layout="vertical"
                    >
                        <Row gutter={[16, 16]}>
                            {/* Job Title */}
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Job Title"
                                    name="jobTitle"
                                    rules={[{ required: true, message: 'Please enter the job title' }]}
                                >
                                    <Input placeholder="e.g., Sales Person" size='large' />
                                </Form.Item>
                            </Col>

                            {/* Job Category */}
                            <Col  xs={24} sm={12}>
                                <Form.Item
                                    label="Job Category"
                                    name="jobCategory"
                                    rules={[{ required: true, message: 'Please select a job category' }]}
                                >
                                    <Select placeholder="Select a category" size='large'>
                                        <Option value="it">IT</Option>
                                        <Option value="marketing">Marketing</Option>
                                        <Option value="finance">Finance</Option>
                                        <Option value="finance">Skill</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={[16, 16]}>
                            {/* Job Type */}
                            <Col  xs={24} sm={12}>
                                <Form.Item
                                    label="Job Type"
                                    name="jobType"
                                    rules={[{ required: true, message: 'Please select a job type' }]}
                                >
                                    <Select placeholder="Select job type" size='large'>
                                        <Option value="full-time">Full-Time</Option>
                                        <Option value="part-time">Part-Time</Option>
                                        <Option value="freelance">Freelance</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            {/* Location */}
                            <Col  xs={24} sm={12}>
                                <Form.Item
                                    label="Location"
                                    name="location"
                                    rules={[{ required: true, message: 'Please enter the job location' }]}
                                >
                                    <Input placeholder="e.g., Remote or City Name" size='large' />
                                </Form.Item>
                            </Col>
                        </Row>


                        <Row gutter={[16, 16]}>
                            {/* Minimum Salary */}
                            <Col xs={24} sm={12}>
                                <Form.Item label="Minimum Salary" name="minSalary">
                                    <Input placeholder="e.g., 50000" size='large' />
                                </Form.Item>
                            </Col>

                            {/* Maximum Salary */}
                            <Col xs={24} sm={12}>
                                <Form.Item label="Maximum Salary" name="maxSalary">
                                    <Input placeholder="e.g., 100000" size='large' />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={[16, 16]}>
                            {/* Application Deadline */}
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    label="Application Deadline"
                                    name="applicationDeadline"
                                    rules={[{ required: true, message: 'Please select a deadline' }]}
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
                                    <Input placeholder="e.g., hr@example.com" size='large' />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Job Description */}
                        <Form.Item
                            label="Job Description"
                            name="jobDescription"
                            rules={[{ required: true, message: 'Please enter the job description' }]}
                        >
                            <TextArea rows={4} placeholder="Describe the responsibilities and expectations" />
                        </Form.Item>

                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default AddOpportunitiesForm;

