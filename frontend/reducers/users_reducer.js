import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
<<<<<<< HEAD
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
=======
import { RECEIVE_USER } from '../actions/user_actions';
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
<<<<<<< HEAD
            break;
        case RECEIVE_USERS:
            return action.users;
        case RECEIVE_USER:
            const newUser = { [action.user.id]: action.user };
            return Object.assign({}, state, newUser);
            break;
=======
        case RECEIVE_USER:
            const newUser = { [action.user.id]: action.user };
            return Object.assign({}, state, newUser);
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
        default:
            return state;
    }
};

export default usersReducer;