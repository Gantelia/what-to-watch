import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Films } from '../types/films';

export const changeGenre = createAction<string>('genres/genreChange');

export const getFilmsOfGenre = createAction<Films>('filmList/getFilmsOfGenre');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requreAuthorization');
