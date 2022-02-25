import cn from 'classnames';
import { Link } from 'react-router-dom';

type LogoProps = {
  isFooterLogo?: boolean;
}

function Logo({isFooterLogo}: LogoProps): JSX.Element {
  const logoClassnames = cn('logo__link', {'logo__link--light': isFooterLogo});
  return (
    <>
      <div className="logo">
        <Link to="/" className={logoClassnames}>
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
