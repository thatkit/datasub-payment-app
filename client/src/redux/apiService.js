import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiService = createApi({
    reducerPath: 'apiService',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
    }),
    tagTypes: ['Payment'],
    endpoints: build => ({
        submitPayment: build.mutation({
            query: body => ({
                url: '/submitPayment',
                method: 'POST',
                body
            }),
            transformResponse: (response, meta, arg) => response,
            invalidatesTags: ['Post'],
        }),
    }),
});

export const { useSubmitPaymentMutation } = apiService;