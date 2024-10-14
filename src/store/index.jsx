import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { modalReducer } from "./modalSlice";
import { cardCategoriesreducer } from "./cardCategoriesSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        modal: modalReducer,
        cardCategories: cardCategoriesreducer 
    }
});

export default store;

