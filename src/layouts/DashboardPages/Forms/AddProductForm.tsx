import React from 'react';
import { Modal, Form, Input, InputNumber, Upload, Button, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useCreateProductMutation } from '../../../services/products';
import { CreateProductDto } from '../../../services/types';

interface AddProductFormProps {
  open: boolean;
  loading: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({
  open,
  loading,
  onOk,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const [createProduct] = useCreateProductMutation();

  const handleSubmit = async (values: CreateProductDto) => {
    try {
      const productData = {
        ...values,
        imageUrl: values.imageUrl || 'https://via.placeholder.com/300x200'
      };
      
      const response = await createProduct(productData).unwrap();
      
      notification.success({
        message: 'Product created successfully',
      });
      form.resetFields();
      onOk();
    } catch (error) {
      notification.error({
        message: 'Failed to create product',
        description: error.data?.message || 'An error occurred while creating the product',
      });
    }
  };

  // Sample product data for quick testing
  const fillSampleProduct = () => {
    form.setFieldsValue({
      name: 'Sample Product',
      category: 'Electronics',
      description: 'This is a sample product description',
      price: 99.99,
      stockQuantity: 10,
      imageUrl: 'https://via.placeholder.com/300x200'
    });
  };

  return (
    <Modal
      open={open}
      title="Add New Product"
      onOk={form.submit}
      onCancel={onCancel}
      confirmLoading={loading}
    >
      <Button onClick={fillSampleProduct} style={{ marginBottom: 16 }}>
        Fill Sample Data
      </Button>
      
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="name"
          label="Product Name"
          rules={[{ required: true, message: 'Please enter product name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: 'Please select category' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter description' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please enter price' }]}
        >
          <InputNumber
            min={0}
            precision={2}
            style={{ width: '100%' }}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value!.replace(/\$\s?|(,*)/g, '')}
          />
        </Form.Item>

        <Form.Item
          name="stockQuantity"
          label="Stock Quantity"
          rules={[{ required: true, message: 'Please enter stock quantity' }]}
        >
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="imageUrl"
          label="Image URL"
        >
          <Input placeholder="https://example.com/image.jpg" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProductForm;
