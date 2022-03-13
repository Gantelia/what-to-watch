import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {FILMS} from '../../project/src/mocks/films';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
      <App
        promoFilm = {FILMS[0]}
        filmCards = {FILMS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
