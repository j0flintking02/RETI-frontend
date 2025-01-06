import React, { useEffect } from 'react';
import { Modal, Form, Input, InputNumber, notification } from 'antd';
import { useUpdateProductMutation } from '../../../services/products';
import { CreateProductDto } from '../../../services/types';

interface EditProductFormProps {
  open: boolean;
  loading: boolean;
  initialValues: CreateProductDto;
  productId: string;
  onOk: () => void;
  onCancel: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({
  open,
  loading,
  initialValues,
  productId,
  onOk,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    if (open && initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [open, initialValues, form]);

  const handleSubmit = async (values: CreateProductDto) => {
    try {
      const response = await updateProduct({
        productId,
        data: values,
      }).unwrap();
      
      console.log('Product update response:', response);
      
      notification.success({
        message: 'Product updated successfully',
      });
      form.resetFields();
      onOk();
    } catch (error) {
      console.error('Failed to update product:', error);
      notification.error({
        message: 'Failed to update product',
        description: 'Please try again later',
      });
    }
  };

  return (
    <Modal
      open={open}
      title="Edit Product"
      onOk={form.submit}
      onCancel={onCancel}
      confirmLoading={loading}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={initialValues}
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
          rules={[{ required: true, message: 'Please enter product category' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter product description' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please enter product price' }]}
        >
          <InputNumber
            min={0}
            style={{ width: '100%' }}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => Number(value!.replace(/\$\s?|(,*)/g, ''))}
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

export default EditProductForm;
