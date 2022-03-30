import { store } from '../store';
import { FilmInfo, Films } from './films';
import { Comments } from './reviews';

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

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
