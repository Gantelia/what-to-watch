import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFilmsAction, fetchPromoAction } from './store/api-actions/api-film-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
