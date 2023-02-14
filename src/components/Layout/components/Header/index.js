import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { Wrapper as WrapperResult } from '~/components/Popper';
import Image from '~/assets/images';
import style from './Header.module.scss';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { faCopyright, faKeyboard, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(style);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faCopyright} />,
        title : 'English'
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title : 'Feedback and help',
        to : '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title : 'Keyboard shortcuts'
    }
]
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={Image.logo} alt="TikTok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <WrapperResult>
                                <h4 className={cx('search-title')}> Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </WrapperResult>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className="action">
                    <Button def iconLeft={<FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button
                        primary
                        onClick={() => {
                            alert('clicked');
                        }}
                    >
                        Log in
                    </Button>

                    <Menu items = {MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
