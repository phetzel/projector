import { connect } from 'react-redux';

import { asArray } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';
import { fetchMovies } from '../../actions/movie_actions';
import { updatePane } from '../../actions/session_actions';
import Search from './search';


const mSTP = state => ({
    shows: asArray(state.entities),
    userId: state.session.id,
    pane: state.session.pane
});

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fetchMovies: () => dispatch(fetchMovies()),
    updatePane: pane => dispatch(updatePane(pane))
});

export default connect(
    mSTP,
    mDTP
)(Search);