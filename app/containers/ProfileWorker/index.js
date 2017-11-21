/*
 *
 * ProfileWorker
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Avatar from 'material-ui/Avatar';
import RatingIconPerfect from 'material-ui/svg-icons/social/mood';
import RatingIconHorrible from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import RatingIconBad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import RatingIconGood from 'material-ui/svg-icons/social/sentiment-satisfied';
import RatingIconNeutral from 'material-ui/svg-icons/social/sentiment-neutral';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Topbar from 'components/Topbar';
import makeSelectProfileWorker from './selectors';
import {
  ProfileSection,
  ImageProfileSection,
  ProfileName,
  JobsSection,
  RatingSection,
  Rating,
  RatingsHistory,
  CommentsSection,
  CommentsTitle,
  CommentItem,
  CommentItemHeader,
  CommentedBy,
  CommentedAt,
  CommentItemBody,
  RatingChooseSection,
  CommentTextArea,
} from './StyledComponents';

export class ProfileWorker extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Calificar"
        primary
        keyboardFocused
        onClick={this.handleClose}
      />,
    ];

    return (
      <ProfileSection>
        <Topbar />
        <ProfileName>Melisse Vega</ProfileName>
        <ImageProfileSection><Avatar size={400} src="https://scontent.fcul1-1.fna.fbcdn.net/v/t1.0-9/12802924_987444907970156_5055128181689396351_n.jpg?oh=d53d3b32deddb9840c34dedf7f0401c1&oe=5AA49AA0" alt="perfil" /></ImageProfileSection>
        <JobsSection>Áreas: Plomería, electricista, carpintería.</JobsSection>
        <RatingSection>
          <Rating>4.7</Rating>
          <RatingIconPerfect
            style={{ width: 100, height: 100 }}
            color="#01579b"
          />
          <RatingsHistory> en 22 opiniones</RatingsHistory>
        </RatingSection>
        <CommentsSection>
          <CommentsTitle>
            Comentarios
            <AddIcon
              style={{ cursor: 'pointer', width: 50, height: 50, marginLeft: 16 }}
              color="#01579b"
              onClick={this.handleOpen}
            />
          </CommentsTitle>
          <CommentItem>
            <CommentItemHeader>
              <CommentedBy>
                Pedro Medina
              </CommentedBy>
              <RatingIconPerfect
                style={{ width: 24, height: 24 }}
                color="#01579b"
              />
              <CommentedAt>
                hace 2 meses
              </CommentedAt>
            </CommentItemHeader>
            <CommentItemBody>
              Solicité los servicios de esta persona con la finalidad de arreglar una tubería defectuosa que había en mi cocina. Realizó un muy buen trabajo y lo hizo en un tiempo que me impresionó. Es por eso que le doy la calificación máxima.
            </CommentItemBody>
          </CommentItem>
          <CommentItem>
            <CommentItemHeader>
              <CommentedBy>
                Pedro Medina
              </CommentedBy>
              <RatingIconPerfect
                style={{ width: 24, height: 24 }}
                color="#01579b"
              />
              <CommentedAt>
                hace 2 meses
              </CommentedAt>
            </CommentItemHeader>
            <CommentItemBody>
              Solicité los servicios de esta persona con la finalidad de arreglar una tubería defectuosa que había en mi cocina. Realizó un muy buen trabajo y lo hizo en un tiempo que me impresionó. Es por eso que le doy la calificación máxima.
            </CommentItemBody>
          </CommentItem>
          <CommentItem>
            <CommentItemHeader>
              <CommentedBy>
                Pedro Medina
              </CommentedBy>
              <RatingIconPerfect
                style={{ width: 24, height: 24 }}
                color="#01579b"
              />
              <CommentedAt>
                hace 2 meses
              </CommentedAt>
            </CommentItemHeader>
            <CommentItemBody>
              Solicité los servicios de esta persona con la finalidad de arreglar una tubería defectuosa que había en mi cocina. Realizó un muy buen trabajo y lo hizo en un tiempo que me impresionó. Es por eso que le doy la calificación máxima.
            </CommentItemBody>
          </CommentItem>
          <CommentItem>
            <CommentItemHeader>
              <CommentedBy>
                Pedro Medina
              </CommentedBy>
              <RatingIconPerfect
                style={{ width: 24, height: 24 }}
                color="#01579b"
              />
              <CommentedAt>
                hace 2 meses
              </CommentedAt>
            </CommentItemHeader>
            <CommentItemBody>
              Solicité los servicios de esta persona con la finalidad de arreglar una tubería defectuosa que había en mi cocina. Realizó un muy buen trabajo y lo hizo en un tiempo que me impresionó. Es por eso que le doy la calificación máxima.
            </CommentItemBody>
          </CommentItem>
        </CommentsSection>
        <Dialog
          title="Opinar sobre este trabajador"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <RatingChooseSection>
            <RatingIconHorrible
              style={{ width: 50, height: 50, margin: '0 16px' }}
              color="#01579b"
            />
            <RatingIconBad
              style={{ width: 50, height: 50, margin: '0 16px' }}
              color="#01579b"
            />
            <RatingIconNeutral
              style={{ width: 50, height: 50, margin: '0 16px' }}
              color="#01579b"
            />
            <RatingIconGood
              style={{ width: 50, height: 50, margin: '0 16px' }}
              color="#01579b"
            />
            <RatingIconPerfect
              style={{ width: 50, height: 50, margin: '0 16px' }}
              color="#01579b"
            />
          </RatingChooseSection>
          <CommentTextArea>
            <TextField
              id="commentId"
              fullWidth
              multiLine
              underlineFocusStyle={{ borderColor: '#01579b' }}
            />
          </CommentTextArea>
        </Dialog>
      </ProfileSection>
    );
  }
}

ProfileWorker.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ProfileWorker: makeSelectProfileWorker(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWorker);
