import React, { useEffect, useState, useRef } from 'react';
import { Modal, Form, Input, InputNumber, Upload, Button, Image, notification } from 'antd';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { useCreateProductMutation, useUpdateProductMutation } from '../../../services/products';
import { CreateProductDto } from '../../../services/types';
import { toast } from 'react-toastify';
import { uploadImage } from '../../../utils/uploadImage';

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
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const MAX_IMAGES = 3;

  useEffect(() => {
    if (initialData) {
      form.setFieldsValue(initialData);
      setUploadedImages(initialData.images || []);
    }
  }, [initialData, form]);

  const validateFile = (file: File) => {
    const isImage = file.type.startsWith('image/');
    const isSizeValid = file.size / 1024 / 1024 < 5; // Less than 5MB
    
    if (!isImage) {
      notification.error({
        message: 'Invalid file type',
        description: 'Please upload only image files.'
      });
      return false;
    }
    
    if (!isSizeValid) {
      notification.error({
        message: 'File too large',
        description: 'Image size should be less than 5MB.'
      });
      return false;
    }
    
    return true;
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (uploadedImages.length >= MAX_IMAGES) {
      notification.error({
        message: 'Upload limit reached',
        description: `Maximum ${MAX_IMAGES} images allowed.`
      });
      return;
    }

    if (!validateFile(file)) return;

    try {
      const imageUrl = await uploadImage(file);
      if (imageUrl) {
        const newImages = [...uploadedImages, imageUrl];
        setUploadedImages(newImages);
        
        // Update form field to ensure images are included in submission
        form.setFieldsValue({ images: newImages });
        
        notification.success({
          message: 'Success',
          description: 'Image uploaded successfully!'
        });
      }
    } catch (error) {
      notification.error({
        message: 'Upload failed',
        description: error instanceof Error ? error.message : 'Failed to upload image'
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newImages);
    // Update form field when removing images
    form.setFieldsValue({ images: newImages });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const productData = {
        ...values,
        images: uploadedImages, // Ensure images are included in the submission
      };

      if (isEdit) {
        await updateProduct({ data: productData, productId: initialData.id }).unwrap();
        notification.success({ message: "Product updated successfully" });
      } else {
        await createProduct(productData).unwrap();
        notification.success({ message: "Product created successfully" });
      }

      form.resetFields();
      setUploadedImages([]);
      onOk();
    } catch (error) {
      notification.error({ 
        message: "Failed to save product",
        description: error.data?.message || "An error occurred while saving the product"
      });
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

        <Form.Item label="Product Images">
          <div className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              {uploadedImages.map((url, index) => (
                <div key={index} className="relative">
                  <Image
                    src={url}
                    alt={`Product image ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-cover rounded-lg"
                  />
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    className="absolute top-0 right-0 text-red-500 bg-white rounded-full"
                    onClick={() => handleRemoveImage(index)}
                  />
                </div>
              ))}
            </div>
            
            {uploadedImages.length < MAX_IMAGES && (
              <>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                <Button 
                  icon={<UploadOutlined />}
                  onClick={() => fileInputRef.current?.click()}
                >
                  Upload Image ({uploadedImages.length}/{MAX_IMAGES})
                </Button>
              </>
            )}
          </div>
        </Form.Item>
      </Form>
    </Modal>
    </div>
  );
};

export default AddProductForm;
