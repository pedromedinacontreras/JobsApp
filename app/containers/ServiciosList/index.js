/*
 *
 * ServiciosList
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import RatingIconPerfect from 'material-ui/svg-icons/social/mood';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import Topbar from 'components/Topbar';
import makeSelectServiciosList from './selectors';
import styles from './styles';
import {
  UserName,
  TableContainer,
  ServiceName,
  Grade,
  FiltersSection,
  PaginationSection,
  ServiciosListSection,
  CommentTextArea,
  DialogBody,
  ConfirmMessage,
} from './StyledComponents';


export class ServiciosList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    value: 1,
    open: false,
    openConfirm: false,
  };

  DateTimeFormat = global.Intl.DateTimeFormat;

  handleChange = (event, index, value) => this.setState({ value });

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }


  grayColor = '#8d8d8d';
  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary
        onClick={() => this.handleClose}
      />,
      <FlatButton
        label="Enviar solicitud"
        primary
        onClick={() => this.setState({ openConfirm: true, open: false })}
      />,
    ];

    return (
      <ServiciosListSection>
        <Topbar />
        <ServiceName>Carpintería</ServiceName>
        <FiltersSection>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Ordernar por" />
            <MenuItem value={2} primaryText="Calificación más alta" />
            <MenuItem value={3} primaryText="Número de opiniones" />
          </DropDownMenu>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Selecciona un estado" />
            <MenuItem value={2} primaryText="Sinaloa" />
            <MenuItem value={3} primaryText="Sonora" />
          </DropDownMenu>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Selecciona una ciudad" />
            <MenuItem value={2} primaryText="Culiacán" />
            <MenuItem value={3} primaryText="Mazatlán" />
          </DropDownMenu>
        </FiltersSection>
        <TableContainer>
          <Table>
            <TableHeader
              enableSelectAll={false}
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn style={styles.headerText}>Usuario</TableHeaderColumn>
                <TableHeaderColumn style={styles.headerText}>Ciudad</TableHeaderColumn>
                <TableHeaderColumn style={styles.headerText}>Calificación</TableHeaderColumn>
                <TableHeaderColumn style={styles.smallHeader}></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
            >
              <TableRow key={1}>
                <TableRowColumn style={styles.amountText}>
                  <Avatar src="https://scontent.fcul1-1.fna.fbcdn.net/v/t1.0-9/12802924_987444907970156_5055128181689396351_n.jpg?oh=d53d3b32deddb9840c34dedf7f0401c1&oe=5AA49AA0" />
                  <UserName>Aslly Melisse Vega Corvera</UserName>
                </TableRowColumn>
                <TableRowColumn style={styles.itemText}>Culiacán, Sinaloa</TableRowColumn>
                <TableRowColumn style={styles.itemText}><Grade>4.7</Grade><RatingIconPerfect /><UserName>en 22 opiniones</UserName></TableRowColumn>
                <TableRowColumn style={styles.smallHeader}>
                  <AddIcon
                    color={this.grayColor}
                    style={{ cursor: 'pointer' }}
                    onClick={this.handleOpen}
                  />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn style={styles.amountText}>
                  <Avatar src="https://scontent.fcul1-1.fna.fbcdn.net/v/t1.0-9/12802924_987444907970156_5055128181689396351_n.jpg?oh=d53d3b32deddb9840c34dedf7f0401c1&oe=5AA49AA0" />
                  <UserName>Aslly Melisse Vega Corvera</UserName>
                </TableRowColumn>
                <TableRowColumn style={styles.itemText}>Culiacán, Sinaloa</TableRowColumn>
                <TableRowColumn style={styles.itemText}><Grade>4.7</Grade><RatingIconPerfect /><UserName>en 22 opiniones</UserName></TableRowColumn>
                <TableRowColumn style={styles.smallHeader}>
                  <AddIcon
                    color={this.grayColor}
                    style={{ cursor: 'pointer' }}
                  />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn style={styles.amountText}>
                  <Avatar src="https://scontent.fcul1-1.fna.fbcdn.net/v/t1.0-9/12802924_987444907970156_5055128181689396351_n.jpg?oh=d53d3b32deddb9840c34dedf7f0401c1&oe=5AA49AA0" />
                  <UserName>Aslly Melisse Vega Corvera</UserName>
                </TableRowColumn>
                <TableRowColumn style={styles.itemText}>Culiacán, Sinaloa</TableRowColumn>
                <TableRowColumn style={styles.itemText}><Grade>4.7</Grade><RatingIconPerfect /><UserName>en 22 opiniones</UserName></TableRowColumn>
                <TableRowColumn style={styles.smallHeader}>
                  <AddIcon
                    color={this.grayColor}
                    style={{ cursor: 'pointer' }}
                  />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn style={styles.amountText}>
                  <Avatar src="https://scontent.fcul1-1.fna.fbcdn.net/v/t1.0-9/12802924_987444907970156_5055128181689396351_n.jpg?oh=d53d3b32deddb9840c34dedf7f0401c1&oe=5AA49AA0" />
                  <UserName>Aslly Melisse Vega Corvera</UserName>
                </TableRowColumn>
                <TableRowColumn style={styles.itemText}>Culiacán, Sinaloa</TableRowColumn>
                <TableRowColumn style={styles.itemText}><Grade>4.7</Grade><RatingIconPerfect /><UserName>en 22 opiniones</UserName></TableRowColumn>
                <TableRowColumn style={styles.smallHeader}>
                  <AddIcon
                    color={this.grayColor}
                    style={{ cursor: 'pointer' }}
                  />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn style={styles.amountText}>
                  <Avatar src="https://scontent.fcul1-1.fna.fbcdn.net/v/t1.0-9/12802924_987444907970156_5055128181689396351_n.jpg?oh=d53d3b32deddb9840c34dedf7f0401c1&oe=5AA49AA0" />
                  <UserName>Aslly Melisse Vega Corvera</UserName>
                </TableRowColumn>
                <TableRowColumn style={styles.itemText}>Culiacán, Sinaloa</TableRowColumn>
                <TableRowColumn style={styles.itemText}><Grade>4.7</Grade><RatingIconPerfect /><UserName>en 22 opiniones</UserName></TableRowColumn>
                <TableRowColumn style={styles.smallHeader}>
                  <AddIcon
                    color={this.grayColor}
                    style={{ cursor: 'pointer' }}
                  />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn style={styles.amountText}>
                  <Avatar src="https://scontent.fcul1-1.fna.fbcdn.net/v/t1.0-9/12802924_987444907970156_5055128181689396351_n.jpg?oh=d53d3b32deddb9840c34dedf7f0401c1&oe=5AA49AA0" />
                  <UserName>Aslly Melisse Vega Corvera</UserName>
                </TableRowColumn>
                <TableRowColumn style={styles.itemText}>Culiacán, Sinaloa</TableRowColumn>
                <TableRowColumn style={styles.itemText}><Grade>4.7</Grade><RatingIconPerfect /><UserName>en 22 opiniones</UserName></TableRowColumn>
                <TableRowColumn style={styles.smallHeader}>
                  <AddIcon
                    color={this.grayColor}
                    style={{ cursor: 'pointer' }}
                  />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn style={styles.amountText}>
                  <Avatar src="https://scontent.fcul1-1.fna.fbcdn.net/v/t1.0-9/12802924_987444907970156_5055128181689396351_n.jpg?oh=d53d3b32deddb9840c34dedf7f0401c1&oe=5AA49AA0" />
                  <UserName>Aslly Melisse Vega Corvera</UserName>
                </TableRowColumn>
                <TableRowColumn style={styles.itemText}>Culiacán, Sinaloa</TableRowColumn>
                <TableRowColumn style={styles.itemText}><Grade>4.7</Grade><RatingIconPerfect /><UserName>en 22 opiniones</UserName></TableRowColumn>
                <TableRowColumn style={styles.smallHeader}>
                  <AddIcon
                    color={this.grayColor}
                    style={{ cursor: 'pointer' }}
                  />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn style={styles.amountText}>
                  <Avatar src="https://scontent.fcul1-1.fna.fbcdn.net/v/t1.0-9/12802924_987444907970156_5055128181689396351_n.jpg?oh=d53d3b32deddb9840c34dedf7f0401c1&oe=5AA49AA0" />
                  <UserName>Aslly Melisse Vega Corvera</UserName>
                </TableRowColumn>
                <TableRowColumn style={styles.itemText}>Culiacán, Sinaloa</TableRowColumn>
                <TableRowColumn style={styles.itemText}><Grade>4.7</Grade><RatingIconPerfect /><UserName>en 22 opiniones</UserName></TableRowColumn>
                <TableRowColumn style={styles.smallHeader}>
                  <AddIcon
                    color={this.grayColor}
                    style={{ cursor: 'pointer' }}
                  />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn style={styles.amountText}>
                  <Avatar src="https://scontent.fcul1-1.fna.fbcdn.net/v/t1.0-9/12802924_987444907970156_5055128181689396351_n.jpg?oh=d53d3b32deddb9840c34dedf7f0401c1&oe=5AA49AA0" />
                  <UserName>Aslly Melisse Vega Corvera</UserName>
                </TableRowColumn>
                <TableRowColumn style={styles.itemText}>Culiacán, Sinaloa</TableRowColumn>
                <TableRowColumn style={styles.itemText}><Grade>4.7</Grade><RatingIconPerfect /><UserName>en 22 opiniones</UserName></TableRowColumn>
                <TableRowColumn style={styles.smallHeader}>
                  <AddIcon
                    color={this.grayColor}
                    style={{ cursor: 'pointer' }}
                  />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn style={styles.amountText}>
                  <Avatar src="https://scontent.fcul1-1.fna.fbcdn.net/v/t1.0-9/12802924_987444907970156_5055128181689396351_n.jpg?oh=d53d3b32deddb9840c34dedf7f0401c1&oe=5AA49AA0" />
                  <UserName>Aslly Melisse Vega Corvera</UserName>
                </TableRowColumn>
                <TableRowColumn style={styles.itemText}>Culiacán, Sinaloa</TableRowColumn>
                <TableRowColumn style={styles.itemText}><Grade>4.7</Grade><RatingIconPerfect /><UserName>en 22 opiniones</UserName></TableRowColumn>
                <TableRowColumn style={styles.smallHeader}>
                  <AddIcon
                    color={this.grayColor}
                    style={{ cursor: 'pointer' }}
                  />
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <PaginationSection>1 2 3 4 5 ... 10</PaginationSection>
        <Dialog
          title="Contactar a este trabajador"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => this.handleClose}
        >
          <DialogBody>
            <div>Seleccione en que fecha necesita los servicios de <b>carpintería</b>
              <DatePicker
                hintText="Fecha"
                minDate={new Date()}
                formatDate={new this.DateTimeFormat('es-ES', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                }).format}
                DateTimeFormat={this.DateTimeFormat}
                locale="es-ES"
                shouldDisableDate={this.disableWeekends}
              />
            </div>
            <div>Envía un mensaje a Aslly Vega</div>
            <CommentTextArea>
              <TextField
                id="commentId"
                fullWidth
                multiLine
                hintText="Hola requiero sus servicios porque..."
                underlineFocusStyle={{ borderColor: '#01579b' }}
              />
            </CommentTextArea>
            <ConfirmMessage>Si el trabajador acepta tu solicitud se te notificará por correo</ConfirmMessage>
          </DialogBody>
        </Dialog>
        <Snackbar
          open={this.state.openConfirm}
          message="Solicitud enviada"
          autoHideDuration={4000}
          onRequestClose={() => this.setState({ openConfirm: false })}
        />
      </ServiciosListSection>
    );
  }
}

ServiciosList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ServiciosList: makeSelectServiciosList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiciosList);
