import { createAsyncThunk } from '@reduxjs/toolkit';
import { SHOW_ERROR_TIMEOUT } from '../../../const';
import { AppDispatch, State } from '../../../types/state';
import { setError } from '../../errors-process/errors-process';

export const clearErrorAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State
}>(
  'errors/clearError',
  (_args, {dispatch}) => {
    setTimeout(
      () => dispatch(setError('')),
      SHOW_ERROR_TIMEOUT,
    );
  },
);
