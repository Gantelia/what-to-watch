import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '..';
import { APIRoute } from '../../const';
import { handleError } from '../../services/handle-error';
import { FilmInfo, Films } from '../../types/films';
import { getFilm, getFilms, getPromo, getSimilarFilms } from '../action';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const {data} = await api.get<Films>(APIRoute.Films);
      store.dispatch(getFilms(data));
    } catch (error) {
      handleError(error);
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
      handleError(error);
    }
  },
);

export const fetchFilmAction = createAsyncThunk(
  'data/fetchFilm',
  async (id: number) => {
    try {
      const {data} = await api.get<FilmInfo>(`${APIRoute.Films}/${id}`);
      store.dispatch(getFilm(data));
    } catch (error) {
      handleError (error);
    }
  },
);

export const fetchSimilarAction = createAsyncThunk(
  'data/fetchSimilarFilms',
  async (id: number) => {
    try {
      const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
      store.dispatch(getSimilarFilms(data));
    } catch (error) {
      handleError(error);
    }
  },
);

