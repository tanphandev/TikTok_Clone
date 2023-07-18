import classNames from 'classnames/bind';
import style from './AuthModal.module.scss';
import { TextField, colors } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import Button from '~/components/Button';
import { authForms } from '~/constants/constants';

const cx = classNames.bind(style);
function LoginEmailForm({ setForm }) {
    const [showPassword, setShowPassword] = useState(true);
    return (
        <div className={cx('login-email__content')}>
            <h2 className={cx('login-email__title')}>Log in</h2>
            <div className={cx('login-email__inputs-wrap')}>
                <TextField
                    InputProps={{
                        style: {
                            fontSize: '1.4rem',
                        },
                    }}
                    sx={{ margin: '10px 30px' }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    required
                />
                <div className={cx('password-input')}>
                    <TextField
                        InputProps={{
                            style: {
                                fontSize: '1.4rem',
                            },
                        }}
                        type={showPassword ? 'text' : 'password'}
                        sx={{ width: '100%', boxSizing: 'border-box' }}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        color="secondary"
                        required
                    />
                    <FontAwesomeIcon
                        onClick={() => {
                            setShowPassword(!showPassword);
                        }}
                        className={cx('icon-eye')}
                        icon={showPassword ? faEyeSlash : faEye}
                    />
                </div>
                <span className={cx('forgot-password')}>Forgot Password?</span>
                <Button className={cx('login-email__button')} primary large>
                    Log in
                </Button>
            </div>
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

export default LoginEmailForm;
