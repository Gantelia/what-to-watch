import Logo from '../../components/logo/logo';
import Sign from '../../components/sign/sign';
import { Link } from 'react-router-dom';
import {Genre, FilmInfo} from '../../types/types';
import FilmList from '../../components/film-list/film-list';
import { useState } from 'react';
import { AppRoute, FilmsCount } from '../../const';

type MainScreenProps = {
    promoFilm: FilmInfo;
    catalogGenres: Genre[];
    filmCards: FilmInfo[];
}

function MainScreen({promoFilm, catalogGenres, filmCards}: MainScreenProps): JSX.Element {
  const {name, genre, released} = promoFilm;
  const [userGenre, setUserGenre] = useState('All genres');

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

          <ul className="catalog__genres-list">
            {
              catalogGenres.map((catalogGenre) =>(
                <li key={catalogGenre.name} className={`catalog__genres-item ${catalogGenre.name === userGenre ? 'catalog__genres-item--active': ''}`}>
                  <Link to={AppRoute.Main} className="catalog__genres-link"
                    onClick={() => setUserGenre(catalogGenre.name)}
                  >{catalogGenre.name}
                  </Link>
                </li>),
              )
            }
          </ul>

          {
            <FilmList
              filmCards={filmCards}
              activeGenre={userGenre}
              filmsCount={FilmsCount.MainScreen}
            />
          }

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
