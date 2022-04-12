import { createAPI } from '../../../services/api';
import MockAdapter from 'axios-mock-adapter';
import { State } from '../../../types/state';
import thunk from 'redux-thunk';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { checkAuthAction, loginAction, logoutAction } from './api-auth-actions';
import { APIRoute } from '../../../const';
import { getUserData, requireAuthorization } from '../../user-process/user-process';
import { AuthData } from '../../../types/auth-data';

describe('Async auth actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch RequireAuthorization and GetUserData when server returns 200', async () => {
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

  it('should dispatch RequireAuthorization and GetUserData when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: 'dfg'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});

    const store = mockStore();

    expect(store.getActions()).toEqual([]);

    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(requireAuthorization.toString());
    expect(actions).toContain(getUserData.toString());

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('wtw-token', 'secret');
  });

  it('should dispatch RequireAuthorization when DELETE /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('wtw-token');
  });
});
