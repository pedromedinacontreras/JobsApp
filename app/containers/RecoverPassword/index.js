/*
 *
 * RecoverPassword
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import makeSelectRecoverPassword from './selectors';
import styles from './styles';
import {
  FormSection,
  LogInSection,
  TitleSection,
  PasswordForgotten,
  InstructionMessage,
  FormContainer,
  CenteredSection,
} from './StyledComponents';

export class RecoverPassword extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LogInSection>
        <CenteredSection>
          <TitleSection>
            ¿Olvidaste tu contraseña?
          </TitleSection>
          <FormContainer>
            <FormSection>
              <InstructionMessage>
                Escribe tu correo electrónico
              </InstructionMessage>
              <TextField
                hintText="Correo electrónico"
                style={styles.fullWidth}
                type="email"
                underlineFocusStyle={{ borderColor: '#01579b' }}
              />
              <RaisedButton
                label="Recuperar contraseña"
                fullWidth
                backgroundColor="#01579b"
                labelColor="#E1F5FE"
                style={styles.buttonStyle}
                labelStyle={styles.labelStyle}
              />
              <PasswordForgotten>Inicia sesión</PasswordForgotten>
              <PasswordForgotten>Crea una cuenta</PasswordForgotten>
            </FormSection>
          </FormContainer>
        </CenteredSection>
      </LogInSection>
    );
  }
}

RecoverPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  RecoverPassword: makeSelectRecoverPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
