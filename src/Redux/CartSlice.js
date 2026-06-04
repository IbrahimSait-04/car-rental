import { createSlice } from '@reduxjs/toolkit';




export const cartslice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
       addToCart: (state, action) => {
    const exists = state.value.find(item => item.id === action.payload.id);
    if (!exists) {
        state.value.push(action.payload);
    }
},

        removeFromCart: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload.id);
        },
        clearcart: (state) => {
            state.value = [];
        }
    }
})


export const { addToCart, clearcart , removeFromCart} = cartslice.actions
export default cartslice.reducer;