import { errorsProcess, setError } from './errors-process';

describe('Reducer: errorsProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(errorsProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({ error: ''});
  });

  it('should change current error to given value', () => {
    const state = {error: ''};
    const error = 'Oh no! Something is broken!';

    expect(errorsProcess.reducer(state, setError(error)))
      .toEqual({error: 'Oh no! Something is broken!'});
  });

  it('should change current error to undefined', () => {
    const state = {error: ''};
    const error = undefined;

    expect(errorsProcess.reducer(state, setError(error)))
      .toEqual({error: undefined});
  });

  it('should change current error to number', () => {
    const state = {error: ''};
    const error = 185.6722;

    expect(errorsProcess.reducer(state, setError(error)))
      .toEqual({error: 185.6722});
  });
});
