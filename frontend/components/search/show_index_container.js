import { connect } from 'react-redux';

import { fetchShows } from '../../actions/show_actions';
import ShowIndex from './show_index';
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
)(ShowIndex);