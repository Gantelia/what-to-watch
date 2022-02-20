import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

type CatalogGenre = {
  href: string;
  name:string;
}

const catalogGenre = {
  href: 'all',
  name: 'All genres',
};

const catalogGenres: CatalogGenre[] = Array(9).fill(catalogGenre);

type FilmCard = {
  src: string;
  alt: string;
  title: string;
}

const filmCard = {
  src: 'img/seven-years-in-tibet.jpg',
  alt: 'Seven Years in Tibet',
  title: 'Seven Years in Tibet',
};

const filmCards: FilmCard[] = Array(20).fill(filmCard);

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
  CATALOG_GENRES: catalogGenres,
  FILM_CARDS: filmCards,
  ACTIVE_GENRE: catalogGenre,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      mainFilmTitle = {Setting.TITLE}
      mainFilmGenre = {Setting.GENRE}
      mainFilmYear = {Setting.YEAR}
      catalogGenres = {Setting.CATALOG_GENRES}
      filmCards = {Setting.FILM_CARDS}
      activeGenre = {Setting.ACTIVE_GENRE}
    />
  </React.StrictMode>,
  document.getElementById('root'));
