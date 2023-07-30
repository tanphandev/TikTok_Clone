import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { Link, useNavigate } from 'react-router-dom';
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
import Image from '~/components/Image';
import style from './Header.module.scss';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessagesIcon } from '~/assets/icons';
import { isOpenAuthModalSelector, iscurrentUserSelector } from '~/redux-toolkit/selectors/authenticationSelector';
import AuthModal from '~/modal/AuthModal/AuthModal';
import authenticationSlice from '~/redux-toolkit/Slices/authenticationSlice';
import { Logo } from '~/assets/icons/logo';
import { useTheme } from '@emotion/react';
import { DarkMode } from '@mui/icons-material';
import { modeSelector } from '~/redux-toolkit/selectors/themeSelector';
import { useEffect, useRef } from 'react';
import themeSlice from '~/redux-toolkit/Slices/themeSlice';
import DarkModeSwitch from '~/components/DarkModeSwitch';

const useStyle = makeStyles((theme) => ({
    uploadButton: {
        '&:hover': {
            backgroundColor: `${theme.palette.hover.greyHover6}!important`,
        },
    },
}));

const cx = classNames.bind(style);
function Header() {
    const classes = useStyle();
    const theme = useTheme();
    const backgroundColor = theme.palette.background.default;
    const logoColor = theme.palette.logo.main;
    const mode = useSelector(modeSelector);
    let isDarkMode = useRef(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isCurrentUser = useSelector(iscurrentUserSelector);
    const isOpenAuthModal = useSelector(isOpenAuthModalSelector);
    // check Mode
    isDarkMode.current = mode === 'dark' ? true : false;
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
        {
            icon: <DarkMode />,
            title: 'Dark mode',
            iconRight: <DarkModeSwitch checked={isDarkMode.current} />,
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
            // to: '/logout',
            sperate: true,
        },
    ];
    let items = MENU_ITEMS;
    items = isCurrentUser ? userMenu : MENU_ITEMS;
    // handle Logic
    const handleOnchange = (item) => {
        switch (item.title) {
            case 'Dark mode': {
                dispatch(themeSlice.actions.toggleMode());

                break;
            }
            case 'Log out': {
                localStorage.removeItem('currentUser');
                localStorage.removeItem('token');
                dispatch(authenticationSlice.actions.changeIsCurrentUser(false));
                navigate('/');
                break;
            }
            default: {
            }
        }
    };
    return (
        <header
            style={{ backgroundColor: backgroundColor, boxShadow: theme.palette.headerBoxShadow.main }}
            className={cx('wrapper')}
        >
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    {<Logo modeColor={logoColor} />}
                </Link>

                <Search />

                <div className={cx('action')}>
                    <Button
                        className={classes.uploadButton}
                        style={{
                            backgroundColor: theme.palette.headerButton.main,
                            color: theme.palette.textColor.main,
                        }}
                        def
                        iconLeft={
                            <FontAwesomeIcon
                                color={theme.palette.textColor.main}
                                className={cx('plus-icon')}
                                icon={faPlus}
                            />
                        }
                    >
                        Upload
                    </Button>
                    {isCurrentUser ? (
                        <>
                            <Tippy content={'Messages'}>
                                <button
                                    style={{
                                        color: theme.palette.textColor.main,
                                    }}
                                    className={cx('action-icon')}
                                >
                                    <MessagesIcon className={cx('messages-icon')} />
                                </button>
                            </Tippy>
                            <Tippy content={'Inbox'}>
                                <button
                                    style={{
                                        color: theme.palette.textColor.main,
                                    }}
                                    className={cx('action-icon')}
                                >
                                    <InboxIcon className={cx('inbox-icon')} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button
                            onClick={() => {
                                dispatch(authenticationSlice.actions.changeIsOpenModal(true));
                            }}
                            primary
                        >
                            Log in
                        </Button>
                    )}
                    {isOpenAuthModal && <AuthModal />}
                    <Menu items={items} onChange={handleOnchange}>
                        {isCurrentUser ? (
                            <Image
                                className={cx('personal-avatar')}
                                src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/319363337_550209283289836_2946999966778887654_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=go30WBeuNbAAX_UG7EM&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCVh4k1RgN2ftl-Qk0eep5pE-0vcQOx1XDUjYajqIcHcA&oe=641D3A61"
                                alt="Tan Phan"
                                fallBack="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegCgK5aWTTuv_K5TPd10DcJxphcBTBct6R170EamgcCOcYs7LGKVy7ybRc-MCwOcHljg&usqp=CAU"
                            />
                        ) : (
                            <button style={{ color: theme.palette.textColor.main }} className={cx('more-btn')}>
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
