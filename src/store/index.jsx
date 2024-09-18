import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { modalReducer } from "./modalSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        modal: modalReducer
    }
});

export default store;

