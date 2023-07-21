import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import LoginOption from '~/components/Login/index';
import style from './AuthModal.module.scss';
import classNames from 'classnames/bind';
import { FacebookIcon, GoogleIcon, UserIcon } from '~/assets/icons';
import { authForms } from '~/constants/constants';

const cx = classNames.bind(style);
function SignUpFormOption({ setForm, setIsBackSignUp }) {
    return (
        <div>
            <div className={cx('signup__content')}>
                <h2 className={cx('signup__title')}>Sign up for TikTok</h2>
                <LoginOption
                    setIsBackSignUp={setIsBackSignUp}
                    onClick={() => {
                        setForm(authForms.SignUpWithEmail);
                        setIsBackSignUp(true);
                    }}
                    Icon={<UserIcon width="1.8rem" height="1.8rem" />}
                    content="Use email"
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
            </div>
            <p className={cx('signup__inform')}>
                By continuing, you agree to TikTok’s{' '}
                <span style={{ fontWeight: '600', color: '#444' }}>Terms of Service</span> and confirm that you have
                read TikTok’s <span style={{ fontWeight: '600', color: '#444' }}>Privacy Policy</span>.
            </p>
            <p className={cx('signup__inform--signup')}>
                Already have an account?
                <span
                    onClick={() => {
                        setForm(authForms.LoginOption);
                    }}
                    style={{ fontWeight: '600', color: 'rgb(254, 44, 85)' }}
                >
                    {' '}
                    Log in
                </span>
            </p>
        </div>
    );
}

export default SignUpFormOption;
