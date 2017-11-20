/*
 *
 * LogIn
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import BuildIcon from 'material-ui/svg-icons/action/build';
import makeSelectLogIn from './selectors';
import styles from './styles';
import {
  FormSection,
  LogInSection,
  TitleSection,
  PasswordForgotten,
} from './StyledComponents';


export class LogIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LogInSection>
        <FormSection>
          <TitleSection>
            Servicios mx
            <BuildIcon
              style={styles.iconStyle}
              color="#01579b"
            />
          </TitleSection>
          <TextField
            hintText="Usuario"
            type="email"
            style={styles.fullWidth}
            underlineFocusStyle={{ borderColor: '#01579b' }}
          />
          <TextField
            hintText="Contraseña"
            style={styles.fullWidth}
            type="password"
            underlineFocusStyle={{ borderColor: '#01579b' }}
          />
          <RaisedButton
            label="Entrar"
            fullWidth
            backgroundColor="#01579b"
            labelColor="#E1F5FE"
            style={styles.buttonStyle}
            labelStyle={styles.labelStyle}
          />
          <PasswordForgotten>¿Olvidaste tu contraseña?</PasswordForgotten>
          <PasswordForgotten>Crea una cuenta</PasswordForgotten>
        </FormSection>
      </LogInSection>
    );
  }
}

LogIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LogIn: makeSelectLogIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
