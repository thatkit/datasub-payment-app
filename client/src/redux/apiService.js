import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const apiService = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['Payment'],
    endpoints: build => ({
        submitPayment: build.mutation({
            query: paymentData => ({
                url: '/submitPayment',
                method: 'POST',
                body: paymentData
            }),
            transformResponse: (response, meta, arg) => response.data,
            invalidatesTags: ['Post']
        }),
    }),
});

export const { useSubmitPaymentMutation } = apiService;