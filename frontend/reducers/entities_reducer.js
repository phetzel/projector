import { combineReducers } from 'redux';
import users from './users_reducer';
import shows from './shows_reducer';

export default combineReducers({
    users,
    shows
});