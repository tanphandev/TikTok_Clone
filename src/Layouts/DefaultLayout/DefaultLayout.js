import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import Header from '~/Layouts/components/Header';
import Sidebar from '~/Layouts/components/Sidebar';
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
