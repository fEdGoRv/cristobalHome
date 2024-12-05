import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { modalReducer } from "./modalSlice";
import { cardCategoriesReducer } from "./cardCategoriesSlice";import {Suspense} from 'react'
import { toastifyReducer } from "./toastifySlice";


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modal: modalReducer,
    cardCategories: cardCategoriesReducer,
    toastify: toastifyReducer
  },
});

export default store;
