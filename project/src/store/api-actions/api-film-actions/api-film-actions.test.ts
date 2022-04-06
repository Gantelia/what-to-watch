import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../../../services/api';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../../types/state';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { APIRoute } from '../../../const';
import { changeFavoriteAction, fetchFavoriteAction, fetchFilmAction, fetchFilmsAction, fetchPromoAction, fetchSimilarAction } from './api-film-actions';
import { getFilms, getPromo } from '../../catalog-process/catalog-process';
import { getFilm, getSimilarFilms } from '../../film-process/film-process';
import { getCurrentFavorite, getFavoriteFilms } from '../../favorite-process/favorite-process';
import { FavoriteStatus } from '../../../const';


describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
          State,
          Action,
          ThunkDispatch<State, typeof api, Action>
        >(middlewares);

  it('should dispatch GetComments when GET /comments/id',  async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, []);

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(getFilms.toString());
  });

  it('should dispatch GetFilms when GET /films',  async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, []);

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(getFilms.toString());
  });

  it('should dispatch GetPromo when GET /promo',  async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, {});

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(getPromo.toString());
  });

  it('should dispatch GetFilm when GET /films/id',  async () => {
    const store = mockStore();
    const fakeId = 56;

    mockAPI
      .onGet(`${APIRoute.Films}/${fakeId}`)
      .reply(200, {});

    await store.dispatch(fetchFilmAction(fakeId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(getFilm.toString());
  });

  it('should dispatch GetSimilarFilms when GET /films/id/similar',  async () => {
    const store = mockStore();
    const fakeId = 176;

    mockAPI
      .onGet(`${APIRoute.Films}/${fakeId}/similar`)
      .reply(200, []);

    await store.dispatch(fetchSimilarAction(fakeId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(getSimilarFilms.toString());
  });

  it('should dispatch GetFavorite when GET /favorite',  async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, []);

    await store.dispatch(fetchFavoriteAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(getFavoriteFilms.toString());
  });

  it('should dispatch GetCurrentFavorite when POST /favorite/status',  async () => {
    const store = mockStore();
    const fakeId = 938465;
    const fakeStatus = FavoriteStatus.NotFavorite;

    mockAPI
      .onPost(`${APIRoute.Favorite}/${fakeId}/${fakeStatus}`)
      .reply(200, {});

    await store.dispatch(changeFavoriteAction({id: fakeId, status: fakeStatus}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(getCurrentFavorite.toString());
  });
});
