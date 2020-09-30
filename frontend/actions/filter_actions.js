import { fetchShows } from './show_actions';
import { fetchUsers, fetchUser } from './user_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value 
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchShows(getState().ui.filters)(dispatch);
};

export const updateUsersFilter = (filter, value, id) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchUsers(getState().ui.filters)(dispatch);
};