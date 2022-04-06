import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import SignInOut from '../../components/sign-in-out/sign-in-out';
import { FilmsCount } from '../../const';
import MovieOverview from '../../components/movie-overview/movie-overview';
import { useEffect, useState } from 'react';
import MovieDetails from '../../components/movie-details/movie-details';
import MovieReviews from '../../components/movie-reviews/movie-reviews';
import FilmList from '../../components/film-list/film-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction, fetchSimilarAction } from '../../store/api-actions/api-film-actions';
import { fetchCommentsAction } from '../../store/api-actions/api-comments-actions';
import LoadingScreen from '../loading - screen/loading-screen';
import { isAuthorized } from '../../utils';
import MyListButton from '../../components/my-list-button/my-list-button';
import PlayButton from '../../components/play-button/play-button';

function MovieScreen(): JSX.Element {
  const {id} = useParams();
  const filmId = Number(id);

  const dispatch = useAppDispatch();

  const {film, similarFilms, comments} = useAppSelector(({FILM}) => FILM);
  const {authorizationStatus} = useAppSelector(({USER}) => USER);

  const [navigation, setNavigation] = useState('Overview');

  useEffect(() => {
    if (film === null || film?.id !== filmId) {
      dispatch(fetchFilmAction(filmId));
      dispatch(fetchSimilarAction(filmId));
      dispatch(fetchCommentsAction(filmId));
    }
  }, [film, filmId, dispatch]);

  if (!film || !similarFilms || !comments || film?.id !== filmId) {
    return <LoadingScreen />;
  }

  const overviewClass = navigation === 'Overview' ? 'film-nav__item--active' : '';
  const detailsClass = navigation === 'Details' ? 'film-nav__item--active' : '';
  const reviewsClass = navigation === 'Reviews' ? 'film-nav__item--active' : '';

  const {backgroundImage, name, genre, released, posterImage} = film;


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

            <SignInOut />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton movieToPlay={film} />
                <MyListButton favoriteFilm={film} />
                {isAuthorized(authorizationStatus) && <Link to={`/films/${filmId}/review`} className="btn film-card__button">Add review</Link>}
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
                    <Link to={`/films/${filmId}`} className="film-nav__link"
                      onClick={() => setNavigation('Overview')}
                    >Overview
                    </Link>
                  </li>
                  <li className={`film-nav__item film-nav__item ${detailsClass}`}>
                    <Link to={`/films/${filmId}`} className="film-nav__link"
                      onClick={() => setNavigation('Details')}
                    >Details
                    </Link>
                  </li>
                  <li className={`film-nav__item film-nav__item ${reviewsClass}`}>
                    <Link to={`/films/${filmId}`} className="film-nav__link"
                      onClick={() => setNavigation('Reviews')}
                    >Reviews
                    </Link>
                  </li>
                </ul>
              </nav>

              {navigation === 'Overview' && <MovieOverview film = {film}/>}
              {navigation === 'Details' && <MovieDetails film = {film}/>}
              {navigation === 'Reviews' && <MovieReviews reviews = {comments}/>}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {
              <FilmList
                filmCards={similarFilms}
                filmsCount={FilmsCount.MovieScreen}
              />
            }
          </div>
        </section>

        <footer className="page-footer">
          <Logo isFooterLogo />
        </footer>
      </div>
    </>
  );
}

export default MovieScreen;
