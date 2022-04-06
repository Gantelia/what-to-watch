import { FilmInfo } from '../../types/films';
import { CatalogProcess } from '../../types/state';
import { makeFakeFilms, makeFakeFilm } from '../../utils/mocks';
import { catalogProcess, changeGenre, getFilms, getPromo } from './catalog-process';

const state: CatalogProcess = {
  activeGenre: 'All genres',
  films: [],
  isDataLoaded: false,
  promo: null,
};

describe('Reducer: catalogProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(catalogProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        activeGenre: 'All genres',
        films: [],
        isDataLoaded: false,
        promo: null,
      });
  });

  it('should change current activeGenre to a given value', () => {
    const mockActiveGenre = 'Sci-Fi';
    expect(catalogProcess.reducer(state, changeGenre(mockActiveGenre)))
      .toEqual({
        activeGenre: 'Sci-Fi',
        films: [],
        isDataLoaded: false,
        promo: null,
      });
  });

  it('should change current films to a given value(an empty array)', () => {
    const mockFilms: FilmInfo[] = [];
    expect(catalogProcess.reducer(state, getFilms(mockFilms)))
      .toEqual({
        activeGenre: 'All genres',
        films: [],
        isDataLoaded: true,
        promo: null,
      });
  });

  it('should change current films to a given value', () => {
    const mockFilms: FilmInfo[] = makeFakeFilms();
    expect(catalogProcess.reducer(state, getFilms(mockFilms)))
      .toEqual({
        activeGenre: 'All genres',
        films: mockFilms,
        isDataLoaded: true,
        promo: null,
      });
  });

  it('should change current promo to a given value', () => {
    const mockPromo = makeFakeFilm();
    expect(catalogProcess.reducer(state, getPromo(mockPromo)))
      .toEqual({
        activeGenre: 'All genres',
        films: [],
        isDataLoaded: false,
        promo: mockPromo,
      });
  });
});
