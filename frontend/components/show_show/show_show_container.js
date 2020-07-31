import { connect } from 'react-redux';

import { selectShow } from '../../reducers/selectors';
import { fetchShow } from '../../actions/show_actions';
import ShowShow from './show_show';

const mSTP = (state, { match }) => {
    const showId = parseInt(match.params.showId);
    const show = selectShow(state.entities, showId);
    return {
        showId,
        show
    };
};

const mDTP = dispatch => ({
    fetchShow: id => dispatch(fetchShow(id))
});

export default connect(
    mSTP,
    mDTP
)(ShowShow);