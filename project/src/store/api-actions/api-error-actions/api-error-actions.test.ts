import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createAPI } from '../../../services/api';
import { State } from '../../../types/state';
import { setError } from '../../errors-process/errors-process';
import { clearErrorAction } from './api-error-actions';

describe('Async error actions', () => {
  const api = createAPI();
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch SetError when server returns 400', () => {
    jest.useFakeTimers();

    const store = mockStore();

    expect(store.getActions()).toEqual([]);

    store.dispatch(clearErrorAction());
    jest.runAllTimers();
    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(setError.toString());
  });
});
