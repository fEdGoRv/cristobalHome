import { createSlice } from "@reduxjs/toolkit";

const cardCategoriesSlice = createSlice({
  name: "cardCategories",
  initialState: {
    animation: "", 
    active: false, 
    activeB: false,
    activeCarousel: false
  },
  reducers: {
    handleAnimation(state, action) {
      action.payload !== undefined ? state.animation = action.payload : state.animation;
    },
    handleActive(state, action) {
      action.payload !== undefined ? state.active = action.payload : state.active;
    },
    handleActiveB(state, action) {
      action.payload !== undefined ? state.activeB = action.payload : state.activeB;
    },
    handleCarousel(state, action) {
      action.payload !== undefined ? state.activeCarousel = action.payload : state.activeCarousel;
    },
  },
});

export const cardCategoriesActions = cardCategoriesSlice.actions;

export const cardCategoriesReducer = cardCategoriesSlice.reducer;
