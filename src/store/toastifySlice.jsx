import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from 'react-toastify';

const toastifySlice = createSlice({
    name: "toastify",
    initialState: {toast: {}},
    reducers:{
        handleDisplayToastify(state, action) {
          const type = action.payload;
          if(type === "addItemToCart"){
            state.toast = toast.success('Añadido al carrito', {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                toastId: `${Date.now()}`
                });
          } else if( type === "orderSend"){
            state.toast = toast.success('Su pedido fue exitosamente realizado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                toastId: `${Date.now()}`
                });
                
          }       
        },
    }
});

export const toastifyActions = toastifySlice.actions;

export const toastifyReducer = toastifySlice.reducer;