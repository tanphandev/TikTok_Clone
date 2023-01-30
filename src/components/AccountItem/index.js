import style from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/03d27a2d60a1482ac5f4a4fb0777db1f~c5_300x300.webp?x-expires=1675252800&x-signature=uRJDsWN39RPlMKKHE2LxDw6%2BXyQ%3D"
                alt="Ngoc"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Ngoc Nguyen
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Ngoc Matcha</span>
            </div>
        </div>
    );
}

export default AccountItem;
