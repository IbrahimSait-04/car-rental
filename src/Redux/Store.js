import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import themeReducer from './ThemeSlice'


export const Store = configureStore({
    reducer: {
        cart: cartReducer,
        theme: themeReducer

    }
})