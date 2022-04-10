import { makeFakeFilm, makeFakeFilms } from '../../utils/mocks';
import { favoriteProcess, getCurrentFavorite, getFavoriteFilms } from './favorite-process';

describe('Reducer: favoriteProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(favoriteProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        favorite: null,
        currentFavorite: null,
      });
  });

  it('should update current favorite to given value', () => {
    const state = {
      favorite: null,
      currentFavorite: null,
    };

    const fakeFavoriteFilms = makeFakeFilms();

    expect(favoriteProcess.reducer(state, getFavoriteFilms(fakeFavoriteFilms)))
      .toEqual({
        favorite: fakeFavoriteFilms,
        currentFavorite: null,
      });
  });

  it('should update currentFavorite to given value', () => {
    const state = {
      favorite: null,
      currentFavorite: null,
    };

    const fakeCurrentFavorite = makeFakeFilm();

    expect(favoriteProcess.reducer(state, getCurrentFavorite(fakeCurrentFavorite)))
      .toEqual({
        favorite: null,
        currentFavorite: fakeCurrentFavorite,
      });
  });
});
