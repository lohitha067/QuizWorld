import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: [],
};

export const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        setQuestion: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { setQuestion } = questionSlice.actions;

export default questionSlice.reducer;