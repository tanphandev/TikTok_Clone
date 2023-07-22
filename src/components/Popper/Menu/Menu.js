import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Wrapper as WrapperList } from '~/components/Popper';
import style from '~/components/Popper/Menu/Menu.module.scss';
import Header from './Header';
import MenuItem from './MenuItem';
const cx = classNames.bind(style);

const defaultFn = () => {};
function Menu({ children, items, hideOnClick = false, onChange = { defaultFn } }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    useEffect(() => {
        setHistory([{ data: items }]);
    }, [items]);
    const renderItem = () =>
        current.data.map((item, index) => (
            <MenuItem
                key={index}
                data={item}
                onClick={() => {
                    const isParrent = !!item.children;
                    if (isParrent) {
                        setHistory((prev) => [...prev, item.children]);
                    } else {
                        onChange(item);
                    }
                }}
            />
        ));
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <WrapperList className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </WrapperList>
        </div>
    );
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };
    return (
        <Tippy
            offset={[12, 10]}
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            interactive
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onBack: PropTypes.func,
};

export default Menu;
