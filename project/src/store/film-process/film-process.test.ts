import { filmProcess, getComments, getFilm, getSimilarFilms } from '../film-process/film-process';
import { makeFakeComments, makeFakeFilm, makeFakeFilms } from '../../utils/mocks';

import { FilmProcess } from '../../types/state';

const state: FilmProcess = {
  film: null,
  similarFilms: [],
  comments: [],
};

describe('Reducer: filmProcess', () => {
  it('should return initial state without additional parameters', () => {
    expect(filmProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should change current film to given value', () => {
    const fakeFilm = makeFakeFilm();

    expect(filmProcess.reducer(state, getFilm(fakeFilm)))
      .toEqual({
        film: fakeFilm,
        similarFilms: [],
        comments: [],
      });
  });

  it('should change current similarFilms to given value', () => {
    const fakeSimilarFilms = makeFakeFilms();

    expect(filmProcess.reducer(state, getSimilarFilms(fakeSimilarFilms)))
      .toEqual({
        film: null,
        similarFilms: fakeSimilarFilms,
        comments: [],
      });
  });

  it('should change current comments to given value', () => {
    const fakeComments = makeFakeComments();

    expect(filmProcess.reducer(state, getComments(fakeComments)))
      .toEqual({
        film: null,
        similarFilms: [],
        comments: fakeComments,
      });
  });
});
