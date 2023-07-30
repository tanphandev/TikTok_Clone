import PropTypes from 'prop-types';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useTheme } from '@mui/material';
import style from '~/components/Popper/Menu/Menu.module.scss';

const cx = classNames.bind(style);
function Header({ title, onBack }) {
    const theme = useTheme();
    return (
        <div className={cx('header-wrapper')}>
            <button className={cx('back-btn')} onClick={onBack}>
                {' '}
                <FontAwesomeIcon style={{ color: theme.palette.textColor.main }} icon={faChevronLeft} />
            </button>
            <span style={{ color: theme.palette.textColor.main }} className={cx('header-title')}>
                {title}
            </span>
        </div>
    );
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func,
};
export default Header;
