import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import VideoItem from '~/components/VideoItem';
import { getVideo } from '~/services/getVideoService';
import { videoDataSlice } from '~/components/VideoItem/videoDataSlice';
import { videoDataAPISelector } from '~/redux-toolkit/videoSelector';
function Home() {
    const dispatch = useDispatch();
    const [videoData, setVideoData] = useState([]);
    const [page, setPage] = useState(1);
    const videoDataAPI = useSelector(videoDataAPISelector);

    // call api
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getVideo('for-you', page);
                setVideoData(() => [...res.data]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPI();
    }, [page]);

    // listen event update state loadVideoData
    useEffect(() => {
        dispatch(videoDataSlice.actions.addVideoDataAPI(videoData));
    }, [videoData]);

    // listen event scroll to end page and call API get more Video
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
                setPage((prev) => prev + 1);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {videoDataAPI.data.map((videoData, index) => (
                <VideoItem videoData={videoData} key={index} />
            ))}
        </>
    );
}
export default Home;
