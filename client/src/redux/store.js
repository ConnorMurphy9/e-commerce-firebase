import { configureStore } from "@reduxjs/toolkit";
import pizzeriaReducer from "./pizzeriaSlice";

export const store = configureStore({
    reducer: {
        pizzeria: pizzeriaReducer,
    },
});