import * as APIUtil from '../util/user_api_util';
import { addFriend, removeFriend } from '../util/friends_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const fetchUser = id => dispatch => (
    APIUtil.fetchUser(id).then(user => (
        dispatch(receiveUser(user))
    ))
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
