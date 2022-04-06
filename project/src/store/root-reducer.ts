import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';

import { catalogProcess } from './catalog-process/catalog-process';
import { errorsProcess } from './errors-process/errors-process';
import { favoriteProcess } from './favorite-process/favorite-process';
import { filmProcess } from './film-process/film-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Catalog]: catalogProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Errors]: errorsProcess.reducer,
  [NameSpace.Favorite]: favoriteProcess.reducer,
});
