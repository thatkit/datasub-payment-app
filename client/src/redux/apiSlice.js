import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    CardNumber: '',
    ExpDate: '',
    Cvv: '',
    Amount: 0
}

const apiSlice = createSlice({
    name: 'apiSlice',
    initialState,
    reducers: {
        addCardNumber(state, { payload }) {
            return {
                ...state,
                payload
            }
        },
    },
})

export const { addCardNumber } = apiSlice.actions;
export default apiSlice.reducer;