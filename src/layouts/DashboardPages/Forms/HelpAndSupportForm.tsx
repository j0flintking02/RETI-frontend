import { Form, Input, Button, Modal } from 'antd';
import 'antd/dist/reset.css';
import { useContext } from 'react';
import { ThemeContext } from '../../../ThemeContext';
import { globalStyles } from '../../../styles/globalStyles';

const { TextArea } = Input;

const HelpandsupportForm = ({ onOk, onCancel, open, loading }) => {
    const [form] = Form.useForm();
    const { isDarkMode } = useContext(ThemeContext);

    const handleSubmit = () => {
        form
            .validateFields()
            .then((values) => {
                console.log('Form Values:', values);
                onOk();
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
                style={{ backdropFilter: 'blur(10px)' }}
                className={isDarkMode ? 'dark-theme-modal' : ''}
                title={
                    <div>
                        <h2 className={`text-lg font-semibold ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>Help & Support</h2>
                        <p className={`text-sm font-normal ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                            Contact us at support@example.com <br />
                        </p>
                    </div>
                }
                footer={[
                    <Button key="back" onClick={onCancel} className={
                        isDarkMode ? 'text-white border-gray-700 hover:border-gray-600' : ''
                    }>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
                        Submit
                    </Button>
                ]}
            >
                <div className={`mt-4 p-2 ${
                    isDarkMode ? globalStyles.background.dark : ''
                }`}>
                    <Form
                        form={form}
                        layout="vertical"
                    >
                        <Form.Item
                            label={<span className={isDarkMode ? 'text-white' : ''}>Contact Email</span>}
                            name="contactEmail"
                            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                        >
                            <Input 
                                placeholder="e.g. john@example.com" 
                                size='large'
                                className={isDarkMode ? 'bg-[#202020] text-white border-gray-700' : ''} 
                            />
                        </Form.Item>

                        <Form.Item
                            label={<span className={isDarkMode ? 'text-white' : ''}>Description</span>}
                            name="description"
                            rules={[{ required: true, message: 'Please enter the kind of support need' }]}
                        >
                            <TextArea 
                                rows={4} 
                                placeholder="Describe the assistance you need"
                                className={isDarkMode ? 'bg-[#202020] text-white border-gray-700' : ''} 
                            />
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default HelpandsupportForm;
