import { configureStore } from '@reduxjs/toolkit';
import { videoDataSlice } from '~/redux-toolkit/Slices/videoDataSlice';
import { videoConfigSlice } from '~/redux-toolkit/Slices/videoConfigSlice';
import { authenticationFormSlice, authenticationSlice } from '~/redux-toolkit/Slices/authenticationSlice';
export const store = configureStore({
    reducer: {
        loadVideoData: videoDataSlice.reducer,
        videoConfig: videoConfigSlice.reducer,
        authenticationConfig: authenticationSlice.reducer,
    },
});
