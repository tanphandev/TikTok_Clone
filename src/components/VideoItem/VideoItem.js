import classNames from 'classnames/bind';
import style from './VideoItem.module.scss';
import AccountItem from './AccountItem';
import Video from './Video';
import Button from '../Button';
const cx = classNames.bind(style);
function VideoItem({ image, name, nickName, description, isPreview = true, onClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-wrapper')}>
                <AccountItem
                    image="https://hoayeuthuong.com/hoa-tuoi/hoa-hong/11534_hoa-hong-hong-do-sa-30-bong"
                    name={'Tan Phan'}
                    nickName={'TanPhan222'}
                    description={'description'}
                    isPreview={true}
                />
                <Button className={cx('following-btn')} small outline>
                    Following
                </Button>
            </div>
            <Video />
        </div>
    );
}

export default VideoItem;
