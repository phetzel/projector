import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import MovieFormContainer from '../movie_form/movie_form_container';
import UserPhotoFormContainer from '../user_photo_form/user_photo_form_container';



const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'add movie':
            component = <MovieFormContainer />;
            break;
        case 'user-photo':
            component = <UserPhotoFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
};

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mSTP,
    mDTP
)(Modal);