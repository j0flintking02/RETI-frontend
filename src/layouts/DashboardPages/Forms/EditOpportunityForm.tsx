import { Form, Modal, Button, Select, Input, DatePicker, notification } from 'antd';
import { useEffect } from 'react';
import { useUpdateOpportunityMutation } from '../../../services/opportunities';
import moment from 'moment';

const { Option } = Select;

const EditOpportunityForm = ({ onOk, onCancel, open, loading, initialData }) => {
    const [form] = Form.useForm();
    const [updateJob] = useUpdateOpportunityMutation();

    // Set initial form values when the form opens
    useEffect(() => {
        if (initialData && open) {
            form.setFieldsValue({
                title: initialData.title,
                description: initialData.description,
                jobType: initialData.jobType,
                jobCategory: initialData.jobCategory,
                location: initialData.location,
                companyName: initialData.companyName,
                contactEmail: initialData.contactEmail,
                positions: initialData.positions,
                experience: initialData.experience,
                minSalary: initialData.salary?.min,
                maxSalary: initialData.salary?.max,
                applicationDeadline: moment(initialData.applicationDeadline)
            });
        }
    }, [initialData, open, form]);

    const handleSubmit = () => {
        form
            .validateFields()
            .then(async (values) => {
                try {
                    const formattedData = {
                        title: values.title?.trim(),
                        description: values.description?.trim(),
                        jobType: values.jobType,
                        jobCategory: values.jobCategory,
                        location: values.location?.trim(),
                        companyName: values.companyName?.trim(),
                        contactEmail: values.contactEmail?.trim().toLowerCase(),
                        positions: parseInt(values.positions),
                        experience: values.experience?.trim(),
                        salary: {
                            min: parseInt(values.minSalary),
                            max: parseInt(values.maxSalary)
                        },
                        applicationDeadline: values.applicationDeadline.format('YYYY-MM-DD')
                    };

                    
                    await updateJob({payload: formattedData, jobID: initialData.id}).unwrap();
                    
                    notification.success({
                        message: 'Success',
                        description: 'Job updated successfully'
                    });
                    
                    form.resetFields();
                    onOk();
                    
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                } catch (error) {
                    notification.error({
                        message: 'Error',
                        description: error?.data?.message || 'Failed to update job'
                    });
                }
            })
            .catch((info) => {
                notification.error({
                    message: 'Validation Error',
                    description: 'Please check all required fields'
                });
            });
    };

    return (
        <Modal
            open={open}
            onOk={onOk}
            onCancel={onCancel}
            width={600}
            title="Edit job"
            footer={[
                <Button key="back" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button 
                    key="submit" 
                    type="primary" 
                    loading={loading} 
                    onClick={handleSubmit}
                >
                    Save Changes
                </Button>
            ]}
        >
            <Form
                form={form}
                layout="vertical"
            >
                <Form.Item
                    label="Job Title"
                    name="title"
                    rules={[{ required: true, message: 'Please enter job title' }]}
                >
                    <Input placeholder="Enter job title" />
                </Form.Item>

                <Form.Item
                    label="Job Description"
                    name="description"
                    rules={[{ required: true, message: 'Please enter job description' }]}
                >
                    <Input.TextArea rows={4} placeholder="Enter job description" />
                </Form.Item>

                <Form.Item
                    label="Job Type"
                    name="jobType"
                    rules={[{ required: true, message: 'Please select job type' }]}
                >
                    <Select placeholder="Select job type">
                        <Option value="full-time">Full Time</Option>
                        <Option value="part-time">Part Time</Option>
                        <Option value="contract">Contract</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Job Category"
                    name="jobCategory"
                    rules={[{ required: true, message: 'Please select job category' }]}
                >
                    <Select placeholder="Select job category">
                        <Option value="it">IT</Option>
                        <Option value="marketing">Marketing</Option>
                        <Option value="finance">Finance</Option>
                        <Option value="skill">Skill</Option>
                        <Option value="sales">Sales</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Please enter location' }]}
                >
                    <Input placeholder="Enter location" />
                </Form.Item>

                <Form.Item
                    label="Company Name"
                    name="companyName"
                    rules={[{ required: true, message: 'Please enter company name' }]}
                >
                    <Input placeholder="Enter company name" />
                </Form.Item>

                <Form.Item
                    label="Contact Email"
                    name="contactEmail"
                    rules={[
                        { required: true, message: 'Please enter contact email' },
                        { type: 'email', message: 'Please enter a valid email' }
                    ]}
                >
                    <Input placeholder="Enter contact email" />
                </Form.Item>

                <Form.Item
                    label="Positions Available"
                    name="positions"
                    rules={[{ required: true, message: 'Please enter number of positions' }]}
                >
                    <Input type="number" min={1} placeholder="Enter number of positions" />
                </Form.Item>

                <Form.Item
                    label="Experience Required"
                    name="experience"
                    rules={[{ required: true, message: 'Please enter required experience' }]}
                >
                    <Input placeholder="Enter required experience" />
                </Form.Item>

                <Form.Item
                    label="Minimum Salary"
                    name="minSalary"
                    rules={[{ required: true, message: 'Please enter minimum salary' }]}
                >
                    <Input type="number" placeholder="Enter minimum salary" />
                </Form.Item>

                <Form.Item
                    label="Maximum Salary"
                    name="maxSalary"
                    rules={[{ required: true, message: 'Please enter maximum salary' }]}
                >
                    <Input type="number" placeholder="Enter maximum salary" />
                </Form.Item>

                <Form.Item
                    label="Application Deadline"
                    name="applicationDeadline"
                    rules={[{ required: true, message: 'Please select application deadline' }]}
                >
                    <DatePicker className="w-full" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditOpportunityForm;

