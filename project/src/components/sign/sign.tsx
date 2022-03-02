import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../const';


function Sign(): JSX.Element {
  const navigate = useNavigate();

  if (AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"
              onClick={() => {
                navigate(AppRoute.MyList);
              }}
            />
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link" to='#todo'>Sign out</Link>
        </li>
      </ul>
    );
  }
  return (
    <div className="user-block">
      <a href="sign-in.html" className="user-block__link">Sign in</a>
    </div>
  );
}

export default Sign;
