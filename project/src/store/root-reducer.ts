import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { catalogProcess } from './catalog-process/catalog-process';
import { errorsProcess } from './errors-process/errors-process';
import { filmProcess } from './film-process/film-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.catalog]: catalogProcess.reducer,
  [NameSpace.film]: filmProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.errors]: errorsProcess.reducer,
});
