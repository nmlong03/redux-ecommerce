import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// import { pause } from '../untils/pause';
const cartApi = createApi({
    reducerPath: 'cart',
    tagTypes: [`Cart`],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                headers.set('Authorization', 'Bearer xxx')
            }
            return headers;
        }
        // fetchFn: async (...args) => {
        //     await pause(1000);
        //     return fetch(...args);
        // }
    }),
    endpoints: (builder) => ({
        addToCart: builder.mutation({
            query: (product) => ({
                url: `/cart`,
                method: 'POST',
                body: product
            }),
            invalidatesTags: [`Cart`]

        }),
        getCart: builder.query({
            query: (userId) => `cart/${userId}`,
            providesTags: [`Cart`]

        }),
        deleteItemCart: builder.mutation({
            query: (id) => ({
                url: `/cart/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [`Cart`]

        }),
        incrementCart: builder.mutation({
            query: (cartId) => ({
                url: `cart/${cartId}/increment`,
                method: 'PUT'
            }),
            invalidatesTags: [`Cart`]

        }),
        decrementCart: builder.mutation({
            query: (cartId) => ({
                url: `cart/${cartId}/decrement`,
                method: 'PUT'
            }),
            invalidatesTags: [`Cart`]

        })
    })
})
export const {useAddToCartMutation, useDeleteItemCartMutation, useGetCartQuery, useIncrementCartMutation, useDecrementCartMutation} = cartApi
export const cartReducer = cartApi.reducer;
export default cartApi;