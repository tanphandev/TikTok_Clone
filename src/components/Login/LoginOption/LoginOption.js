import classNames from 'classnames/bind';
import style from './LoginOption.module.scss';

const cx = classNames.bind(style);
function LoginOption({ Icon, content, onClick, disable }) {
    return (
        <button disabled={disable} onClick={onClick} className={cx('option-btn')}>
            <span className={cx('option-icon')}>{Icon}</span>
            <span className={cx('content')}>{content}</span>
        </button>
    );
}

export default LoginOption;
