import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import style from './Sidebar.module.scss';
import config from '~/configs';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/assets/icons';
import SuggestAccount from './SuggestAccounts/SuggestAccounts';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(style);
function Sidebar() {
    // const wrapperRef = useRef();
    // const handleScroll = (e) => {
    //     const element = e.target;
    //     // Kiểm tra nếu scroll đến cuối sidebar (scrollHeight - scrollTop === clientHeight)
    //     if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //         // Kiểm tra xem có dữ liệu mới cần hiển thị hay không
    //         // Nếu không có, thì dùng event.preventDefault() để ngăn scroll tiếp
    //         // Trong ví dụ này, mình giả định là không có dữ liệu mới nên ngăn scroll tiếp
    //         e.preventDefault();
    //     }
    //     console.log(element.scrollHeight);
    // };

    // useEffect(() => {
    //     // Lắng nghe sự kiện scroll của sidebar
    //     wrapperRef.current.addEventListener('scroll', handleScroll);
    //     return () => {
    //         // Hủy lắng nghe sự kiện khi component unmount
    //         wrapperRef.current.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />
            </Menu>
            <SuggestAccount isPreviewAccount={true} title="Suggested Accounts" />
        </div>
    );
}

export default Sidebar;
