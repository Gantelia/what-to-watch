import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '..';
import { APIRoute } from '../../const';
import { FilmInfo, Films } from '../../types/films';
import { getFilm, getFilms, getPromo, getSimilarFilms } from '../action';

export const fetchFilmsAction = createAsyncThunk(
  'data/fetchFilms',
  async () => {
    const {data} = await api.get<Films>(APIRoute.Films);
    store.dispatch(getFilms(data));
  },
);

export const fetchPromoAction = createAsyncThunk(
  'data/fetchPromo',
  async () => {
    const {data} = await api.get<FilmInfo>(APIRoute.Promo);
    store.dispatch(getPromo(data));
  },
);

export const fetchFilmAction = (id: number) => createAsyncThunk(
  'data/fetchFilm',
  async () => {
    const {data} = await api.get<FilmInfo>(`${APIRoute.Films}/${id}`);
    store.dipatch(getFilm(data));
  },
);

export const fetchSimilarAction = (id: number) => createAsyncThunk(
  'data/fetchSimilarFilms',
  async () => {
    const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    store.dipatch(getSimilarFilms(data));
  },
);
