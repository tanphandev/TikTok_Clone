import { createSlice } from '@reduxjs/toolkit';
import LoginOption from '~/components/Login/LoginOption/LoginOption';
export const authenticationSlice = createSlice({
    name: 'authenticationConfig',
    initialState: {
        currentUser: false,
    },
    reducers: {
        changeCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});
