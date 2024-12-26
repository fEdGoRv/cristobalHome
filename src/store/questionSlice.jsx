import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: "question",
    initialState: {question: ""},
    reducers:{
        handleQuestionContent(state, action){
            action !== undefined ? state.question = action.payload : state.question;
        }
    }
});

export const questionActions = questionSlice.actions;

export const questionReducer = questionSlice.reducer;