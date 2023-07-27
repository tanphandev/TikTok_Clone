import { configureStore } from '@reduxjs/toolkit';
import { videoDataSlice } from '~/redux-toolkit/Slices/videoDataSlice';
import { videoConfigSlice } from '~/redux-toolkit/Slices/videoConfigSlice';
import authenticationSlice from './Slices/authenticationSlice';
import themeSlice from './Slices/themeSlice';
export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        loadVideoData: videoDataSlice.reducer,
        videoConfig: videoConfigSlice.reducer,
        authentication: authenticationSlice.reducer,
    },
});
