import { store } from '../store';
import { FilmInfo, Films } from './films';

export type CatalogProcess = {
    activeGenre: string;
    films: Films;
    isDataLoaded: boolean;
    promo: FilmInfo | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
