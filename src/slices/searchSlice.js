import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchCache: (state, action) => {
            //1st same as 2nd 
            // const [key , value] = Object.entries(action.payload)[0];
            // state[key] = value;
            
            //2nd
            Object.assign(state, action.payload)
        }
    }
});

export const { searchCache } = searchSlice.actions;
export default searchSlice.reducer;