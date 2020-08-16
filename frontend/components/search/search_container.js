import { connect } from 'react-redux';

import { asArray } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';
import { fetchMovies } from '../../actions/movie_actions';
import Search from './search';


const mSTP = state => ({
    shows: asArray(state.entities),
    userId: state.session.id
});

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fetchMovies: () => dispatch(fetchMovies())
});

export default connect(
    mSTP,
    mDTP
)(Search);