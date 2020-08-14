import { connect } from 'react-redux';

import { selectShow } from '../../reducers/selectors';
import { fetchShow, attendShow, unattendShow } from '../../actions/show_actions';
import { fetchMovie } from '../../actions/movie_actions';
import ShowShow from './show_show';

const mSTP = (state, { match }) => {
    const showId = parseInt(match.params.showId);
    const show = selectShow(state.entities, showId);
    const userId = state.session.id
    return {
        showId,
        show,
        userId
    };
};

const mDTP = dispatch => ({
    fetchShow: id => dispatch(fetchShow(id)),
    fetchMovie: id => dispatch(fetchMovie(id)),
    attendShow: id => dispatch(attendShow(id)),
    unattendShow: id => dispatch(unattendShow(id))
});

export default connect(
    mSTP,
    mDTP
)(ShowShow);