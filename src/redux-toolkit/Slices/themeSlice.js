const { createSlice } = require('@reduxjs/toolkit');

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'light',
    },
    reducers: {
        toggleMode: (state, action) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

export default themeSlice;
