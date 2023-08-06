import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const authApi = createApi({
    reducerPath: 'auth',
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
        signin: builder.mutation({
            query: (user) => ({
                url: `/signin`,
                method: 'POST',
                body: user
            }),
        }),
        signup: builder.mutation({
            query: (user) => ({
                url: `/signup`,
                method: 'POST',
                body: user
            }),
        })
    })
})
export const {useSigninMutation, useSignupMutation} = authApi;
export const authReducer = authApi.reducer;
export default authApi;