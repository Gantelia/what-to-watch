import { createAPI } from '../../../services/api';
import MockAdapter from 'axios-mock-adapter';
import { State } from '../../../types/state';
import thunk from 'redux-thunk';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { checkAuthAction } from './api-auth-actions';
import { APIRoute } from '../../../const';
import { getUserData, requireAuthorization } from '../../user-process/user-process';

describe('Async auth actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch "requireAuthorization" and "getUserData" when server returns 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(requireAuthorization.toString());
    expect(actions).toContain(getUserData.toString());

  });
});
