/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import style from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { Wrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function AccountPreview({ image, name, nickName, check, followersCount, likesCount }) {
    return (
        <Wrapper className={cx('account-preview')}>
            <div className={cx('title')}>
                <img className={cx('image')} src={image} alt="image" />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <h4 className={cx('nickname')}>
                {nickName}
                {check && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
            </h4>
            <p className={cx('name')}>{name}</p>
            <div className={cx('status')}>
                <p className={cx('followers')}>
                    <span>{followersCount}</span>Folowers
                </p>
                <p className={cx('likes')}>
                    <span>{likesCount}</span>Likes
                </p>
            </div>
        </Wrapper>
    );
}

export default AccountPreview;
