import { createSlice } from "@reduxjs/toolkit";
import { Live_Count } from "./constant";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addChat: (state, action) => {
            state.messages.splice(Live_Count,1)
            state.messages.push(action.payload)
        },
    },
});
export const {addChat} = chatSlice.actions
export default chatSlice.reducer