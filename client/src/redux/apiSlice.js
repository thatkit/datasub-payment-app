import { createSlice } from '@reduxjs/toolkit';

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
        addCardNumber(state, { payload: CardNumber }) {
            return {
                ...state,
                CardNumber
            }
        },
        addExpDate(state, { payload: ExpDate }) {
            return {
                ...state,
                ExpDate
            }
        },
        addCvv(state, { payload: Cvv }) {
            return {
                ...state,
                Cvv
            }
        },
        addAmount(state, { payload: Amount }) {
            return {
                ...state,
                Amount
            }
        },
    },
});

export const {
    addCardNumber,
    addExpDate,
    addCvv,
    addAmount
} = apiSlice.actions;
export default apiSlice.reducer;