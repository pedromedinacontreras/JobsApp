
import { fromJS } from 'immutable';
import serviciosListReducer from '../reducer';

describe('serviciosListReducer', () => {
  it('returns the initial state', () => {
    expect(serviciosListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
