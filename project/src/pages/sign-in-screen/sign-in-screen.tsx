import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InvalidLogin from '../../components/invalid-login/invalid-login';
import Logo from '../../components/logo/logo';
import SignInError from '../../components/sign-in-error/sign-in-error';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions/api-auth-actions';
import { validateLogin, validatePassword } from '../../utils';

function SignInScreen(): JSX.Element {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginMessage, setLoginMessage] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorization = useAppSelector((store) => store.authorizationStatus);

  useEffect(() => {
    if (authorization === AuthorizationStatus.Auth) {
      navigate(AppRoute.Main);
    }
  },[authorization, navigate]);

  const handleSubmit = (evt: FormEvent<HTMLButtonElement>): void => {
    evt.preventDefault();
    const loginValidation = validateLogin(login);
    const passValidation = validatePassword(password);
    if (!loginValidation) {
      setLoginMessage(true);
      setPasswordMessage(false);
    } else if (loginValidation && !passValidation) {
      setLoginMessage(false);
      setPasswordMessage(true);
    } else if (loginValidation && passValidation) {
      dispatch(loginAction({login: login, password: password}));
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          {loginMessage && <InvalidLogin />}
          {passwordMessage && <SignInError />}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                onInput={({target}: ChangeEvent<HTMLInputElement>): void => {
                  setLogin(target.value);
                }}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                value={login}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                onInput={({target}: ChangeEvent<HTMLInputElement>): void => {
                  setPassword(target.value);
                }}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                value={password}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              onClick={handleSubmit}
              className="sign-in__btn"
              type="submit"
            >Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo isFooterLogo />
      </footer>
    </div>
  );
}

export default SignInScreen;
