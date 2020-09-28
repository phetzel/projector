import {
    RECEIVE_SHOW_ERRORS,
} from '../actions/show_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SHOW_ERRORS:
            return action.errors;
        default: 
            return state;
    }
};