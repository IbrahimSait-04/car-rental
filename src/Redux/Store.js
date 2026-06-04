import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import themeReducer from './themeSlice'


export const Store = configureStore({
    reducer: {
        cart: cartReducer,
        theme: themeReducer

    }
})