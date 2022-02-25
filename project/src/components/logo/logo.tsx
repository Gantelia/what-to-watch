import cn from 'classnames';

type LogoProps = {
  isFooterLogo?: boolean;
}

function Logo({isFooterLogo}: LogoProps): JSX.Element {
  const logoClassnames = cn('logo__link', {'logo__link--light': isFooterLogo});
  return (
    <>
      <div className="logo">
        <a href="/" className={logoClassnames}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
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
