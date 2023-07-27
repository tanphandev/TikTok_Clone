import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material';
import style from './Menu.module.scss';
const cx = classNames.bind(style);
function MenuItem({ title, to, icon, iconActive }) {
    const theme = useTheme();
    return (
        <NavLink
            style={{ color: theme.palette.textColor.main }}
            className={(nav) => cx('item', { active: nav.isActive })}
            to={to}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('activeIcon')}>{iconActive}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
