import * as APIUtil from '../util/show_api_util';
import { followShow, unfollowShow } from '../util/follow_api_util';

export const RECEIVE_SHOWS = "RECEIVE_SHOWS";
export const RECEIVE_SHOW = "RECEIVE_SHOW";

const receiveShows = shows => ({
    type: RECEIVE_SHOWS,
    shows
});

const receiveShow = show => ({
    type: RECEIVE_SHOW,
    show
});

export const fetchShows = filters => dispatch => (
    APIUtil.fetchShows(filters).then(shows => (
        dispatch(receiveShows(shows))
    ))
);

export const fetchShow = id => dispatch => (
    APIUtil.fetchShow(id).then(show => (
        dispatch(receiveShow(show))
    ))
);

export const createShow = show => dispatch => (
    APIUtil.createShow(show).then(show => (
        dispatch(receiveShow(show))
    ))
);

export const attendShow = id => dispatch => (
    followShow(id)
        .then(show => dispatch(receiveShow(show)))
);

export const unattendShow = (id, showId) => dispatch => (
    unfollowShow(id)
        .then(show => dispatch(receiveShow(show)))
);

