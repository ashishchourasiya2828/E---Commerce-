import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./reducers/productDetailsSlice";

const store = configureStore({
    reducer: {
        productDetails : productDetailsReducer,
    },
});

export default store;
