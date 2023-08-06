import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IProduct } from '../interfaces/product';
import { pause } from '../untils/pause';
const productApi = createApi({
    reducerPath: 'products',
    tagTypes: [`Product`],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api",
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        },
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `/products`,
            providesTags: [`Product`]
        }),

        getProductById: builder.query<IProduct, string>({
            query: (id) => `/products/${id}`,

        }),
        deleteProductById: builder.mutation<IProduct, string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: `DELETE`,
                headers: {
                    'content-type': 'text/plain',
                },
            }),
            invalidatesTags: ['Product']
        }),
        addProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products`,
                method: `POST`,
                body: product,
            }),
            invalidatesTags: ['Product']

        }),
        updateProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product._id}`,
                method: `PUT`,
                body: product
            }),
            invalidatesTags: ['Product']
        }),
    })
})
export const {useGetProductsQuery, useGetProductByIdQuery, useDeleteProductByIdMutation, useAddProductMutation, useUpdateProductMutation} = productApi;
export const productReducer = productApi.reducer;
export default productApi;