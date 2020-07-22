import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mSTP = ({ errors }) => ({
    errors: errors.sessionErrors
});

const mDTP = dispatch => ({
    login: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    signup: () => dispatch(openModal('signup'))
});

export default connect(
    mSTP,
    mDTP
)(LoginForm);