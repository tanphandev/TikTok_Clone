import { createSlice } from '@reduxjs/toolkit';
export const videoConfigSlice = createSlice({
    name: 'videoConfig',
    initialState: { isMute: true },
    reducers: {
        changeMute: (state, action) => {
            state.isMute = action.payload;
        },
    },
});
