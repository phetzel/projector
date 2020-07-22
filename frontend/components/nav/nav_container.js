import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import Nav from './nav.jsx';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchUser: id => dispatch(fetchUser(id)),
    logout: () => dispatch(logout())
});

export default connect(
    mSTP,
    mDTP
)(Nav);