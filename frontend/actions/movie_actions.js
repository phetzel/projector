import * as APIUtil from '../util/movie_api_util';

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_MOVIE_ERRORS = 'RECEIVE_MOVIE_ERRORS';
export const CLEAR_MOVIE_ERRORS = "CLEAR_MOVIE_ERRORS";

const receiveMovies = movies => ({
    type: RECEIVE_MOVIES,
    movies
});

const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie
});

const receiveErrors = errors => ({
    type: RECEIVE_MOVIE_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_MOVIE_ERRORS
});

export const fetchMovies = () => dispatch => (
    APIUtil.fetchMovies().then(movies => (
        dispatch(receiveMovies(movies))
    ))
);

export const fetchMovie = id => dispatch => (
    APIUtil.fetchMovie(id).then(movie => (
        dispatch(receiveMovie(movie))
    ))
);

export const createMovie = movie => dispatch => (
    APIUtil.createMovie(movie).then(movie => (
        dispatch(receiveMovie(movie))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);
