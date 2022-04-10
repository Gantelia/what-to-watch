import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../../../services/api';
import { State } from '../../../types/state';
import thunk from 'redux-thunk';
import { APIRoute } from '../../../const';
import { addReviewAction, fetchCommentsAction } from './api-comments-actions';
import { getComments } from '../../film-process/film-process';
import { makeFakeUserReview } from '../../../utils/mocks';

describe('Async comments actions', () => {
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
    const fakeId = 98;

    mockAPI
      .onGet(`${APIRoute.Comments}/${fakeId}`)
      .reply(200, []);

    await store.dispatch(fetchCommentsAction(fakeId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(getComments.toString());
  });

  it('should dispatch GetComments and RedirectToRoute when POST /comments/id', async () => {
    const store = mockStore();
    const fakeId = 556;
    const fakeReview = makeFakeUserReview();

    mockAPI
      .onPost(`${APIRoute.Comments}/${fakeId}`)
      .reply(200, []);

    await store.dispatch(addReviewAction({id: fakeId, review: fakeReview}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(getComments.toString());
  });
});
