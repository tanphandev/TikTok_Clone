import { configureStore } from '@reduxjs/toolkit';
import { videoDataSlice } from '~/redux-toolkit/Slices/videoDataSlice';
import { videoConfigSlice } from '~/redux-toolkit/Slices/videoConfigSlice';
import { authenticationSlice } from './Slices/authenticationSlice';
import { alertSlice } from './Slices/alertSlice';
export const store = configureStore({
    reducer: {
        alert: alertSlice.reducer,
        loadVideoData: videoDataSlice.reducer,
        videoConfig: videoConfigSlice.reducer,
        authenticationConfig: authenticationSlice.reducer,
    },
});
