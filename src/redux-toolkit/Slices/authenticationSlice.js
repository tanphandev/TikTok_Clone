import { createSlice } from '@reduxjs/toolkit';
export const authenticationSlice = createSlice({
    name: 'authenticationConfig',
    initialState: {
        isCurrentUser: false,
    },
    reducers: {
        changeIsCurrentUser: (state, action) => {
            state.isCurrentUser = action.payload;
        },
    },
});
