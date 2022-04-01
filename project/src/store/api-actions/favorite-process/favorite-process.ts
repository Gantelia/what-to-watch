import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { FavoriteProcess } from '../../../types/state';

const initialState: FavoriteProcess = {
  favorite: null,
  currentFavorite: null,
  movieToPlay: null,
};

export const favoriteProcess = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    getFavoriteFilms: (state, action) => {
      state.favorite = action.payload;
    },
    getCurrentFavorite: (state, action) => {
      state.currentFavorite = action.payload;
    },
    getMovieToPlay: (state, action) => {
      state.movieToPlay = action.payload;
    },
  },
});

export const {getFavoriteFilms, getCurrentFavorite, getMovieToPlay} = favoriteProcess.actions;
