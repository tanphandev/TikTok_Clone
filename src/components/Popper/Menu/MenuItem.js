import classNames from 'classnames/bind';
import Button from "~/components/Button";
import style from '~/components/Popper/Menu/Menu.module.scss';
const cx = classNames.bind(style);
function MenuItem({data, onClick}) {
	const classes = cx('menu-item',{
		sperate:data.sperate
	})
	return ( <Button className={classes} iconLeft={data.icon} to = {data.to} onClick = {onClick}>{data.title} </Button> );
}

export default MenuItem;