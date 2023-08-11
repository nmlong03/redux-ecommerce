import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { pause } from '../untils/pause';
const authApi = createApi({
    reducerPath: 'auth',
    tagTypes: [`Auth`],

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api",
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        },

        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                headers.set('Authorization', 'Bearer xxx')
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (user) => ({
                url: `/signin`,
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Auth']

        }),
        signup: builder.mutation({
            query: (user) => ({
                url: `/signup`,
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Auth']

        })
    })
})
export const {useSigninMutation, useSignupMutation} = authApi;
export const authReducer = authApi.reducer;
export default authApi;