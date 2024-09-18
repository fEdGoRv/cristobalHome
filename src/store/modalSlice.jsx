import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState:{isOpen: false},
    reducers:{
        openModalHandler(state,action){
            state.isOpen = true;
        },
        closeModalHandler(state,action){
            state.isOpen = false;
        },
    }
});

export const modalActions = modalSlice.actions;

export const modalReducer = modalSlice.reducer;