import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ErrorsProcess } from '../../types/state';

const initialState: ErrorsProcess = {
  error: '',
};

export const errorsProcess = createSlice({
  name: NameSpace.Errors,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setError} = errorsProcess.actions;
