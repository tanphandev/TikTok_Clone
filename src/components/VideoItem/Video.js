import classNames from 'classnames/bind';
import style from './VideoItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faShare } from '@fortawesome/free-solid-svg-icons';
import Interaction from './Interaction';
import VideoControl from './VideoControl';
const cx = classNames.bind(style);
function Video() {
    const handleOnClick = () => {
        alert('onClick!');
    };
    return (
        <div className={cx('wrapper-content')}>
            <p className={cx('content')}>content</p>
            <div className={cx('video-wrapper')}>
                <video
                    className={cx('video')}
                    src="https://files.fullstack.edu.vn/f8-tiktok/videos/2519-64a583171be1c.mp4"
                    loop
                    playsInline
                >
                    <VideoControl />
                </video>
                <div className={cx('interactive-user')}>
                    <Interaction
                        icon={<FontAwesomeIcon icon={faHeart} />}
                        onClick={handleOnClick}
                        quantity="1"
                        active
                    />
                    <Interaction
                        icon={<FontAwesomeIcon icon={faMessage} />}
                        onClick={handleOnClick}
                        quantity="1"
                        active
                    />
                    <Interaction
                        icon={<FontAwesomeIcon icon={faShare} />}
                        onClick={handleOnClick}
                        quantity="1"
                        active
                    />
                </div>
            </div>
        </div>
    );
}

export default Video;
