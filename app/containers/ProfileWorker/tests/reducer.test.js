
import { fromJS } from 'immutable';
import profileWorkerReducer from '../reducer';

describe('profileWorkerReducer', () => {
  it('returns the initial state', () => {
    expect(profileWorkerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
