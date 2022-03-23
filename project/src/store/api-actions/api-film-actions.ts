import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '..';
import { APIRoute } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { FilmInfo, Films } from '../../types/films';
import { getFilm, getFilms, getPromo, getSimilarFilms } from '../action';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const {data} = await api.get<Films>(APIRoute.Films);
      store.dispatch(getFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromoAction = createAsyncThunk(
  'data/fetchPromo',
  async () => {
    try {
      const {data} = await api.get<FilmInfo>(APIRoute.Promo);
      store.dispatch(getPromo(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFilmAction = (id: number) => createAsyncThunk(
  'data/fetchFilm',
  async () => {
    try {
      const {data} = await api.get<FilmInfo>(`${APIRoute.Films}/${id}`);
      store.dispatch(getFilm(data));
    } catch (error) {
      errorHandle (error);
    }
  },
);

export const fetchSimilarAction = (id: number) => createAsyncThunk(
  'data/fetchSimilarFilms',
  async () => {
    try {
      const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
      store.dispatch(getSimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
