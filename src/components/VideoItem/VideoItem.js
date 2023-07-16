import classNames from 'classnames/bind';
import style from './VideoItem.module.scss';
import AccountItem from './AccountItem';
import Video from './Video';
import Button from '../Button';
const cx = classNames.bind(style);
function VideoItem({ videoData }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-wrapper')}>
                <AccountItem
                    image={videoData.user.avatar}
                    name={videoData.user.first_name + ' ' + videoData.user.last_name}
                    nickName={videoData.user.nickname}
                    description={videoData.description}
                    followersCount={videoData.user.followers_count}
                    likesCount={videoData.user.likes_count}
                    isPreview={true}
                />
                <Button className={cx('following-btn')} small outline>
                    Following
                </Button>
            </div>
            <Video videoData={videoData} />
        </div>
    );
}

export default VideoItem;
