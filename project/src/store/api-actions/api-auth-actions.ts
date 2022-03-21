import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '..';
import { APIRoute, AuthorizationStatus } from '../../const';
import { dropToken, saveToken } from '../../services/token';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { requireAuthorization } from '../action';

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
