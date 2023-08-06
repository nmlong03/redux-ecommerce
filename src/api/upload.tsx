import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const uploadApi = createApi({
    reducerPath: 'upload',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api",
    }),
    endpoints: (builder) => ({
        uploadImage: builder.mutation({
            query: (files) => ({
                url: `/images/upload`,
                method: 'POST',
                body: files
            }),
        })
    })
})
export const {useUploadImageMutation} = uploadApi;
export const uploadReducer = uploadApi.reducer;
export default uploadApi;