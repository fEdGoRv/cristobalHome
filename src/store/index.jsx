import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { modalReducer } from "./modalSlice";
import { cardCategoriesReducer } from "./cardCategoriesSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modal: modalReducer,
    cardCategories: cardCategoriesReducer,
  },
});

export default store;
