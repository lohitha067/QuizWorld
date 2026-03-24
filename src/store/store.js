import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categorySlice";
import questionReducer from "../features/questionSlice";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        question: questionReducer,
    },
});
