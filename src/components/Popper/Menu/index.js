import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Wrapper as WrapperList } from '~/components/Popper';
import style from '~/components/Popper/Menu/Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
const cx = classNames.bind(style);

const defaultFn = () => {
}
function Menu({ children, items, onChange = {defaultFn}}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () =>
        current.data.map((item, index) => (
            <MenuItem
                key={index}
                data={item}
                onClick={() => {
                    const isParrent = !!item.children;
                    if (isParrent) {
                        setHistory((prev) => [...prev, item.children]);
                    }else
                    {
                        onChange(item)
                    }
                }}
            />
        ));
    return (
        <Tippy
        offset={[12,10]}
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapperList className={cx('menu-popper')}>
                        {
                            history.length > 1 && <Header title={'Language'} onBack = { () => {
                                setHistory(prev => (prev.slice(0,history.length - 1)))
                            }} />
                        }
                        {renderItem()}
                        </WrapperList>
                </div>
            )}
            onHide = {() => {
                setHistory(prev => (prev.slice(0,1)))
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
