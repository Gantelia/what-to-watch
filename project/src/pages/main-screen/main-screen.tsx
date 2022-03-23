import Logo from '../../components/logo/logo';
import Sign from '../../components/sign/sign';
import FilmList from '../../components/film-list/film-list';
import { FilmsCount, FILMS_RENDER_STEP } from '../../const';
import GenreList from '../../components/genre-list/genre-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useState } from 'react';
import { changeGenre } from '../../store/action';
import LoadingScreen from '../loading - screen/loading-screen';
import { filterFilms } from '../../utils';

function MainScreen(): JSX.Element {
  const [filmsCount, setFilmsCount] = useState<FilmsCount | number>(FilmsCount.MainScreen);

  const dispatch = useAppDispatch();
  const {activeGenre, films, promo} = useAppSelector((state) => state);

  if (!promo) {
    return <LoadingScreen />;
  }

  const {name, genre, released} = promo;
  const filmsOfGenre = filterFilms(films, activeGenre);

  const handleButtonClick = () => {
    setFilmsCount(filmsCount + Math.min(FILMS_RENDER_STEP, filmsOfGenre.length));
  };

  const handleGenreChange = (chosenGenre: string) => {
    dispatch(changeGenre(chosenGenre));
    setFilmsCount(FilmsCount.MainScreen);
  };


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <Sign />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
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

          <GenreList films = {films} activeGenre = {activeGenre} handleGenreChange = {handleGenreChange}/>
          {
            <FilmList
              filmCards={films}
              activeGenre={activeGenre}
              filmsCount={filmsCount}
            />
          }
          {filmsOfGenre.length > filmsCount ? <ShowMoreButton handleButtonClick={handleButtonClick} /> : ''}
        </section>

        <footer className="page-footer">
          <Logo isFooterLogo />
        </footer>
      </div>
    </>
  );
}

export default MainScreen;

