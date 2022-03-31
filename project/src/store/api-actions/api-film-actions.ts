import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '..';
import { APIRoute } from '../../const';
import { handleError } from '../../services/handle-error';
import { FilmInfo, Films } from '../../types/films';
import { getFilms, getPromo } from '../catalog-process/catalog-process';
import { getFilm, getSimilarFilms } from '../film-process/film-process';
import { getFavorite } from './favorite-process/favorite-process';


export const fetchFilmsAction = createAsyncThunk(
  'catalog/fetchFilms',
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
  'catalog/fetchPromo',
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
  'film/fetchFilm',
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
  'film/fetchSimilarFilms',
  async (id: number) => {
    try {
      const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
      store.dispatch(getSimilarFilms(data));
    } catch (error) {
      handleError(error);
    }
  },
);

export const fetchFavoriteAction = createAsyncThunk(
  'favorite/fetchFavoriteFilms',
  async () => {
    try {
      const {data} = await api.get<Films>(APIRoute.Favorite);
      store.dispatch(getFavorite(data));
    } catch (error) {
      handleError(error);
    }
  },
);

