import classNames from 'classnames/bind';
import style from './AuthModal.module.scss';
import { TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';
import { authForms } from '~/constants/constants';
import { loginUserByEmail } from '~/redux-toolkit/Slices/authenticationSlice';

const cx = classNames.bind(style);
function LoginEmailForm({ setForm, setIsBackLogin }) {
    const [showPassword, setShowPassword] = useState(true);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email Address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (value) => {
            handleLogin(value.email, value.password);
        },
    });

    const handleLogin = async (email, password) => {
        dispatch(loginUserByEmail({ email, password }));
    };
    return (
        <form onSubmit={formik.handleSubmit}>
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
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className={cx('login-email__email-error')}>{formik.errors.email}</div>
                    ) : null}
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
                            {...formik.getFieldProps('password')}
                        />
                        <FontAwesomeIcon
                            onClick={() => {
                                setShowPassword(!showPassword);
                            }}
                            className={cx('icon-eye')}
                            icon={showPassword ? faEyeSlash : faEye}
                        />
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                        <div className={cx('login-email__password-error')}>{formik.errors.password}</div>
                    ) : null}
                    <span className={cx('forgot-password')}>Forgot Password?</span>
                    <Button type="submit" className={cx('login-email__button')} primary large>
                        Log in
                    </Button>
                </div>
                <p className={cx('login__inform--signup')}>
                    Don’t have an account?
                    <span
                        onClick={() => {
                            setForm(authForms.SignUpOption);
                            setIsBackLogin(false);
                        }}
                        style={{ fontWeight: '600', color: 'rgb(254, 44, 85)' }}
                    >
                        {' '}
                        Sign up
                    </span>
                </p>
            </div>
        </form>
    );
}

export default LoginEmailForm;
