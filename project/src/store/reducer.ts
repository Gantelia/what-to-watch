import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { FilmInfo, Films } from '../types/films';
import { Comments } from '../types/reviews';
import { UserData } from '../types/user-data';
import { addReview, getComments, getFilm, getSimilarFilms, getUserData, requireAuthorization, setError } from './action';

type InitialState = {
  film: FilmInfo | null;
  similarFilms: Films;
  isDataLoaded: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  comments: Comments;
  error: string;
}

const initialState: InitialState = {
  film: null,
  similarFilms: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  comments: [],
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(getSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(getComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(addReview, (state,action) => {
      state.comments.push(action.payload);
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
