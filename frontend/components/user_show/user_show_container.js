import { connect } from 'react-redux';

import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
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
    fetchUser: id => dispatch(fetchUser(id)),
    openModal: () => dispatch(openModal('user-photo'))
})

export default connect(
    mSTP,
    mDTP
)(UserShow);

