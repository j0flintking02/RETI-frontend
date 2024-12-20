import React, { useState } from 'react';
import { useGetProductsQuery, useDeleteProductMutation } from '../../../services/products';
import { Button, notification, Layout, Spin } from 'antd';
import { DeleteOutlined, EditOutlined, ClockCircleOutlined, ShoppingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/secondary/Header';
import CustomDashboardLayout from '../../../components/secondary/CustomDashboardPagesLayout';
import AddProductForm from '../Forms/AddProductForm';
import DeletePopconfirm from '../../../components/secondary/CustomDeletePopUp';
import DateCheckComponent from '../../../components/primary/dataChecker';
import { loginDetails } from '../../../utils';

const ProductsPage: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const { data: productsResponse, isLoading, error } = useGetProductsQuery();

    // Log error for debugging
    React.useEffect(() => {
        if (error) {
            console.error('Products API Error:', error);
        }
    }, [error]);

    const [deleteProduct] = useDeleteProductMutation();

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleDeleteProduct = async (productId: string) => {
        try {
            await deleteProduct(productId).unwrap();
            notification.success({
                message: 'Product deleted successfully.',
            });
        } catch (error) {
            notification.error({
                message: 'Failed to delete product',
                description: error.data?.message || 'An error occurred',
            });
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-xl font-semibold mb-4">Error loading products</h2>
                <p className="text-gray-600">{error.data?.message || 'An unexpected error occurred'}</p>
                <Button className="mt-4" onClick={() => window.location.reload()}>
                    Try Again
                </Button>
            </div>
        );
    }

    return (
        <>
            <Header pageTitle="Products" />

            <CustomDashboardLayout>
                <div className="flex items-center justify-end">
                    <div>
                        <Button type="primary" onClick={showModal}>
                            Add New Product
                        </Button>
                        <AddProductForm
                            onOk={handleOk}
                            onCancel={handleCancel}
                            open={open}
                            loading={loading}
                        />
                    </div>
                </div>

                <Layout>
                    <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                        {productsResponse?.data?.map((product) => (
                            <div
                                key={product.id}
                                className="relative flex flex-col p-1 border border-gray-300 rounded-lg bg-white hover:shadow-lg hover:bg-gray-50 cursor-pointer transition-all duration-200"
                                onClick={() => navigate(`/products/${product.id}`)}
                            >
                                <div className="p-4">
                                    <div className="text-right mb-1">
                                        <div className="flex justify-end items-center space-x-2">
                                            <ClockCircleOutlined />
                                            <DateCheckComponent date={product.createdAt} />
                                        </div>
                                    </div>

                                    <div className="flex space-x-4">
                                        <div className="w-1/3">
                                            <img
                                                src={product.imageUrl || 'https://via.placeholder.com/300x200'}
                                                alt={product.name}
                                                className="w-full h-32 object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="w-2/3">
                                            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg font-bold text-primary">
                                                    ${product.price}
                                                </span>
                                                <span className={`px-2 py-1 rounded-full text-sm ${
                                                    product.stockQuantity > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {product.stockQuantity > 0 ? 'In Stock' : 'Out of Stock'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-end space-x-2">
                                        <EditOutlined
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(`/products/${product.id}/edit`);
                                            }}
                                            className="text-blue-500 cursor-pointer"
                                        />
                                        <DeletePopconfirm
                                            title="Delete Product"
                                            description="Are you sure you want to delete this product?"
                                            onConfirm={(e) => {
                                                e.stopPropagation();
                                                handleDeleteProduct(product.id);
                                            }}
                                            onConfirmMessage="Product deleted successfully"
                                            onCancelMessage="Product deletion cancelled"
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <DeleteOutlined className="text-red-500 cursor-pointer" />
                                        </DeletePopconfirm>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Layout>
            </CustomDashboardLayout>
        </>
    );
};

export default ProductsPage;
