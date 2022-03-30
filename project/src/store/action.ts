import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';


export const redirectToRoute = createAction<AppRoute | string>('routing/redirectToRoute');

export const setError = createAction<string>('error/setError');
