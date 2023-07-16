import classNames from 'classnames/bind';
import style from './LoginOption.module.scss';

const cx = classNames.bind(style);
function LoginOption({ Icon, content }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('option-icon')}>{Icon}</span>
            <span className={cx('content')}>{content}</span>
        </div>
    );
}

export default LoginOption;
