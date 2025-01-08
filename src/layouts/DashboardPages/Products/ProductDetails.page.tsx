import { useParams, useNavigate } from 'react-router-dom';
import CustomAppTitle from '../../../components/secondary/CustomAppTitle';
import { Avatar, Button } from 'antd';
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
import { toast } from 'react-toastify';
import Loader from '../../loader';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [isEditOpen, setIsEditOpen] = useState(false);
    const { data, isLoading } = useGetProductDetailsQuery(id);
    const [deleteProduct] = useDeleteProductMutation();
    const navigate = useNavigate();
    const productCreatedDate = new Date(data?.data.createdAt);

    const handleDeleteProduct = async () => {
        try {
            await deleteProduct(id || '').unwrap();
            toast.success('Product deleted successfully');
            navigate('/products');
        } catch (error) {
            toast.error(`Failed to delete product ${error.message}`);
        }
    };

    const handleCancel = () => {
        setIsEditOpen(false);
    };

    const formattedInitialData = data?.data ? {
        id: data.data.id,
        name: data.data.name,
        category: data.data.category,
        description: data.data.description,
        price: data.data.price,
        stockQuantity: data.data.stockQuantity,
        imageUrl: data.data.imageUrl,
    } : null;

    return (
        <div>
            <Header pageTitle="Product Details" />
            <CustomAppTitle showBackButton={true}></CustomAppTitle>
            <CustomDashboardLayout>
            {isLoading ? (
                    <Loader />
                ) : (
                <Content className="bg-white mt-2 border border-gray-900/10 rounded-lg relative">
                    <div className='sm:flex justify-between'>
                        <div className="sm:w-8/12 border-r border-gray-200 p-6">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800 mb-4">{data?.data.name}</h1>

                                <div className="mb-4">
                                    <img
                                        src={data?.data?.imageUrl || 'https://via.placeholder.com/300x200'}
                                        alt={data?.data?.name}
                                        className="w-full max-w-md rounded-lg"
                                    />
                                </div>

                                <p className="text-md text-gray-700 mb-6">{data?.data.description}</p>

                                <div className="space-y-4">
                                    <p className="text-sm text-gray-500 flex items-center gap-2">
                                        <span className="text-gray-400">
                                            <TagOutlined />
                                        </span>
                                        Category: {data?.data.category}
                                    </p>

                                    <p className="text-sm text-gray-500 flex items-center gap-2">
                                        <span className="text-gray-400">
                                            <MoneyCollectOutlined />
                                        </span>
                                        Price: {data?.data.price} shs
                                    </p>

                                    <p className="text-sm text-gray-500 flex items-center gap-2">
                                        <span className="text-gray-400">
                                            <ShoppingOutlined />
                                        </span>
                                        Stock: {data?.data.stockQuantity} units
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
                                        <h4 className="text-lg font-semibold text-gray-900">{data?.data.name}</h4>
                                        <p className="text-md text-gray-600">
                                            Posted {formatDistanceToNow(productCreatedDate)}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <span className={`px-2 py-1 rounded-full text-sm ${
                                        data?.data.stockQuantity > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {data?.data.stockQuantity > 0 ? 'In Stock' : 'Out of Stock'}
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
                )}
            </CustomDashboardLayout>
        </div>
    );
};

export default ProductDetailsPage;
