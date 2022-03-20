import { configureStore } from '@reduxjs/toolkit';
import apiSliceReducer from './apiSlice';
import { apiService } from './apiService';

export const store = configureStore({
    reducer: {
        apiSlice: apiSliceReducer,
        [apiService.reducerPath]: apiService.reducer 
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(apiService.middleware);
    }
});