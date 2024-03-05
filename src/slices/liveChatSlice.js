import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: []
}

const commentSlice = createSlice({
    name: 'liveChat',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            
            if(state.messages.length > 25){
                state.messages.pop()
            }

            state.messages.unshift(action.payload);
        }
    }
})

export const { addMessage } = commentSlice.actions;
export default commentSlice.reducer;