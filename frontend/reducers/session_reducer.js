import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    CHANGE_PANE
} from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            const newId = { id: action.currentUser.id };
            return Object.assign({}, state, newId);
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer;
