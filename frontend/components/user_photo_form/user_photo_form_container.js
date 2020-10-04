import { connect } from 'react-redux';

import { updateUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';
import UserPhotoForm from './user_photo_form';

const mSTP = state => {
    const currentUser = state.session.id;
    const user = state.entities.users[currentUser];

    return ({
        currentUser,
        user
    })
}

const mDTP = dispatch => ({
    updateUser: (formData, id) => dispatch(updateUser(formData, id)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mSTP,
    mDTP
)(UserPhotoForm);