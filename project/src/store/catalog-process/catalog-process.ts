import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CatalogProcess } from '../../types/state';

const initialState: CatalogProcess = {
  activeGenre: 'All genres',
  films: [],
  isDataLoaded: false,
  promo: null,
};

export const catalogProcess = createSlice({
  name: NameSpace.Catalog,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.activeGenre = action.payload;
    },
    getFilms: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
    getPromo: (state, action) => {
      state.promo = action.payload;
    },
  },
});

export const {changeGenre, getFilms, getPromo} = catalogProcess.actions;
