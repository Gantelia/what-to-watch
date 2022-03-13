import { createReducer } from '@reduxjs/toolkit';
import { FILMS } from '../mocks/films';
import { State } from '../types/state';
import { changeGenre, getFilmsOfGenre } from './action';


const initialState: State = {
  activeGenre: 'All genres',
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(getFilmsOfGenre, (state) => {
      state.films = FILMS;
    });
});

export {reducer};
