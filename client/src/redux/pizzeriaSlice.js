import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzaData: [],
    userInfo: null,
};

export const pizzeriaSlice = createSlice({
    name: "pizzeria",
    initialState,
    reducers: {
        addToCart:(state, action) => {
            const item = state.pizzaData.find(
                (item) => item.name === action.payload.name
            );
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.pizzaData.push(action.payload);
            }
        },
        deleteItem: (state, action) => {
            state.pizzaData = state.pizzaData.filter(
                (item) => item.name !== action.payload
            );
        },
        resetCart: (state) => {
            state.pizzaData = [];
        },
        incrementQuantity: (state, action) => {
            const item = state.pizzaData.find(
                (item) => item.name === action.payload.name
            );
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.pizzaData.find(
                (item) => item.name === action.payload.name
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
    },
});

export const { addToCart, deleteItem, resetCart, incrementQuantity, decrementQuantity, addUser, removeUser } = pizzeriaSlice.actions;

export default pizzeriaSlice.reducer;