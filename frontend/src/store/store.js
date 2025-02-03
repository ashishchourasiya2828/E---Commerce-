import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./reducers/productDetailsSlice";
import cartReducer from './reducers/cartSlice';

const store = configureStore({
    reducer: {
        productDetails: productDetailsReducer,
        cart: cartReducer,
    },
});

export default store;
