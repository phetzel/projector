import {
    RECEIVE_SHOWS,
    RECEIVE_SHOW
} from '../actions/show_actions';

const showsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SHOWS:
            return action.shows;
        case RECEIVE_SHOW:
            const newShow = { [action.show.id]: action.show };
            return Object.assign({}, state, newShow);
        default:
            return state;
    }
};

export default showsReducer; 