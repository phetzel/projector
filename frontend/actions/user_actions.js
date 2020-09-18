import * as APIUtil from '../util/user_api_util';
<<<<<<< HEAD
import { addFriend, removeFriend } from '../util/friends_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
=======

export const RECEIVE_USER = "RECEIVE_USER";
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

<<<<<<< HEAD
const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

=======
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
export const fetchUser = id => dispatch => (
    APIUtil.fetchUser(id).then(user => (
        dispatch(receiveUser(user))
    ))
<<<<<<< HEAD
);

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers().then(users => (
        dispatch(receiveUsers(users))
    ))
);

export const befriend = id => dispatch => (
    addFriend(id)
        .then(user => dispatch(receiveUser(user)))
);

export const unfriend = (id) => dispatch => (
    removeFriend(id)
        .then(user => dispatch(receiveUser(user)))
);
=======
);
>>>>>>> 6f667586c35845e558cdaf889cbc48a61e1e3774
