import classNames from 'classnames/bind';
import style from './LoginOption.module.scss';

const cx = classNames.bind(style);
function LoginOption({ Icon, content, onClick, disable, style }) {
    return (
        <button
            style={{ backgroundColor: style.backgroundColor, border: `1px solid ${style.borderColor}` }}
            disabled={disable}
            onClick={onClick}
            className={cx('option-btn')}
        >
            <span style={{ color: style.color }} className={cx('option-icon')}>
                {Icon}
            </span>
            <span style={{ color: style.color }} className={cx('content')}>
                {content}
            </span>
        </button>
    );
}

export default LoginOption;
