import { createSlice } from '@reduxjs/toolkit';
export const videoDataSlice = createSlice({
    name: 'videoData',
    initialState: { data: [] },
    reducers: {
        addVideoDataAPI: (state, action) => {
            state.data.push(...action.payload);
        },
    },
});
