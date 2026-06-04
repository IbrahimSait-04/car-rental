import { createSlice } from "@reduxjs/toolkit";



export const themeslice = createSlice({
      name: 'theme',

      initialState: {
        value: "light"
      },
      reducers:{
        toggleTheme: (state,action) => {
            state.value = action.payload;

        }
            
      }
})

export const { toggleTheme } = themeslice.actions;
export default themeslice.reducer;