import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { FilmInfo, Films } from '../types/films';

export const changeGenre = createAction<string>('genres/genreChange');

export const getFilms = createAction<Films>('data/getFilms');

export const getPromo = createAction<FilmInfo>('data/getPromo');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requreAuthorization');
