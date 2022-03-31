import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { FilmInfo, Films } from './films';
import { Comments } from './reviews';
import { UserData } from './user-data';

export type CatalogProcess = {
    activeGenre: string;
    films: Films;
    isDataLoaded: boolean;
    promo: FilmInfo | null;
}

export type FilmProcess = {
    film: FilmInfo | null;
    similarFilms: Films;
    comments: Comments;
}

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    userData: UserData | null;
}

export type ErrorsProcess = {
    error: string;
}

export type FavoriteProcess = {
    favorite: Films | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
