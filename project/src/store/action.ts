import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { FilmInfo, Films } from '../types/films';
import { Comments, UserReview } from '../types/reviews';
import { UserData } from '../types/user-data';

export const changeGenre = createAction<string>('genres/genreChange');

export const getFilms = createAction<Films>('data/getFilms');

export const getPromo = createAction<FilmInfo>('data/getPromo');

export const getFilm = createAction<FilmInfo>('data/getFilm');

export const getSimilarFilms = createAction<Films>('data/getSimilarFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requreAuthorization');

export const setError = createAction<string>('connection/setError');

export const getUserData = createAction<UserData>('data/getUserData');

export const getComments = createAction<Comments>('data/getComments');

export const addReview = createAction<UserReview>('data/addReview');
