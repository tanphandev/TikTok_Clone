import LoginOption from '~/components/Login/index';
import style from './AuthModal.module.scss';
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
import { authForms } from '~/constants/constants';

const cx = classNames.bind(style);

function LoginFormOption({ closeAuthModal, setIsLogin, setForm, setIsBack }) {
    return (
        <div>
            <div className={cx('login__content')}>
                <h2 className={cx('login__title')}>Log in to TikTok</h2>
                <LoginOption Icon={<QRcodeIcon width="1.8rem" height="1.8rem" />} content="Use QR code" />
                <LoginOption
                    onClick={() => {
                        setForm(authForms.LoginWithEmail);
                        setIsBack(true);
                    }}
                    Icon={<UserIcon width="1.8rem" height="1.8rem" />}
                    content="Use email / password"
                />
                <LoginOption Icon={<FacebookIcon width="1.8rem" height="1.8rem" />} content="Continue with Facebook" />
                <LoginOption Icon={<GoogleIcon width="1.8rem" height="1.8rem" />} content="Continue with Google" />
                <LoginOption Icon={<TwitterIcon width="1.8rem" height="1.8rem" />} content="Continue with Twitter" />
                <LoginOption Icon={<LINEIcon width="1.8rem" height="1.8rem" />} content="Continue with LINE" />
                <LoginOption Icon={<AppleIcon width="1.8rem" height="1.8rem" />} content="Continue with Apple" />
                <LoginOption
                    Icon={<InstagramIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with Instagram"
                />
            </div>
            <p className={cx('login__inform')}>
                By continuing, you agree to TikTok’s{' '}
                <span style={{ fontWeight: '600', color: '#444' }}>Terms of Service</span> and confirm that you have
                read TikTok’s <span style={{ fontWeight: '600', color: '#444' }}>Privacy Policy</span>.
            </p>
            <p className={cx('login__inform--signup')}>
                Don’t have an account?
                <span
                    onClick={() => {
                        setForm(authForms.SignUpOption);
                    }}
                    style={{ fontWeight: '600', color: 'rgb(254, 44, 85)' }}
                >
                    {' '}
                    Sign up
                </span>
            </p>
        </div>
    );
}

export default LoginFormOption;
