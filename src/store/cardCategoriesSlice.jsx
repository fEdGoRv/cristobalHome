import { createSlice } from "@reduxjs/toolkit";

const cardCategoriesSlice = createSlice({
  name: "cardCategories",
  initialState: {
    animation: "", 
    active: false, 
    activeCarousel: false
  },
  reducers: {
    handleAnimation(state, action) {
      action.payload !== undefined ? state.animation = action.payload : state.animation;
    },
    handleActive(state, action) {
      action.payload !== undefined ? state.active = action.payload : state.active;
    },
    handleCarousel(state, action) {
      action.payload !== undefined ? state.activeCarousel = action.payload : state.activeCarousel;
    },
  },
});

export const cardCategoriesActions = cardCategoriesSlice.actions;

export const cardCategoriesReducer = cardCategoriesSlice.reducer;
