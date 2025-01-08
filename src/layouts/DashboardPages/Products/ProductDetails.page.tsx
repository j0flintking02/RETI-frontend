import { useParams, useNavigate } from 'react-router-dom';
import CustomAppTitle from '../../../components/secondary/CustomAppTitle';
import { Avatar, Button, notification } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { formatDistanceToNow } from '../../../utils';
import { EditOutlined, ShoppingOutlined, MoneyCollectOutlined, TagOutlined } from '@ant-design/icons';
import CustomDashboardLayout from '../../../components/secondary/CustomDashboardPagesLayout';
import Header from '../../../components/secondary/Header';
import { useGetProductDetailsQuery, useDeleteProductMutation } from '../../../services/products';
import DeletePopconfirm from '../../../components/secondary/CustomDeletePopUp';
import { useState } from 'react';
import AddProductForm from '../Forms/AddProductForm';
import { loginDetails } from '../../../utils';

const ProductDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [isEditOpen, setIsEditOpen] = useState(false);
    const { data: productResponse, isLoading } = useGetProductDetailsQuery(id || '');
    const [deleteProduct] = useDeleteProductMutation();
    const navigate = useNavigate();
    const productCreatedDate = new Date(productResponse?.data.createdAt);

    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(id || '').unwrap();
            notification.success({
                message: 'Product deleted successfully'
            });
            navigate('/products');
        } catch (error) {
            notification.error({
                message: 'Failed to delete product',
                description: error.message
            });
        }
    };

    const handleCancel = () => {
        setIsEditOpen(false);
    };

    const formattedInitialData = productResponse?.data ? {
        id: productResponse.data.id,
        name: productResponse.data.name,
        category: productResponse.data.category,
        description: productResponse.data.description,
        price: productResponse.data.price,
        stockQuantity: productResponse.data.stockQuantity,
        imageUrl: productResponse.data.imageUrl,
    } : null;

    return (
        <div>
            <Header pageTitle="Product Details" />
            <CustomAppTitle showBackButton={true}></CustomAppTitle>
            <CustomDashboardLayout>
                <Content className="bg-white mt-2 border border-gray-900/10 rounded-lg relative">
                    <div className='sm:flex justify-between'>
                        <div className="sm:w-8/12 border-r border-gray-200 p-6">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800 mb-4">{productResponse?.data.name}</h1>

                                <div className="mb-4">
                                    <img
                                        src={productResponse?.data.imageUrl || 'https://via.placeholder.com/300x200'}
                                        alt={productResponse?.data.name}
                                        className="w-full max-w-md rounded-lg"
                                    />
                                </div>

                                <p className="text-md text-gray-700 mb-6">{productResponse?.data.description}</p>

                                <div className="space-y-4">
                                    <p className="text-sm text-gray-500 flex items-center gap-2">
                                        <span className="text-gray-400">
                                            <TagOutlined />
                                        </span>
                                        Category: {productResponse?.data.category}
                                    </p>

                                    <p className="text-sm text-gray-500 flex items-center gap-2">
                                        <span className="text-gray-400">
                                            <MoneyCollectOutlined />
                                        </span>
                                        Price: ${productResponse?.data.price}
                                    </p>

                                    <p className="text-sm text-gray-500 flex items-center gap-2">
                                        <span className="text-gray-400">
                                            <ShoppingOutlined />
                                        </span>
                                        Stock: {productResponse?.data.stockQuantity} units
                                    </p>
                                </div>

                                <Button className='mt-4' type="primary">Purchase now</Button>
                            </div>
                        </div>

                        <div className="w-4/12">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Info</h3>
                                <div className="flex items-center gap-x-3">
                                    <Avatar icon={<ShoppingOutlined />} />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">{productResponse?.data.name}</h4>
                                        <p className="text-md text-gray-600">
                                            Posted {formatDistanceToNow(productCreatedDate)}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <span className={`px-2 py-1 rounded-full text-sm ${
                                        productResponse?.data.stockQuantity > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {productResponse?.data.stockQuantity > 0 ? 'In Stock' : 'Out of Stock'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {loginDetails().user.role === 'youth' && (
                        <div className="absolute bottom-4 right-4 space-y-2">
                            <div>
                                <DeletePopconfirm
                                    title="Delete Product"
                                    description="Are you sure to delete this product?"
                                    onConfirm={handleDeleteProduct}
                                    onConfirmMessage="Product deleted successfully"
                                    onCancelMessage="Product deletion cancelled"
                                    okText="Yes"
                                    cancelText="No"
                                />
                            </div>
                            <div>
                                <EditOutlined
                                    onClick={() => setIsEditOpen(true)}
                                    className="text-blue-500 cursor-pointer text-lg"
                                />
                            </div>
                        </div>
                    )}

                    {loginDetails().user.role === 'youth' && (
                        <AddProductForm
                            onCancel={handleCancel}
                            onOk={() => setIsEditOpen(false)}
                            open={isEditOpen}
                            loading={false}
                            initialData={formattedInitialData}
                            isEdit={true}
                        />
                    )}
                </Content>
            </CustomDashboardLayout>
        </div>
    );
};

export default ProductDetailsPage;
