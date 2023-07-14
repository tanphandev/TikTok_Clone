import classNames from 'classnames/bind';
import style from './Interaction.module.scss';
const cx = classNames.bind(style);
function Interaction({ onClick, icon, active, quantity }) {
    return (
        <div className={cx('wraper')}>
            <div className={cx('icon')}> {icon}</div>
            <span className={cx('quantity')}>{quantity}</span>
        </div>
    );
}

export default Interaction;
