import { connect } from 'react-redux';

import { fetchShows } from '../../actions/show_actions';
import Search from './search';
import { asArray } from '../../reducers/selectors';

const mSTP = state => ({
    shows: asArray(state.entities)
});

const mDTP = dispatch => ({
    fetchShows: () => dispatch(fetchShows())
});

export default connect(
    mSTP,
    mDTP
)(Search);