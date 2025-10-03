import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from './wishlist';
export const store = configureStore({
    reducer:{
         wishlist: wishlistReducer,
    }
})