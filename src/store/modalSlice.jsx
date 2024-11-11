import { createSlice } from "@reduxjs/toolkit";
import { allProd } from "../util/products";

const modalSlice = createSlice({
  name: "modal",
  initialState: { 
    isOpen: false, 
    cartModal: false, 
    detailModal: false,
    product: {},
    position: {
      x: "",
      y: "",
      width: "",
      height: ""
    },
    animation: false
   },
  reducers: {
    openDetailModal (state, action){
      state.isOpen = true;
      state.detailModal = true;
      state.cartModal = false;
      if(action.payload.prod){
        const prod= allProd.find(item => item.id === action.payload.prod);
        state.product = prod;
      }
      if(action.payload.position){
         state.position = action.payload.position;
      }
    },
    closeModalHandler(state) {
      state.isOpen = false;
      state.detailModal = false;
      state.cartModal = false;
      state.animation = false;
    },
    openCartModalHandler(state) {
      state.isOpen = true;
      state.cartModal = true;
      state.detailModal = false;
    },
    handleAnimation(state, action){
      action.payload !== undefined ? state.animation = action.payload : state.animation;
    }
  },
});

export const modalActions = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
