import { connect } from 'react-redux';

import { createMovie, clearErrors } from '../../actions/movie_actions';
import { closeModal } from '../../actions/modal_actions';
import MovieForm from './movie_form';

const mSTP = state => ({
    errors: state.errors.movieErrors
});

const mDTP = dispatch => ({
    createMovie: movie => dispatch(createMovie(movie)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    mSTP,
    mDTP
)(MovieForm);
