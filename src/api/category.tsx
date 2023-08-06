import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IProduct } from '../interfaces/product';
import { pause } from '../untils/pause';
import { ICategory } from '../interfaces/category';
const CategoryApi = createApi({
    reducerPath: 'category',
    tagTypes: [`Category`],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                headers.set('Authorization', 'Bearer xxx')
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCategory: builder.query<ICategory[], void>({
            query: () => `/categories`,
            providesTags: [`Category`]
        }),

        getCategoryById: builder.query<ICategory, number>({
            query: (id) => `/categories/${id}`
        }),
        deleteCategoryById: builder.mutation<ICategory, number>({
            query: (id) => ({
                url: `/categories/${id}`,
                method: `DELETE`,

            }),
            invalidatesTags: ['Category']
        }),
        addCategory: builder.mutation<ICategory, IProduct>({
            query: (category) => ({
                url: `/categories`,
                method: `POST`,
                body: category,
            }),
            invalidatesTags: ['Category']

        }),
        updateCategory: builder.mutation<ICategory, IProduct>({
            query: (category) => ({
                url: `/categories/${category._id}`,
                method: `PATCH`,
                body: category
            }),
            invalidatesTags: ['Category']
        }),
    })
})
export const {useAddCategoryMutation, useDeleteCategoryByIdMutation, useUpdateCategoryMutation, useGetCategoryByIdQuery, useGetCategoryQuery} = CategoryApi;
export const categoryReducer = CategoryApi.reducer;
export default CategoryApi;