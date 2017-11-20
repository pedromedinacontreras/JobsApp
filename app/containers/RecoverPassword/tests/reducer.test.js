
import { fromJS } from 'immutable';
import recoverPasswordReducer from '../reducer';

describe('recoverPasswordReducer', () => {
  it('returns the initial state', () => {
    expect(recoverPasswordReducer(undefined, {})).toEqual(fromJS({}));
  });
});
