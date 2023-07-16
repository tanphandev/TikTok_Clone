import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import LoginOption from '~/components/Login/index';
import style from './LoginModal.module.scss';
import classNames from 'classnames/bind';
import {
    AppleIcon,
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    LINEIcon,
    QRcodeIcon,
    TwitterIcon,
    UserIcon,
} from '~/assets/icons';

const cx = classNames.bind(style);

function LoginModel({ closeLoginModal }) {
    return (
        <div className={cx('wrapper')}>
            <div
                onClick={() => {
                    closeLoginModal(false);
                }}
                className={cx('overlay')}
            >
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className={cx('content-wrapper')}
                >
                    <div
                        onClick={() => {
                            closeLoginModal(false);
                        }}
                        className={cx('icon-wrap')}
                    >
                        <FontAwesomeIcon className={cx('close-icon')} icon={faXmark} />
                    </div>
                    <div className={cx('content')}>
                        <h2 className={cx('title')}>Log in to TikTok</h2>
                        <LoginOption Icon={<QRcodeIcon width="1.8rem" height="1.8rem" />} content="Use QR code" />
                        <LoginOption
                            Icon={<UserIcon width="1.8rem" height="1.8rem" />}
                            content="Use email / password"
                        />
                        <LoginOption
                            Icon={<FacebookIcon width="1.8rem" height="1.8rem" />}
                            content="Continue with Facebook"
                        />
                        <LoginOption
                            Icon={<GoogleIcon width="1.8rem" height="1.8rem" />}
                            content="Continue with Google"
                        />
                        <LoginOption
                            Icon={<TwitterIcon width="1.8rem" height="1.8rem" />}
                            content="Continue with Twitter"
                        />
                        <LoginOption Icon={<LINEIcon width="1.8rem" height="1.8rem" />} content="Continue with LINE" />
                        <LoginOption
                            Icon={<AppleIcon width="1.8rem" height="1.8rem" />}
                            content="Continue with Apple"
                        />
                        <LoginOption
                            Icon={<InstagramIcon width="1.8rem" height="1.8rem" />}
                            content="Continue with Instagram"
                        />
                    </div>
                    <p className={cx('inform')}>
                        By continuing, you agree to TikTok’s{' '}
                        <span style={{ fontWeight: '600', color: '#444' }}>Terms of Service</span> and confirm that you
                        have read TikTok’s <span style={{ fontWeight: '600', color: '#444' }}>Privacy Policy</span>.
                    </p>
                    <p className={cx('inform-signup')}>
                        Don’t have an account?
                        <span style={{ fontWeight: '600', color: 'rgb(254, 44, 85)' }}> Sign up</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginModel;
