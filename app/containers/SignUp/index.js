/*
 *
 * SignUp
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import BuildIcon from 'material-ui/svg-icons/action/build';
import makeSelectSignUp from './selectors';
import styles from './styles';
import {
  FormSection,
  SignUpSection,
  TitleSection,
  PasswordForgotten,
  InstructionMessage,
  FormContainer,
  CenteredSection,
} from './StyledComponents';

export class SignUp extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SignUpSection>
        <CenteredSection>
          <TitleSection>
            Crea una cuenta en Servicios mx
            <BuildIcon
              style={styles.iconStyle}
              color="#01579b"
            />
          </TitleSection>
          <FormContainer>
            <FormSection>
              <InstructionMessage>
                No tiene ningún costo
              </InstructionMessage>
              <TextField
                hintText="Correo electrónico"
                style={styles.fullWidth}
                type="email"
                underlineFocusStyle={{ borderColor: '#01579b' }}
              />
              <TextField
                hintText="Nombre"
                style={styles.fullWidth}
                underlineFocusStyle={{ borderColor: '#01579b' }}
              />
              <TextField
                hintText="Apellido Paterno"
                style={styles.fullWidth}
                underlineFocusStyle={{ borderColor: '#01579b' }}
              />
              <TextField
                hintText="Apellido Materno"
                style={styles.fullWidth}
                underlineFocusStyle={{ borderColor: '#01579b' }}
              />
              <TextField
                hintText="Ciudad y estado"
                style={styles.fullWidth}
                underlineFocusStyle={{ borderColor: '#01579b' }}
              />
              <RaisedButton
                label="Crear cuenta"
                fullWidth
                backgroundColor="#01579b"
                labelColor="#E1F5FE"
                style={styles.buttonStyle}
                labelStyle={styles.labelStyle}
              />
              <PasswordForgotten>Inicia sesión</PasswordForgotten>
              <PasswordForgotten>¿Qué es Servicios mx?</PasswordForgotten>
            </FormSection>
          </FormContainer>
        </CenteredSection>
      </SignUpSection>
    );
  }
}

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SignUp: makeSelectSignUp(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
