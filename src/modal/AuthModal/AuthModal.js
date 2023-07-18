import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeft, faL } from '@fortawesome/free-solid-svg-icons';

import style from './AuthModal.module.scss';
import { useState } from 'react';
import LoginFormOption from './LoginFormOption';
import LoginEmailForm from './LoginEmailForm';
import SignUpFormOption from './SignUpFormOption';
import SignUpEmailForm from './SignUpEmailForm';
import { authForms } from '~/constants/constants';
const cx = classNames.bind(style);
function AuthModal({ closeAuthModal }) {
    const [form, setForm] = useState(authForms.LoginFormOption);
    const [isBack, setIsBack] = useState(false);
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
                    closeAuthModal(false);
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
                            closeAuthModal(false);
                        }}
                        className={cx('icon-x-wrap')}
                    >
                        <FontAwesomeIcon className={cx('close-icon')} icon={faXmark} />
                    </div>
                    {isBack && (
                        <FontAwesomeIcon
                            onClick={() => {
                                setForm(authForms.LoginOption);
                                setIsBack(false);
                            }}
                            className={cx('back-icon')}
                            icon={faArrowLeft}
                        />
                    )}

                    {
                        <FormComp
                            data={'DATA of LOGIN WITH EMAIL'}
                            closeAuthModal={closeAuthModal}
                            setForm={setForm}
                            setIsBack={setIsBack}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default AuthModal;
