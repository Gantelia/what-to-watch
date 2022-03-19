import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute, AuthorizationStatus } from '../const';
import { Films } from '../types/films';
import { getFilmsOfGenre, requireAuthorization } from './action';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const {data} = await api.get<Films>(APIRoute.Films);
    store.dispatch(getFilmsOfGenre(data));
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);
