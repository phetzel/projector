import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mSTP = (state, {match}) => {
    const userId = parseInt(match.params.userId);
    return {
        userId,
        user: state.entities.users[userId],
        currentUser: state.session.id
    }
};

const mDTP = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

export default connect(
    mSTP,
    mDTP
)(UserShow);

