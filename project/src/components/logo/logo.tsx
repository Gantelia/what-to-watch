import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  isFooterLogo?: boolean;
}

function Logo({isFooterLogo}: LogoProps): JSX.Element {
  return (
    <>
      <div className="logo">
        <Link to={AppRoute.Main} className={`logo__link ${isFooterLogo? 'logo__link--light': ''}`}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {
        isFooterLogo ?
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div> : ''
      }
    </>
  );
}

export default Logo;
