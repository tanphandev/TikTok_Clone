import { configureStore } from '@reduxjs/toolkit';
import { videoDataSlice } from '~/redux-toolkit/Slices/videoDataSlice';
import { videoConfigSlice } from '~/redux-toolkit/Slices/videoConfigSlice';
import authenticationSlice from './Slices/authenticationSlice';
export const store = configureStore({
    reducer: {
        loadVideoData: videoDataSlice.reducer,
        videoConfig: videoConfigSlice.reducer,
        authentication: authenticationSlice.reducer,
    },
});
