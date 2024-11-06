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
    openModalHandler(state) {
      state.isOpen = true;
    },
    closeModalHandler(state) {
      state.isOpen = false;
    },
    openCartModalHandler(state) {
      state.cartModal = true;
    },
    closeCartModalHandler(state) {
      state.cartModal = false;
    },
    openDetailModalHandler(state) {
      state.detailModal = true;
    },
    closeDetailModalHandler(state) {
      state.detailModal = false;
    },
    productDataHandler(state, action) {
      if(action.payload){
        const prod= allProd.find(item => item.id === action.payload);
        state.product = prod;
      }
    }
  },
});

export const modalActions = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
