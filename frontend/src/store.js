import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './Slices/fetchAPISlice';

const store = configureStore({
    reducer : {
        news : newsReducer
    }
}) 

export default store;