import classNames from 'classnames/bind';
import Button from "~/components/Button";
import style from '~/components/Popper/Menu/Menu.module.scss';
const cx = classNames.bind(style);
function MenuItem({data}) {
	return ( <Button className={cx('menu-item')} iconLeft={data.icon} to = {data.to}>{data.title}</Button> );
}

export default MenuItem;