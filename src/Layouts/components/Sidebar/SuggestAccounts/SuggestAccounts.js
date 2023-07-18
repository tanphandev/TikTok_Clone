import classNames from 'classnames/bind';

import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';

import style from './SuggestAccounts.module.scss';
import { getUserSuggested } from '~/services/userService';

const cx = classNames.bind(style);

function SuggestAccount({ title, isPreviewAccount }) {
    const [userSuggested, setUserSuggested] = useState([]);
    const [page, setPage] = useState(1);
    const [extendUser, setExtendUser] = useState(false);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await getUserSuggested(page, 10);
                if (page == 1) {
                    setUserSuggested(res.data);
                } else {
                    setUserSuggested((prev) => [...prev, ...res.data]);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPI();
    }, [page]);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            {userSuggested.map((user, index) => (
                <AccountItem
                    image={user.avatar}
                    nickName={user.nickname}
                    name={`${user.first_name} ${user.last_name}`}
                    check={user.tick}
                    isPreview={isPreviewAccount}
                    followersCount={user.followers_count}
                    likesCount={user.likes_count}
                    key={index}
                />
            ))}
            {extendUser ? (
                <p
                    className={cx('less-btn')}
                    onClick={() => {
                        setPage(1);
                        setExtendUser(false);
                    }}
                >
                    See less
                </p>
            ) : (
                <p
                    className={cx('more-btn')}
                    onClick={() => {
                        setPage(2);
                        setExtendUser(true);
                    }}
                >
                    See all
                </p>
            )}
        </div>
    );
}

export default SuggestAccount;
