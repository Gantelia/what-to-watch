import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '..';
import { TIMEOUT_SHOW_ERROR } from '../../const';
import { setError } from '../action';

export const clearErrorAction = createAsyncThunk(
  'connection/clear',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
