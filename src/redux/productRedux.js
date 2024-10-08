import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
    name: "clientProducts",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const { 
    getProductFailure, 
    getProductStart, 
    getProductSuccess, 
} = productSlice.actions;

export default productSlice.reducer;
