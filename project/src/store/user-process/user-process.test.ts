import { AuthorizationStatus } from '../../const';
import { makeFakeUserData } from '../../utils/mocks';
import { getUserData, requireAuthorization, userProcess } from './user-process';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        userData: null,
      });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: null,
    };

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.Auth)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        userData: null,
      });
  });

  it('should update authorizationStatus to "NoAuth"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
    };

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.NoAuth)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: null,
      });
  });

  it('should change userData to given value', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
    };

    const fakeUserData = makeFakeUserData();

    expect(userProcess.reducer(state, getUserData(fakeUserData)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        userData: fakeUserData,
      });
  });
});
