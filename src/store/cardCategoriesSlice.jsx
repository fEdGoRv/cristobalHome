import { createSlice } from "@reduxjs/toolkit";

const cardCategoriesSlice = createSlice({
  name: "cardCategories",
  initialState: "",
  reducers: {
    handleAnimation(state, action) {
      return action.payload !== undefined ? action.payload : state;
    },
  },
});

export const cardCategoriesActions = cardCategoriesSlice.actions;

export const cardCategoriesReducer = cardCategoriesSlice.reducer;
