import { connect } from 'react-redux';

import { createMovie } from '../../actions/movie_actions';
import { closeModal } from '../../actions/modal_actions';
import MovieForm from './movie_form';

const mDTP = dispatch => ({
    createMovie: movie => dispatch(createMovie(movie)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    null,
    mDTP
)(MovieForm);
