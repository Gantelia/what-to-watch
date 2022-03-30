import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { FilmInfo, Films } from '../types/films';
import { Comment, Comments } from '../types/reviews';
import { UserData } from '../types/user-data';

export const getFilm = createAction<FilmInfo>('film/getFilm');

export const getSimilarFilms = createAction<Films>('film/getSimilarFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requreAuthorization');

export const getUserData = createAction<UserData>('user/getUserData');

export const getComments = createAction<Comments>('film/getComments');

export const addReview = createAction<Comment>('film/addReview');

export const redirectToRoute = createAction<AppRoute | string>('routing/redirectToRoute');

export const setError = createAction<string>('error/setError');
