import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useTheme } from '@mui/material';

import style from './DefaultLayout.module.scss';
import Header from '~/Layouts/components/Header';
import Sidebar from '~/Layouts/components/Sidebar';
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
    const theme = useTheme();
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <div className={cx('pseudo-sidebar')}></div>
                    <Sidebar />
                </div>
                <div style={{ backgroundColor: theme.palette.background.default }} className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
