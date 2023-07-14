import TippyHeadless from '@tippyjs/react/headless';
/* eslint-disable jsx-a11y/img-redundant-alt */
import AccountPreview from '~/Layouts/components/Sidebar/SuggestAccounts/AccountPreview';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import style from './VideoItem.module.scss';
import ImageComp from '~/components/Image';

const cx = classNames.bind(style);
function AccountItem({ image, name, nickName, description, check, isPreview }) {
    const renderPreview = (props) => (
        <div className="preview" tabIndex="-1" {...props}>
            <AccountPreview />
        </div>
    );
    return (
        <div>
            <TippyHeadless render={isPreview ? renderPreview : () => {}} interactive delay={[900, 0]}>
                <div className={cx('account-item')}>
                    <ImageComp className={cx('account-picture')} src={image} alt="account-picture" />
                    <div className={cx('account-info')}>
                        <h4 className={cx('name')}>
                            {name}
                            {check && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                        </h4>
                        <span className={cx('nickname')}>{nickName}</span>
                        <p className={cx('description')}>{description}</p>
                    </div>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default AccountItem;
