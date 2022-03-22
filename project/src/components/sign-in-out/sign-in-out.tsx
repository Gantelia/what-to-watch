import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions/api-auth-actions';

function SignInOut(): JSX.Element {
  const navigate = useNavigate();
  const {authorizationStatus, userData} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Auth) {
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
