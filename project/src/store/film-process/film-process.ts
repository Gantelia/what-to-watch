import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmProcess } from '../../types/state';

const initialState: FilmProcess = {
  film: null,
  similarFilms: [],
  comments: [],
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    getFilm: (state, action) => {
      state.film = action.payload;
    },
    getSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
    getComments: (state, action) => {
      state.comments = action.payload;
    },
    addReview: (state,action) => {
      state.comments.push(action.payload);
    },
  },
});

export const {getFilm, getSimilarFilms, getComments, addReview} = filmProcess.actions;
