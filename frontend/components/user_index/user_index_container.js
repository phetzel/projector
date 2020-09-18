import { connect } from 'react-redux';

import { asUsersSearchArray } from '../../reducers/selectors';
import { fetchUsers, fetchUser, befriend, unfriend } from '../../actions/user_actions';
import UserIndex from './user_index';

const mSTP = state => ({
    id: state.session.id,
    currentUser: state.entities.users[state.session.id],
    users: asUsersSearchArray(state)
});

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: id => dispatch(fetchUser(id)),
    befriend: id => dispatch(befriend(id)),
    unfriend: id => dispatch(unfriend(id))
});

export default connect(
    mSTP, 
    mDTP
)(UserIndex);
