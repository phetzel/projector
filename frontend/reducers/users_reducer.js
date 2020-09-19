import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
            break;
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            const newUser = { [action.user.id]: action.user };
            return Object.assign({}, state, newUser);
            break;
        default:
            return state;
    }
};

export default usersReducer;