/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import InfoJobsItem from 'components/InfoJobsItem';
import BuildIcon from 'material-ui/svg-icons/action/build';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import {
  LogoPrincipalSection,
  LogoText,
  LogoSubText,
  InformationSection,
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
    return (
      <InformationSection>
        <Helmet title="Home Page" meta={[{ name: 'description', content: 'A React.js Boilerplate application homepage' }]} />
        <LogoPrincipalSection>
          <div>
            <LogoText style={{ cursor: 'pointer' }} onClick={() => browserHistory.push('/')}>
              Servicios mx
              <BuildIcon
                style={{ width: 50, height: 50, marginLeft: 30 }}
                color="#01579b"
              />
            </LogoText>
            <LogoSubText>Un lugar para encontrar trabajadores</LogoSubText>
          </div>
        </LogoPrincipalSection>
        <InfoJobsItem
          title="¿Quiénes somos?"
          body="Somos una empresa mexicana especializada en servicios comprometida a brindarte la facilidad y seguridad de los servicios contradados. Somos una empresa mexicana especializada en servicios comprometida a brindarte la facilidad y seguridad de los servicios contradados. Somos una empresa mexicana especializada en servicios comprometida a brindarte la facilidad y seguridad de los servicios contradados. "
        />
        <InfoJobsItem
          title="Misión"
          body="Facilitar la búsqueda y la contratación de servicios, garantizando un trabajo de alta calidad para la sastisfacción del cliente. Facilitar la búsqueda y la contratación de servicios, garantizando un trabajo de alta calidad para la sastisfacción del cliente. Facilitar la búsqueda y la contratación de servicios, garantizando un trabajo de alta calidad para la sastisfacción del cliente. "
        />
        <InfoJobsItem
          title="Visión"
          body="Ser una plataforma líder en servicios con la meta de expandirnos a nivel nacional para llevar nuestros servicios hasta el lugar que lo requieran. Ser una plataforma líder en servicios con la meta de expandirnos a nivel nacional para llevar nuestros servicios hasta el lugar que lo requieran. Ser una plataforma líder en servicios con la meta de expandirnos a nivel nacional para llevar nuestros servicios hasta el lugar que lo requieran. "
        />
        <InfoJobsItem
          title="Valores"
          body="Nos caracterizamos por ser responsables, transparentes, eficaces y de confianza. Nos caracterizamos por ser responsables, transparentes, eficaces y de confianza. Nos caracterizamos por ser responsables, transparentes, eficaces y de confianza. Nos caracterizamos por ser responsables, transparentes, eficaces y de confianza. Nos caracterizamos por ser responsables, transparentes, eficaces y de confianza. "
        />
      </InformationSection>);
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
