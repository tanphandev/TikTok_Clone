import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
    faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { Wrapper as WrapperResult } from '~/components/Popper';
import Image from '~/assets/images';
import style from './Header.module.scss';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import {
    faCopyright,
    faEnvelopeOpen,
    faKeyboard,
    faMessage,
    faPaperPlane,
    faQuestionCircle,
    faSun,
    faUser,
} from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(style);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faCopyright} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Anh',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@ngoc31',
    },
    {
        icon: <FontAwesomeIcon icon={faPaperPlane} />,
        title: 'LIVE studio',
        to: '/live',
    },
    {
        icon: <FontAwesomeIcon icon={faSun} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        sperate: true
    }
]
// handle Logic
const handleOnchange = (item) => {
    console.log(item);
};

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
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
                <TippyHeadless
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
                </TippyHeadless>
                <div className={cx('action')}>
                    <Button def iconLeft={<FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content={'Messages'}>
                                <button className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                            <Tippy content={'Inbox'}>
                                <button className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button
                            primary
                            onClick={() => {
                                alert('clicked');
                            }}
                        >
                            Log in
                        </Button>
                    )}
                    <Menu items={currentUser ? (userMenu) : (MENU_ITEMS)} onChange={handleOnchange}>
                        {currentUser ? (
                            <img
                                className={cx('personal-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3911de057bcd7b230b5310a43888426d.jpeg?x-expires=1676620800&x-signature=ZWGq6KZyiLhK770vTySM2N0bRck%3D"
                                alt="Tan Phan"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
