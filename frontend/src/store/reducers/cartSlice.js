import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [
        {
            id: 1,
            image:
                "https://i.pinimg.com/736x/97/00/cb/9700cb6c337d3272b651099484477843.jpg",
            name: "Relaxed Fit T-shirt",
            price: "$12.99",
            inStock: true,
            sizes: ["S", "M", "L", "XL"],
            size: "XL",
            colors: ["Black", "White", "Gray", "Blue"],
            quantity: 1,
        },
        {
            id: 2,
            image:
                "https://i.pinimg.com/736x/a3/01/44/a30144434b9b69338afbb6d62db41fdc.jpg",
            name: "Nylon Sports Cap",
            price: "$14.99",
            inStock: true,
            sizes: ["One Size"],
            size: "One Size",
            colors: ["Blue", "Red", "Green", "Black"],
            quantity: 1,
        },
        {
            id: 3,
            image:
                "https://i.pinimg.com/736x/98/f5/75/98f5757c57ee579259b17c28023e377e.jpg",
            name: "Sneakers",
            price: "$34.99",
            inStock: false,
            sizes: ["UK 6", "UK 7", "UK 8", "UK 9"],
            size: "UK 9",
            colors: ["White", "Black", "Navy Blue", "Gray"],
            quantity: 1,
        },
        {
            id: 4,
            image:
                "https://i.pinimg.com/736x/45/3c/a0/453ca03f33cd8aed88db9083fcfdf8c9.jpg",
            name: "Slim Fit Suit Vest",
            price: "$17.99",
            inStock: true,
            sizes: ["S", "M", "L", "XL"],
            size: "XL",
            colors: ["Gray", "Black", "Beige"],
            quantity: 1,
        },
    ],
    quantity: 1,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item && item.quantity < 10) item.quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },
        setSaveProducts: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item) item.saved = !item.saved; 
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { increaseQuantity, decreaseQuantity, setSaveProducts, removeFromCart } =
    cartSlice.actions;
export default cartSlice.reducer;
