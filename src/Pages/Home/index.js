import { useEffect, useState } from 'react';
import VideoItem from '~/components/VideoItem';
import { getVideo } from '~/services/getVideoService';
function Home() {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);
    console.log(videos);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getVideo('for-you', page);
                setVideos((prev) => [...prev, ...res.data]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPI();
    }, [page]);
    return (
        <>
            {videos.map((video, index) => (
                <VideoItem key={index} />
            ))}
        </>
    );
}
export default Home;
