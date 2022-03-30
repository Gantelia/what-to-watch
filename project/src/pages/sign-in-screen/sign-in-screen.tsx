import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InvalidLogin from '../../components/invalid-login/invalid-login';
import Logo from '../../components/logo/logo';
import SignInError from '../../components/sign-in-error/sign-in-error';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions/api-auth-actions';
import { isAuthorized, validateLogin, validatePassword } from '../../utils';

function SignInScreen(): JSX.Element {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginMessage, setLoginMessage] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const {authorizationStatus, error} = useAppSelector((store) => store);

  useEffect(() => {
    if (isAuthorized(authorizationStatus)) {
      navigate(AppRoute.Main);
    }
  },[authorizationStatus, navigate]);

  const handleSubmit = (evt: FormEvent<HTMLButtonElement>): void => {
    evt.preventDefault();
    const isLoginValid = validateLogin(login);
    const isPasswordValid = validatePassword(password);
    if (!isLoginValid) {
      setLoginMessage(true);
      setPasswordMessage(false);
      return;
    }
    if (isLoginValid && !isPasswordValid) {
      setLoginMessage(false);
      setPasswordMessage(true);
      return;
    }
    if (isLoginValid && isPasswordValid) {
      dispatch(loginAction({login: login, password: password}));
      setIsSubmitting(true);
    }
  };

  if (error) {
    setIsSubmitting(false);
  }

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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
