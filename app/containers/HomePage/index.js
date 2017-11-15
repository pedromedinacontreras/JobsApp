/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import InfoJobsItem from 'components/InfoJobsItem';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import {
  LogoPrincipalSection,
  LogoText,
  LogoSubText,
} from './StyledComponents';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    return (<article>
      <Helmet title="Home Page" meta={[{ name: 'description', content: 'A React.js Boilerplate application homepage' }]} />
      <LogoPrincipalSection>
        <div>
          <LogoText>Servicios mx</LogoText>
          <LogoSubText>Un lugar para encontrar trabajadores</LogoSubText>
        </div>
      </LogoPrincipalSection>
      <InfoJobsItem
        title="¿Quiénes somos?"
        body="Servicios mx es una plataforma que permite a sus usuarios publicar o buscar servicios. Servicios mx es una plataforma que permite a sus usuarios publicar o buscar servicios. Servicios mx es una plataforma que permite a sus usuarios publicar o buscar servicios. Servicios mx es una plataforma que permite a sus usuarios publicar o buscar servicios. Servicios mx es una plataforma que permite a sus usuarios publicar o buscar servicios. Servicios mx es una plataforma que permite a sus usuarios publicar o buscar servicios. Servicios mx es una plataforma que permite a sus usuarios publicar o buscar servicios. Servicios mx es una plataforma que permite a sus usuarios publicar o buscar servicios. Servicios mx es una plataforma que permite a sus usuarios publicar o buscar servicios."
      />
    </article>);
  }
}

HomePage.propTypes = {
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
