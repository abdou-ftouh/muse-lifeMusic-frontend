import { configureStore } from "@reduxjs/toolkit";
import bandsReducer from '../features/bands/bandsSlice';
import { bands } from "../seeds";

export const store = configureStore({
    reducer: {
        bands: bandsReducer,
    }
})

// console.log(bands)