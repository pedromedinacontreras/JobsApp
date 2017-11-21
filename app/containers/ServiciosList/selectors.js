import { createSelector } from 'reselect';

/**
 * Direct selector to the serviciosList state domain
 */
const selectServiciosListDomain = () => (state) => state.get('serviciosList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ServiciosList
 */

const makeSelectServiciosList = () => createSelector(
  selectServiciosListDomain(),
  (substate) => substate.toJS()
);

export default makeSelectServiciosList;
export {
  selectServiciosListDomain,
};
