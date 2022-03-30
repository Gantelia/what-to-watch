import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { CatalogProcess } from '../../types/state';

const initialState: CatalogProcess = {
  activeGenre: 'All genres',
};

export const catalogProcess = createSlice({
  name: NameSpace.catalog,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.activeGenre = action.payload;
    },
  },
});

export const {changeGenre} = catalogProcess.actions;
