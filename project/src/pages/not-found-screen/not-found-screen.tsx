import Logo from '../../components/logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">404. Page was not found</h1>
      </header>

      <footer className="page-footer">
        <Logo isFooterLogo />
      </footer>
    </div>);
}

export default NotFoundScreen;
