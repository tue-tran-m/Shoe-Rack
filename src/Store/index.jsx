import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slices/card-slice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
