import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import style from './VideoItem.module.scss';

import { MusicIcon } from '~/assets/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faShare } from '@fortawesome/free-solid-svg-icons';
import Interaction from './Interaction';
import VideoControl from './VideoControl';
import { useEffect, useRef, useState } from 'react';
import { videoConfigSelector } from '~/redux-toolkit/videoSelector';
import { videoConfigSlice } from './videoConfigSlice';

const cx = classNames.bind(style);
function Video({ videoData }) {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const dispatch = useDispatch();
    const isMute = useSelector(videoConfigSelector).isMute;
    useEffect(() => {
        const videoElement = videoRef.current;
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    //play video when it appear on display
                    setIsPlaying(true);
                    videoElement.muted = isMute;
                    videoElement.play();
                } else {
                    //play video when it disappear on display
                    setIsPlaying(false);
                    videoElement.pause();
                }
            });
        };
        const options = {
            threshold: 0.8,
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        //start observe
        observer.observe(videoElement);

        //stop and disconnect observe when component unmount
        return () => {
            observer.unobserve(videoElement);
            observer.disconnect();
        };
    }, [isMute]);

    const handleOnClick = () => {
        alert('onClick!');
    };

    const setIsPlayingCallBack = (isPlaying) => {
        setIsPlaying(isPlaying);
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    const setIsMuteCallBack = (isMute) => {
        // setIsMute(isMute);
        dispatch(videoConfigSlice.actions.changeMute(isMute));
        videoRef.current.muted = isMute;
        localStorage.setItem('isMute', JSON.stringify(isMute));
    };
    return (
        <div className={cx('wrapper-content')}>
            {!!videoData.music && (
                <p className={cx('music')}>
                    <MusicIcon className={cx('music-icon')} width="2rem" height="2rem" />
                    {videoData.music}
                </p>
            )}
            <div className={cx('video-wrapper')}>
                <div className={cx('content-wrapper')}>
                    <video
                        ref={videoRef}
                        className={cx('video')}
                        src={videoData.file_url}
                        loop="loop"
                        muted={true}
                        preload="auto"
                    ></video>
                    <VideoControl
                        isPlaying={isPlaying}
                        isMute={isMute}
                        setIsPlaying={setIsPlayingCallBack}
                        setIsMute={setIsMuteCallBack}
                    />
                </div>
                <div className={cx('interactive-user')}>
                    <Interaction
                        icon={<FontAwesomeIcon icon={faHeart} />}
                        onClick={handleOnClick}
                        quantity={videoData.likes_count}
                        active
                    />
                    <Interaction
                        icon={<FontAwesomeIcon icon={faMessage} />}
                        onClick={handleOnClick}
                        quantity="0"
                        active
                    />
                    <Interaction
                        icon={<FontAwesomeIcon icon={faShare} />}
                        onClick={handleOnClick}
                        quantity="0"
                        active
                    />
                </div>
            </div>
        </div>
    );
}

export default Video;
