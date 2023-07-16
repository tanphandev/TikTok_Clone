import { configureStore } from '@reduxjs/toolkit';
import { videoDataSlice } from '~/components/VideoItem/videoDataSlice';
import { videoConfigSlice } from '~/components/VideoItem/videoConfigSlice';
export const store = configureStore({
    reducer: {
        loadVideoData: videoDataSlice.reducer,
        videoConfig: videoConfigSlice.reducer,
    },
});
