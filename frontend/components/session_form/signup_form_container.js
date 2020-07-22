import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form.jsx';

const mSTP = ({ errors }) => ({
    errors: errors.sessionErrors
});

const mDTP = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    login: () => dispatch(openModal('login'))
})

export default connect(
    mSTP,
    mDTP
)(SignupForm);