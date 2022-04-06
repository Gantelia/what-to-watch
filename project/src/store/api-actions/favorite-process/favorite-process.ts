import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { FavoriteProcess } from '../../../types/state';

const initialState: FavoriteProcess = {
  favorite: null,
  currentFavorite: null,
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
  },
});

export const {getFavoriteFilms, getCurrentFavorite} = favoriteProcess.actions;
