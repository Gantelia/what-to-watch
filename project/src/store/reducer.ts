import { createReducer } from '@reduxjs/toolkit';
import { State } from '../types/state';
import { changeGenre, getFilm, getFilms, getPromo, getSimilarFilms } from './action';


const initialState: State = {
  activeGenre: 'All genres',
  films: [],
  promo: {},
  film: {},
  similarFilms: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(getPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(getFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(getSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    });
});

export {reducer};
