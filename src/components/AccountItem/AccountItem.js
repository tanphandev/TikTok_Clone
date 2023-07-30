import PropTypes from 'prop-types';
import style from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(style);
function AccountItem({ data, classNameOfWrap }) {
    const theme = useTheme();
    return (
        <Link to={`/${data.nickname}`} className={`${cx('wrapper')} ${classNameOfWrap}`}>
            <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 style={{ color: theme.palette.textColor.main }} className={cx('name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span style={{ color: theme.palette.textColor.main }} className={cx('username')}>
                    {data.nickname}
                </span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
