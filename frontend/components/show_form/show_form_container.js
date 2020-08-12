import { connect } from 'react-redux';

import { asMoviesArray } from '../../reducers/selectors';
import { createShow } from '../../actions/show_actions';
import { fetchMovies } from '../../actions/movie_actions';
import ShowForm from './show_form';

const mSTP = (state, { location }) => ({
    lat: new URLSearchParams(location.search).get('lat'),
    lng: new URLSearchParams(location.search).get('lng'),
    movies: asMoviesArray(state.entities)
});

const mDTP = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    createShow: show => dispatch(createShow(show))
});

export default connect(
    mSTP,
    mDTP
)(ShowForm);