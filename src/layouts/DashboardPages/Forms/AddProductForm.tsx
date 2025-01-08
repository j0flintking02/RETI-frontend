import React, { useEffect } from 'react';
import { Modal, Form, Input, InputNumber, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useCreateProductMutation, useUpdateProductMutation } from '../../../services/products';
import { CreateProductDto } from '../../../services/types';
import { toast } from 'react-toastify';

const AddProductForm = ({
  open,
  loading,
  onOk,
  onCancel,
  initialData,
  isEdit = false,
}) => {
  const [form] = Form.useForm();
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    if (initialData && open && isEdit) {
      form.setFieldsValue({
        name: initialData.name,
        category: initialData.category,
        description: initialData.description,
        price: initialData.price,
        stockQuantity: initialData.stockQuantity,
        imageUrl: initialData.imageUrl
      });
    } else {
      form.resetFields();
    }
  }, [form, initialData, open, isEdit]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const productData = {
        ...values,
        imageUrl: values.imageUrl || "https://via.placeholder.com/300x200",
      };

      if (isEdit) {
        await updateProduct({ data: productData, productId: initialData.id }).unwrap();
        toast.success("Product updated successfully");
      } else {
        await createProduct(productData).unwrap();
        toast.success("Product created successfully");
      }

      form.resetFields();
      onOk();
    } catch (error) {
      toast.error(`Failed to create product ${error.data?.message}`);
    }
  };

  return (
    <div className="space-y-4">
    <Modal
      onOk={onOk}
      onCancel={onCancel}
      width={600}
      open={open}
      confirmLoading={loading}
      title={
        <div>
          <h2 className="text-lg font-semibold">
            {isEdit ? "Edit Product" : "Add a Product"}
          </h2>
          <p className="text-sm font-normal text-gray-500">
            {isEdit
              ? "Update the Product details below."
              : "Please fill in the form below to create a new Product."}{" "}
            <br />
            <span className="font-normal text-blue-500">
              Product will be seen by everyone.
            </span>
          </p>
        </div>
      }
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
          {isEdit ? "Save Changes" : "Submit"}
        </Button>,
      ]}
    >

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Product Name"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select category" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter description" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter price" }]}
        >
          <InputNumber
            min={0}
            precision={2}
            style={{ width: "100%" }}
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>

        <Form.Item
          name="stockQuantity"
          label="Stock Quantity"
          rules={[{ required: true, message: "Please enter stock quantity" }]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name="imageUrl" label="Image URL">
          <Input placeholder="https://example.com/image.jpg" />
        </Form.Item>
      </Form>
    </Modal>
    </div>
  );
};

export default AddProductForm;
