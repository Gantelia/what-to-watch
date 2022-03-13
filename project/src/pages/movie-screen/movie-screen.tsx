import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Sign from '../../components/sign/sign';
import { FilmInfo } from '../../types/types';
import { AppRoute, FilmsCount } from '../../const';
import MovieOverview from '../../components/movie-overview/movie-overview';
import { useState } from 'react';
import MovieDetails from '../../components/movie-details/movie-details';
import MovieReviews from '../../components/movie-reviews/movie-reviews';
import { REVIEWS } from '../../mocks/reviews';
import FilmList from '../../components/film-list/film-list';

type MovieScreenProps = {
  films: FilmInfo[];
}

function MovieScreen({films}: MovieScreenProps): JSX.Element {
  const {id} = useParams();

  const movie = films.find((film: FilmInfo) => `:${film.id}` === id);
  const [navigation, setNavigation] = useState('Overview');
  const navigate = useNavigate();

  const overviewClass = navigation === 'Overview' ? 'film-nav__item--active' : '';
  const detailsClass = navigation === 'Details' ? 'film-nav__item--active' : '';
  const reviewsClass = navigation === 'Reviews' ? 'film-nav__item--active' : '';

  if (!movie) {
    return <Navigate to={AppRoute.NotFound}/>;
  }

  const {backgroundImage, name, genre, released, posterImage} = movie;

  const similarFilms = films.slice();
  similarFilms.splice(films.findIndex((film) => film === movie), 1);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <Sign />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button"
                  onClick={() => navigate (`/player/${id}`)}
                >
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
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={`film-nav__item ${overviewClass}`}>
                    <Link to={`/films/${id}`} className="film-nav__link"
                      onClick={() => setNavigation('Overview')}
                    >Overview
                    </Link>
                  </li>
                  <li className={`film-nav__item film-nav__item ${detailsClass}`}>
                    <Link to={`/films/${id}`} className="film-nav__link"
                      onClick={() => setNavigation('Details')}
                    >Details
                    </Link>
                  </li>
                  <li className={`film-nav__item film-nav__item ${reviewsClass}`}>
                    <Link to={`/films/${id}`} className="film-nav__link"
                      onClick={() => setNavigation('Reviews')}
                    >Reviews
                    </Link>
                  </li>
                </ul>
              </nav>

              {navigation === 'Overview' && <MovieOverview film = {movie}/>}
              {navigation === 'Details' && <MovieDetails film = {movie}/>}
              {navigation === 'Reviews' && <MovieReviews movieId = {movie.id} reviews = {REVIEWS}/>}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {
            <FilmList
              filmCards={similarFilms}
              activeGenre={genre}
              filmsCount={FilmsCount.MovieScreen}
            />
          }
        </section>

        <footer className="page-footer">
          <Logo isFooterLogo />
        </footer>
      </div>
    </>
  );
}

export default MovieScreen;
