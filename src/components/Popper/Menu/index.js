import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as WrapperList } from '~/components/Popper';
import style from '~/components/Popper/Menu/Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(style);
function Menu({children, items}) {
	const renderItem = () => (
		items.map((item,index) => (
			<MenuItem key={index} data = {item} />
		))
	)
    return (
        <Tippy
		delay={[0,700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapperList className = {cx('menu-popper')}>
                        {renderItem()}
                    </WrapperList>
                </div>
            )}
        >
            {children}
        </Tippy>
    );

}

export default Menu;
