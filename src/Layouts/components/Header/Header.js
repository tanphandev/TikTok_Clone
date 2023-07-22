import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import {
    faCopyright,
    faKeyboard,
    faPaperPlane,
    faQuestionCircle,
    faSun,
    faUser,
} from '@fortawesome/free-regular-svg-icons';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import config from '~/configs';
import images from '~/assets/images';
import Image from '~/components/Image';
import style from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessagesIcon } from '~/assets/icons';
import { iscurrentUserSelector } from '~/redux-toolkit/selectors/authenticationSelector';
import AuthModal from '~/modal/AuthModal/AuthModal';

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
        sperate: true,
    },
];
// handle Logic
const handleOnchange = (item) => {
    console.log(item);
};

function Header() {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
    const isCurrentUser = useSelector(iscurrentUserSelector);
    let items = MENU_ITEMS;
    items = isCurrentUser ? userMenu : MENU_ITEMS;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    <Button def iconLeft={<FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />}>
                        Upload
                    </Button>
                    {isCurrentUser ? (
                        <>
                            <Tippy content={'Messages'}>
                                <button className={cx('action-icon')}>
                                    <MessagesIcon className={cx('messages-icon')} />
                                </button>
                            </Tippy>
                            <Tippy content={'Inbox'}>
                                <button className={cx('action-icon')}>
                                    <InboxIcon className={cx('inbox-icon')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button
                            onClick={() => {
                                setIsOpenAuthModal(true);
                            }}
                            primary
                        >
                            Log in
                        </Button>
                    )}
                    {!isCurrentUser && isOpenAuthModal && <AuthModal setIsOpenAuthModal={setIsOpenAuthModal} />}
                    <Menu items={items} onChange={handleOnchange}>
                        {isCurrentUser ? (
                            <Image
                                className={cx('personal-avatar')}
                                src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/319363337_550209283289836_2946999966778887654_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=go30WBeuNbAAX_UG7EM&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCVh4k1RgN2ftl-Qk0eep5pE-0vcQOx1XDUjYajqIcHcA&oe=641D3A61"
                                alt="Tan Phan"
                                fallBack="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegCgK5aWTTuv_K5TPd10DcJxphcBTBct6R170EamgcCOcYs7LGKVy7ybRc-MCwOcHljg&usqp=CAU"
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
