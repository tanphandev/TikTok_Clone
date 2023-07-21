import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alertSlice',
    initialState: {
        type: 'success',
        variant: 'filled',
        content: '',
        isShow: false,
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
        },
        setVariant: (state, action) => {
            state.variant = action.payload;
        },

        setContent: (state, action) => {
            state.content = action.payload;
        },
        setIsShow: (state, action) => {
            state.isShow = action.payload;
        },
    },
});
