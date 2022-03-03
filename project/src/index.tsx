import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {FILMS} from '../../project/src/mocks/films';
import {GENRES} from '../../project/src/mocks/genres';

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm = {FILMS[0]}
      catalogGenres = {GENRES}
      filmCards = {FILMS}
    />
  </React.StrictMode>,
  document.getElementById('root'));
