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
import Avatar from 'material-ui/Avatar';
import ExpandibleIcon from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ServiciosTop from 'components/ServiciosTop';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import {
  TopbarSection,
  LogoSection,
  Logo,
  ProfileSection,
  ProfileName,
  ExpandibleSection,
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
      <TopbarSection>
        <LogoSection>
          <Logo>Officium</Logo>
        </LogoSection>
        <ProfileSection>
          <div>
            <Avatar src="https://laopinionla.files.wordpress.com/2015/11/dove_leduo_hair-emojis_2.png?w=1024" />
          </div>
          <ProfileName>Aslly Melisse Vega Corvera</ProfileName>
          <ExpandibleSection>
            <ExpandibleIcon color="#E1F5FE" />
          </ExpandibleSection>
        </ProfileSection>
      </TopbarSection>
      <LogoPrincipalSection>
        <div>
          <LogoText>Officium</LogoText>
          <LogoSubText>Un lugar para encontrar trabajadores</LogoSubText>
        </div>
      </LogoPrincipalSection>
      <ServiciosTop />
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
