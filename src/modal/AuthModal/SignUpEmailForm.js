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
import * as AuthService from '~/services/authService';
import { alertSlice } from '~/redux-toolkit/Slices/alertSlice';
import { authenticationSlice } from '~/redux-toolkit/Slices/authenticationSlice';

const cx = classNames.bind(style);
function SignUpEmailForm({ setForm, setIsBackSignUp, setIsOpenAuthModal }) {
    const [showPassword, setShowPassword] = useState(true);
    const dispatch = useDispatch();
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
        const res = await AuthService.registerUser(email, password, type);
        if (!!res.data) {
            //register success
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            dispatch(alertSlice.actions.setType('success'));
            dispatch(alertSlice.actions.setVariant('filled'));
            dispatch(alertSlice.actions.setContent('Register Account Successed'));
            dispatch(alertSlice.actions.setIsShow(true));
            setTimeout(() => {
                dispatch(alertSlice.actions.setIsShow(false));
                setIsOpenAuthModal(false);
                localStorage.setItem('token', `${res.meta.token}`);
                dispatch(authenticationSlice.actions.changeIsCurrentUser(true));
            }, 3000);
        } else {
            //register faild
            dispatch(alertSlice.actions.setType('error'));
            dispatch(alertSlice.actions.setVariant('filled'));
            dispatch(alertSlice.actions.setContent('Account is Exist on System'));
            dispatch(alertSlice.actions.setIsShow(true));
            setTimeout(() => {
                dispatch(alertSlice.actions.setIsShow(false));
            }, 2000);
        }
    };
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={cx('signup-email__content')}>
                <h2 className={cx('signup-email__title')}>Sign Up With Email</h2>
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