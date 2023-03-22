import classNames from 'classnames/bind';

import AccountItem from './AccountItem';
import style from './SuggestAccounts.module.scss';

const cx = classNames.bind(style);

function SuggestAccount({ title, isPreviewAccount }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{title}</p>
            <AccountItem
                image="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0995309d9b40283f49325641059892f6~c5_100x100.jpeg?x-expires=1679626800&x-signature=nQsROJltqTRlHX8FQY0XaJ8xwGI%3D"
                name="Tran Nguyen Hoang Nam"
                nickName="namhoang6789"
                check
                isPreview={isPreviewAccount}
            />
            <AccountItem
                image="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0995309d9b40283f49325641059892f6~c5_100x100.jpeg?x-expires=1679626800&x-signature=nQsROJltqTRlHX8FQY0XaJ8xwGI%3D"
                name="Phan Tan"
                nickName="tanphan222"
                check
                isPreview={isPreviewAccount}
            />
            <AccountItem
                image="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0995309d9b40283f49325641059892f6~c5_100x100.jpeg?x-expires=1679626800&x-signature=nQsROJltqTRlHX8FQY0XaJ8xwGI%3D"
                name="Phan Tan"
                nickName="tanphan222"
                check
                isPreview={isPreviewAccount}
            />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

export default SuggestAccount;
