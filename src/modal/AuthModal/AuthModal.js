import classNames from 'classnames/bind';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import style from './AuthModal.module.scss';
import LoginFormOption from './LoginFormOption';
import LoginEmailForm from './LoginEmailForm';
import SignUpFormOption from './SignUpFormOption';
import SignUpEmailForm from './SignUpEmailForm';
import { authForms } from '~/constants/constants';
import { isOpenAuthModalSelector } from '~/redux-toolkit/selectors/authenticationSelector';
import authenticationSlice from '~/redux-toolkit/Slices/authenticationSlice';
const cx = classNames.bind(style);
function AuthModal() {
    const [form, setForm] = useState(authForms.LoginFormOption);
    const [isBackLogin, setIsBackLogin] = useState(false);
    const [isBackSignUp, setIsBackSignUp] = useState(false);
    const dispatch = useDispatch();
    const isOpenAuthModal = useSelector(isOpenAuthModalSelector);
    let FormComp = LoginFormOption;
    switch (form) {
        case authForms.LoginOption:
            FormComp = LoginFormOption;
            break;
        case authForms.LoginWithEmail:
            FormComp = LoginEmailForm;
            break;
        case authForms.SignUpOption:
            FormComp = SignUpFormOption;
            break;
        case authForms.SignUpWithEmail:
            FormComp = SignUpEmailForm;
            break;

        //{update Login/SignUp Method here!!}
        default:
            FormComp = LoginFormOption;
    }
    return (
        <div className={cx('wrapper')}>
            <div
                onClick={() => {
                    dispatch(authenticationSlice.actions.changeIsOpenModal(false));
                }}
                className={cx('overlay')}
            >
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className={cx('login__wrapper')}
                >
                    <div
                        onClick={() => {
                            dispatch(authenticationSlice.actions.changeIsOpenModal(false));
                        }}
                        className={cx('icon-x-wrap')}
                    >
                        <FontAwesomeIcon className={cx('close-icon')} icon={faXmark} />
                    </div>
                    {isBackLogin && (
                        <FontAwesomeIcon
                            onClick={() => {
                                setForm(authForms.LoginOption);
                                setIsBackLogin(false);
                            }}
                            className={cx('back-icon')}
                            icon={faArrowLeft}
                        />
                    )}
                    {isBackSignUp && (
                        <FontAwesomeIcon
                            onClick={() => {
                                setForm(authForms.SignUpOption);
                                setIsBackSignUp(false);
                            }}
                            className={cx('back-icon')}
                            icon={faArrowLeft}
                        />
                    )}

                    {
                        <FormComp
                            data={'DATA of LOGIN WITH EMAIL'}
                            setForm={setForm}
                            setIsBackLogin={setIsBackLogin}
                            setIsBackSignUp={setIsBackSignUp}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default AuthModal;
