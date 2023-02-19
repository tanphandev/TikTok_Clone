import PropTypes from 'prop-types';
import style from './Wrapper.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);
function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default Wrapper;
