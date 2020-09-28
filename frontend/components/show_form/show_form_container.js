import { connect } from 'react-redux';

import { asMoviesArray } from '../../reducers/selectors';
import { createShow } from '../../actions/show_actions';
import { fetchMovies } from '../../actions/movie_actions';
import { openModal } from '../../actions/modal_actions';
import ShowForm from './show_form';

const mSTP = (state, { location }) => ({
    lat: new URLSearchParams(location.search).get('lat'),
    lng: new URLSearchParams(location.search).get('lng'),
    movies: asMoviesArray(state.entities),
    errors: state.errors.showErrors
});

const mDTP = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    createShow: show => dispatch(createShow(show)),
    openModal: () => dispatch(openModal('add movie'))
});

export default connect(
    mSTP,
    mDTP
)(ShowForm);