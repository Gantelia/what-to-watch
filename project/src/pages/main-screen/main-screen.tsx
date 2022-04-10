import { FILMS_RENDER_STEP, FilmsCount } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';

import FilmList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import LoadingScreen from '../loading-screen/loading-screen';
import Logo from '../../components/logo/logo';
import MyListButton from '../../components/my-list-button/my-list-button';
import PlayButton from '../../components/play-button/play-button';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import SignInOut from '../../components/sign-in-out/sign-in-out';
import { changeGenre } from '../../store/catalog-process/catalog-process';
import { filterFilms } from '../../utils/utils';
import { useState } from 'react';

function MainScreen(): JSX.Element {
  const [filmsCount, setFilmsCount] = useState<FilmsCount | number>(FilmsCount.MainScreen);

  const dispatch = useAppDispatch();

  const {activeGenre, films, promo} = useAppSelector(({CATALOG}) => CATALOG);

  if (!promo) {
    return <LoadingScreen />;
  }

  const {name, genre, released, posterImage, backgroundImage} = promo;

  const filmsOfGenre = filterFilms(films, activeGenre);

  const onButtonClick = () => {
    setFilmsCount(filmsCount + Math.min(FILMS_RENDER_STEP, filmsOfGenre.length));
  };

  const onGenreChange = (chosenGenre: string) => {
    dispatch(changeGenre(chosenGenre));
    setFilmsCount(FilmsCount.MainScreen);
  };


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <SignInOut />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton movieToPlay={promo} />

                <MyListButton favoriteFilm={promo} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films = {films} activeGenre = {activeGenre} onGenreChange = {onGenreChange}/>
          {
            <FilmList
              filmCards={filmsOfGenre}
              filmsCount={filmsCount}
            />
          }
          {filmsOfGenre.length > filmsCount ? <ShowMoreButton onButtonClick={onButtonClick} /> : ''}
        </section>

        <footer className="page-footer">
          <Logo isFooterLogo />
        </footer>
      </div>
    </>
  );
}

export default MainScreen;

