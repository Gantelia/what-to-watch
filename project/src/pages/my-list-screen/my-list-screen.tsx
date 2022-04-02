
import FilmList from '../../components/film-list/film-list';
import Logo from '../../components/logo/logo';
import SignInOut from '../../components/sign-in-out/sign-in-out';
import { FilmsCount } from '../../const';
import { useAppSelector } from '../../hooks';

function MyListScreen(): JSX.Element {
  const {films} = useAppSelector(({CATALOG}) => CATALOG);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <SignInOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {
            <FilmList
              filmCards={films}
              filmsCount={FilmsCount.MyListScreen}
            />
          }
        </div>
      </section>

      <footer className="page-footer">
        <Logo isFooterLogo />
      </footer>
    </div>
  );
}

export default MyListScreen;
