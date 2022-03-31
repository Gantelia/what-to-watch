import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { FavoriteProcess } from '../../../types/state';

const initialState: FavoriteProcess = {
  favorite: null,
};

export const favoriteProcess = createSlice({
  name: NameSpace.favorite,
  initialState,
  reducers: {
    getFavorite: (state, action) => {
      state.favorite = action.payload;
    },
  },
});

export const {getFavorite} = favoriteProcess.actions;
