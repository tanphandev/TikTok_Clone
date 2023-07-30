import classNames from 'classnames/bind';
import { useTheme } from '@mui/material';
import style from './Interaction.module.scss';
const cx = classNames.bind(style);
function Interaction({ onClick, icon, active, quantity }) {
    const theme = useTheme();
    return (
        <div className={cx('wraper')}>
            <div style={{ backgroundColor: theme.palette.background.alt }} className={cx('icon')}>
                {' '}
                {icon}
            </div>
            <span style={{ color: theme.palette.textColor.main }} className={cx('quantity')}>
                {quantity}
            </span>
        </div>
    );
}

export default Interaction;
