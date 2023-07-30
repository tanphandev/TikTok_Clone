import classNames from 'classnames/bind';
import style from './AuthModal.module.scss';
import { TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useTheme } from '@mui/styles';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';
import { authForms } from '~/constants/constants';
import { registerUserByEmail } from '~/redux-toolkit/Slices/authenticationSlice';

const cx = classNames.bind(style);
function SignUpEmailForm({ setForm, setIsBackSignUp }) {
    const [showPassword, setShowPassword] = useState(true);
    const dispatch = useDispatch();
    const theme = useTheme();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email Address').required('Required'),
            password: Yup.string().required('Required').min(6, 'Must be 6 characters or more'),
        }),
        onSubmit: (value) => {
            handleRegisterUser(value.email, value.password);
        },
    });

    const handleRegisterUser = async (email, password, type = 'email') => {
        dispatch(registerUserByEmail({ email, password, type }));
    };
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={cx('signup-email__content')}>
                <h2 style={{ color: theme.palette.textColor.main }} className={cx('signup-email__title')}>
                    Sign Up With Email
                </h2>
                <div className={cx('signup-email__inputs-wrap')}>
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
                        <div className={cx('signup-email__email-error')}>{formik.errors.email}</div>
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
                        <div className={cx('signup-email__password-error')}>{formik.errors.password}</div>
                    ) : null}
                    <Button type="submit" className={cx('signup-email__button')} primary large>
                        Sign Up
                    </Button>
                </div>
                <p style={{ color: theme.palette.textColor.third }} className={cx('signup__inform')}>
                    By continuing, you agree to TikTok’s{' '}
                    <span style={{ fontWeight: '600', color: theme.palette.textColor.secondary }}>
                        Terms of Service
                    </span>{' '}
                    and confirm that you have read TikTok’s{' '}
                    <span style={{ fontWeight: '600', color: theme.palette.textColor.secondary }}>Privacy Policy</span>.
                </p>
                <p style={{ color: theme.palette.textColor.main }} className={cx('signup__inform--signup')}>
                    Already have an account?
                    <span
                        onClick={() => {
                            setForm(authForms.LoginOption);
                            setIsBackSignUp(false);
                        }}
                        style={{ fontWeight: '600', color: 'rgb(254, 44, 85)' }}
                    >
                        {' '}
                        Log in
                    </span>
                </p>
            </div>
        </form>
    );
}

export default SignUpEmailForm;
