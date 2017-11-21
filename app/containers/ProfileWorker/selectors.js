import { createSelector } from 'reselect';

/**
 * Direct selector to the profileWorker state domain
 */
const selectProfileWorkerDomain = () => (state) => state.get('profileWorker');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProfileWorker
 */

const makeSelectProfileWorker = () => createSelector(
  selectProfileWorkerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectProfileWorker;
export {
  selectProfileWorkerDomain,
};
