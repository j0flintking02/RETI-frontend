import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductDetailsQuery, useDeleteProductMutation } from '../../../services/products';
import { Button, Card, Descriptions, Spin, Tag, Modal } from 'antd';
import { ExclamationCircleOutlined, EditOutlined } from '@ant-design/icons';
import EditProductForm from '../Forms/EditProductForm'; 

const { confirm } = Modal;

const ProductDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data: productResponse, isLoading } = useGetProductDetailsQuery(id || '');
    const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = () => {
        confirm({
            title: 'Are you sure you want to delete this product?',
            icon: <ExclamationCircleOutlined />,
            content: 'This action cannot be undone.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            okButtonProps: { loading: isDeleting },
            onOk: async () => {
                try {
                    await deleteProduct(id || '').unwrap();
                    Modal.success({
                        title: 'Success',
                        content: 'Product deleted successfully',
                        onOk: () => navigate('/products')
                    });
                } catch (error: any) {
                    Modal.error({
                        title: 'Error',
                        content: error?.data?.message || 'Failed to delete product. Please try again.',
                    });
                }
            },
        });
    };

    const handleEdit = () => {
        setEditModalVisible(true);
    };

    const handleEditCancel = () => {
        setEditModalVisible(false);
    };

    const handleEditSuccess = () => {
        setEditModalVisible(false);
        setLoading(false);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Spin size="large" />
            </div>
        );
    }

    if (!productResponse?.data) {
        return <div>Product not found</div>;
    }

    const product = productResponse.data;

    return (
        <div style={{ padding: '24px' }}>
            <Card
                title={<h1 className="text-2xl font-bold">{product.name}</h1>}
                extra={
                    <div>
                        <Button
                            type="primary"
                            icon={<EditOutlined />}
                            onClick={handleEdit}
                            style={{ marginRight: '8px' }}
                        >
                            Edit
                        </Button>
                        <Button type="primary" danger onClick={handleDelete}>
                            Delete
                        </Button>
                    </div>
                }
            >
                <Descriptions bordered column={1}>
                    <Descriptions.Item label="Price">
                        ${product.price.toFixed(2)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Category">
                        {product.category}
                    </Descriptions.Item>
                    <Descriptions.Item label="Stock">
                        <Tag color={product.stockQuantity > 0 ? 'green' : 'red'}>
                            {product.stockQuantity > 0 ? `In Stock (${product.stockQuantity})` : 'Out of Stock'}
                        </Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label="Description">
                        {product.description}
                    </Descriptions.Item>
                </Descriptions>
            </Card>

            <EditProductForm
                open={editModalVisible}
                loading={loading}
                initialValues={product}
                productId={id || ''}
                onOk={handleEditSuccess}
                onCancel={handleEditCancel}
            />
        </div>
    );
};

export default ProductDetailsPage;
