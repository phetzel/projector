import {
    RECEIVE_MOVIE_ERRORS,
    CLEAR_MOVIE_ERRORS
} from '../actions/movie_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MOVIE_ERRORS:
            return action.errors;
        case CLEAR_MOVIE_ERRORS:
            return [];
        default:
            return state;
    }
};