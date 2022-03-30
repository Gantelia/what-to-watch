import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { setError } from './action';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  error: string;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
