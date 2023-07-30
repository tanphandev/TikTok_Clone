import classNames from 'classnames/bind';
import { useTheme } from '@mui/material';
import style from './VideoItem.module.scss';
import AccountItem from './AccountItem';
import Video from './Video';
import Button from '../Button';
import { Button as Button2 } from '@mui/material';
const cx = classNames.bind(style);
function VideoItem({ videoData }) {
    const theme = useTheme();
    return (
        <div style={{ color: theme.palette.textColor.main }} className={cx('wrapper')}>
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
                <Button2
                    sx={{
                        color: 'var(--primary-color)',
                        minWidth: '96px',
                        minHeight: '36px',
                        fontSize: '1.6rem',
                        fontWeight: '600',
                        textTransform: 'none',
                        borderColor: 'var(--primary-color)',
                        '&:hover': {
                            backgroundColor: 'var(--primary-color-1)',
                            borderColor: 'var(--primary-color)',
                        },
                    }}
                    className={cx('following-btn')}
                    variant="outlined"
                >
                    Follow
                </Button2>
            </div>
            <Video videoData={videoData} />
        </div>
    );
}

export default VideoItem;
