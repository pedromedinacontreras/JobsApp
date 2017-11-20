
import { fromJS } from 'immutable';
import userRegisterReducer from '../reducer';

describe('userRegisterReducer', () => {
  it('returns the initial state', () => {
    expect(userRegisterReducer(undefined, {})).toEqual(fromJS({}));
  });
});
