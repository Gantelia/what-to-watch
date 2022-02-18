import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const catalogGenres = [
  {
    href: 'all',
    name: 'All genres',
  },
];

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  DATE: 2014,
  CATALOG_GENRES: catalogGenres,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilmTitle = {Setting.TITLE}
      promoFilmGenre = {Setting.GENRE}
      promoFilmYear = {Setting.DATE}
      catalogGenres = {Setting.CATALOG_GENRES}
    />
  </React.StrictMode>,
  document.getElementById('root'));
