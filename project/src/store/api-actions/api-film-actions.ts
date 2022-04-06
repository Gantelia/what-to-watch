import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { handleError } from '../../services/handle-error';
import { FavoriteChange, FilmInfo, Films } from '../../types/films';
import { AppDispatch, State } from '../../types/state';
import { getFilms, getPromo } from '../catalog-process/catalog-process';
import { getCurrentFavorite, getFavoriteFilms } from '../favorite-process/favorite-process';
import { getFilm, getSimilarFilms } from '../film-process/film-process';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  store: State,
  extra: AxiosInstance
}>(
  'catalog/fetchFilms',
  async (_args, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films>(APIRoute.Films);
      dispatch(getFilms(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  store: State,
  extra: AxiosInstance
}>(
  'catalog/fetchPromo',
  async (_args, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmInfo>(APIRoute.Promo);
      dispatch(getPromo(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchFilmAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  store: State,
  extra: AxiosInstance
}>(
  'film/fetchFilm',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmInfo>(`${APIRoute.Films}/${id}`);
      dispatch(getFilm(data));
    } catch (error) {
      handleError (error);
    }
  },
);

export const fetchSimilarAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  store: State,
  extra: AxiosInstance
}>(
  'film/fetchSimilarFilms',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
      dispatch(getSimilarFilms(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchFavoriteAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  store: State,
  extra: AxiosInstance
}>(
  'favorite/fetchFavoriteFilms',
  async (_args, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films>(APIRoute.Favorite);
      dispatch(getFavoriteFilms(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const changeFavoriteAction = createAsyncThunk<void, FavoriteChange, {
  dispatch: AppDispatch,
  store: State,
  extra: AxiosInstance
}>(
  'film/addReview',
  async ({id, status}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<FilmInfo>(`${APIRoute.Favorite}/${id}/${status}`);
      dispatch(getCurrentFavorite(data));
    } catch (error) {
      handleError (error);
    }
  },
);
