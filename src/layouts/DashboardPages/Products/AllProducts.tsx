import { ClockCircleOutlined, EnvironmentOutlined, MoneyCollectOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
	Avatar,
	Spin,
	Tag,
	Typography,
} from "antd";
import {
	useGetOpportunitiesQuery,
} from "../../../services/opportunities.ts";
import moment from "moment";
import DateCheckComponent from "../../../components/primary/dataChecker.tsx";
import Loader from "../../loader.tsx";
import { useGetProductsQuery } from "../../../services/products.ts";
import { useState } from "react";

const AllProductsPage = () => {
	const navigate = useNavigate();
	const { data: productsResponse, isLoading, error } = useGetProductsQuery();
	const [imageIndexes, setImageIndexes] = useState<{ [key: string]: number }>({});

	const handleNextImage = (e: React.MouseEvent, productId: string, maxLength: number) => {
		e.stopPropagation();
		setImageIndexes(prev => ({
			...prev,
			[productId]: (prev[productId] + 1) % maxLength
		}));
	};

	const handlePrevImage = (e: React.MouseEvent, productId: string, maxLength: number) => {
		e.stopPropagation();
		setImageIndexes(prev => ({
			...prev,
			[productId]: (prev[productId] - 1 + maxLength) % maxLength
		}));
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
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
									<div className="w-1/3 relative">
										<img
											src={product.images?.[imageIndexes[product.id] || 0] || 'https://via.placeholder.com/300x200'}
											alt={product.name}
											className="w-full h-32 object-cover rounded-lg"
										/>
										{product.images && product.images.length > 1 && (
											<>
												<button
													onClick={(e) => handlePrevImage(e, product.id, product.images.length)}
													className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-md hover:bg-white"
												>
													<LeftOutlined />
												</button>
												<button
													onClick={(e) => handleNextImage(e, product.id, product.images.length)}
													className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-md hover:bg-white"
												>
													<RightOutlined />
												</button>
												<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
													{product.images.map((_, index) => (
														<div
															key={index}
															className={`w-1.5 h-1.5 rounded-full ${index === (imageIndexes[product.id] || 0) ? 'bg-blue-500' : 'bg-gray-300'}`}
														/>
													))}
												</div>
											</>
										)}
									</div>
									<div className="w-2/3">
										<h3 className="text-lg font-semibold mb-2">{product.name}</h3>
										<p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
										<div className="flex justify-between items-center">
											<p className="text-sm truncate text-gray-500 flex items-center gap-2">
												<span className="text-gray-400">
													<MoneyCollectOutlined />
												</span>
												{product.price} shs
											</p>
											<span className={`px-2 py-1 rounded-full text-sm ${product.stockQuantity > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
												{product.stockQuantity > 0 ? 'In Stock' : 'Out of Stock'}
											</span>
										</div>

									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default AllProductsPage;
