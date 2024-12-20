import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetProductDetailsQuery, useDeleteProductMutation } from '../../../services/products';
import { Button, Card, Descriptions, Spin, Tag, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const ProductDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data: productResponse, isLoading } = useGetProductDetailsQuery(id || '');
    const [deleteProduct] = useDeleteProductMutation();

    const handleDelete = () => {
        confirm({
            title: 'Are you sure you want to delete this product?',
            icon: <ExclamationCircleOutlined />,
            content: 'This action cannot be undone.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: async () => {
                try {
                    await deleteProduct(id || '');
                    navigate('/products');
                } catch (error) {
                    Modal.error({
                        title: 'Error',
                        content: 'Failed to delete product',
                    });
                }
            },
        });
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Spin size="large" />
            </div>
        );
    }

    const product = productResponse?.data;

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="p-6">
            <Card 
                title={<h1 className="text-2xl font-bold">{product.name}</h1>}
                extra={
                    <div className="space-x-4">
                        <Button type="primary" onClick={() => navigate(`/products/${id}/edit`)}>
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
        </div>
    );
};

export default ProductDetailsPage;
