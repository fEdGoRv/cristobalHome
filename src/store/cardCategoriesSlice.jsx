import { createSlice } from "@reduxjs/toolkit";

const cardCategoriesSlice = createSlice({
  name: "cardCategories",
  initialState: {animation: "", active: false},
  reducers: {
    handleAnimation(state, action) {
      action.payload !== undefined ? state.animation = action.payload : state.animation;
    },
    handleActive(state, action) {
      action.payload !== undefined ? state.active = action.payload : state.active;
    },
  },
});

export const cardCategoriesActions = cardCategoriesSlice.actions;

export const cardCategoriesReducer = cardCategoriesSlice.reducer;
