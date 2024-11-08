import { createSlice } from "@reduxjs/toolkit";
import { allProd } from "../util/products";

const modalSlice = createSlice({
  name: "modal",
  initialState: { 
    isOpen: false, 
    cartModal: false, 
    detailModal: false,
    product: {}
   },
  reducers: {
    openDetailModal (state, action){
      state.isOpen = true;
      state.detailModal = true;
      state.cartModal = false;
      if(action.payload){
        const prod= allProd.find(item => item.id === action.payload);
        state.product = prod;
      }
    },
    closeModalHandler(state) {
      state.isOpen = false;
      state.detailModal = false;
      state.cartModal = false;
    },
    openCartModalHandler(state) {
      state.isOpen = true;
      state.cartModal = true;
      state.detailModal = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
