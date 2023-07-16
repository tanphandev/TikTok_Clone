import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from '../VideoItem.module.scss';
const cx = classNames.bind(style);
function VideoControl({ isPlaying, isMute, setIsPlaying, setIsMute }) {
    const handleSetIsPlayingFalse = () => {
        setIsPlaying(false);
    };
    const handleSetIsPlayingTrue = () => {
        setIsPlaying(true);
    };
    const handleSetIsMuteTrue = () => {
        setIsMute(true);
    };
    const handleSetIsMuteFalse = () => {
        setIsMute(false);
    };
    return (
        <div className={cx('control-wrapper')}>
            {isPlaying ? (
                <FontAwesomeIcon onClick={handleSetIsPlayingFalse} className={cx('control-icon')} icon={faPause} />
            ) : (
                <FontAwesomeIcon onClick={handleSetIsPlayingTrue} className={cx('control-icon')} icon={faPlay} />
            )}
            {isMute ? (
                <FontAwesomeIcon onClick={handleSetIsMuteFalse} className={cx('control-icon')} icon={faVolumeXmark} />
            ) : (
                <FontAwesomeIcon onClick={handleSetIsMuteTrue} className={cx('control-icon')} icon={faVolumeHigh} />
            )}
        </div>
    );
}

export default VideoControl;
