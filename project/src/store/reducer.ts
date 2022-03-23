import { createReducer } from '@reduxjs/toolkit';
import { FilmInfo, Films } from '../types/films';
import { changeGenre, getFilm, getFilms, getPromo, getSimilarFilms } from './action';

type InitialState = {
  activeGenre: string;
  films: Films;
  promo: FilmInfo | null;
  film: FilmInfo | null;
  similarFilms: Films;
  isDataLoaded: boolean;
}

const initialState: InitialState = {
  activeGenre: 'All genres',
  films: [],
  promo: null,
  film: null,
  similarFilms: [],
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
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
