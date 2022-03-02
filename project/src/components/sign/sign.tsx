import { Link } from 'react-router-dom';
import { AuthorizationStatus} from '../../const';


function Sign(): JSX.Element {
  if (AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link" to="#todo">Sign out</Link>
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
