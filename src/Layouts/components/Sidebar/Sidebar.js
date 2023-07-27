import classNames from 'classnames/bind';
import { Box, useTheme } from '@mui/material';
import Menu, { MenuItem } from './Menu';
import style from './Sidebar.module.scss';
import config from '~/configs';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/assets/icons';
import SuggestAccount from './SuggestAccounts/SuggestAccounts';
const cx = classNames.bind(style);
function Sidebar() {
    const theme = useTheme();
    const scrollBarConfig = {
        '&::-webkit-scrollbar': {
            width: '6px',
        },
        '&::-webkit-scrollbar-track': {
            background: theme.palette.scrollColor.track,
        },
        '&::-webkit-scrollbar-thumb': {
            background: theme.palette.scrollColor.thumb,
        },
    };
    return (
        <Box sx={{ backgroundColor: theme.palette.background.default, ...scrollBarConfig }} className={cx('wrapper')}>
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
        </Box>
    );
}

export default Sidebar;
