import LoginOption from '~/components/Login/index';
import style from './AuthModal.module.scss';
import classNames from 'classnames/bind';
import { makeStyles } from '@mui/styles';
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
const useStyle = makeStyles((theme) => ({
    loginContent: {
        // backgroundColor: theme.palette.background.default,
    },
}));
function LoginFormOption({ setForm, setIsBackLogin }) {
    const classes = useStyle();
    return (
        <form>
            <div className={`${cx('login__content')} ${classes.loginContent}`}>
                <h2 className={cx('login__title')}>Log in to TikTok</h2>
                <LoginOption
                    disable={true}
                    Icon={<QRcodeIcon width="1.8rem" height="1.8rem" />}
                    content="Use QR code"
                />
                <LoginOption
                    setIsBackLogin={setIsBackLogin}
                    onClick={() => {
                        setForm(authForms.LoginWithEmail);
                        setIsBackLogin(true);
                    }}
                    Icon={<UserIcon width="1.8rem" height="1.8rem" />}
                    content="Use email / password"
                />
                <LoginOption
                    disable={true}
                    Icon={<FacebookIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with Facebook"
                />
                <LoginOption
                    disable={true}
                    Icon={<GoogleIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with Google"
                />
                <LoginOption
                    disable={true}
                    Icon={<TwitterIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with Twitter"
                />
                <LoginOption
                    disable={true}
                    Icon={<LINEIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with LINE"
                />
                <LoginOption
                    disable={true}
                    Icon={<AppleIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with Apple"
                />
                <LoginOption
                    disable={true}
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
        </form>
    );
}

export default LoginFormOption;
