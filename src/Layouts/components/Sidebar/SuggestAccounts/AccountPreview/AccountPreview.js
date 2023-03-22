/* eslint-disable jsx-a11y/img-redundant-alt */
import classNames from 'classnames/bind';
import style from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { Wrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function AccountPreview() {
    return (
        <Wrapper className={cx('account-preview')}>
            <div className={cx('title')}>
                <img
                    className={cx('image')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0995309d9b40283f49325641059892f6~c5_100x100.jpeg?x-expires=1679626800&x-signature=nQsROJltqTRlHX8FQY0XaJ8xwGI%3D"
                    alt="image"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <h4 className={cx('name')}>
                Phan Tan
                <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
            </h4>
            <p className={cx('nickname')}>Tanphan222</p>
            <div className={cx('status')}>
                <p className={cx('followers')}>
                    <span>8.8M</span>Folowers
                </p>
                <p className={cx('likes')}>
                    <span>707.4M</span>Likes
                </p>
            </div>
        </Wrapper>
    );
}

export default AccountPreview;
