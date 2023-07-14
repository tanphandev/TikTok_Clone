import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from './VideoControl.module.scss';
const cx = classNames.bind(style);
function VideoControl() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('play-icon')} icon={faPlay} />
            <FontAwesomeIcon className={cx('pause-icon')} icon={faPause} />
            <FontAwesomeIcon className={cx('volumn-on-icon')} icon={faVolumeHigh} />
            <FontAwesomeIcon className={cx('volumn-off-icond')} icon={faVolumeXmark} />
        </div>
    );
}

export default VideoControl;
