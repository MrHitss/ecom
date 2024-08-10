import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import booksReducer from "./slices/productSlice"

const store = configureStore({
    reducer:{
        auth:authReducer,
        products:booksReducer
    }
});

export default store