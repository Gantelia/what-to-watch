
import FilmList from '../../components/film-list/film-list';
import Logo from '../../components/logo/logo';
import Sign from '../../components/sign/sign';
import { FilmsCount } from '../../const';
import { Films } from '../../types/films';

type MyListScreenProps = {
  filmCards: Films;
}

function MyListScreen({filmCards}: MyListScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <Sign />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {
            <FilmList
              filmCards={filmCards}
              activeGenre={'All genres'}
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
