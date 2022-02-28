import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {FILMS} from '../../project/src/mocks/films';
import {GENRES} from '../../project/src/mocks/genres';

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      mainFilmTitle = {Setting.TITLE}
      mainFilmGenre = {Setting.GENRE}
      mainFilmYear = {Setting.YEAR}
      catalogGenres = {GENRES}
      filmCards = {FILMS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
