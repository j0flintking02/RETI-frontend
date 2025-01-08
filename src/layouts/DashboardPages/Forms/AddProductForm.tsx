import React from 'react';
import { Modal, Form, Input, InputNumber, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useCreateProductMutation } from '../../../services/products';
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
  const handleSubmit = async (values: CreateProductDto) => {
    try {
      const productData = {
        ...values,
        imageUrl: values.imageUrl || "https://via.placeholder.com/300x200",
      };

      const formattedData = {
        ...values,
      };

      if (isEdit) {
        await updateProduct({ ...formattedData, id: initialData.id }).unwrap();
        toast.success("product updated successfully");
      } else {
        await createProduct(productData).unwrap();
        toast.success("product created successfully");
      }

      form.resetFields();
      onOk();
    } catch (error) {
      toast.error(`Failed to create product ${error.data?.message}`);
    }
  };

  // Sample product data for quick testing
  const fillSampleProduct = () => {
    form.setFieldsValue({
      name: "Sample Product",
      category: "Electronics",
      description: "This is a sample product description",
      price: 99.99,
      stockQuantity: 10,
      imageUrl: "https://via.placeholder.com/300x200",
    });
  };

  return (
    <Modal
      open={open}
      productName="Add New Product"
      onOk={form.submit}
      onCancel={onCancel}
      confirmLoading={loading}
    >
      <Button onClick={fillSampleProduct} style={{ marginBottom: 16 }}>
        Fill Sample Data
      </Button>

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
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
  );
};

export default AddProductForm;
