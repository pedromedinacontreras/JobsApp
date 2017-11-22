/*
 *
 * LandingPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Topbar from 'components/Topbar';
import ServiciosTop from 'components/ServiciosTop';
import makeSelectLandingPage from './selectors';
import {
  LadingSection,
} from './styledComponents';

export class LandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LadingSection>
        <Topbar />
        <ServiciosTop />
      </LadingSection>
    );
  }
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LandingPage: makeSelectLandingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
