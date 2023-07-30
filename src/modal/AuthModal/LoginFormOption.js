import LoginOption from '~/components/Login/index';
import style from './AuthModal.module.scss';
import classNames from 'classnames/bind';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
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
    const theme = useTheme();
    return (
        <form>
            <div className={`${cx('login__content')} ${classes.loginContent}`}>
                <h2
                    style={{
                        color: theme.palette.textColor.main,
                    }}
                    className={cx('login__title')}
                >
                    Log in to TikTok
                </h2>
                <LoginOption
                    style={{
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.textColor.main,
                        borderColor: theme.palette.textColor.fourth,
                    }}
                    disable={true}
                    Icon={<QRcodeIcon width="1.8rem" height="1.8rem" />}
                    content="Use QR code"
                />
                <LoginOption
                    style={{
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.textColor.main,
                        borderColor: theme.palette.textColor.fourth,
                    }}
                    setIsBackLogin={setIsBackLogin}
                    onClick={() => {
                        setForm(authForms.LoginWithEmail);
                        setIsBackLogin(true);
                    }}
                    Icon={<UserIcon width="1.8rem" height="1.8rem" />}
                    content="Use email / password"
                />
                <LoginOption
                    style={{
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.textColor.main,
                        borderColor: theme.palette.textColor.fourth,
                    }}
                    disable={true}
                    Icon={<FacebookIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with Facebook"
                />
                <LoginOption
                    style={{
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.textColor.main,
                        borderColor: theme.palette.textColor.fourth,
                    }}
                    disable={true}
                    Icon={<GoogleIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with Google"
                />
                <LoginOption
                    style={{
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.textColor.main,
                        borderColor: theme.palette.textColor.fourth,
                    }}
                    disable={true}
                    Icon={<TwitterIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with Twitter"
                />
                <LoginOption
                    style={{
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.textColor.main,
                        borderColor: theme.palette.textColor.fourth,
                    }}
                    disable={true}
                    Icon={<LINEIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with LINE"
                />
                <LoginOption
                    style={{
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.textColor.main,
                        borderColor: theme.palette.textColor.fourth,
                    }}
                    disable={true}
                    Icon={<AppleIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with Apple"
                />
                <LoginOption
                    style={{
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.textColor.main,
                        borderColor: theme.palette.textColor.fourth,
                    }}
                    disable={true}
                    Icon={<InstagramIcon width="1.8rem" height="1.8rem" />}
                    content="Continue with Instagram"
                />
            </div>
            <p style={{ color: theme.palette.textColor.third }} className={cx('login__inform')}>
                By continuing, you agree to TikTok’s{' '}
                <span style={{ fontWeight: '600', color: theme.palette.textColor.secondary }}>Terms of Service</span>{' '}
                and confirm that you have read TikTok’s{' '}
                <span style={{ fontWeight: '600', color: theme.palette.textColor.secondary }}>Privacy Policy</span>.
            </p>
            <p style={{ color: theme.palette.textColor.main }} className={cx('login__inform--signup')}>
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
