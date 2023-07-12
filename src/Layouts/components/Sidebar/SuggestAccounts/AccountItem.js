import TippyHeadless from '@tippyjs/react/headless';
/* eslint-disable jsx-a11y/img-redundant-alt */
import AccountPreview from './AccountPreview/';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import style from './SuggestAccounts.module.scss';
import Image from '~/assets/images';
import { useState } from 'react';

const cx = classNames.bind(style);
function AccountItem({ image, fallBack = Image.noImage, name, nickName, check, isPreview }) {
    const [fallback, setFallBack] = useState('');
    const renderPreview = (props) => (
        <div className="preview" tabIndex="-1" {...props}>
            <AccountPreview />
        </div>
    );
    const handleImageError = () => {
        setFallBack(fallBack);
    };
    return (
        <div>
            <TippyHeadless render={isPreview ? renderPreview : () => {}} interactive delay={[900, 0]}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('account-picture')}
                        src={fallback || image}
                        onError={handleImageError}
                        alt="account-picture"
                    />
                    <div className={cx('account-info')}>
                        <h4 className={cx('name')}>
                            {name}
                            {check && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                        </h4>
                        <span className={cx('nickname')}>{nickName}</span>
                    </div>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default AccountItem;