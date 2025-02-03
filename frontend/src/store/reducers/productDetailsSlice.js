// redux/features/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    defaultImage: "https://i.pinimg.com/736x/ce/c9/fc/cec9fc5b5f72c4c3e26bb75ecd6f8d9f.jpg",
    defaultColor: "#232323",
    quantity: 1,
    images: [
        { url: "https://i.pinimg.com/736x/ce/c9/fc/cec9fc5b5f72c4c3e26bb75ecd6f8d9f.jpg", color: "#232323" },
        { url: "https://i.pinimg.com/736x/ab/97/4f/ab974fed973cb000c1f972c3ffdaaf2e.jpg", color: "#883f90" },
        { url: "https://i.pinimg.com/736x/aa/7f/53/aa7f53084a679ec7c924d45aaa8b0ca7.jpg", color: "#711426" },
        { url: "https://i.pinimg.com/736x/d0/c1/7d/d0c17db682e3b8c31ef52e3a2ff5d955.jpg", color: "#d9c7b3" },
    ],
};

const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers: {
        setDefaultImage: (state, action) => {
            state.defaultImage = action.payload.url;
            state.defaultColor = action.payload.color;
        },
        increaseQuantity: (state) => {
            if (state.quantity < 10) state.quantity += 1;
        },
        decreaseQuantity: (state) => {
            if (state.quantity > 1) state.quantity -= 1;
        },
    },
});

export const { setDefaultImage, increaseQuantity, decreaseQuantity } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
