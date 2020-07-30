import { connect } from 'react-redux';


import { asArray } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';


const mSTP = state => ({
    shows: asArray(state.entities)
});

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
    mSTP,
    mDTP
)(Search);