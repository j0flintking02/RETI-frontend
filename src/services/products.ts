import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query/react";
import {
    customError,
    ProductsResponseType,
    ProductDetailsResponseType,
    CreateProductDto,
} from "./types.ts";
import { getHeaders } from "../utils.ts";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/v1/`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('access_token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }) as BaseQueryFn<string | FetchArgs, unknown, customError>,
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        createProduct: builder.mutation<ProductDetailsResponseType, CreateProductDto>({
            query: (data) => ({
                url: '/products',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Products']
        }),
        getProducts: builder.query<ProductsResponseType, void>({
            query: () => ({
                url: 'products',
                method: 'GET',
                headers: getHeaders(),
            }),
            providesTags: ['Products']
        }),
        getProductDetails: builder.query<ProductDetailsResponseType, string>({
            query: (productId) => ({
                url: `/products/${productId}`,
                method: "GET",
            }),
            providesTags: ['Products']
        }),
        updateProduct: builder.mutation<ProductDetailsResponseType, { productId: string, data: Partial<CreateProductDto> }>({
            query: ({ productId, data }) => ({
                url: `/products/${productId}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ['Products']
        }),
        deleteProduct: builder.mutation<void, string>({
            query: (productId) => ({
                url: `/products/${productId}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Products']
        }),
    })
})

export const {
    useCreateProductMutation,
    useGetProductsQuery,
    useGetProductDetailsQuery,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productApi
