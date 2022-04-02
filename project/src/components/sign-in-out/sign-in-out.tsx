import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions/api-auth-actions';
import { isAuthorized } from '../../utils';

function SignInOut(): JSX.Element {
  const navigate = useNavigate();
  const {authorizationStatus, userData} = useAppSelector(({USER}) => USER);
  const dispatch = useAppDispatch();


  if (isAuthorized(authorizationStatus)) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={userData?.avatarUrl} alt="User avatar" width="63" height="63"
              onClick={() => {
                navigate(AppRoute.MyList);
              }}
            />
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link" to={AppRoute.Main}
            onClick={() => dispatch(logoutAction())}
          >Sign out
          </Link>
        </li>
      </ul>
    );
  }


  return (
    <div className="user-block">
      <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
    </div>
  );
}

export default SignInOut;
