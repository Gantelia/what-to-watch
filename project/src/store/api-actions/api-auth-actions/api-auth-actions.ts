import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../../../const';
import { handleError } from '../../../services/handle-error';
import { dropToken, saveToken } from '../../../services/token';
import { AuthData } from '../../../types/auth-data';
import { UserData } from '../../../types/user-data';
import { getUserData, requireAuthorization } from '../../user-process/user-process';
import { AppDispatch, State } from '../../../types/state';
import { AxiosInstance } from 'axios';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(getUserData(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      handleError(error);
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(getUserData(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      handleError(error);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_args, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      handleError(error);
    }
  },
);
