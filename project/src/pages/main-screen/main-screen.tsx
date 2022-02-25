import MovieCard from '../../components/movie-card/movie-card';
import Logo from '../../components/logo/logo';
import SignOut from '../../components/sign-out/sign-out';
import { Link } from 'react-router-dom';

type Genre = {
  href: string;
  name: string;
}

type FilmCard = {
  src: string;
  alt: string;
  title: string;
  id: number;
}

type MainScreenProps = {
    mainFilmTitle: string;
    mainFilmGenre: string;
    mainFilmYear: number;
    catalogGenres: Genre[];
    filmCards: FilmCard[];
    activeGenre: Genre;
}

function MainScreen({mainFilmTitle, mainFilmGenre, mainFilmYear, catalogGenres, filmCards, activeGenre}: MainScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <SignOut />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{mainFilmTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{mainFilmGenre}</span>
                <span className="film-card__year">{mainFilmYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {
              catalogGenres.map((genre, index) => (
                <li key={`genre-${index}`} className={`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active': ''}`}>
                  <Link to={genre.href} className="catalog__genres-link">{genre.name}</Link>
                </li>))
            }
          </ul>

          <div className="catalog__films-list">
            {
              filmCards.map((card) =>(
                <MovieCard
                  key = {card.id}
                  src = {card.src}
                  alt = {card.alt}
                  title = {card.title}
                  id = {card.id}
                />),
              )
            }
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <Logo isFooterLogo />
        </footer>
      </div>
    </>
  );
}

export default MainScreen;
