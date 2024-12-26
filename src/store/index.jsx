import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { modalReducer } from "./modalSlice";
import { cardCategoriesReducer } from "./cardCategoriesSlice";import {Suspense} from 'react'
import { toastifyReducer } from "./toastifySlice";
import { questionReducer } from "./questionSlice";


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modal: modalReducer,
    cardCategories: cardCategoriesReducer,
    toastify: toastifyReducer,
    question: questionReducer
  },
});

export default store;
